import { getWeatherData } from "@/server/queries/weather"


export default async function WeatherWidget(){

    const data = await getWeatherData("Auckland");
        if (!data) return <p>Sorry, there was an error fetching the weather data. Please try again later</p>
    return(
        <div className="mt-5">
            <p>Location: {data.name}</p>
            <p>Current condtions: {data.weather[0].description}</p>
            <p>Temp: {data.main.temp} C</p>
            <p>Humidity: {data.main.humidity}%</p>
            <p>Rain fall: {data.rain?.["1h"] ?? 0} mm</p>

        </div>
    )
}