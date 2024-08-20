import SideBar from "@/components/sidebar"

export default function ProfileLayout({children}){
    return(
        <section className="flex">
        <SideBar/>
        <div className="w-full">
            {children}
        </div>
    </section>
    )
}