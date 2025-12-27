"use client"

import { useRef } from "react"
import { useInView } from "@/hooks/use-in-view"
import RoomCard from "@/components/room-card"

const rooms = [
  {
    title: "Family Room",
    price: "₹6160",
    area: "300 Sq ft",
    guests: "4 guest",
    image: "/family-hotel-room-orange-decor.jpg",
  },
  {
    title: "Suite Room",
    price: "₹6000",
    area: "200 Sq ft",
    guests: "2 guest",
    image: "/luxury-suite-hotel-room.jpg",
  },
  {
    title: "Premium Room",
    price: "₹4000",
    area: "250 Sq ft",
    guests: "2 guest",
    image: "/premium-hotel-room-warm-lighting.jpg",
  },
]

export default function RoomsSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef)

  return (
    <section ref={sectionRef} className="py-20 px-6 bg-white">
      <div className="container mx-auto">
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <p 
            className="text-sm sm:text-base tracking-widest mb-4"
            style={{ 
              fontFamily: 'sans-serif',
              color: '#C89A32',
              letterSpacing: '0.15em'
            }}
          >
            REST, RELAX, RECHARGE
          </p>
          <h2 
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight"
            style={{ 
              fontFamily: '"Marcellus", serif',
              color: '#2C1810',
              fontWeight: 400
            }}
          >
            Every Room Tells a Story of<br />Comfort
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
