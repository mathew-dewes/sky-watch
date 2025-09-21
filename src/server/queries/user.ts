"use server"

import prisma from "../db/client"

export async function getUserInfo(userId: string){
    return await prisma.user.findUnique({
        where:{
            id: userId
        },
        select:{
            name: true,
            Location: true
        }

    })
}