import Button from "@/components/ui/Button";
import LocationPin from "@/components/ui/LocationPin";
import { getCommunities } from "@/server/queries/community";

import Link from "next/link";




export default async function CommunitiyList() {

    const communtities = await getCommunities();
    return (
        <div>
            {communtities.map((region) => {
                return (
                    <div className="border-b-2 py-10 sm:w-1/2" key={region.id}>
                        <div className="flex items-center">
                            <LocationPin name={""} />
                            <h1>{region.name}</h1>
                   
                        </div>
                                 <p className="mt-2">Total posts: {region._count.Posts}</p>

 
                  
                    <div className="mt-5">
         <Link href={`/discussions?community=${region.name}`}><Button text="View posts" /></Link>


                    </div>
   
            
                    </div>
                )
            })}
        </div>
    )
}