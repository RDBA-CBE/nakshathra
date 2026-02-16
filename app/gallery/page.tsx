"use client";

import Header from "@/components/header";
import Footer from "@/components/sections/footer";
import { useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

/* TYPES */
type GalleryImage = {
  src: string;
  label: string;
};

/* IMAGES */
const images: GalleryImage[] = [
  { src: "/gallery/L-img1.webp", label: "Architectural Detail" },
  { src: "/gallery/L-img2.webp", label: "Conference Room" },
  { src: "/gallery/L-img3.webp", label: "Elegant Hallway" },
  { src: "/gallery/L-img4.webp", label: "Grand Staircase" },
  { src: "/gallery/S-img1.webp", label: "Hotel Exterior" },
  { src: "/gallery/S-img2.webp", label: "Lobby Lounge" },
  { src: "/gallery/S-img3.webp", label: "Reception Area" },
  { src: "/gallery/S-img4.webp", label: "Restaurant" },
];

export default function GallerySection() {
  return (
    <main className="min-h-screen bg-white">
      <Header />

      {/* HERO */}
      <section className="relative w-full overflow-hidden">
        <div className="relative flex flex-col lg:flex-row w-full">

          {/* LEFT */}
          <div className="w-full lg:w-1/2 bg-gradient-to-br from-[#F8F4E9] to-[#F1ECE0] flex items-center">
            <div className="w-full px-6 sm:px-10 lg:px-16 xl:px-20 py-16 lg:py-20">

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="heading leading-[1.15]"
              >
                Gallery
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="para mt-4"
              >
                Explore interiors that are designed to be both stylish and
                comfortable, creating a relaxing and welcoming atmosphere.
              </motion.p>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative w-full lg:w-1/2 h-[280px] sm:h-[400px] lg:h-auto min-h-[420px]">
            <Image
              src="/gallery/gallery-banner.webp"
              alt="Hotel Nakshatra Elegant Interior"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* GALLERY SLIDER */}
      <section className="py-20 px-4 bg-white">
        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          loop
          speed={800}
          spaceBetween={16}
          pagination={{ clickable: true }}
          breakpoints={{
            0: { slidesPerView: 1 },
            640: { slidesPerView: 2 },   // TABLET = 2
            1024: { slidesPerView: 4 },  // DESKTOP = 4
          }}
          className="px-2 gallery-swiper sm:px-4"
        >
          {images.map((img, i) => (
            <SwiperSlide key={i}>
              <div
                className={`rounded-2xl overflow-hidden shadow-lg ${
                  i % 2 === 0
                    ? "h-[260px] sm:h-[320px] lg:h-[520px]"
                    : "h-[260px] sm:h-[300px] lg:h-[380px] lg:mt-16"
                }`}
              >
                <img
                  src={img.src}
                  alt={img.label}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      <Footer />
    </main>
  );
}
