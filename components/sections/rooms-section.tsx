"use client"

import { useRef } from "react"
import { useInView } from "@/hooks/use-in-view"
import RoomCard from "@/components/room-card"

const rooms = [
  {
    title: "Family Room",
    price: "900 Sqft+",
    guests: "4 guest",
    image: "/family-hotel-room-orange-decor.jpg",
  },
  {
    title: "Suite Room",
    price: "900 Sqft+",
    guests: "4 guest",
    image: "/luxury-suite-hotel-room.jpg",
  },
  {
    title: "Premium Room",
    price: "900 Sqft+",
    guests: "4 guest",
    image: "/premium-hotel-room-warm-lighting.jpg",
  },
]

export default function RoomsSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef)

  return (
    <section ref={sectionRef} className="py-20 px-6 bg-[#FAF8F3]">
      <div className="container mx-auto">
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <p className="text-[#8B4513] text-sm font-medium mb-4 tracking-wide">FEEL REAL RESIDENCE</p>
          <h2 className="font-serif text-4xl lg:text-5xl text-[#2C1810] text-balance">
            Every Room Tells a Story of Comfort
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {rooms.map((room, index) => (
            <div
              key={room.title}
              className={`transition-all duration-700 ${
                isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <RoomCard {...room} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
