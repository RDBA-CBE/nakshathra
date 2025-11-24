"use client"

import { useState, useEffect } from "react"
import TestimonialCard from "@/components/testimonial-card"

const testimonials = [
  {
    name: "Sarah Johnson",
    date: "March 15, 2024",
    rating: 5,
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed hendrerit ipsum et laoreet convallis. Sed aliquet tortor quis sapien maximus, id aliquet ex dictum. Integer eget sollicitudin turpis. Suspendisse lacus eros, viverra non tempor nec.",
    avatar: "/placeholder-user.jpg",
    platform: "TrustIndex",
  },
  {
    name: "Michael Chen",
    date: "March 10, 2024",
    rating: 5,
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed hendrerit ipsum et laoreet convallis. Sed aliquet tortor quis sapien maximus, id aliquet ex dictum. Integer eget sollicitudin turpis. Suspendisse lacus eros, viverra non tempor nec.",
    avatar: "/placeholder-user.jpg",
    platform: "TrustIndex",
  },
]

export default function TestimonialsSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    const element = document.getElementById("testimonials-section")
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  return (
    <section id="testimonials-section" className="py-20 bg-[#FAF8F3] overflow-hidden">
      <div className="container mx-auto px-4">
        <div
          className={`text-center mb-12 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <span className="text-sm font-medium text-[#8B4513] uppercase tracking-wider mb-3 block">Testimonials</span>
          <h2 className="font-serif text-4xl lg:text-5xl text-[#2C2416] mb-4">
            Our Guests Consistently Praise The
            <br />
            Service And Warm Hospitality
          </h2>
        </div>

        <div
          className={`grid md:grid-cols-2 gap-8 transition-all duration-1000 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="transition-all duration-1000"
              style={{ transitionDelay: `${index * 100 + 400}ms` }}
            >
              <TestimonialCard {...testimonial} />
            </div>
          ))}
        </div>

        {/* Pagination dots */}
        <div className="flex justify-center gap-2 mt-8">
          <button className="w-2 h-2 rounded-full bg-[#8B4513]" />
          <button className="w-2 h-2 rounded-full bg-gray-300" />
          <button className="w-2 h-2 rounded-full bg-gray-300" />
        </div>
      </div>
    </section>
  )
}
