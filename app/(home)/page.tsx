import Link from "next/link"
import localFont from "next/font/local"
import { Medal } from "lucide-react"
import { Poppins } from "next/font/google"
/**@external cn modulo para añadir variables creadas a las clases de las etiquetas */
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
/**@constant headingFont ruta de la fuente local que vamos a usar */
const headingFont = localFont({
    src: "../../public/font.woff2"
})
/**@constant textFont atributos de la fuente que vamos a importar de google fonts */
const textFont = Poppins ({
    subsets: ["latin"],
    weight: ["100","200","300","400","500","600","700","800","900"]
})

const HomePage = () =>{
    return (
        <div className="flex items-center justify-center flex-col">
            <div className={cn("flex items-center justify-center flex-col", headingFont.className)}>
                <div className="mb-4 flex items-center border shadow-sm p-4 bg-amber-200 text-amber-700 rounded-full uppercase">
                    <Medal className="h-6 w-6 mr-2"/>
                    Best task managment
                </div>
                <h1 className="text-3xl md:text-6xl text-center text-neutral-300 mb-6">
                    Trello clone it&apos;s not only a copy, it&apos;s better
                </h1>
                <div className="text-3xl md:text-6xl bg-gradient-to-r from-amber-200 to-amber-400 text-amber-700 px-4 p-4 rounded-xl
                pb-4 w-fit">
                    Work like a boss
                </div>
            </div>
            <div className={cn("text-sm md:text-xl text-neutral-300 mt-4 max-w-xs md:max-w-2xl text-center mx-auto", textFont.className)}>
                Collaborate, reach new productivity peaks and manege projects. The way to exit start here.
            </div>
            <Button className="mt-6 text-lg">
                <Link href="/sign-up">
                    Get Trello clone for free
                </Link>
            </Button>
        </div>
    )
}

export default HomePage