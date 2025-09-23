
import Image from "next/image";
import { degreesToCompass, epochToLocal, hoursBetween } from "./helpers";
import LocationCheckbox from "./LocationCheckbox";
import { getCurrentWeatherData } from "@/server/queries/weather";





export default async function WeatherWidget({location}:
    {location: string}
) {

    const data = await getCurrentWeatherData(location);

    if (!data) return <p>Sorry, there was an error fetching the weather data. Please try again later</p>
    return (
        <div className="mt-10">
            <div className="flex gap-2 items-center">
            <h1 className="text-3xl">{data.name}</h1>
          
   
                      <Image width={50} height={50} alt="Weather icon" src={`https://openweathermap.org/img/wn/${data.weather[0].icon}.png`}></Image>
                      <p className="text-xl">{data.main.temp.toFixed()}°C</p>
            </div>
              <p>{data.weather[0].description}</p>
                     <LocationCheckbox location={location}/>

                         
          


            <div className="mt-5 flex flex-col sm:flex-row sm:flex-wrap  gap-10">
                  <div className="p-8 bg-lightdark-500 sm:w-fit rounded-2xl text-center">
                    <Image className="mx-auto" width={30} height={10} alt="Temperature icon" src={`/temp.png`}></Image>

                    <h2 className="mt-2">Temperature</h2>
                    <div className="mt-1">
                        <p>Current: {data.main.temp.toFixed()}°C</p>
                        <p>High: {data.main.temp_max.toFixed()}°C</p>
                        <p>Low: {data.main.temp_min.toFixed()}°C</p>
                    </div>


                </div>
      
                <div className="p-8 bg-lightdark-500 sm:w-fit rounded-2xl text-center">
                    <Image className="mx-auto" width={30} height={10} alt="Rain icon" src={`/rainy.png`}></Image>

                    <h2 className="mt-2">Perspiration</h2>
                    <div className="mt-1">
                        <p>{data.rain?.["1h"] ?? 0} mm /hr</p>
                        <p>Humidity: {data.main.humidity}%</p>
                    </div>


                </div>
                <div className="p-8 bg-lightdark-500 sm:w-fit rounded-2xl text-center">
                            <Image className="mx-auto" width={30} height={10} alt="Rain icon" src={`/wind.png`}></Image>
                    <h2 className="mt-2">Wind</h2>
                    <div className="mt-1">
                        <p>Speed: {(data.wind.speed * 3.6).toFixed()} Km/h</p>
                        <p>Direction: {degreesToCompass(data.wind.deg)}</p>
                        {data.wind.gust && <p>Gust: {(data.wind.gust * 3.6).toFixed()} Km/hr</p>}
                        <p></p>
                    </div>


                </div>
                <div className="p-8 bg-lightdark-500 sm:w-fit rounded-2xl text-center">
                    <div className="flex items-center">
          <Image className="mx-auto" width={30} height={10} alt="Rain icon" src={`/sunrise.png`}></Image> 
                             <p>-</p>
                                  <Image className="mx-auto" width={30} height={10} alt="Rain icon" src={`/night.png`}></Image> 
                    </div>
                   
                    <h2 className="mt-2">Sunrise / set</h2>
                    <div className="flex gap-2 justify-center">
                        <p>{epochToLocal(data.sys.sunrise)}</p>
                        <p>-</p>
                        <p>{epochToLocal(data.sys.sunset)}</p>
                    </div>
                    <p>Daylight: {hoursBetween(data.sys.sunrise, data.sys.sunset).rounded} hr</p>


                </div>







            </div>
        </div>

    )
}