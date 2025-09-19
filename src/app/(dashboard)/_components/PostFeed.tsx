import Avatar from "@/components/ui/Avatar"
import Button from "@/components/ui/Button"
import DateTimeStamp from "@/components/ui/DateTimeStamp"
import LocationPin from "@/components/ui/LocationPin"
import { getPosts } from "@/server/queries/post"
import Link from "next/link"

export default async function PostFeed(){

    const posts = await getPosts()


    return (
       <div className="flex gap-10 flex-wrap">
  {posts.map((post)=>{
                return (
                    <div className="mt-5 bg-lightdark-500 p-3 rounded w-100" key={post.id}>
                        <Avatar name={post.user.name}/>
                        <DateTimeStamp date={post.createdAt}/>
                        <LocationPin name={post.Community.name}/>
                        <div className="mt-3">
               <h2>{post.title}</h2>
                        <p>{post.description}</p>
                        <div className="flex gap-5 my-2">
                            <p>Likes: {post._count.Comments}</p>
                            <p>Comments: {post._count.Comments}</p>
                        </div>
                        <Link href={`/post/${post.id}`}><Button text="Read more"/></Link>
                     
                        </div>
         
            
                    </div>
                )
            })}
            </div>
    )
}