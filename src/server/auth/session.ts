"use server";

import { headers } from "next/headers";
import { auth } from "./auth";
import { redirect } from "next/navigation";
import prisma from "../db/client";



export async function getUserSession(){
    return await auth.api.getSession({headers: await headers()})
}


export async function getUserId(){
    const user = await auth.api.getSession({headers: await headers()});
    return user?.user.id
}


export async function getUserLocation(){
    const userId = await getUserId()

    const user = await prisma.user.findUnique({
        where:{
            id: userId
        },
        select:{
            Location:{
                select:{
                    name: true
                }
            }
        }
    });

    return user?.Location?.name;
}


export async function authProtection(){
    const session = await auth.api.getSession({headers: await headers()});
    
    if (!session){
        redirect('/auth/login')
    }
}