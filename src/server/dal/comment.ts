"use server"

import { unstable_cache as cache } from "next/cache";
import { getComments } from "../queries/comment";

   
   
export async function getCachedComments(postId: string){
    const func = cache(getComments, ['comments', 'postId'],
        {revalidate:3600}
    );
    return await func(postId)
}



   