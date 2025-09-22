"use client";


import { toggleLike } from "@/app/discussions/[id]/_components/like";
import Image from "next/image";
import { useTransition } from "react";

export default function LikeButton({ postId, hasLiked }: { postId: string, hasLiked: boolean }) {
  const [isPending, startTransition] = useTransition();



  const handleClick = () => {
    startTransition(() => {
      toggleLike(postId).catch(() => {

      });
    });
  };

  const image = hasLiked ? "/heart.png" : "/heart-empty.png"

  return (
    <div className="flex items-center gap-2">

      <button className="cursor-pointer" onClick={handleClick} disabled={isPending}><Image alt="Heart logo" src={image} height={30} width={30}></Image></button>
    </div>
  )

    ;
}
