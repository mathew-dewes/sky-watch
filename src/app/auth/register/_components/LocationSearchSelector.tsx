"use client"

import { PlacePrediction } from "@/server/types/places";
import { registerUserSchema } from "@/server/types/schemas";
import { useEffect, useState } from "react";
import { UseFormRegister, UseFormSetValue } from "react-hook-form";
import z from "zod";



type FormFields = z.infer<typeof registerUserSchema>;

type LocationSearchSelectorProps = {
  register: UseFormRegister<FormFields>;
  setValue: UseFormSetValue<FormFields>;
};

export default function LocationSearchSelector({register, setValue}: LocationSearchSelectorProps) {
  const [query, setQuery] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const [suggestions, setSuggestions] = useState<PlacePrediction[]>([]);

useEffect(() => {
  if (query.length < 2) {
    setSuggestions([]);
    return;
  }

  const timeout = setTimeout(async () => {
    const res = await fetch(`/api/places?input=${encodeURIComponent(query)}`);
    const data = await res.json();
    setSuggestions(data.predictions || []);
  }, 400); 

  return () => clearTimeout(timeout);
}, [query]);
  






  const handleSelect = (city: string) => {
    const location = city.normalize("NFD").replace(/[\u0300-\u036f]/g, "")
    setQuery(location);
    setValue("location", location, { shouldValidate: true });
    setShowDropdown(false);
  };

  return (
    <div className="max-w-md">
      <label htmlFor="city-search" className="sr-only">
        Search city
      </label>
      <div className="relative">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
          <svg
            className="w-4 h-4 text-gray-500"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
        </div>
        <input
        {...register("location")}
        required
          type="text"
          id="city-search"
          className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
          placeholder="Type a city..."
          value={query}
          onChange={(e) => {
            const val = e.target.value;
            setQuery(e.target.value);
            setValue("location", val, { shouldValidate: true }); 
            setShowDropdown(true);
          }}
          onFocus={() => setShowDropdown(true)}
          onBlur={() => setTimeout(() => setShowDropdown(false), 150)} // small delay so click works
        />
  

        {/* Dropdown */}
        {showDropdown && query && suggestions.length > 0 && (
          <ul className="absolute z-10 mt-1 w-full text-black bg-white border border-gray-300 rounded-lg max-h-60 overflow-auto shadow-lg">
            {suggestions.map((s, idx) => (
              <li
                key={idx}
                className="px-4 py-2 hover:bg-blue-100 cursor-pointer"
                onMouseDown={() => handleSelect(s.description)}
              >
                {s.description}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
