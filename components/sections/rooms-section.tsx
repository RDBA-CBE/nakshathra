"use client"

import { useRef } from "react"
import { useInView } from "@/hooks/use-in-view"
import RoomCard from "@/components/room-card"
import { link } from "fs"

const rooms = [
  {
    title: "Standard Single",
    price: "₹1499 + Taxes (₹1574)",
    // area: "300 Sq ft",
    // guests: "4 guest",
    image: "/home/rooms/standard-single.webp",
    link:"/rooms/standard-single-room"
  },
  {
    title: "Standard Double",
    price: "₹1999 + Taxes (₹2099)",
    // area: "200 Sq ft",
    // guests: "2 guest",
    image: "/home/rooms/standard-double-room.webp",
    link:"/rooms/standard-double-room"
  },
  {
    title: "Deluxe Room",
    price: "₹2499 + Taxes (₹2624)",
    // area: "250 Sq ft",
    // guests: "2 guest",
    image: "/home/rooms/deluxe-room.webp",
    link:"/rooms/deluxe-room"
  },
  {
    title: "Super Deluxe Room",
    price: "₹2999 + Taxes (₹3149)",
    // area: "250 Sq ft",
    // guests: "2 guest",
    image: "/home/rooms/super-deluxe-room.webp",
    link:"/rooms/super-deluxe-room"
  },
  {
    title: "Two King Bed",
    price: "₹3999 + Taxes (₹4199)",
    // area: "250 Sq ft",
    // guests: "2 guest",
    image: "/home/rooms/two-king-bed.webp",
    link:"/rooms/two-king-bed"
  },
]

export default function RoomsSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef)

  return (
    <section ref={sectionRef} className="py-20 px-6 bg-gradient-to-b from-[#f2f1ef] to-white">
      <div className=" mx-auto">
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <p className="subtitle">
            Thoughtful spaces for meaningful stays
          </p>
          
          <h2 className="heading leading-[1.15] mt-5">
            Ideal for Business Travellers, Pilgrims and Families Alike
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
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
