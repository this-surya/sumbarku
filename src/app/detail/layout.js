import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export default function DetailLayout({children}){
    return(
        <main className="bg-gray-500 text-white">
            
        <Navbar />
        {children}
        <Footer />
        </main>
    )
}