"use client"

import { useRef, useState, useEffect } from "react"
import { useInView } from "@/hooks/use-in-view"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

const galleryImages = [
  "/hotel-staircase-orange-interior.jpg",
  "/hotel-ceiling-geometric-design.jpg",
  "/hotel-reception-modern.jpg",
  "/hotel-hallway-elegant.jpg",
  "/hotel-lobby-seating.jpg",
  "/hotel-conference-room.jpg",
  "/hotel-restaurant-interior.jpg",
  "/hotel-exterior-night.jpg",
]

const imageGroups = []
for (let i = 0; i < galleryImages.length; i += 4) {
  imageGroups.push(galleryImages.slice(i, i + 4))
}

export default function GallerySection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef)
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % imageGroups.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section ref={sectionRef} className="py-20 px-6 bg-white">
      <div className="container mx-auto max-w-7xl">
        <div
          className={`flex flex-col md:flex-row justify-between items-start md:items-center mb-16 gap-6 transition-all duration-700 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div>
            <p className="text-[#C9A962] text-sm font-medium mb-4 tracking-widest uppercase">OUR GALLERY</p>
            <h2 className="font-serif text-4xl lg:text-5xl text-[#2C1810] leading-tight">
              Take a visual journey through
              <br />
              comfort and luxury
            </h2>
          </div>
          <Button className="bg-[#8B4513] hover:bg-[#6B3410] text-white px-8 py-6 rounded-md group">
            View All
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>

        <div className="relative overflow-hidden">
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {imageGroups.map((group, groupIndex) => (
              <div key={groupIndex} className="min-w-full grid grid-cols-12 gap-4 md:gap-6">
                {/* Left large image */}
                <div
                  className={`col-span-12 md:col-span-5 h-[300px] md:h-[500px] rounded-2xl overflow-hidden shadow-xl group transition-all duration-700 ${
                    isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                  }`}
                  style={{ transitionDelay: "100ms" }}
                >
                  <img
                    src={group[0] || "/placeholder.svg?height=500&width=400"}
                    alt="Hotel interior"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>

                {/* Middle column with two stacked images */}
                <div className="col-span-12 md:col-span-3 flex flex-col gap-4 md:gap-6">
                  <div
                    className={`h-[200px] md:h-[240px] rounded-2xl overflow-hidden shadow-xl group transition-all duration-700 ${
                      isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                    }`}
                    style={{ transitionDelay: "200ms" }}
                  >
                    <img
                      src={group[1] || "/placeholder.svg?height=240&width=300"}
                      alt="Hotel exterior"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  <div
                    className={`h-[200px] md:h-[240px] rounded-2xl overflow-hidden shadow-xl group transition-all duration-700 ${
                      isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                    }`}
                    style={{ transitionDelay: "300ms" }}
                  >
                    <img
                      src={group[2] || "/placeholder.svg?height=240&width=300"}
                      alt="Hotel amenity"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                </div>

                {/* Right large image */}
                <div
                  className={`col-span-12 md:col-span-4 h-[300px] md:h-[500px] rounded-2xl overflow-hidden shadow-xl group transition-all duration-700 ${
                    isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                  }`}
                  style={{ transitionDelay: "400ms" }}
                >
                  <img
                    src={group[3] || "/placeholder.svg?height=500&width=350"}
                    alt="Hotel room"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Carousel Indicators */}
          <div className="flex justify-center gap-2 mt-10">
            {imageGroups.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentSlide ? "bg-[#8B4513] w-8" : "bg-[#D4B896] w-2 hover:bg-[#8B4513]/60"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
