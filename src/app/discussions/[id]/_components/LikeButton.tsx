"use client";

import { likePost } from "@/server/mutations/like";
import { useTransition } from "react";

export default function LikeButton({ postId }: { postId: string }) {
  const [isPending, startTransition] = useTransition();

  const handleClick = () => {
    startTransition(() => likePost(postId));
  };

  return <button onClick={handleClick} disabled={isPending}>Like</button>;
}
