"use server";

import prisma from "../db/client";




export async function getComments(postId: string){

    return prisma.comment.findMany({
            where:{
                postId
            },
            include:{
                user: true
            },
            orderBy:{
                createdAt:"desc"
            }
        });

     

}