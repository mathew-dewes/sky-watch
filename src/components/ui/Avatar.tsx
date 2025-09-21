import Image from "next/image";
import Link from "next/link";

export default function Avatar({name = "Avatar", imageUrl, userId}:{
    name: string, imageUrl?: string | null, userId: string
}){
    return (
        <Link href={`/discussions/user/${userId}`}>
         <div className="flex items-center gap-2">
            <Image src={imageUrl || '/avatar.png'} height={40} width={40} alt="Avatar image"></Image>

            <p>{name}</p>
        </div>
        </Link>
       
    )
}