"use client";

import Header from "@/components/header";
import Footer from "@/components/sections/footer";
import { motion } from "framer-motion";

const images = [
  { src: "/hotel-staircase-orange-interior.jpg", label: "Grand Staircase" },
  { src: "/hotel-ceiling-geometric-design.jpg", label: "Architectural Detail" },
  { src: "/hotel-reception-modern.jpg", label: "Reception Area" },
  { src: "/hotel-hallway-elegant.jpg", label: "Elegant Hallway" },
  { src: "/hotel-lobby-seating.jpg", label: "Lobby Lounge" },
  { src: "/hotel-conference-room.jpg", label: "Conference Room" },
  { src: "/hotel-restaurant-interior.jpg", label: "Restaurant" },
  { src: "/hotel-exterior-night.jpg", label: "Hotel Exterior" },
];

export default function GallerySection() {
  return (
    <main className="min-h-screen">
      <Header />

      <section className=" pb-24 px-4 bg-[#FFFFFF]">
        <div className="relative rounded-3xl bg-[#F3EEE6] px-6 sm:px-10 py-6 sm:py-6 text-center">
          <h1 className="mt-4 font-heading text-3xl sm:text-4xl md:text-5xl text-[#152A38] max-w-3xl mx-auto leading-tight">
            Gallery
          </h1>

          <p className="mt-6 text-gray-600 max-w-5xl mx-auto text-sm sm:text-base">
            Explore interiors that are designed to be both stylish and
            comfortable, creating a relaxing and welcoming atmosphere. From
            elegant decor to cozy furnishings, every detail is crafted to make
            your stay enjoyable and memorable.
          </p>

          <div className="mt-8 flex justify-center">
            <span className="h-[1px] w-24 bg-[#8B4513]/40"></span>
          </div>
        </div>
        <div className="max-w-6xl mt-16 mx-auto">
          {/* Masonry Grid */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: 0.12 } },
            }}
            className="columns-1 sm:columns-2 lg:columns-3 gap-6"
          >
            {images.map((img, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 40 },
                  show: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="mb-6 break-inside-avoid relative overflow-hidden rounded-2xl group shadow-lg"
              >
                <img
                  src={img.src}
                  alt={img.label}
                  className="w-full object-cover transition-transform duration-700 lg:group-hover:scale-110"
                />

                {/* Gradient caption */}
                <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute bottom-4 left-4">
                    <p className="text-white text-lg font-heading font-medium">
                      {img.label}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
