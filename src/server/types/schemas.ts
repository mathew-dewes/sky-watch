import z from "zod";

export const registerUserSchema = z.object({
    name: z.string().min(3, "Name must be 3 or more characters"),
    email: z.email(),
    password: z.string().min(8, "Password must be 8 or more characters"),
    location: z.string().min(1, "Location is required"),
    bio: z.string().max(200,"Bio must be 200 characters or less" )
});

export const loginUserSchema = z.object({
    email: z.email(),
    password: z.string().min(8, "Password must be 8 or more characters"),
});

export interface WeatherResponse {
  coord: {
    lon: number;
    lat: number;
  };
  weather: {
    id: number;
    main: string;
    description: string;
    icon: string;
  }[];
  base: string;
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
    sea_level?: number;  // sometimes not present
    grnd_level?: number; // sometimes not present
  };
  visibility: number;
  wind: {
    speed: number;
    deg: number;
    gust?: number;
  };
  clouds: {
    all: number;
  };
  rain:{
   "1h": number;
  },
  dt: number;
  sys: {
    country: string;
    sunrise: number;
    sunset: number;
  };
  timezone: number;
  id: number;
  name: string;
  cod: number;
}

export const postSchema = z.object({
  title: z.string().min(1, "Title is required"),
  content: z.string().min(1, "Content is required"),
  community:z.string().min(1, "Communitiy is required")
});

export const commentSchema = z.object({
  comment: z.string().min(1, "Comment is required").max(200, "Comment must be less than 200 characters")
})

