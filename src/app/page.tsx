import CoreTrack from "@/widgets/CoreTrack"
import Footer from "@/widgets/Footer"
import Hero from "@/widgets/Hero"


export default function Home(){
    return(
        <>
        <main>
        {/* Hero Section */}
        <Hero/>
       {/* Core Track Section */}
       <CoreTrack/>
       {/* Footer */}
       <Footer/>
        </main>
        
        
        </>
    )
}