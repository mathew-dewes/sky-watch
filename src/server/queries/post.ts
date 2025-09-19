"use server"

import prisma from "../db/client"


export async function getPosts(){

  const posts = await prisma.post.findMany({
    include:{
      Community: true,
      user: true,
      _count: true
    },
    orderBy:{createdAt: "desc"}
  });
  return posts
}


export async function getPost(id: string){
 const post = await prisma.post.findUnique({
    where: {id},
    include:{user: true, Community: true}
  });
  return post

}