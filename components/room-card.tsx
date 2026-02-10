"use client"

import { Users, Maximize } from "lucide-react"

interface RoomCardProps {
  title: string
  price: string
  // area: string
  // guests: string
  image: string
}

export default function RoomCard({ title, price, image }: RoomCardProps) {
  return (
    <div className="group cursor-pointer bg-white overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
      <div className="relative h-[350px] overflow-hidden">
        <img
          src={image || "/placeholder.svg"}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        {/* Price Tag Overlay */}
        <div className="absolute bottom-4 right-4 bg-white/95 backdrop-blur-sm rounded px-4 py-2 shadow-lg">
          <span className="text-base font-semibold text-[#1F3A44]">{price}</span>
        </div>
      </div>
      <div className="p-5">
        <h3 
          className="text-xl sm:text-2xl mb-4"
          style={{ 
            fontFamily: '"Marcellus", serif',
            color: '#2C1810',
            fontWeight: 400
          }}
        >
          {title}
        </h3>
        <div className="flex items-center gap-6 text-sm" style={{ color: '#5E6E73' }}>
          {/* <div className="flex items-center gap-2">
            <Maximize className="w-4 h-4" />
            <span style={{ fontFamily: 'sans-serif' }}>{area}</span>
          </div> */}
          {/* <div className="flex items-center gap-2">
            <Users className="w-4 h-4" />
            <span style={{ fontFamily: 'sans-serif' }}>{guests}</span>
          </div> */}
        </div>
      </div>
    </div>
  )
}
