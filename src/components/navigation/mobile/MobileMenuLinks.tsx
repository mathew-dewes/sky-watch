"use client"


import { Logout } from "@/server/mutations/auth";
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation";
import { pageRoutes } from "../Navbar";



type ButtonProps = {
     isMenuOpen: boolean;
     onClose: () => void;

     
};
export default function MobileMenuLinks({ isMenuOpen, onClose }: ButtonProps) {

     const pathName = usePathname();
         const router = useRouter();
        async function handleSignOut(){
             await Logout();
             router.push("/auth/login")
         }

     return (
          <div className={`p-5 z-10 absolute xl:hidden top-19 left-0 w-full bg-lightdark-500 flex flex-col item-center gap-6 font-semibold text-lg shadow-lg
                transform transition-transform ${isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"}
                `}
               style={{ transition: "transform 0.3s ease, opacity 0.3s ease" }}>
       
               
                    {pageRoutes.map((route, key)=>{
                         return    <Link key={key} onClick={onClose} 
              className={`list-none w-full text-center p-4 hover:bg-accent-500 hover:text-white
                    transition-all cursor-pointer ${pathName == route.href ? "text-accent-500 font-bold" : ""}`} href={route.href}>{route.text}</Link>
                    })}

                    {/* Todo - When auth is set up - Check is session is valid and dynamically render the button below */}

                     <button onClick={handleSignOut}
              className={`list-none text-white w-full text-center bg-accent-500 rounded-xl p-4 hover:bg-accent-500 font-semibold
                    transition-all cursor-pointer`}>Logout</button>

      
       

 




          </div>
     )
}