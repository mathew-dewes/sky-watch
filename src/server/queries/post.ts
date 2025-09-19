"use server"

import prisma from "../db/client"


export async function getPosts(){

  const posts = await prisma.post.findMany({
    include:{
      Community: true,
      user: true,
      _count: true
    }
  });
  return posts
}