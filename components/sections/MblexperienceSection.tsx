'use client';

import ExperienceCard from '@/components/experience-card';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

const experiences = [
  {
    title: 'Attakatti View Point',
    description: 'Excepteur sint occaecat',
    image: '/home/near-places/attakatti-viewpoint.webp',
    // rotation: "-rotate-6",
    link: '/pooja-time',
  },
  {
    title: 'Sholayar Dam',
    description: 'Sunt culpa aliquip officia',
    image: '/home/near-places/sholayar-dam.webp',
    // rotation: "rotate-2",
    link: '/pooja-time',
  },
  {
    title: 'Loam View Point',
    description: 'Quis nostrud exercitation',
    image: '/home/near-places/loam-viewpoint.webp',
    // rotation: "rotate-6",
    link: '/pooja-time',
  },
];

export default function MblexperienceSection() {
  return (
    <section className='py-16 mbl-experience overflow-x-hidden'>
      <div className='container mx-auto px-4 sm:px-6'>
        <p className='subtitle pt-[120px]'>Smart choice for sightseeing </p>
        <h2 className='heading leading-[1.15] text-balance'>
          Easy Connectivity to Popular <br /> Sights and Tranquil Retreats
        </h2>

        <div className='overflow-hidden'>
          <Swiper
            modules={[Pagination]}
            spaceBetween={24}
            centeredSlides={true}
            pagination={{ clickable: true }}
            breakpoints={{
              0: {
                slidesPerView: 'auto',
                centeredSlides: true,
              },
              640: {
                slidesPerView: 2,
                centeredSlides: false,
              },
              1024: {
                slidesPerView: 3,
                centeredSlides: false,
              },
            }}
            className='!pb-12 mbl-experience-swiper'
          >
            {experiences.map((experience) => (
              <SwiperSlide
                key={experience.title}
                className='flex justify-center w-[280px] sm:w-auto'
              >
                <ExperienceCard {...experience} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
