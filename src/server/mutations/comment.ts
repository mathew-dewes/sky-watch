"use server";

import z from "zod";

import { revalidatePath } from "next/cache";
import { error } from "console";

import { getUserId } from "../auth/session";
import prisma from "../db/client";
import { commentSchema } from "../types/schemas";

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
 revalidatePath('/post')
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


