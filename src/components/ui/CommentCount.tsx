import Image from "next/image";

export default function CommentCount({count}:{count: number}){
    return(
        <div className="rounded flex items-center gap-2">
           <Image className="w-auto" src={'/comment.png'} height={20} width={30} alt="heart icon"></Image>
           <p className="mt-1">{count}</p>
        </div>
    )
}