import Image from "next/image"
import Link from "next/link"

export default function LocationPin({name}:{
    name: string 
}){
       let href = `/discussions?community=${name}`
    if (name === ""){
        href = ""

    }
 
    return (
        

               <div className="flex items-center py-1">
                        <Image src={"/gps.png"} alt="Location pin" height={30} width={30}></Image>
                                <Link  href={href}><p>{name}</p></Link>
    

   
        </div>
 
    )
}