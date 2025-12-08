import Hero from '@/components/page-section/hero'
import Services from '@/components/page-section/services'
import Sponsors from '@/components/page-section/sponsor'

const Home = () => {
  return (
    <div className="flex flex-col items-center bg-linear-60 from-black/90 to-sky-800/70 px-8">
      {/* Hero section */}
      <Hero />
      {/* Sponsors section */}
      <Sponsors />
      {/* benefit section */}
      <Services />
    </div>
  )
}

export default Home
