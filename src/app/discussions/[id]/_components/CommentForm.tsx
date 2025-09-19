"use client"

import Button from "@/components/ui/Button";
import ErrorMessage from "@/components/ui/ErrorMessage";
import { postComment } from "@/server/mutations/comment";
import { commentSchema } from "@/server/mutations/schemas";

import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import z from "zod";

type FormFields = z.infer<typeof commentSchema>


export default function CommentForm({postId}:{postId: string}) {

      const [serverError, setServerError] = useState("");
  
      const { register, handleSubmit, reset ,formState: { errors, isSubmitting } } = useForm<FormFields>({
        resolver: zodResolver(commentSchema)

        
    });

      const onSubmit = async (values: FormFields) => {
    const result = await postComment(values, postId);

    if (result?.status === "error"){
        setServerError(result.message);
    } 
        reset()
        setServerError("")
    
    }
    return (
        <form onSubmit={handleSubmit(onSubmit)} className="mb-4">
            <textarea
                {...register("comment")}
                className="w-full border border-white/10 bg-transparent p-2 rounded"
                placeholder="Write a comment..."
                rows={3}
            />
            <Button isSubmitting={isSubmitting} submittingText="Posting..." text="Post comment" />
            <ErrorMessage message={errors.comment?.message} />
            <ErrorMessage message={serverError}/>
        </form>
    )
}