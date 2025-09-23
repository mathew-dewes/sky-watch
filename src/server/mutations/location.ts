"use server";

import { revalidatePath } from "next/cache";
import { getUserId } from "../auth/session";
import prisma from "../db/client";


export async function updateLocation(location: string){
    const userId = await getUserId();
    if (!userId) return

    try {
await prisma.user.update({
  where: { id: userId },
  data: {
    Location: {
      connectOrCreate: {
        where: { name: location },   // unique field on Location
        create: { name: location },
      },
    },
  },
});

        revalidatePath('/discussions')

 
        
    } catch (error) {
        console.log(error);
        return
        
    }
}