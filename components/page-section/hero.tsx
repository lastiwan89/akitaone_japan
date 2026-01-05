'use client'
import Image from 'next/image'
import img1 from '../../public/fuji.jpg'
import img2 from '../../public/fuji_sakura.jpg'
import img3 from '../../public/kyoto-jinja-2.jpg'
import img4 from '../../public/arashiyama.jpg'
import img5 from '../../public/shibuya-cross.jpg'
import img6 from '../../public/kyoto-jinja.jpg'
import { useEffect, useState } from 'react'
import { setInterval } from 'timers'
import Link from 'next/link'

export default function Hero() {
  const images = [img1, img2, img3, img4, img5, img6]
  const [activeIndex, setActiveIndex] = useState(0)
  useEffect(() => {
    const intervalId = setInterval(() => {
      setActiveIndex((currentIndex) => (currentIndex + 1) % images.length)
    }, 6000)
    return () => clearInterval(intervalId)
  }, [images.length])
  return (
    <div className="flex justify-between gap-4 p-16">
      <div className="flex flex-col gap-8">
        <h1 className="bg-linear-to-r from-cyan-400 via-orange-500 to-fuchsia-500 bg-clip-text text-4xl font-bold text-transparent md:text-6xl">
          TRAVEL WITH US,
          <br />
          YOUR DISCOVERY PARTNER
        </h1>
        <p className="text-2xl text-gray-300">
          We are{' '}
          <span className="bg-linear-to-r from-white via-red-500 to-white bg-clip-text font-semibold text-transparent">
            AKITAONE JAPAN
          </span>
          , a close team of creatives & professionals who work together to
          provide satisfactions and best memories of a Happy Journey.
        </p>
        <div className="mt-4">
          <Link
            className="rounded-lg bg-cyan-500 px-8 py-3 font-semibold text-white shadow-lg shadow-cyan-500/50 transition-colors hover:bg-cyan-600"
            href={'/contact'}
          >
            <button>Get in touch</button>
          </Link>
        </div>
      </div>
      {/* images */}
      <div className="rounded-md border-4 border-gray-500">
        <Image
          src={images[activeIndex]}
          alt={`slide ${activeIndex + 1}`}
          width={1000}
          height={1000}
          className="animate-pulse transition-all ease-in-out"
        />
      </div>
    </div>
  )
}
