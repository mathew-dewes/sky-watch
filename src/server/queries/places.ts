"use server"

import { PlacesAutocompleteResponse } from "../types/places";

export async function fetchPlaces(input: string): Promise<PlacesAutocompleteResponse> {
   const res = await fetch(`/api/places?input=${encodeURIComponent(input)}`);
    if (!res.ok) throw new Error("Failed to fetch places");
  return res.json();
}


