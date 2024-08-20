import SideBar from "@/components/sidebar";


export default function CartLayout({children}){
    return(
        <section className="flex">
            <SideBar/>
            <div className="w-full">
                {children}
            </div>
        </section>
    )
}