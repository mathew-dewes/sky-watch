import { authProtection } from "@/server/auth/session"
import WeatherWidget from "./(dashboard)/_components/WeatherWidget"
import { Suspense } from "react"
import LoadingSpinner from "@/components/ui/LoadingSpinner"
import PostFeed from "./(dashboard)/_components/PostFeed"
import LocationSearchbar from "./(dashboard)/_components/LocationSearchbar"
import { locations } from "./(dashboard)/_components/helpers"




export default async function page({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string }>
}){

  const {location} = await searchParams;

  

  await authProtection()

  
  return (
    <div>
      <h1>Current forcast</h1>
      <LocationSearchbar cities={locations}/>

      <Suspense fallback={<LoadingSpinner text="Loading weather data..."/>}>
      <WeatherWidget location={location}/>
      </Suspense>
      <div className="mt-10">
      <h1>Hourly forcast</h1>
      {/* <ForcastWidget location={location} /> */}
      </div>

      <div className="mt-10">
     <h1>Latest posts:</h1>
      <Suspense fallback={<LoadingSpinner text="Loading posts..."/>}>
      <PostFeed/>
      </Suspense>
      </div>
 

    
    </div>
  )
}