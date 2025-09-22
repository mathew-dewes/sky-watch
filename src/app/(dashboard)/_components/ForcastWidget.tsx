import { getWeatherForcast } from "@/server/queries/weather";
import {epochToLocalShort } from "./helpers";
import Image from "next/image";

export default async function ForcastWidget({location}:
    {location: string}
) {


    const forcast = await getWeatherForcast(location);
    const today = new Date().toLocaleDateString("en-NZ", { day: "numeric", month: "long", year: "numeric", weekday: "long" });
    return (
        <div className="mt-3">
            <h2>{today}</h2>
            <div className="mt-5 xl:flex grid grid-cols-3 gap-10 justify-between border-t-4">
                {forcast.list.map((item, key) => {
                    return (
                        <div key={key} className="px-3 py-4 w-fit border-r-4 border-accent-500">
                            <h2>{epochToLocalShort(item.dt)}</h2>
                            <div className="items-center w-fit">

                                <div className="flex items-center gap-1 mt-1">
                                    <Image width={30} height={30} alt="Weather icon" src={`https://openweathermap.org/img/wn/${item.weather[0].icon}.png`}></Image>
                                    <p className="mt-1">{item.main.temp.toFixed()} C</p>
                      
                                </div>
                                {item.rain &&  <div className="flex items-center gap-1 mt-1">
                        <Image width={15} height={15} alt="Rain icon" src={`/drop.png`}></Image>
                              <p className="mt-1">{(item.rain)? item.rain["3h"] : "0.0"} /hr</p>
                                </div>}
                               
  

                            </div>
                        </div>
                    )
                })}

            </div>
        </div>

    )
}