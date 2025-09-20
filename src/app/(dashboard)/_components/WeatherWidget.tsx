import { getCurrentWeatherData, getWeatherForcast } from "@/server/queries/weather"
import Image from "next/image";


export default async function WeatherWidget() {

    function degreesToCompass(deg: number): string {
  const directions = [
    "N",  "NNE", "NE",  "ENE",
    "E",  "ESE", "SE",  "SSE",
    "S",  "SSW", "SW",  "WSW",
    "W",  "WNW", "NW",  "NNW"
  ];
  // Each direction covers 360/16 = 22.5 degrees
  const index = Math.round(deg / 22.5) % 16;
  return directions[index];
}

function hoursBetween(start: number, end: number): { rounded: number; precise: number } {
  // epoch difference in seconds
  const diffSeconds = end - start;

  // convert to hours
  const precise = diffSeconds / 3600;
  const rounded = Number(precise.toFixed(2)); // 2 decimal places

  return { rounded, precise };
}

    function epochToLocal(epoch: number): string {
        const date = new Date(epoch * 1000); // convert seconds → ms

        return date.toLocaleString("en-NZ", {

            hour: "2-digit",
            minute: "2-digit",
            hour12: true, // 12-hour clock with am/pm
        });
    }

    const data = await getCurrentWeatherData("Auckland");

    
    // const forcast = await getWeatherForcast("Auckland");

    // console.log(forcast);

    if (!data) return <p>Sorry, there was an error fetching the weather data. Please try again later</p>
    return (
        <div className="mt-10">
            <h1 className="text-3xl">{data.name}</h1>

            <div className="mt-5 flex gap-10">
                <div className="p-8 bg-lightdark-500 w-fit rounded-2xl text-center">
                    <h2>Conditions</h2>
                    <div className="mt-1">
                        <div className="flex items-center">
                            <p>{data.weather[0].description}</p>
                            <Image width={30} height={30} alt="Weather icon" src={`https://openweathermap.org/img/wn/${data.weather[0].icon}.png`}></Image>
                        </div>
                        <p>Temp: {data.main.temp} C</p>
                    </div>


                </div>
                <div className="p-8 bg-lightdark-500 w-fit rounded-2xl text-center">
                    <h2>Perspiration</h2>
                    <div className="mt-1">
                        <p>{data.rain?.["1h"] ?? 0} mm /hr</p>
                        <p>Humidity: {data.main.humidity}%</p>
                    </div>


                </div>
                <div className="p-8 bg-lightdark-500 w-fit rounded-2xl text-center">
                    <h2>Wind</h2>
                    <div className="mt-1">
                        <p>Speed: {(data.wind.speed * 3.6).toFixed()} Km/h</p>
                        <p>Direction: {degreesToCompass(data.wind.deg)}</p>
                        {data.wind.gust && <p>Gust: {(data.wind.gust * 3.6).toFixed()} Km/hr</p>}
                        <p></p>
                    </div>


                </div>
                <div className="p-8 bg-lightdark-500 w-fit rounded-2xl text-center">
                    <h2>Daylight</h2>
                    <div className="mt-1">
                        <p>Sunrise: {epochToLocal(data.sys.sunrise)}</p>
                        <p>Sunset: {epochToLocal(data.sys.sunset)}</p>
                        <p>Daylight: {hoursBetween(data.sys.sunrise, data.sys.sunset).rounded} hr</p>
                    </div>


                </div>







            </div>
        </div>

    )
}