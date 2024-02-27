import { Navbar } from "./_components/navbar"

const HomeLayout = ({
    children
} : {
    children: React.ReactNode
}) => {
    return (
        <div className="h-full bg-slate-800">
            <Navbar/>
            <main className="pt-40 bg-slate-800">
                {children}
            </main>
            {/* {footer} */}
        </div>
    )
}

export default HomeLayout