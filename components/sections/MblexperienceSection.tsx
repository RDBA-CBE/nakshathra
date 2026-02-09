"use client";

import ExperienceCard from "@/components/experience-card";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const experiences = [
  {
    title: "Attakatti View Point",
    description: "Excepteur sint occaecat",
    image: "/mountain-waterfall-scenic-view.jpg",
  },
  {
    title: "Sholayar Dam",
    description: "Sunt culpa aliquip officia",
    image: "/pier-ocean-peaceful-view.jpg",
  },
  {
    title: "Loam View Point",
    description: "Quis nostrud exercitation",
    image: "/coastal-landscape-scenic.jpg",
  },
];

export default function MblexperienceSection() {
  return (
    <section className="py-16 mbl-experience">
      <div className="container mx-auto px-6">
        <p className="text-[#C9A961] font-heading text-xl font-bold mb-4 tracking-widest uppercase pt-[120px]">
          Surrounded by Warmth
        </p>
        <h2 className="font-heading text-4xl lg:text-5xl text-[#2C1810] text-balance">
          Experience the Exceptional
        </h2>

        <Swiper
          modules={[Pagination]}
          spaceBetween={20}
          pagination={{ clickable: true }}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            640: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
        >
          {experiences.map((experience) => (
            <SwiperSlide key={experience.title}>
              <ExperienceCard {...experience} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
