
import { getUserSession } from "@/server/auth/session";
import LoginForm from "./_components/LoginForm";
import { redirect } from "next/navigation";

export default async function page(){

    const session = await getUserSession();

    if (session)redirect('/')
    return (
        <div>
            <h1>Login</h1>
            <LoginForm/>
        </div>
    )
}