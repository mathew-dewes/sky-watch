import Link from "next/link";

export default function HyperLink({href, text}:
    {href: string, text: string}
){
    return <Link className="hover:text-purple-400 block mt-5" href={href}>{text}</Link>
}