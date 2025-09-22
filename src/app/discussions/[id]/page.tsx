import { Suspense } from "react";
import Post from "./_components/Post";
import LoadingSpinner from "@/components/ui/LoadingSpinner";
import CommentForm from "./_components/CommentForm";
import CommentList from "./_components/CommentList";

export const dynamic = "force-dynamic";


export default async function page({params}:
    {params: Promise<{id: string}>}){

        
    const { id } = await params;

        return (
            <div>
                <Suspense fallback={<LoadingSpinner text="Loading post..."/>}>
                    <Post id={id}/>
                </Suspense>
                <div className="mt-6">
                    <CommentForm postId={id}/>
                    <div className="mt-10">
    <h2>Comment list:</h2>
                    <Suspense fallback={<LoadingSpinner text="Loading comments..."/>}>
                        <CommentList postId={id}/>
                    </Suspense>
                    </div>
                

                </div>
              


            </div>
        )
    }