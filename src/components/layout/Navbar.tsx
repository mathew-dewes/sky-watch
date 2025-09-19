import Link from "next/link"
import NavLinks from "./Navlinks"

export const pageRoutes = [
    {href: "/", text:"Home"},
    {href:"/communities", text: "Communities"},
    {href:"/post", text:"Post"},
]

export default function Navbar(){
    return (
        <nav className="flex justify-between items-center h-20 px-10 sm:px-20 md:px-30 lg:px-50 bg-lightdark-500 text-white shadow-xl">
            <Link href={'/'}><h1 className="text-accent-500 font-bold text-2xl">Sky Watch</h1></Link>
            <NavLinks/>
          




        </nav>
    )
}