import Image from "next/image"
import { Star } from "lucide-react"

interface TestimonialCardProps {
  name: string
  date: string
  rating: number
  review: string
  avatar?: string
  platform: string
  platformLogo?: string
}

export default function TestimonialCard({
  name,
  date,
  rating,
  review,
  avatar = "/placeholder-user.jpg",
  platform,
}: TestimonialCardProps) {
  return (
    <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
      <div className="flex items-start gap-4 mb-4">
        <div className="relative w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
          <Image src={avatar || "/placeholder.svg"} alt={name} fill className="object-cover" />
        </div>
        <div className="flex-1">
          <h4 className="font-semibold text-[#2C2416]">{name}</h4>
          <p className="text-sm text-gray-500">{date}</p>
        </div>
      </div>

      <div className="flex gap-1 mb-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} className={`h-4 w-4 ${i < rating ? "fill-[#D4AF37] text-[#D4AF37]" : "text-gray-300"}`} />
        ))}
      </div>

      <p className="text-gray-600 leading-relaxed mb-4">{review}</p>

      <div className="flex items-center gap-2 pt-4 border-t border-gray-100">
        <div className="w-6 h-6 bg-[#00D9A5] rounded flex items-center justify-center">
          <span className="text-white text-xs font-bold">✓</span>
        </div>
        <span className="text-sm text-gray-500">{platform}</span>
      </div>
    </div>
  )
}
