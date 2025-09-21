"use server";

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

 
        
    } catch (error) {
        console.log(error);
        return
        
    }
}