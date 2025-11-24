"use client"

import { Users, Maximize } from "lucide-react"
import { Button } from "@/components/ui/button"

interface RoomCardProps {
  title: string
  price: string
  guests: string
  image: string
}

export default function RoomCard({ title, price, guests, image }: RoomCardProps) {
  return (
    <div className="group cursor-pointer">
      <div className="relative h-[350px] rounded-lg overflow-hidden mb-4 shadow-lg">
        <img
          src={image || "/placeholder.svg"}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute bottom-4 right-4">
          <Button className="bg-white text-[#8B4513] hover:bg-[#8B4513] hover:text-white rounded-full px-6 transition-all duration-300">
            BOOK
          </Button>
        </div>
      </div>
      <h3 className="font-serif text-2xl text-[#2C1810] mb-3">{title}</h3>
      <div className="flex items-center gap-4 text-sm text-gray-600">
        <div className="flex items-center gap-1">
          <Maximize className="w-4 h-4" />
          <span>{price}</span>
        </div>
        <div className="flex items-center gap-1">
          <Users className="w-4 h-4" />
          <span>{guests}</span>
        </div>
      </div>
    </div>
  )
}
