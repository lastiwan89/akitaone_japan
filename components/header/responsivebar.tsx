'use client'
import Link from 'next/link'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { NAVLINKS } from '@/constant/navlinks'

const AsideBar = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <>
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="rounded-lg p-2 transition-colors hover:bg-gray-700 lg:hidden"
        aria-label="Open menu"
      >
        {!isOpen ? <Menu size={24} /> : <X />}
      </button>

      <aside
        className={`fixed top-0 left-0 z-50 flex h-full w-80 transform flex-col bg-gray-900 text-white shadow-2xl transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between border-b border-gray-700 p-4">
          <h2 className="text-xl font-bold">Menu</h2>
          <button
            onClick={() => setIsOpen(false)}
            className="rounded-lg p-2 transition-colors hover:bg-gray-800"
            aria-label="Close menu"
          ></button>
        </div>

        <nav className="flex-1 overflow-y-auto p-4">
          {NAVLINKS.map((items, i) => (
            <Link
              key={i}
              href={items.href}
              onClick={() => setIsOpen(false)}
              className="mb-2 flex items-center gap-3 rounded-lg p-3 transition-colors hover:bg-gray-800"
            >
              <span className="font-medium">{items.title}</span>
            </Link>
          ))}
        </nav>
      </aside>
    </>
  )
}

export default AsideBar
