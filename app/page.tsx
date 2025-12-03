import Benefit from "@/components/page-section/benefit"
import Hero from "@/components/page-section/hero"
import Sponsors from "@/components/page-section/sponsor"

const Home = () => {
    return (
        <div className="bg-linear-60 from-fuchsia-950 to-cyan-800">
            {/* Hero section */}
            <Hero />
            {/* Sponsors section */}
            <Sponsors />
            {/* benefit section */}

        </div>
    )
}

export default Home
