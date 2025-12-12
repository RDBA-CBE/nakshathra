"use client";

import { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const slides = [
  {
    id: 1,
    subtitle: "FIND UNIQUE HOMES IN VIBRANT PLACES.",
    title: "Experience Comfort Of The City's Stays",
    description:
      "At SparkleClean, we believe a clean space is a happy space. With years of experience in residential and commercial cleaning our mission is to deliver top-quality ..",
    image: "/luxury-hotel-bedroom-with-white-pillows-and-warm-l.jpg",
  },
];

export default function HeroSection() {
  const slide = slides[0];

  return (
    <section className="relative w-full bg-[#FBF3E8] pt-20 overflow-hidden">
      <div className="w-full flex flex-col lg:flex-row items-stretch relative">

        {/* VECTOR SHAPE (curved background shape) */}
        <div className="hidden lg:block absolute right-[38%] top-0 h-full w-[420px] pointer-events-none">
          <img
            src="/vector-icon.png"
            alt="vector shape"
            className="w-full h-full object-cover opacity-70 pointer-events-none"
          />
        </div>

        {/* LEFT TEXT BLOCK */}
        <div className="w-full lg:w-1/2 px-6 md:px-12 lg:pl-20 relative z-10 flex items-center">
          <div className="max-w-[720px] py-12 lg:py-28">
            <p className="uppercase tracking-widest text-sm text-[#B88A33] mb-4">
              {slide.subtitle}
            </p>

            <h1 className="font-serif text-[#12303a] text-4xl sm:text-5xl md:text-6xl lg:text-[84px] leading-[0.95] mb-6">
              Experience Comfort
              <br />
              Of The City's Stays
            </h1>

            <p className="text-[#12303a] text-base md:text-lg max-w-[640px] leading-relaxed mb-8">
              {slide.description}
            </p>

            <button className="bg-[#7A2E2E] text-white px-10 py-3 rounded-lg text-base inline-flex items-center">
              Know More <ArrowRight className="ml-2 h-4 w-4" />
            </button>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="w-full lg:w-1/2 overflow-hidden relative z-20">
          <div className="h-[320px] md:h-[420px] lg:h-[760px] w-full">
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover object-right"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
