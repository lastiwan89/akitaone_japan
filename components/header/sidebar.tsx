'use client'
import { NAVLINKS } from "@/constant/navlinks"
import { Button } from "../ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "../ui/dropdown-menu"
import { IoMenuSharp } from 'react-icons/io5'
import { useRouter } from "next/navigation"
import { cn } from "@/lib/utils"

const Sidebar = () => {
    const router = useRouter()
    return (
        <div className="md:hidden">
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button size='icon'>
                        <IoMenuSharp size={32} />
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className={cn("w-screen h-screen text-white items-center flex flex-col gap-4 bg-linear-60 from-gray-950 to-cyan-500 font-semibold")}>
                    {
                        NAVLINKS.map((items) => (
                            <DropdownMenuItem key={items.id} onClick={() => router.push(items.href)}>{items.title}</DropdownMenuItem>
                        ))
                    }
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    )
}

export default Sidebar
