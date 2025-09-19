import Avatar from "@/components/ui/Avatar";
import CommentCount from "@/components/ui/CommentCount";
import DateTimeStamp from "@/components/ui/DateTimeStamp";
import LikeCount from "@/components/ui/LikeCount";
import LocationPin from "@/components/ui/LocationPin";
import { getPost } from "@/server/queries/post";

export default async function Post({id}:{id: string}){

    const post = await getPost(id);
      if (!post) return
    return (
        <div className="bg-lightdark-500 p-10 rounded w-2/3">
      <Avatar name={post.user.name} />
      <div>

        <DateTimeStamp date={post.createdAt} />
        <LocationPin name={post.Community.name} />
      </div>
      <div className="mt-3">
        <h1>{post.title}</h1>
        <p>{post.description}</p>
      </div>
      <div className="mt-5 flex gap-5">
        {/* {post.userId === userId && <DeletePostButton postId={post.id}/>} */}
        <LikeCount count={post.Likes.length}/>
        <CommentCount count={1}/>

      </div>
     


    </div>
    )
}