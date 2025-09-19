"use client"

import Link from "next/link"
import { auth } from "@/server/auth/auth"
import LogoutButton from "./LogoutButton"
import { usePathname } from "next/navigation"


export const pageRoutes = [
    { href: "/", text: "Home" },
      { href: "/discussions", text: "Discussions" },
    { href: "/communities", text: "Communities" },
    { href: "/post", text: "Create post" },
  
]

type Session = typeof auth.$Infer.Session

export default function Navbar({ session }:
    { session: Session | null }) {

    const pathName = usePathname();
    function isActive(link: string) {
        return pathName == link ? true : false

    }

    return (
        <nav className="flex justify-between items-center h-20 px-10 sm:px-20 md:px-30 lg:px-50 bg-lightdark-500 text-white shadow-xl">
            <Link href={'/'}><h1 className="text-accent-500 font-bold text-2xl">Sky Watch</h1></Link>
            <ul className="hidden lg:flex gap-20">

                {pageRoutes.map((route, key) => {
                    return <Link key={key} className={`hover:text-accent-500
        ${isActive(route.href) ? "text-accent-500" : ""}
        `} href={route.href}>{route.text}</Link>
                })}

                {session && <LogoutButton />}

            </ul>






        </nav>
    )
}