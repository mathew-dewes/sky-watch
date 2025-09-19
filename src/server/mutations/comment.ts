"use server";

import z from "zod";
import { commentSchema } from "../../zod/schemas";
import { getUserId } from "../../auth/session";
import prisma from "../../db/prisma";
import { revalidatePath, revalidateTag } from "next/cache";
import { error } from "console";

export async function postComment(values: z.infer<typeof commentSchema>, postId: string){
    const userId = await getUserId();
    if (!userId) return
    const {comment} = values
    try {
        await prisma.comment.create({
            data:{
                content: comment, userId, postId
            }
        });
 revalidateTag("posts:all")
            return {
            status: "success", message: "Post created successfully"
        }
    } catch {
          return {
            status: "error", message: "There was an error"
        }

        
    }

}


export async function deleteComment(commentId: string, postId: string){
        const userId = await getUserId();
    if (!userId) throw error

    try {
   await prisma.comment.delete({
            where:{
                id: commentId, userId,
            }
        });

  revalidatePath(`/post/${postId}`);
  revalidatePath("/posts"); 
    } catch (error) {
               console.log(error);
    }
}


