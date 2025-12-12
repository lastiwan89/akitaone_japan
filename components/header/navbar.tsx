'use client'
import {
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from '../ui/navigation-menu'
import { NavigationMenu } from '../ui/navigation-menu'
import Sidebar from './sidebar'
import { NAVLINKS } from '@/constant/navlinks'
import Link from 'next/link'
import Image from 'next/image'
import { cn } from '@/lib/utils'

const Navbar = () => {
  return (
    <div
      aria-label="navigation"
      className={cn(
        'flex items-center justify-between bg-linear-60 from-black to-cyan-500 px-8 py-0.5',
      )}
    >
      <Link
        aria-label="home logo link"
        className="flex items-center justify-center gap-2"
        href="/"
      >
        <Image
          src="/logo-akitaone.png"
          width={70}
          height={70}
          alt="akita one japan travel"
        />
        <h1 className="font-black text-white uppercase">AkitaOne</h1>
      </Link>
      <NavigationMenu className="hidden lg:flex">
        <NavigationMenuList className="flex items-center justify-center gap-6">
          {NAVLINKS.map((items) => (
            <NavigationMenuItem className="text-white" key={items.id}>
              <NavigationMenuLink href={items.href}>
                {items.title}
              </NavigationMenuLink>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>
      <Sidebar />
    </div>
  )
}

export default Navbar
