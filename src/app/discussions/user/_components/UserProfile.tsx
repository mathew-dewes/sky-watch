import Image from "next/image";
import LocationPin from "@/components/ui/LocationPin";
import { getUserInfo } from "@/server/queries/user"

export default async function UserProfile({userId}:
    {userId: string}
){

    const userInfo = await getUserInfo(userId);
    if (!userInfo) return
    
    return (
            <div>
                <div className="flex items-center gap-4">
                      <Image src={'/avatar.png'} height={60} width={60} alt="Avatar image"></Image>
        <h1 className="mt-1 text-3xl">{userInfo?.name}</h1>
                </div>

        <div>
            <div className="mt-2">
            <h2>Bio:</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum doloremque similique esse asperiores mollitia eius illo laudantium, et consectetur eveniet?</p>
            </div>
            <div className="mt-3">
   {userInfo?.Location?.name && 
            <LocationPin name={userInfo.Location.name}/>}
            </div>
         

        </div>
      </div>
    )
}