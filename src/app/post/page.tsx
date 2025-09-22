

import { getCommunities } from "@/server/queries/community";
import PostForm from "./_components/PostForm";
import { authProtection } from "@/server/auth/session";



export default async function page(){

    const communities = await getCommunities();
    await authProtection();

    
    return (
        <div>
            <h1 className="text-center">Post</h1>
            <PostForm communities={communities}/>

        </div>
    )
}