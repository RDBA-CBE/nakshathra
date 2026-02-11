"use client";

import Header from "@/components/header";
import Footer from "@/components/sections/footer";
import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

/* ✅ TYPE FIRST */
type GalleryImage = {
  src: string;
  label: string;
};

/* ✅ IMAGES */
const images: GalleryImage[] = [
  { src: "/gallery/architectural-detail.webp", label: "Architectural Detail" },
  { src: "/gallery/conference-room.webp", label: "Conference Room" },
  { src: "/gallery/elegant-hallway.webp", label: "Elegant Hallway" },
  { src: "/gallery/grand-staircase.webp", label: "Grand Staircase" },
  { src: "/gallery/hotel-exterior.webp", label: "Hotel Exterior" },
  { src: "/gallery/lobby-lounge.webp", label: "Lobby Lounge" },
  { src: "/gallery/reception-area.webp", label: "Reception Area" },
  { src: "/gallery/restaurant.webp", label: "Restaurant" },
];

/* ✅ GROUPED IMAGES (TYPED) */
const imageGroups: GalleryImage[][] = [];

for (let i = 0; i < images.length; i += 4) {
  imageGroups.push(images.slice(i, i + 4));
}

export default function GallerySection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // 🔹 autoplay
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) =>
        prev === imageGroups.length - 1 ? 0 : prev + 1,
      );
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  return (
    <main className="min-h-screen bg-white">
      <Header />
      <section className="relative w-full overflow-hidden">
        <div className="relative flex flex-col lg:flex-row  w-full">
          {/* LEFT CONTENT - Light Background */}
          <div className="relative z-10 w-full lg:w-1/2 bg-gradient-to-br from-[#F8F4E9] to-[#F1ECE0] flex items-center">
            <div className="w-full px-6 sm:px-10 lg:px-16 xl:px-20 py-16 lg:py-20">
              <div>
                {/* Eyebrow / Subtitle */}

                {/* Main Heading */}
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="heading leading-[1.15]"
                >
                  Gallery
                </motion.h1>

                {/* Description */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="space-y-6 "
                >
                  <p className="text-lg text-[#5A5A5A] leading-relaxed">
                    Explore interiors that are designed to be both stylish and
                    comfortable, creating a relaxing and welcoming atmosphere.
                    From elegant decor to cozy furnishings, every detail is
                    crafted to make your stay enjoyable and memorable.
                  </p>
                </motion.div>

                {/* Decorative Line */}

                {/* Features */}
              </div>
            </div>
          </div>

          {/* DIAGONAL SEPARATOR */}
          <div className="hidden lg:block absolute left-1/2 top-0 h-full -translate-x-1/2 z-20 pointer-events-none">
            <div className="relative h-full w-px">
              <div className="absolute inset-y-0 left-1/2 transform -translate-x-1/2 w-[2px]">
                <div className="h-full bg-gradient-to-b from-[#8B4513]/20 via-[#8B4513]/40 to-[#8B4513]/20"></div>
              </div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-[#FBF6E6] border-2 border-[#8B4513]/30 rounded-full"></div>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="w-full lg:w-1/2 relative">
            <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent z-10"></div>
            <Image
              src="/facilities/intro.webp"
              alt="Hotel Nakshathra Elegant Interior"
              fill
              className="object-cover object-center"
              priority
            />

            {/* Image Overlay Content */}
          </div>
        </div>
      </section>
      <section className="py-20 px-4 bg-white">
        {/* GALLERY CAROUSEL */}
        <div className="w-full relative overflow-hidden ">
          {/* TRACK */}
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {imageGroups.map((group, index) => (
              <div
                key={index}
                className="
                  min-w-full
                  px-4 sm:px-6
                  grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4
                  gap-4 md:gap-6
                "
              >
                {/* BIG */}
                <div className="h-[260px] sm:h-[320px] lg:h-[520px] rounded-2xl overflow-hidden shadow-lg">
                  <img
                    src={group[0]?.src}
                    alt={group[0]?.label}
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>

                {/* SMALL */}
                <div className="h-[260px] sm:h-[300px] lg:h-[380px] rounded-2xl overflow-hidden shadow-lg lg:self-center">
                  <img
                    src={group[1]?.src}
                    alt={group[1]?.label}
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>

                {/* BIG */}
                <div className="h-[260px] sm:h-[320px] lg:h-[520px] rounded-2xl overflow-hidden shadow-lg">
                  <img
                    src={group[2]?.src}
                    alt={group[2]?.label}
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>

                {/* SMALL */}
                <div className="h-[260px] sm:h-[300px] lg:h-[380px] rounded-2xl overflow-hidden shadow-lg lg:self-center">
                  <img
                    src={group[3]?.src}
                    alt={group[3]?.label}
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>
              </div>
            ))}
          </div>

          {/* DOTS */}
          <div className="flex justify-center gap-3 mt-10">
            {imageGroups.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentSlide(i)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === currentSlide
                    ? "w-10 bg-[#8B4513]"
                    : "w-2 bg-[#8B4513]/40"
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
