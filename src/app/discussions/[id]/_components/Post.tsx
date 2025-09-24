import Avatar from "@/components/ui/Avatar";
import CommentCount from "@/components/ui/CommentCount";
import DateTimeStamp from "@/components/ui/DateTimeStamp";
import LikeCount from "@/components/ui/LikeCount";
import LocationPin from "@/components/ui/LocationPin";
import { getPost } from "@/server/queries/post";
import LikeButton from "./LikeButton";
import { getUserId } from "@/server/auth/session";
import DeletePostButton from "./DeletePostButton";

export default async function Post({ id }: { id: string }) {

  const [post, userId] = await Promise.all([getPost(id), getUserId()]);

  const hasLiked = post?.Likes.some(like => like.userId === userId) ?? false

  if (!post) return
  return (
    <div className="bg-lightdark-500 p-4 sm:p-10 rounded lg:w-2/3">
      <Avatar userId={post.userId} name={post.user.name} />
      <div>

        <DateTimeStamp date={post.createdAt} />
        <LocationPin name={post.Community.name} />
      </div>
      <div className="mt-3">
        <h1>{post.title}</h1>
        <p>{post.description}</p>
      </div>
      <div className="flex items-center mt-5 justify-between w-3/4 sm:w-1/3">
        <div className="flex gap-5">
          <LikeCount count={post._count.Likes} />
          <CommentCount count={post._count.Comments} />
        </div>


        <LikeButton hasLiked={hasLiked} postId={post.id} />

      </div>
      <div className="mt-10 flex justify-end">
        {post.userId == userId && <DeletePostButton postId={post.id} />}
      </div>





    </div>
  )
}