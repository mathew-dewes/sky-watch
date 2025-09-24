import Avatar from "@/components/ui/Avatar"
import LocationPin from "@/components/ui/LocationPin"
import Button from "@/components/ui/Button"
import DateTimeStamp from "@/components/ui/DateTimeStamp"
import Link from "next/link"
import { getPosts } from "@/server/queries/post"
import CommentCount from "@/components/ui/CommentCount"
import LikeCount from "@/components/ui/LikeCount"




export default async function PostList({ query, sort }: {
    query: string, sort: string
}) {

    const posts = await getPosts(query, sort);



    return (
        <div>
            <p>Total posts: {posts.length}</p>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                {posts.map((post) => {
                    return (
                        <div className="mt-5 bg-lightdark-500 p-3 rounded" key={post.id}>
                            <Avatar userId={post.userId} name={post.user.name} />
                            <DateTimeStamp date={post.createdAt} />
                            <LocationPin name={post.Community.name} />
                            <div className="mt-3">
                                <h2>{post.title}</h2>
                                <p>{post.description}</p>
                                <div className="flex gap-5 my-5">
                                    <LikeCount count={post.Likes.length} />
                                    <CommentCount count={post.Comments.length} />

                                </div>
                                <Link href={`/discussions/${post.id}`}><Button text="Read more" /></Link>

                            </div>


                        </div>
                    )
                })}
            </div>

        </div>
    )
}