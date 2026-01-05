import { SERVICES } from '@/constant/services'

const Services = () => {
  return (
    <div
      role="services"
      aria-label="travel services"
      className="grid grid-cols-1 gap-4 md:grid-cols-2 md:p-16 lg:grid-cols-3"
    >
      {SERVICES.map((items) => (
        <div
          key={items.id}
          aria-label="travel service"
          className="rounded-xl border border-slate-700 bg-slate-800/50 p-6 backdrop-blur-sm transition-all duration-300 hover:border-cyan-500/50 hover:shadow-lg hover:shadow-cyan-500/10"
        >
          <h3 className="font-bold text-gray-200 uppercase">{items.title}</h3>
          <p className="text-white">{items.description}</p>
        </div>
      ))}
    </div>
  )
}

export default Services
