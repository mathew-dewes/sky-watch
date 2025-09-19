"use server";
import { unstable_cache as cache } from "next/cache";
import prisma from "../db/client";




export async function getComments(postId: string){
    console.log("Fetching comments");
    

const cachedFn = cache(
    async()=>{
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
        })
    },
    [`comments:post=${postId}`],
    {revalidate: 60 * 20}
);
return cachedFn()


}