"use client"
import { libraryNav, menuNav } from "@/lib/navigationitems";
import Link from "next/link"
import { usePathname } from "next/navigation"


export default function SidebarClone() {
    const pathname = usePathname();

    return (
        <div className="w-105 h-screen bg-white shadow-xl text-gray-500 p-10 ">
            <div className="m-4 space-y-6">
            <h3 className="text-[12px] font-bold -ml-5">LIBRARY</h3>
                <ul className="space-x-2">
                    {libraryNav.map((item) => (
                        <Link href={item.href} key={item.label}>
                            <li className={`flex items-center gap-1 cursor-pointer ${pathname === item.href ? "text-blue-600" : "hover:text-blue-600 text-gray-500"}`}>
                            {item.icon}
                            {item.label}
                            </li>
                        </Link>    
                    ))}
                </ul>
            <h3 className="text-[12px] font-bold -ml-5 ">MENU</h3>
                <ul className="space-x-2">
                    {menuNav.map((item) => (
                        <Link href={item.href} key={item.label}>
                            <li className={`flex items-center gap-1 cursor-pointer ${pathname === item.href ? "text-blue-600" : "hover:text-blue-600 text-gray-500"}`}>
                            {item.icon}
                            {item.label}
                            </li>
                        </Link>    
                    ))}
                </ul>
            </div>
        </div>
    )
}