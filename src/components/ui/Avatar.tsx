import Image from "next/image";

export default function Avatar({name = "Avatar", imageUrl}:{
    name: string, imageUrl?: string | null
}){
    return (
        <div className="flex items-center gap-2">
            <Image src={imageUrl || '/avatar.png'} height={40} width={40} alt="Avatar image"></Image>
            <p>{name}</p>
        </div>
    )
}