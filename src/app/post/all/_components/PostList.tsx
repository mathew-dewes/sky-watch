import Avatar from "@/components/ui/Avatar"
import LocationPin from "@/components/ui/LocationPin"
import Button from "@/components/ui/Button"
import DateTimeStamp from "@/components/ui/DateTimeStamp"

import Link from "next/link"
import RevalidateButton from "./RevalidateButton"
import { getPosts } from "@/server/queries/post"



export default async function PostList({query}:{
    query: string
}){

    const posts = await getPosts({community:query});


    
    return (
                   <div>
                    <p>Total posts: {posts.length}</p>
                         <RevalidateButton community={query}/>
                         <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
  {posts.map((post)=>{
                return (
                    <div className="mt-5 bg-lightdark-500 p-3 rounded" key={post.id}>
                        <Avatar name={post.user.name}/>
                        <DateTimeStamp date={post.createdAt}/>
                        <LocationPin name={post.Community.name}/>
                        <div className="mt-3">
               <h2>{post.title}</h2>
                        <p>{post.description}</p>
                        <div className="flex gap-5 my-2">
                            <p>Likes: 0</p>
                            <p>Comments: {post._count.Comments}</p>
                        </div>
                        <Link href={`/post/${post.id}`}><Button text="Read more"/></Link>
                     
                        </div>
         
            
                    </div>
                )
            })}
                         </div>

            </div>
    )
}