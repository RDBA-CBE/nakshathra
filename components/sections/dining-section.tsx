"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, Phone } from "lucide-react"

export default function DiningSection() {
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

    const element = document.getElementById("dining-section")
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  return (
    <section id="dining-section" className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Images */}
          <div
            className={`grid grid-cols-2 gap-4 transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-20"
            }`}
          >
            <div className="space-y-4">
              <div className="relative h-64 rounded-lg overflow-hidden">
                <Image src="/elegant-restaurant-interior-with-wooden-chairs-and.jpg" alt="Restaurant Interior" fill className="object-cover" />
              </div>
            </div>
            <div className="space-y-4 pt-8">
              <div className="relative h-64 rounded-lg overflow-hidden">
                <Image src="/fine-dining-restaurant-setup-with-warm-lighting.jpg" alt="Dining Setup" fill className="object-cover" />
              </div>
            </div>
          </div>

          {/* Content */}
          <div
            className={`space-y-6 transition-all duration-1000 delay-300 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-20"
            }`}
          >
            <div className="inline-block">
              <span className="text-sm font-medium text-[#8B4513] uppercase tracking-wider">
                Where Fine Dining Meets Fine Living
              </span>
            </div>

            <h2 className="font-serif text-4xl lg:text-5xl text-[#2C2416] leading-tight">Dining</h2>

            <div className="space-y-4 text-gray-600">
              <div className="flex items-start gap-3">
                <span className="text-[#8B4513]">•</span>
                <p>Breakfast — 08:00 to 10:00 AM</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-[#8B4513]">•</span>
                <p>Lunch — 12:30 to 02:00 PM</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-[#8B4513]">•</span>
                <p>Dinner — 08:00 to 10:00 PM</p>
              </div>
            </div>

            <p className="text-gray-600 leading-relaxed">
              Savor exquisite cuisine in our elegant dining spaces, where every meal is crafted with passion and served
              with impeccable hospitality.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button className="bg-[#8B4513] hover:bg-[#723610] text-white group">
                Explore Menu
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                variant="outline"
                className="border-[#8B4513] text-[#8B4513] hover:bg-[#8B4513] hover:text-white bg-transparent"
              >
                <Phone className="mr-2 h-4 w-4" />
                Call For Booking
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
