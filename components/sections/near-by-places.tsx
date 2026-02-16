'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';

import { Navigation, Autoplay } from 'swiper/modules';
import ExperienceCard from '@/components/experience-card';

const experiences = [
  {
    title: 'Thiruthangal Nindra Narayana Perumal Temple',
    image: '/nearby/thiruthangal.webp',
    rotation: 'rotate-0',
    link: '/thiruthangal-nindra-narayana-perumal-temple',
  },
  {
    title: 'Vembakottai Dam',
    image: '/nearby/vembakottai-dam.webp',
    rotation: 'rotate-0',
    link: '/vembakottai-dam',
  },
  {
    title: 'Srivilliputhur Andal Temple',
    image: '/nearby/srivilliputhur.webp',
    rotation: 'rotate-0',
    link: '/srivilliputhur-andal-temple',
  },
  {
    title: 'Shenbaga Thoppu Grizzled Squirrel Sanctuary',
    image: '/nearby/shenbaga-thoppu.webp',
    rotation: 'rotate-0',
    link: '/shenbaga-thoppu-grizzled-squirrel-sanctuary',
  },
  {
    title: 'Ayyanar Falls',
    image: '/nearby/ayyanar-falls.webp',
    rotation: 'rotate-0',
    link: '/ayyanar-falls',
  },
  {
    title: 'Kullur Sandhai Reservoir',
    image: '/nearby/kullur-sandhai.webp',
    rotation: 'rotate-0',
    link: '/kullur-sandhai-reservoir',
  },
];

export default function ExploreNearByPlaces() {
  return (
    <section className='py-14 sm:py-16 lg:py-20 bg-white overflow-hidden'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='bg-[#f5f0e8] rounded-3xl px-4 sm:px-8 lg:px-14 py-10 sm:py-12 lg:py-16'>
          
          {/* Heading */}
          <div className='text-center max-w-3xl mx-auto mb-10 sm:mb-12 lg:mb-16'>
            <p className='subtitle mb-4 tracking-[0.2em] text-xs sm:text-sm uppercase'>
              Smart Choice for Sightseeing
            </p>

            <h2 className='heading leading-tight text-2xl sm:text-3xl lg:text-4xl'>
              Easy Connectivity to Popular
              <br className='hidden sm:block' />
              Sights and Tranquil Retreats
            </h2>
          </div>

          {/* Carousel */}
          <Swiper
            modules={[Navigation, Autoplay]}
            navigation
            loop
            speed={800}
            grabCursor
            autoplay={{ delay: 3500, disableOnInteraction: false }}
            spaceBetween={16}
            centeredSlides={true}
            breakpoints={{
              0: {
                slidesPerView: 1,
                spaceBetween: 12,
              },
              640: {
                slidesPerView: 2,
                spaceBetween: 14,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 16,
              },
              1280: {
                slidesPerView: 3,
                spaceBetween: 18,
              },
            }}
            className='nearby-swiper !pb-8'
          >
            {experiences.map((experience) => (
              <SwiperSlide key={experience.title} className='h-auto'>
                <ExperienceCard
                  title={experience.title}
                  image={experience.image}
                  rotation={experience.rotation}
                  link={experience.link}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
