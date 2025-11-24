"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function CTASection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    const element = document.getElementById("cta-section")
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  return (
    <section id="cta-section" className="relative py-32 bg-gradient-to-br from-[#F5E6D3] to-[#E8D5C0] overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 border-2 border-[#8B4513] rounded-full" />
        <div className="absolute bottom-20 right-20 w-40 h-40 border-2 border-[#8B4513] rounded-full" />
        <div className="absolute top-1/2 left-1/4 w-24 h-24 border-2 border-[#8B4513] rounded-full" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div
          className={`text-center space-y-8 transition-all duration-1000 ${
            isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
          }`}
        >
          <span className="inline-block text-sm font-medium text-[#8B4513] uppercase tracking-wider">
            Ready for Your Next Stay?
          </span>

          <h2 className="font-serif text-5xl lg:text-6xl text-[#2C2416] leading-tight">
            Indulge in Luxury Book
            <br />
            Your Stay Now
          </h2>

          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Experience unparalleled comfort and exceptional service. Reserve your perfect room today.
          </p>

          <div className="pt-4">
            <Button size="lg" className="bg-[#8B4513] hover:bg-[#723610] text-white px-8 py-6 text-lg group">
              Book Your Stay
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
