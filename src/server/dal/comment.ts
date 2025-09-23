"use server"

import { unstable_cache as cache } from "next/cache";
import { getComments } from "../queries/comment";

   
   
export async function getCachedComments(postId: string){
    const func = cache(getComments, ['comments', 'postId'],
        {tags: [`comments:${postId}`]}
    );
    return await func(postId)
}



   