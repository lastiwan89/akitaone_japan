import ContactForm from '@/components/footer/form'
import GradientText from '@/components/GradientText'
import { cn } from '@/lib/utils'

const About = () => {
  return (
    <div className="flex flex-col gap-8 p-8">
      <div className={cn('flex flex-col gap-4')}>
        <GradientText
          colors={['#40ffaa', '#4079ff', '#40ffaa', '#4079ff', '#40ffaa']}
          animationSpeed={3}
          showBorder={false}
          className="custom-class cursor-none"
        >
          <h1 className="text-start text-3xl font-bold">About Us</h1>
        </GradientText>
        <p className="text-center">
          Akita One Japan (AOJ) berdiri secara resmi di kota Saitama, tepatnya
          di kota Kounosu pada tahun 2018. Dari awal mula kami sebagai agen
          perjalanan wisata telah berkembang menjadi penyedia solusi perjalanan
          korporat terpercaya di bawah merek Akita One Japan (AOJ). Ini
          merupakan hasil alami dari reputasi kami dalam hal kehandalan,
          jangkauan sumber daya kami, dan pemahaman mendalam kami terhadap dunia
          travel Indonesia dan seluruh dunia, di mana kami mengenal pelanggan
          kami dengan baik sehingga kami dapat menyarankan dan memberikan Tour
          Travel Solutions untuk kebutuhan mereka.
        </p>
      </div>
      {/* contact section */}
      <div>
        <ContactForm />
      </div>
    </div>
  )
}

export default About
