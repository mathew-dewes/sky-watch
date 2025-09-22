"use client"

import { useState } from "react";

import MobileMenuLinks from "./mobile/MobileMenuLinks";
import { HamburgerButton } from "./mobile/HamburgerButton";

import MenuCloseButton from "./mobile/MenuCloseButton";

import Link from "next/link";
import Navlink from "./NavLink";
import { auth } from "@/server/auth/auth";
import LogoutButton from "../layout/LogoutButton";

type Session = typeof auth.$Infer.Session

export const pageRoutes = [
    {href: "/", text:"Home"},
        {href: "/discussions", text:"Discussions"},
    {href:"/communities", text: "Communities"},
    {href:"/post", text:"Post"},

]

export default function Navbar({ session }:
    { session: Session | null }
) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const closeMenu = () => setIsMenuOpen(false);
    return (
        <nav className="flex justify-between items-center h-20 px-6 sm:px-20 md:px-30 lg:px-50 bg-lightdark-500 text-white shadow-xl">
            <Link href={'/'}><h1 className="text-accent-500 font-bold text-2xl">Sky Watch</h1></Link>
    
    <ul className="lg:flex gap-10 xl:gap-20 hidden">

                {session && pageRoutes.map((route, key) => {
                    return <Navlink href={route.href} text={route.text} key={key} />
                })}
                {session && <LogoutButton/>}

            </ul>
            {session && <div className="lg:hidden block">
                {isMenuOpen ? <MenuCloseButton onClick={closeMenu} /> : <HamburgerButton onClick={() => setIsMenuOpen(prev => !prev)} />}
                <MobileMenuLinks isMenuOpen={isMenuOpen} onClose={closeMenu} />
            </div>}
          




        </nav>
    )
}

