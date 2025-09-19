import { Suspense } from "react";
import Post from "./_components/Post";
import LoadingSpinner from "@/components/ui/LoadingSpinner";


export default async function page({params}:
    {params: Promise<{id: string}>}){

        
    const { id } = await params;

        return (
            <div>
                <Suspense fallback={<LoadingSpinner text="Loading post..."/>}>
                    <Post id={id}/>
                </Suspense>
              


            </div>
        )
    }