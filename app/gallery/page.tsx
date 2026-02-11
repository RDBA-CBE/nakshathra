"use client";

import Header from "@/components/header";
import Footer from "@/components/sections/footer";
import { useState, useEffect } from "react";

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
        prev === imageGroups.length - 1 ? 0 : prev + 1
      );
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  return (
    <main className="min-h-screen">
      <Header />

      <section className="pb-24 px-4 bg-white">
        {/* HERO */}
        <div className="relative rounded-3xl bg-[#F3EEE6] px-6 sm:px-10 py-6 text-center">
          <h1 className="mt-4 heading leading-[1.15]">
            Gallery
          </h1>

          <p className="mt-6 text-gray-600 max-w-5xl mx-auto text-sm sm:text-base">
            Explore interiors designed to be both stylish and comfortable,
            creating a welcoming and memorable atmosphere.
          </p>

          <div className="mt-8 flex justify-center">
            <span className="h-px w-24 bg-[#8B4513]/40" />
          </div>
        </div>

        {/* GALLERY CAROUSEL */}
        <div className="w-full relative overflow-hidden mt-16">
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
