import { authProtection } from "@/server/auth/session"
import { Suspense } from "react";
import CommunitiyList from "./_components/CommunityList";
import LoadingSpinner from "@/components/ui/LoadingSpinner";

export default async function page(){
    await authProtection();

    return (
        <div>
            <h1>Communities:</h1>
            <Suspense fallback={<LoadingSpinner text="Loading communities..."/>}>
                <CommunitiyList/>
            </Suspense>


        </div>
    )
}