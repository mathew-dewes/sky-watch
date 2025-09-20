"use server";

import { WeatherResponse } from "../types/schemas";
import { ForecastResponse } from "../types/weather";


const ApiKey = process.env.WEATHER_API_KEY as string


export async function getCurrentWeatherData(location: string): Promise<WeatherResponse>{
      await new Promise((res) => setTimeout(res, 500));
    const res = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${location},nz&APPID=${ApiKey}&units=metric`, {
        next: {revalidate: 3600,  tags: [`weather-${location}`]}
    }
    );
       if (!res.ok) throw new Error("Failed to fetch weather");
    return res.json();
}



export async function getWeatherForcast(location: string): Promise<ForecastResponse>{
          await new Promise((res) => setTimeout(res, 1000));
const res = await fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${location}&appid=${ApiKey}&cnt=9&units=metric`,{
    next: {revalidate: 3600,  tags: [`weather-${location}`]}
})
    if (!res.ok) throw new Error("Failed to fetch weather");
    return res.json();
}
