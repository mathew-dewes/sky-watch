
import Post from "./_components/Post";
import CommentForm from "./_components/CommentForm";
import CommentList from "./_components/CommentList";



export default async function page({params}:
    {params: Promise<{id: string}>}){

        
    const { id } = await params;

  
   

        return (
            <div>
      
                    <Post id={id}/>
      
                <div className="mt-6">
                    <CommentForm postId={id}/>
                    <div className="mt-10">
    <h2>Comment list:</h2>
       
                        <CommentList postId={id}/>
           
                    </div>
                

                </div>
              


            </div>
        )
    }