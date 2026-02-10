"use client"

import { useState, useEffect } from "react"
import { ArrowRight } from "lucide-react"

export default function CTASection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true)
      },
      { threshold: 0.2 }
    )

    const el = document.getElementById("cta-section")
    if (el) observer.observe(el)

    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="cta-section"
      className="relative pb-20 flex justify-center items-center"
    >
      <div className="container bg-[#f2f1ef] mx-auto px-4 py-16 ">
         <div
        className={`text-center space-y-10 transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        {/* TOP SMALL TEXT */}
        <span className="text-[#bd9454] font-heading text-[20px] tracking-wider uppercase font-bold leading-[1.2]">
          Best Rates. No hidden Costs
        </span>

        {/* MAIN HEADING EXACT AS IMAGE */}
        <h2 className="font-heading text-[50px] leading-[1.2] text-[#1F3A44]">
          Make your Reservation and Look Forward to a Peaceful, 
          <br />
          Well-connected and Memorable Stay
        </h2>

        {/* BUTTON EXACT STYLE */}
        <div className="pt-4">
          <button className="bg-[#7A2E2E] font-heading text-white px-10 py-4 text-base font-medium inline-flex items-center">
            Make Reservation
            <ArrowRight className="ml-2 h-4 w-4" />
          </button>
        </div>
      </div>
      </div>
     
    </section>
  )
}
