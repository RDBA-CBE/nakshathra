"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Calendar, Phone, Menu, X } from "lucide-react"

const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Rooms", href: "/rooms" },
  { name: "Facility", href: "/facility" },
  { name: "Gallery", href: "/gallery" },
  { name: "Contact", href: "/contact" },
]

export default function Header() {
  const pathname = usePathname()
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="w-full bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="flex items-center justify-between py-5 lg:py-6">
          {/* Logo - Left */}
          <Link href="/" className="flex items-center cursor-pointer flex-shrink-0 z-10">
            <img
              src="/header-logo.png"
              alt="Hotel Nakshatra Logo"
              className="h-auto w-auto max-h-16 sm:max-h-20 lg:max-h-24 xl:max-h-28"
            />
          </Link>

          {/* Desktop Navigation and Booking Info - Combined Container */}
          <div className="hidden lg:flex items-center gap-10 xl:gap-12 bg-[#F5F1ED] px-10 xl:px-16 py-4 xl:py-10 rounded-xl flex-1 justify-center max-w-5xl mx-auto">
            {/* Navigation Items */}
            <nav className="flex items-center gap-6 xl:gap-10">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`text-[15px] xl:text-base font-normal transition-colors ${
                    pathname === item.href
                      ? "text-[#8B4513]"
                      : "text-[#2C1810] hover:text-[#8B4513]"
                  }`}
                  style={{ fontFamily: '"Marcellus", serif' }}
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* Divider */}
            <div className="h-8 w-px bg-gray-300"></div>

            {/* Booking Info */}
            <div className="flex items-center gap-2.5">
              <Calendar className="w-4 h-4 text-[#8B4513] flex-shrink-0" />
              <div className="flex flex-col">
                <span className="text-[11px] text-[#666666] leading-tight whitespace-nowrap">
                  Reserve Your Stay Today
                </span>
                <span className="text-sm font-semibold text-[#2C1810] leading-tight whitespace-nowrap">
                  +91 90871 73000
                </span>
              </div>
            </div>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="lg:hidden focus:outline-none z-50"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <X className="w-6 h-6 text-[#2C1810]" />
            ) : (
              <Menu className="w-6 h-6 text-[#2C1810]" />
            )}
          </button>
        </div>

        {/* Mobile Dropdown */}
        {mobileOpen && (
          <div className="lg:hidden pb-6 border-t border-gray-200">
            <nav className="flex flex-col gap-4 pt-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className={`text-base font-normal transition-colors ${
                    pathname === item.href
                      ? "text-[#8B4513] font-medium"
                      : "text-[#2C1810] hover:text-[#8B4513]"
                  }`}
                  style={{ fontFamily: '"Marcellus", serif' }}
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            <div className="flex items-center gap-3 mt-6 pt-6 border-t border-gray-200 bg-[#F5F5F5] px-4 py-3 rounded-lg">
              <Calendar className="w-4 h-4 text-[#8B4513] flex-shrink-0" />
              <div className="flex flex-col">
                <span className="text-xs text-[#666666] leading-tight">
                  Reserve Your Stay Today
                </span>
                <span className="text-sm font-semibold text-[#2C1810] leading-tight">
                  +91 90871 73000
                </span>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
