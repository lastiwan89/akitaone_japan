import { PARTNER } from '@/constant/partner'
import Image from 'next/image'

const Sponsors = () => {
  return (
    <div className="flex gap-2">
      {PARTNER.map((items) => (
        <div key={items.id}>
          <Image
            className="rounded-xl border border-slate-700 bg-slate-800/50 p-6 backdrop-blur-sm transition-all duration-300 hover:border-cyan-500/50 hover:shadow-lg hover:shadow-cyan-500/10"
            src={items.src}
            alt={items.alt}
            width={200}
            height={200}
          />
        </div>
      ))}
    </div>
  )
}

export default Sponsors
