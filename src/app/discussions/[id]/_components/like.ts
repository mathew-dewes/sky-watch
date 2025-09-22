"use server"

import { revalidatePath } from 'next/cache'
import { getUserId } from '../../../../server/auth/session'
import prisma from '../../../../server/db/client'

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
      })
    } else {
      await prisma.like.create({
        data: { userId, postId },
      })
    }

   revalidatePath(`/discussions/${postId}`)
   revalidatePath('/discussions')
  } catch (error) {
    console.error('Error toggling like:', error)
    throw error
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



