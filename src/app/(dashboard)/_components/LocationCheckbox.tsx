"use client"

import { getUserLocation } from "@/server/auth/session";
import { updateLocation } from "@/server/mutations/location";
import { useEffect, useState } from "react";

export default function LocationCheckbox({location}:{
    location: string
}){

    const [checked, setChecked] = useState(false);
    const [loading, setLoading] = useState(true);
    const [visible, setVisible] = useState(false); 

      useEffect(() => {
    const fetchLocation = async () => {
      try {
        const currentLocation = await getUserLocation(); // should return user's saved location string
        setChecked(currentLocation === location);
      } catch (err) {
        console.error("Failed to fetch location:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchLocation();
    const timer = setTimeout(() => setVisible(true), 300);
    return () => clearTimeout(timer);
  }, [location]);

      const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const isChecked = e.target.checked;
    setChecked(isChecked);
    console.log("Checkbox checked:", isChecked);

    if (isChecked) {
      // Call your DB update function here
      try {
        await updateLocation(location);
        console.log("Location updated in DB:", location);
      } catch (err) {
        console.error("Error updating location:", err);
      }
    }
  };




    return (
      
<div className ={`flex items-center mb-4 mt-2 transition-opacity duration-700
    ${visible ? "opacity-100" : "opacity-0"}`}>
    
    <input disabled={loading} onChange={handleChange} id="default-checkbox" type="checkbox" checked={checked} 
    className={` w-4 h-4 accent-accent-500 border-gray-300 rounded-sm focus:ring-accent-500`
       
    }/>
    <label className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Set as home location</label>
</div>


        


    )
}