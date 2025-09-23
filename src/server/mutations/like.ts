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
      })
    } else {
      await prisma.like.create({
        data: { userId, postId },
      })
    }

   revalidatePath(`/discussions/${postId}`)
   revalidatePath('/discussions')
  } catch (error) {
    console.error('Error toggling like:', error);
    return {error: "Server error"}

  }
}



