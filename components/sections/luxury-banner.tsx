"use client"

import { useRef } from "react"
import { useInView } from "@/hooks/use-in-view"

export default function LuxuryBanner() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef)

  return (
    <section
      ref={sectionRef}
      className="py-20 px-6 overflow-hidden marquee-four"
    >
      <div className="w-full overflow-hidden whitespace-nowrap relative">
        <div
          className={`
            flex gap-20 font-serif text-6xl lg:text-8xl text-[#C9A961] leading-tight
            animate-marquee transition-all duration-1000 marquee-title
            ${isInView ? "opacity-100 scale-100" : "opacity-0 scale-95"}
          `}
        >
          <span>Redefining Luxury Through</span>
          <span>Redefining Luxury Through</span>
          <span>Redefining Luxury Through</span>
        </div>
      </div>
    </section>
  )
}
