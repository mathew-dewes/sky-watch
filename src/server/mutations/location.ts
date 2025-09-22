"use server";

import { revalidatePath } from "next/cache";
import { getUserId } from "../auth/session";
import prisma from "../db/client";


export async function updateLocation(location: string){
    const userId = await getUserId();
    if (!userId) return

    try {
    await prisma.location.upsert({
            update:{
               name: location
            },
        create: { userId, name: location },
            where:{
                userId
            }

        });

        revalidatePath('/discussions')

 
        
    } catch (error) {
        console.log(error);
        return
        
    }
}