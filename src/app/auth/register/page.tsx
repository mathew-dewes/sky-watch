

import { getUserSession } from "@/server/auth/session";
import RegisterForm from "./_components/RegisterForm";
import { redirect } from "next/navigation";

export default async function page(){

        const session = await getUserSession();
    
        if (session)redirect('/')
    return (
        <div>
            <h1>Register</h1>
            <RegisterForm/>
        </div>
    )
}