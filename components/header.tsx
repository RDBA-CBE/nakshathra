"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Phone } from "lucide-react"

const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Rooms", href: "/rooms" },
  { name: "Facility", href: "/facility" },
  { name: "Gallery", href: "/gallery" },
  { name: "Contact", href: "/contact" },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white ${scrolled ? "shadow-md" : ""}`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="flex flex-col items-center gap-1 cursor-pointer hover:opacity-80 transition-opacity"
          >
            <div className="relative w-14 h-14 flex items-center justify-center">
              <div className="absolute inset-0 border-2 border-[#8B4513] rounded-sm transform rotate-45"></div>
              <span className="text-[#8B4513] font-serif text-2xl font-bold relative z-10">HN</span>
            </div>
            <div className="text-center">
              <div className="text-[10px] text-[#2C1810] tracking-wider">HOTEL</div>
              <div className="font-serif text-base text-[#8B4513] font-semibold tracking-wide">NAKSHATRA</div>
            </div>
          </Link>

          <div className="hidden lg:flex items-center gap-12 bg-[#F5F1ED] px-12 py-4 rounded-full">
            <nav className="flex items-center gap-8">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`transition-colors text-sm font-medium ${
                    pathname === item.href ? "text-[#8B4513] font-semibold" : "text-[#2C1810] hover:text-[#8B4513]"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            <div className="flex items-center gap-3 pl-8 border-l border-gray-300">
              <Phone className="w-5 h-5 text-[#8B4513]" />
              <div className="text-right">
                <div className="text-xs text-gray-600 whitespace-nowrap">Reserve Your Stay Today</div>
                <div className="font-semibold text-[#2C1810] whitespace-nowrap">+91 90871 73000</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
