"use client"

import { useRef } from "react"
import { useInView } from "@/hooks/use-in-view"
import ExperienceCard from "@/components/experience-card"

const experiences = [
  {
    title: "Attakatti View Point",
    description: "Excepteur sint occaecat",
    image: "/mountain-waterfall-scenic-view.jpg",
    rotation: "-rotate-6",
  },
  {
    title: "Sholayar Dam",
    description: "Sunt culpa aliquip officia",
    image: "/pier-ocean-peaceful-view.jpg",
    rotation: "rotate-2",
  },
  {
    title: "Loam View Point",
    description: "Quis nostrud exercitation",
    image: "/coastal-landscape-scenic.jpg",
    rotation: "rotate-6",
  },
]

export default function ExperienceSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef)

  return (
    <section ref={sectionRef} className="py-16 px-0 bg-white relative overflow-hidden">
      <div className="relative" style={{ height: "1200px" }}>
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1600 1200" preserveAspectRatio="none" fill="none">
          <path
            d="M 0,1200 A 800,800 0 0,1 1600,1200 L 1600,1200 L 0,1200 Z"
            fill="#F5F0E8"
            stroke="#8B4513"
            strokeWidth="6"
          />
        </svg>

        <div className="absolute inset-0 flex flex-col items-center justify-center px-6 pt-96 pb-20">
          <div className="container mx-auto">
            <div
              className={`text-center mb-24 transition-all duration-700 ${
                isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            >
              <p className="text-[#C9A961] font-heading text-xl font-bold mb-4 tracking-widest uppercase">Surrounded by Warmth</p>
              <h2 className="font-heading text-4xl lg:text-5xl text-[#2C1810] text-balance">
                Experience the Exceptional
              </h2>
            </div>

            <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-16 max-w-6xl mx-auto">
              {experiences.map((experience, index) => (
                <div
                  key={experience.title}
                  className={`transition-all duration-700 ${
                    isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
                  }`}
                  style={{ transitionDelay: `${index * 200}ms` }}
                >
                  <ExperienceCard {...experience} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
