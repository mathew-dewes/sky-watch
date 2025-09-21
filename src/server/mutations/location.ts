"use server";

import { getUserId } from "../auth/session";
import prisma from "../db/client";


export async function updateLocation(location: string){
    const userId = await getUserId();
    if (!userId) return

    try {
        const res = await prisma.location.update({
            data:{
               name: location
            },
            where:{
                userId
            }

        });

        console.log(res);
        
    } catch (error) {
        console.log(error);
        return
        
    }
}