'use client';

import { useRef } from 'react';
import { useInView } from '@/hooks/use-in-view';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

const galleryImages = [
  '/home/gallery/L-img1.webp',
  '/home/gallery/L-img2.webp',
  '/home/gallery/L-img3.webp',
  '/home/gallery/L-img4.webp',
  '/home/gallery/S-img1.webp',
  '/home/gallery/S-img2.webp',
  '/home/gallery/S-img3.webp',
  '/home/gallery/S-img4.webp',
];

export default function GallerySection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef);

  return (
    <section ref={sectionRef} className='bg-white overflow-hidden pb-20'>
      <div className='container mx-auto max-w-7xl px-4 sm:px-6'>

        {/* HEADER */}
        <div
          className={`flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6 transition-all duration-700 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div>
            <p className='subtitle mb-4'>OUR GALLERY</p>

            <h2 className='heading leading-[1.15]'>
              Sophisticated Interiors Thoughtfully
              <br className='hidden sm:block' />
              Balanced with Comfort and Warmth
            </h2>
          </div>

          <Link href='/gallery'>
            <button className='inline-flex items-center gap-2 bg-[#8F2D2D] hover:bg-[#742222] text-white px-5 py-3 rounded-lg text-base text-[16px] font-medium transition'>
              View All
              <ArrowRight className='w-4 h-4' />
            </button>
          </Link>
        </div>
      </div>

      {/* RESPONSIVE SWIPER */}
      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        loop
        speed={800}
        spaceBetween={16}
        breakpoints={{
          0: { slidesPerView: 1 },
          640: { slidesPerView: 2 },   // TABLET = 2
          1024: { slidesPerView: 4 },  // DESKTOP = 4
        }}
        className='px-4 sm:px-6'
      >
        {galleryImages.map((img, i) => (
          <SwiperSlide key={i}>
            <div
              className={`rounded-2xl overflow-hidden shadow-lg ${
                i % 2 === 0
                  ? 'h-[240px] sm:h-[320px] lg:h-[520px]'
                  : 'h-[220px] sm:h-[280px] lg:h-[380px] lg:mt-16'
              }`}
            >
              <img
                src={img}
                alt=''
                className='w-full h-full object-cover transition-transform duration-700 hover:scale-105'
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
