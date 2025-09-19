"use client"

import { usePathname } from "next/navigation";
import { pageRoutes } from "./Navbar"
import Link from "next/link";




export default function NavLinks() {
    const pathName = usePathname();
    function isActive(link: string) {
        return pathName == link ? true : false

    }
    return (
        <ul className="hidden lg:flex gap-20">
            {pageRoutes.map((route, key) => {
                return <Link key={key} className={`hover:text-accent-500
        ${isActive(route.href) ? "text-accent-500" : ""}
        `} href={route.href}>{route.text}</Link>
            })}




        </ul>
    )
}