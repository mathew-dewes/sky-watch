"use client"

import ErrorMessage from "@/components/ui/ErrorMessage";
import { toggleLike } from "@/server/mutations/like";
import Image from "next/image";
import { useActionState } from "react";

export default function LikeButton({ postId, hasLiked }: { postId: string, hasLiked: boolean }) {
 const [state, formAction, isPending] = useActionState(()=> toggleLike(postId), null)



  const image = hasLiked ? "/heart.png" : "/heart-empty.png"

  return (
    <div>
  <form action={formAction} className={`flex items-center gap-2`}>
             <label className="mb-2" htmlFor=""><ErrorMessage message={state?.error}/></label>
               <button className="cursor-pointer" disabled={isPending}><Image alt="Heart logo" src={image} height={30} width={30}></Image></button>
  

 


    </form>
   
    </div>


 

  
  )

    ;
}
