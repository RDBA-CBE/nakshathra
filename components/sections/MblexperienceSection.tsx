'use client';

import ExperienceCard from '@/components/experience-card';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

const experiences = [
  {
    title: 'Thiruthangal Nindra Narayana Perumal Temple',
    image: '/nearby/thiruthangal.webp',
    // rotation: 'rotate-6',
    link: '/thiruthangal-nindra-narayana-perumal-temple',
  },
  {
    title: 'Vembakottai Dam',
    image: '/nearby/vembakottai-dam.webp',
    // rotation: 'rotate-0',
    link: '/vembakottai-dam',
  },
  {
    title: 'Srivilliputhur Andal Temple',
    image: '/nearby/srivilliputhur.webp',
    // rotation: 'rotate-6',
    link: '/srivilliputhur-andal-temple',
  },
  {
    title: 'Shenbaga Thoppu Grizzled Squirrel Sanctuary',
    image: '/nearby/shenbaga-thoppu.webp',
    // rotation: 'rotate-0',
    link: '/shenbaga-thoppu-grizzled-squirrel-sanctuary',
  },
  {
    title: 'Ayyanar Falls',
    image: '/nearby/ayyanar-falls.webp',
    // rotation: 'rotate-6',
    link: '/ayyanar-falls',
  },
  {
    title: 'Kullur Sandhai Reservoir',
    image: '/nearby/kullur-sandhai.webp',
    // rotation: 'rotate-0',
    link: '/kullur-sandhai-reservoir',
  },
];

export default function MblexperienceSection() {
  return (
    <section className='pb-20 mbl-experience overflow-x-hidden'>
      <div className='container mx-auto px-4  pt-20 sm:px-6'>
        <p className='subtitle  text-center'>Smart choice for sightseeing </p>
        <h2 className='heading leading-[1.15] text-center text-balance'>
          Easy Connectivity to Popular <br /> Sights and Tranquil Retreats
        </h2>

        <div className='overflow-hidden'>
          <Swiper
            modules={[Pagination]}
            spaceBetween={24}
            pagination={{ clickable: true }}
            breakpoints={{
              0: {
                slidesPerView: 1,
                centeredSlides: false,
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
            className='!pb-12'
          >
            {experiences.map((experience) => (
              <SwiperSlide
                key={experience.title}
                className='flex justify-center'
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
