"use client"

import { useRef } from "react"
import { useInView } from "@/hooks/use-in-view"
import { Wifi, Dumbbell, DollarSign, CheckCircle } from "lucide-react"

const facilities = [
  { icon: Wifi, text: "Free Wi-Fi & Prime Location" },
  { icon: Dumbbell, text: "Building Gym & AC Figured" },
  { icon: DollarSign, text: "Affordable & transparent Pricing" },
  { icon: CheckCircle, text: "Satisfactory Guarantee" },
]

export default function FacilitiesSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef)

  return (
    <section ref={sectionRef} className="py-20 px-6 bg-white">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div
            className={`grid grid-cols-2 gap-4 transition-all duration-700 ${
              isInView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            }`}
          >
            <div className="h-[300px] rounded-lg overflow-hidden shadow-lg">
              <img src="/hotel-bedroom-interior.jpg" alt="Hotel Room" className="w-full h-full object-cover" />
            </div>
            <div className="space-y-4">
              <div className="h-[145px] rounded-lg overflow-hidden shadow-lg">
                <img src="/hotel-bathroom-modern.jpg" alt="Hotel Bathroom" className="w-full h-full object-cover" />
              </div>
              <div className="h-[145px] rounded-lg overflow-hidden shadow-lg">
                <img src="/hotel-furniture-elegant.jpg" alt="Hotel Furniture" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>

          <div
            className={`transition-all duration-700 delay-200 ${
              isInView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            }`}
          >
            <p className="text-[#8B4513] text-sm font-medium mb-4 tracking-wide">OUR FACILITIES</p>
            <h2 className="font-serif text-4xl text-[#2C1810] mb-6 leading-tight text-balance">
              Facilities That Reflect Our Dedication to Excellence
            </h2>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Welcome to Nakola Medicals: your gateway to vibrant healing rooms from luxury building dynamic, and public
              programs in Daunt Bay.
            </p>

            <div className="space-y-4">
              {facilities.map((facility, index) => (
                <div
                  key={index}
                  className={`flex items-center gap-3 transition-all duration-500 ${
                    isInView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
                  }`}
                  style={{ transitionDelay: `${(index + 3) * 100}ms` }}
                >
                  <div className="w-2 h-2 bg-[#8B4513] rounded-full" />
                  <span className="text-gray-700">{facility.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
