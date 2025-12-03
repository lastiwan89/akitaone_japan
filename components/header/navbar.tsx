"use client";

import {
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "../ui/navigation-menu";
import { NavigationMenu } from "../ui/navigation-menu";
import Sidebar from "./sidebar";
import { NAVLINKS } from "@/constant/navlinks";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

const Navbar = () => {
  return (
    <div
      className={cn(
        "flex items-center justify-between bg-linear-60 from-black to-cyan-500",
      )}
    >
      <Link href="/">
        <Image
          src="/logo-akitaone.png"
          width={70}
          height={70}
          alt="akita one japan travel"
        />
      </Link>
      <NavigationMenu className="hidden md:flex">
        <NavigationMenuList className="flex items-center justify-center gap-8">
          {NAVLINKS.map((items) => (
            <NavigationMenuItem
              className="text-white hover:text-gray-900"
              key={items.id}
            >
              <NavigationMenuLink href={items.href}>
                {items.title}
              </NavigationMenuLink>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>
      <Sidebar />
    </div>
  );
};

export default Navbar;
