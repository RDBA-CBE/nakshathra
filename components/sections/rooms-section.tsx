"use client"

import { useRef } from "react"
import { useInView } from "@/hooks/use-in-view"
import RoomCard from "@/components/room-card"

const rooms = [
  {
    title: "Standard Single",
    price: "₹1499 + 5% tax (₹1574)",
    // area: "300 Sq ft",
    // guests: "4 guest",
    image: "/home/rooms/premium-room.webp",
  },
  {
    title: "Standard Double",
    price: "₹1999 + 5% tax (₹2099)",
    // area: "200 Sq ft",
    // guests: "2 guest",
    image: "/home/rooms/family-room,.webp",
  },
  {
    title: "Deluxe Room",
    price: "₹2399 + 5% tax (₹2519)",
    // area: "250 Sq ft",
    // guests: "2 guest",
    image: "/home/rooms/premium-room.webp",
  },
  {
    title: "Super Deluxe Room",
    price: "₹3999 + 5% tax (₹4199)",
    // area: "250 Sq ft",
    // guests: "2 guest",
    image: "/home/rooms/suite-room.webp",
  },
]

export default function RoomsSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef)

  return (
    <section ref={sectionRef} className="py-16 px-6 bg-white">
      <div className="container mx-auto">
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <p className="text-xl font-heading font-bold text-[#b3862f] uppercase tracking-widest">
            Thoughtful spaces for meaningful stays
          </p>
          
            
          
          <h2 
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight text-[#1F3A44]"
            style={{ 
              fontFamily: '"Marcellus", serif',
              
              fontWeight: 400
            }}
          >
            Ideal for business travellers,<br /> pilgrims and families alike
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
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
