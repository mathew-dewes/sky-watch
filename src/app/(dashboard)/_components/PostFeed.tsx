import Avatar from "@/components/ui/Avatar"
import Button from "@/components/ui/Button"
import CommentCount from "@/components/ui/CommentCount"
import DateTimeStamp from "@/components/ui/DateTimeStamp"
import LikeCount from "@/components/ui/LikeCount"
import LocationPin from "@/components/ui/LocationPin"
import { getPosts } from "@/server/queries/post"
import Link from "next/link"

export default async function PostFeed(){

    const posts = await getPosts("all", 3)


    return (
       <div className="flex gap-10 flex-wrap">
  {posts.map((post)=>{
                return (
                    <div className="mt-5 bg-lightdark-500 p-3 rounded w-100" key={post.id}>
                        <div>
                        <Avatar userId={post.userId} name={post.user.name}/>
                        <DateTimeStamp date={post.createdAt}/>
                        <LocationPin name={post.Community.name}/>
                        </div>
                   
                        <div className="mt-3">
               <h2>{post.title}</h2>
                        <p>{post.description}</p>
                        <div className="flex gap-5 my-5 items-center">
                            <LikeCount count={post.Likes.length}/>
                              <CommentCount count={1}/>
                        </div>
                        <Link href={`/discussions/${post.id}`}><Button text="Read more"/></Link>
                     
                        </div>
         
            
                    </div>
                )
            })}
            </div>
    )
}