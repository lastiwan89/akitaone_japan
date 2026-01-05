import Hero from '@/components/page-section/hero'
import Services from '@/components/page-section/services'
import Sponsors from '@/components/page-section/sponsor'

const Home = () => {
  return (
    <div className="flex flex-col items-center bg-linear-to-r from-gray-900 via-cyan-950 to-sky-950 p-8">
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
