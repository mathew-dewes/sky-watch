"use client"

import { PlacePrediction } from "@/server/types/places";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";





export default function LocationSearchbar() {
  const [query, setQuery] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const [loading, setLoading] = useState(false);
  const [suggestions, setSuggestions] = useState<PlacePrediction[]>([]);
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  
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
  


  const updateUrl = (location: string) => {
    const newParams = new URLSearchParams(searchParams?.toString());
    newParams.set("location", location);
    router.push(`${pathname}?${newParams.toString()}`);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) updateUrl(query);
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }

  const handleSelect = (city: string) => {
    const location = city.normalize("NFD").replace(/[\u0300-\u036f]/g, "")
    setQuery(location);
    setShowDropdown(false);
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mt-10">
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
          type="text"
          id="city-search"
          className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
          placeholder="Type a city..."
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setShowDropdown(true);
          }}
          onFocus={() => setShowDropdown(true)}
          onBlur={() => setTimeout(() => setShowDropdown(false), 150)} // small delay so click works
        />
        <button disabled={loading}
          type="submit"
          className="text-white cursor-pointer absolute end-2.5 bottom-2.5 bg-accent-500 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-4 py-2"
        >
          {loading ? "Searching" : "Search"}
        </button>

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
    </form>
  );
}
