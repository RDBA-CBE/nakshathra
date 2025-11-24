"use client"

import { useRef } from "react"
import { useInView } from "@/hooks/use-in-view"

export default function LuxuryBanner() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef)

  return (
    <section ref={sectionRef} className="py-20 px-6 bg-gradient-to-r from-[#FAF8F3] to-[#FFF9F0] overflow-hidden">
      <div className="container mx-auto">
        <h2
          className={`font-serif text-6xl lg:text-8xl text-[#C9A961] text-center leading-tight transition-all duration-1000 ${
            isInView ? "opacity-100 scale-100" : "opacity-0 scale-95"
          }`}
        >
          Redefining Luxury Through
        </h2>
      </div>
    </section>
  )
}
