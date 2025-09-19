"use server";


import z from "zod";


import { revalidatePath, revalidateTag } from "next/cache";
import { error } from "console";
import { redirect } from "next/navigation";
import { getUserId } from "../auth/session";
import { postSchema } from "./schemas";
import prisma from "../db/client";


export async function createPost(values: z.infer<typeof postSchema>) {
    const userId = await getUserId();
    if (!userId) return
    const { title, content, community } = values;

    try {
       const post = await prisma.post.create({
            data: { title, description: content, communityId: community, userId },
            include: {Community: true}
        
        });
        revalidateTag(`posts:community=${post.Community.name}`);
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


export async function revalidatePosts(community?: string) {
    revalidatePath('/')
  if (community) {
    revalidateTag(`posts:community=${community}`);
  }
  revalidateTag("posts:all");
  revalidateTag("posts:latest");
}

export async function deletePost(postId: string){
    const userId = await getUserId();
    if (!userId) throw error
        try {
        const post = await prisma.post.delete({
            where:{
                id: postId, userId
            },
            include:{
                Community: true
            }
        })
        revalidateTag(`posts:community=${post.Community.name}`);
        revalidateTag("posts:all")
        redirect('/post/all')

    } catch (error) {

       console.log(error);
       

    }

}

