import { authProtection, getUserLocation } from "@/server/auth/session"
import WeatherWidget from "./(dashboard)/_components/WeatherWidget"
import { Suspense } from "react"
import LoadingSpinner from "@/components/ui/LoadingSpinner"
import PostFeed from "./(dashboard)/_components/PostFeed"
import LocationSearchbar from "./(dashboard)/_components/LocationSearchbar"
import ForcastWidget from "./(dashboard)/_components/ForcastWidget"


export default async function page({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string }>
}){

  const {location} = await searchParams;

  const defaultLocation = await getUserLocation();



  await authProtection()

  
  return (
    <div>
      <h1>Current forcast</h1>
      <LocationSearchbar/>
      <Suspense key={location} fallback={<LoadingSpinner text="Loading weather data..."/>}>
      <WeatherWidget location={location ?? defaultLocation}/>
      <div className="mt-10">
      <h1>12 Hourly forcast</h1>
      <ForcastWidget location={location ?? defaultLocation} />
      </div>
      </Suspense>
      

      <div className="mt-10">
     <h1>Latest posts:</h1>
      <Suspense fallback={<LoadingSpinner text="Loading posts..."/>}>
      <PostFeed/>
      </Suspense>
      </div>
 

    
    </div>
  )
}