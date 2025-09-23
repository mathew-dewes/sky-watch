"use server"

import { revalidatePath } from 'next/cache'
import { getUserId } from '../auth/session'
import prisma from '../db/client'

export async function toggleLike(postId: string) {
  const userId = await getUserId()
  if (!userId) return
  

  try {
    const existingLike = await prisma.like.findUnique({
      where: {
        postId_userId: { userId, postId },
      },
    })

    if (existingLike) {
      await prisma.like.delete({
        where: { postId_userId: { userId, postId } },
      });
        revalidatePath(`/discussions/${postId}`)
    } else {
      await prisma.like.create({
        data: { userId, postId },
      })
        revalidatePath(`/discussions/${postId}`)
    }


  } catch (error) {
    console.error('Error toggling like:', error);
    return {error: "Server error"}

  }
}

export async function getLiked(postId: string) {
  const userId = await getUserId();
  if (!userId) return false;

  const existing = await prisma.like.findUnique({
    where: { postId_userId: { postId, userId } },
  });

  return !!existing;
}



