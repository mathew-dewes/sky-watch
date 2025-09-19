import PostList from "./_components/PostList"

export default async function page({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string }>
}){

    const {community} = await searchParams
  return (
    <div>
      <h1>Discussions</h1>
      <div>
        <h2>Filters go here</h2>
      </div>
      <PostList query={community}/>
    </div>
  )
}