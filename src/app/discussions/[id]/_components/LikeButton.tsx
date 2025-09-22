"use client";


import { getLiked, toggleLike } from "@/app/discussions/[id]/_components/like";
import Image from "next/image";
import { useEffect, useState, useTransition } from "react";

export default function LikeButton({ postId, hasLiked }: { postId: string, hasLiked: boolean }) {
  const [isPending, startTransition] = useTransition();
    const [liked, setLiked] = useState(hasLiked);


  useEffect(() => {
    startTransition(async () => {
      const liked = await getLiked(postId);
      setLiked(liked);
    });
  }, [postId]);

  if (liked === null) return null; // loading


  const handleClick = () => {
    setLiked(prev => !prev);
    startTransition(() => {
      toggleLike(postId).catch(() => {
        // rollback if something fails
        setLiked(prev => !prev);
      });
    });
  };

  const image = liked ? "/heart.png" : "/heart-empty.png"

  return (
    <div className="flex items-center gap-2">

      <button className="cursor-pointer" onClick={handleClick} disabled={isPending}><Image alt="Heart logo" src={image} height={30} width={30}></Image></button>
    </div>
  )

    ;
}
