"use client"
import Button from "@/components/ui/Button"
import { deletePost } from "@/server/mutations/post";

import { useRouter } from "next/navigation";

import { useState } from "react";



export default function DeletePostButton({ postId }: { postId: string }) {
     const router = useRouter();
  const [loading, setLoading] = useState(false);

    async function handleDelete(): Promise<void> {
            setLoading(true);
            try {
                    await deletePost(postId);
                    router.push("/discussions")
            } catch (error) {
                   console.error(error);
                
            } finally{
                      setLoading(false);
            }
    


    }
    return <Button text="Delete Post" isSubmitting={loading} submittingText="Deleting" onClick={handleDelete} />
}