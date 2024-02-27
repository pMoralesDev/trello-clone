const HomeLayout = ({
    children
} : {
    children: React.ReactNode
}) => {
    return (
        <div className="h-full bg-slate-800">
            {/* {navbar} */}
            <main className="pt-40 bg-slate-800">
                {children}
            </main>
            {/* {footer} */}
        </div>
    )
}

export default HomeLayout