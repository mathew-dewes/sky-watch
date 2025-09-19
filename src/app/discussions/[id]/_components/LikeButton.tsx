"use client";


import { toggleLike } from "@/server/mutations/like";
import { useTransition } from "react";

export default function LikeButton({ postId, hasLiked }: { postId: string, hasLiked: boolean }) {
  const [isPending, startTransition] = useTransition();

  const handleClick = () => {
    startTransition(() => toggleLike(postId));
  };

  return <button onClick={handleClick} disabled={isPending}>{hasLiked ? "Unlike" : "Like"}</button>;
}
