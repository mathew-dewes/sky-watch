import Avatar from "@/components/ui/Avatar";
import DateTimeStamp from "@/components/ui/DateTimeStamp";
import { getComments } from "@/server/queries/comment";
import DeleteCommentButton from "./DeleteCommentButton";
import { getUserId } from "@/server/auth/session";




export default async function CommentList({ postId }: { postId: string }) {

    const userId = await getUserId()
    const comments = await getComments(postId)


    if (comments.length === 0) return <p>There are no comments</p>

    return (
        <div className="mt-5 flex flex-col gap-6">
            {comments.map((comment) => {
                return <div className="bg-lightdark-500 lg:w-1/2 p-5 rounded" key={comment.id}>
                    <Avatar userId={comment.userId} name={comment.user.name} />
                    <DateTimeStamp date={comment.createdAt} />
                    <p className="mt-2">{comment.content}</p>
                    <div className="flex justify-end mt-5">
                        {userId === comment.userId &&
                        <DeleteCommentButton postId={postId} commentId={comment.id}/>}
           
                    </div>
                </div>
            })}
        </div>
    )
}