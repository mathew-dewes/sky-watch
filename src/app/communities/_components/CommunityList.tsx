import Avatar from "@/components/ui/Avatar"
import Button from "@/components/ui/Button";
import { getCommunities } from "@/server/queries/community";

import Link from "next/link";




export default async function CommunitiyList(){

        const communtities = await getCommunities();
    return (
        <div>
              {communtities.map((region)=>{
                            return (
                                <div className="border-b-2 py-10 w-1/2" key={region.id}>
                                    <h1>{region.name}</h1>
                                    <p className="mb-5">Lorem ipsum dolor sit amet.</p>
                                    <div className="flex items-center gap-2 mb-5">
                  <p>Moderator -</p>
                   <Avatar userId={region.userId} imageUrl={region.moderator.image} name={region.moderator.name}/>
                                    </div>
                                   
                              
                                    <Link href={`/discussions?community=${region.name}`}><Button text="View posts"/></Link>
                                </div>
                            )
                        })}
        </div>
    )
}