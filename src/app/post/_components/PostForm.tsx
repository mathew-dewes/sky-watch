"use client"

import Button from "@/components/ui/Button"
import ErrorMessage from "@/components/ui/ErrorMessage";
import { createPost } from "@/server/mutations/post";
import { postSchema } from "@/server/mutations/schemas";

import { zodResolver } from "@hookform/resolvers/zod";
import { Community } from "@prisma/client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import z from "zod"


type FormFields = z.infer<typeof postSchema>

export default function PostForm({ communities }: {
  communities: Community[]
}) {

  

  const [serverError, setServerError] = useState("");
  const router = useRouter();

  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<FormFields>({ resolver: zodResolver(postSchema) });

  const onSubmit = async (values: FormFields) => {


    
    
    const result = await createPost(values);
    if (result?.status === "error"){
           setServerError(result.message)
            console.log(result.message);
    } else{
              router.push("/discussions");
            router.refresh()
    }

  }
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="max-w-2xl mx-auto space-y-4 mt-10">
      <div>
        <label htmlFor="title" className="block mb-2 font-medium">
          Title
        </label>
        <input {...register("title")}
          type="text"
          id="title"
          className={`w-full border border-white/40 bg-transparent p-2 rounded`}

        />
        {errors.title &&
          <ErrorMessage message={errors.title?.message} />}
      </div>
      <div>
        <label htmlFor="content" className="block mb-2 font-medium">
          Content
        </label>
        <textarea
          {...register("content")}
          id="content"


          className="w-full border border-white/40 bg-transparent p-2 rounded"
          rows={5}

        />
        {errors.content &&
          <ErrorMessage message={errors.content?.message} />}
      </div>

      <div className="flex flex-col gap-2 w-60">
        <label> Select Community</label>
        <select {...register("community")} className="border p-1 rounded border-white/40 cursor-pointer" id="community" value={undefined}>
          <option className="text-black" value={""}>Choose a Community</option>
          {communities?.map((community) => (
            <option className="text-black" key={community.id} value={community.id}>
              {community.name}
            </option>
          ))}
        </select>
                {errors.community &&
          <ErrorMessage message={errors.community?.message} />}
      </div>
      <Button isSubmitting={isSubmitting} submittingText="Posting..." text="Create post" />
            <p className="mt-5 text-red-500">{serverError}</p>


    </form>
  )
}