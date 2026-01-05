import ContactForm from '@/components/footer/form'
import GradientText from '@/components/GradientText'

const Contact = () => {
  return (
    <div>
      <GradientText
        colors={['#40ffaa', '#4079ff', '#40ffaa', '#4079ff', '#40ffaa']}
        animationSpeed={3}
        showBorder={false}
        className="custom-class cursor-none"
      >
        <h1 className="text-4xl">Contact</h1>
      </GradientText>
      <ContactForm />
    </div>
  )
}

export default Contact
