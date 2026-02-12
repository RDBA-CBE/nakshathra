"use client"

import Link from "next/link"
import { Users, Maximize } from "lucide-react"

interface RoomCardProps {
  title: string
  price: string
  image: string
  link: string   // 👈 add this
}

export default function RoomCard({ title, price, image, link }: RoomCardProps) {
  return (
    <div className="group bg-white overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
      
      {/* Image with Link */}
      <Link href={link} className="block relative h-[350px] overflow-hidden">
        <img
          src={image || "/placeholder.svg"}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        {/* Price Tag Overlay */}
        <div className="absolute bottom-4 right-4 bg-white/95 backdrop-blur-sm rounded px-4 py-2 shadow-lg">
          <span className="text-base font-semibold text-[#1F3A44]">
            {price}
          </span>
        </div>
      </Link>

      <div className="p-5">
        {/* Title with Link */}
        <Link href={link}>
          <h3 className="heading leading-[1.15] hover:text-[#8F2D2D] transition-colors">
            {title}
          </h3>
        </Link>

        <div className="flex items-center gap-6 text-sm" style={{ color: '#5E6E73' }}>
          {/* Optional content */}
        </div>
      </div>
    </div>
  )
}
