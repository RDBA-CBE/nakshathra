"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Phone, Menu, X} from "lucide-react"


const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Rooms", href: "/rooms" },
  { name: "Facility", href: "/facility" },
  { name: "Gallery", href: "/gallery" },
  { name: "Contact", href: "/contact" },
]

export default function Header({}) {
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white ${
        scrolled ? "shadow-md" : ""
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <Link href="/" className="flex items-center cursor-pointer">
            <img
              src="/header-logo.png"
              alt="Hotel Nakshatra Logo"
              className="w-40 h-auto"
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-12 bg-[#F5F1ED] px-12 py-11 rounded-xl nav-font">
            <nav className="flex items-center gap-8">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`transition-colors text-sm font-medium ${
                    pathname === item.href
                      ? "text-[#8B4513] font-semibold"
                      : "text-[#2C1810] hover:text-[#8B4513]"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            <div className="flex items-center gap-3 pl-8 border-l border-gray-300">
              <Phone className="w-5 h-5 text-[#8B4513]" />
              <div className="text-right">
                <div className="text-xs text-gray-600 whitespace-nowrap">
                  Reserve Your Stay Today
                </div>
                <div className="font-semibold text-[#2C1810] whitespace-nowrap">
                  +91 90871 73000
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="lg:hidden focus:outline-none"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? (
              <X className="w-7 h-7 text-[#2C1810]" />
            ) : (
              <Menu className="w-7 h-7 text-[#2C1810]" />
            )}
          </button>
        </div>

        {/* Mobile Dropdown */}
        {mobileOpen && (
          <div className="lg:hidden mt-4 bg-[#F5F1ED] rounded-xl px-6 py-6 nav-font">
            <nav className="flex flex-col gap-5">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className={`text-sm font-medium ${
                    pathname === item.href
                      ? "text-[#8B4513] font-semibold"
                      : "text-[#2C1810] hover:text-[#8B4513]"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            <div className="flex items-center gap-4 mt-6 border-t border-gray-300 pt-6">
              <Phone className="w-5 h-5 text-[#8B4513]" />
              <div>
                <div className="text-xs text-gray-600">Reserve Your Stay Today</div>
                <div className="font-semibold text-[#2C1810]">+91 90871 73000</div>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
