"use server";

export async function getWeatherData(location: string){
    const res = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${location},nz&APPID=f6f508299a665b9ce2c35eea0ce63330&units=metric`, {
        next: {revalidate: 3600}
    }
    );
       if (!res.ok) throw new Error("Failed to fetch weather");
    return res.json();
}