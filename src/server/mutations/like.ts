"use server";

import { getUserId } from "../auth/session";
import prisma from "../db/client";
import { revalidatePath } from "./revalidate";



export async function likePost(postId: string) {

    const userId = await getUserId()
    if (!userId) return

    try {
        await prisma.like.create({
            data: {
                userId, postId
            }

        });

    } catch (error) {
        console.log(error);


    }


}


export async function unLikePost(postId: string) {
    const userId = await getUserId()
    if (!userId) return
    try {
        await prisma.like.delete({
            where: {
                postId_userId: { userId, postId },
            },
        })
    } catch (error) {
        console.log(error);


    }


}
