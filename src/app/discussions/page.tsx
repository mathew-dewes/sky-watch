import { Suspense } from "react"
import Filters from "./_components/Filters"
import PostList from "./_components/PostList"
import LoadingSpinner from "@/components/ui/LoadingSpinner"

export default async function page({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string }>
}){

    const {community, sort} = await searchParams
  return (
    <div>
      <h1 className="text-center sm:text-left">Discussions</h1>
      <div>
        <h2 className="mt-5 mb-1">Filter</h2>
      <Filters filter={sort} community={community}/>
      </div>
      <Suspense fallback={<LoadingSpinner text="Loading posts..."/>}>
      <PostList sort={sort} query={community}/>
      </Suspense>

    </div>
  )
}