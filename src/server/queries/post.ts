"use server"
import prisma from "../db/client"


export async function getPosts(community: string = "all",   sort: string = "mostRecent", take?: number,){  

  const posts = await prisma.post.findMany({
    include:{
      Community: true,
      user: true,
      Likes: true,
      Comments: true,
      _count: {
        select: { Likes: true, Comments: true },
      }
    },
    where: community !== "all" ? {Community:{name:{equals: community}}} : {},
    orderBy:[
    sort === "most-liked"
      ? { Likes: { _count: "desc" } }
      : sort === "most-commented"
      ? { Comments: { _count: "desc" } }
      : { createdAt: "desc" },
  ],
    take
  });
  return posts
}

export async function getUserPosts(userId: string){
  if (!userId) return
  const posts = await prisma.post.findMany({
    where:{
      userId
    },
    include:{
      user: true,
      Community: true,
      Likes: true,
      Comments: true
    }
  });
  return posts
}


export async function getPost(id: string){
 const post = await prisma.post.findUnique({
    where: {id},
    include:{
      Community: true,
      user: true,
      Likes: true,
      Comments: true,
      _count: {
        select: { Likes: true, Comments: true },
      }
    },
  });
  return post

}