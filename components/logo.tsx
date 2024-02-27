import Image from "next/image"
import Link from "next/link"
import localFont from "next/font/local"
import { cn } from "@/lib/utils"
const headingFont = localFont({
    src: "./../public/font.woff2"
})
export const Logo = () => {
    return (
        <Link href='/'>
            <div className="hover:opacity-75 transition items-center gap-x-2 hidden md:flex">
                <Image src='./../public/logo.svg' alt="logo" height={30} width={30}/>
                <p className={cn("text-lg text-neutral-400 pb-1", headingFont.className)}>Trello Clone</p>
            </div>
        </Link>
    )
}