"use client"


import { Logout } from "@/server/mutations/auth";
import { useRouter } from "next/navigation";

export default function LogoutButton(){
    const router = useRouter();

    async function handleSignOut(){
        await Logout();
        router.push("/auth/login")
    }
    return <button className="cursor-pointer hidden lg:block" onClick={handleSignOut}>Logout</button>
}