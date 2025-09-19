import { authProtection } from "@/server/auth/session"
import WeatherWidget from "./(dashboard)/_components/WeatherWidget"
import { Suspense } from "react"
import LoadingSpinner from "@/components/ui/LoadingSpinner"


export default async function page(){

  await authProtection()

  
  return (
    <div>
      <h1>Home page</h1>
      <Suspense fallback={<LoadingSpinner text="Loading weather data..."/>}>
      <WeatherWidget/>
      </Suspense>
    
    </div>
  )
}