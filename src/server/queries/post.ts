"use server"

import prisma from "../db/client"


export async function getPosts(community: string = "all", take?: number,){

  const posts = await prisma.post.findMany({
    include:{
      Community: true,
      user: true,
      _count: true,
      Likes: true,
      Comments: true
    },
    where: community !== "all" ? {Community:{name:{equals: community}}} : {},
    orderBy:{createdAt: "desc"},
    take
  });
  return posts
}


export async function getPost(id: string){
 const post = await prisma.post.findUnique({
    where: {id},
    include:{user: true, Community: true, Likes: true}
  });
  return post

}