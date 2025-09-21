import Image from "next/image";

export default function LikeCount({count}:{count: number}){
    return(
        <div className="rounded flex items-center gap-1">
           <Image className="w-auto" src={'/heart.png'} height={20} width={30} alt="heart icon"></Image>
           <p className="mt-1">{count}</p>
        </div>
    )
}