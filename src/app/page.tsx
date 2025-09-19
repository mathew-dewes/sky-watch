import { authProtection } from "@/server/auth/session"


export default async function page(){

  await authProtection()

  
  return (
    <div>
      <h1>Home page</h1>
    </div>
  )
}