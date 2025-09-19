import Image from "next/image"

export default function LocationPin({name}:{
    name: string
}){
    return (
        <div className="flex items-center py-1">
                        <Image src={"/gps.png"} alt="Location pin" height={30} width={30}></Image>
            <p>{name}</p>

   
        </div>
    )
}