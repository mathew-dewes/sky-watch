"use server"

import prisma from "../db/client"


export async function getPosts({
  community,
  take,
}: {
  community?: string;
  take?: number;
}){

       return prisma.post.findMany({
        include: { user: true, Community: true, _count:{ select:{Comments: true}
            }},
            where:community !== "all" ? {Community: {name:{equals: community}}} : {},
          orderBy:{
            createdAt:"desc"
          }, 
          take: take
      
      });
}