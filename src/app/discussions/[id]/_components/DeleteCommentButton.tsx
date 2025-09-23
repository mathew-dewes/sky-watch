"use client"
import Button from "@/components/ui/Button"
import { deleteComment } from "@/server/mutations/comment";
import { useRouter } from "next/navigation";



import { useState } from "react";

type Props = {
    commentId: string
    postId: string
}



export default function DeleteCommentButton({ commentId, postId }: Props) {
  const [loading, setLoading] = useState(false);

      
  const router = useRouter();

    async function handleDelete(): Promise<void> {
            setLoading(true);
            try {
                    await deleteComment(commentId, postId);
            } catch (error) {
                   console.error(error);
                
            } finally{
                      setLoading(false);
                      router.refresh()

            }
    


    }
    return <Button text="Delete" isSubmitting={loading} submittingText="Deleting" onClick={handleDelete} />
}