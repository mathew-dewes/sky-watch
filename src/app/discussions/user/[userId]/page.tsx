

import UserPostList from "../../_components/UserPostList";
import UserProfile from "../_components/UserProfile";


export default async function page({params}:
    {params: Promise<{userId: string}>}){

    const {userId} = await params;



  return (
    <div>
    <UserProfile userId={userId}/>
      <h1>Posts:</h1>
    <UserPostList userId={userId}/>
    </div>
  )
}