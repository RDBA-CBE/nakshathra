"use client"

import { useRef } from "react"
import { useInView } from "@/hooks/use-in-view"

export default function AboutSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef)

  return (
    <section ref={sectionRef} className="py-20 px-6 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <p className="text-[#8B4513] text-sm font-medium mb-4 tracking-wide">ABOUT OUR HOTEL</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <div
              className={`grid grid-cols-2 gap-8 mb-8 transition-all duration-700 ${
                isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            >
              <div className="text-center">
                <div className="text-5xl font-serif text-[#2C1810] mb-2">+20</div>
                <p className="text-gray-600 text-sm">Aromatic Services</p>
              </div>
              <div className="text-center">
                <div className="text-5xl font-serif text-[#2C1810] mb-2">+49</div>
                <p className="text-gray-600 text-sm">Total Luxury Rooms</p>
              </div>
            </div>

            <div
              className={`space-y-4 text-gray-600 leading-relaxed transition-all duration-700 delay-200 ${
                isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            >
              <p>
                Nakshatra&apos;s Royal Stay, a most luxurious stays hotel situated in Palghar with a growing legacy of
                three exciting hotels in palghar. So much of modern life is spent indoors. Let your hotel room be your
                private escape in Nakshatra Royal Stay with its array of services.
              </p>
              <p>
                Nakshatra&apos;s royal Stay has 49 oven built, designed and well appointed rooms that cater moving to
                the modern travelers in Palghar. Each room has been individually designed with a modern design and a
                rustic character. Room amenities are thoughtfully on elegant neo-classic designs with stylish furnishing
                and an exotic calm ambience.
              </p>
            </div>
          </div>

          <div
            className={`relative transition-all duration-700 delay-300 ${
              isInView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            }`}
          >
            <h2 className="font-serif text-4xl text-[#2C1810] mb-8 leading-tight text-balance">
              Redefining Stays with Warmth and Elegance
            </h2>
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
              <img src="/elegant-hotel-bedroom-interior.jpg" alt="Hotel Room Interior" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
