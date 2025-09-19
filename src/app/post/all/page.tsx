
import Filters from "./_components/Filters";
import PostList from "./_components/PostList";



export default async function page({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string }>
}){

      const {community} = await searchParams

    
    return(
        <div>
            <h1>Discussions</h1>
       
            <div>
                <Filters community={community}/>
            </div>
       
            <PostList query={community}/>
        </div>
    )
}