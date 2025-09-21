import { PlacesAutocompleteResponse } from "@/server/types/places";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const input = searchParams.get("input");

  if (!input) {
    return NextResponse.json(
      { error: "Missing 'input' query parameter" },
      { status: 400 }
    );
  }

  const apiKey = process.env.GOOGLE_PLACES_API_KEY;
  const url = `https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${input}&components=country:NZ&key=${apiKey}`;
  try {
    const res = await fetch(url);
    const data : PlacesAutocompleteResponse = await res.json();
    

    return NextResponse.json(data);
  } catch (error) {
    console.log(error);
    
    return NextResponse.json(
      { error: "Failed to fetch Google Places API" },
      { status: 500 }
    );
  }
}
