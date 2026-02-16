'use client';
'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';

import { Navigation, Autoplay } from 'swiper/modules';
import { useRef } from 'react';
import { useInView } from '@/hooks/use-in-view';
import ExperienceCard from '@/components/experience-card';

const experiences = [
  {
    title: 'Thiruthangal Nindra Narayana Perumal Temple',
    image: '/nearby/thiruthangal.webp',
    rotation: 'rotate-6',
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
    rotation: 'rotate-6',
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
    rotation: 'rotate-6',
    link: '/ayyanar-falls',
  },
  {
    title: 'Kullur Sandhai Reservoir',
    image: '/nearby/kullur-sandhai.webp',
    rotation: 'rotate-0',
    link: '/kullur-sandhai-reservoir',
  },
];

export default function ExperienceSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef);

  return (
    <section
      ref={sectionRef}
      className='py-20 px-0 bg-white relative overflow-hidden desk-experience'
    >
      <div
        className='relative'
        style={{ height: '1200px', marginTop: '-400px' }}
      >
        <svg
          className='absolute inset-0 w-full h-full'
          viewBox='0 0 1600 1200'
          preserveAspectRatio='none'
          fill='none'
        >
          <path
            d='M 0,1200 A 800,800 0 0,1 1600,1200 L 1600,1200 L 0,1200 Z'
            fill='#F5F0E8'
            stroke='#8B4513'
            strokeWidth='6'
          />
        </svg>
        <div className='absolute inset-0 flex flex-col items-center justify-center px-6 pt-96 pb-20'>
          <div className='container mx-auto px-4'>
            {/* Heading */}
            <div
              className={`text-center mb-12 transition-all duration-700 ${
                isInView
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-20'
              }`}
            >
              <p className='subtitle mb-4 tracking-widest'>
                Smart choice for sightseeing
              </p>

              <h2 className='heading leading-[1.15]'>
                Easy Connectivity to Popular <br />
                Sights and Tranquil Retreats
              </h2>
            </div>

            {/* SWIPER */}
            <Swiper
              modules={[Navigation, Autoplay]}
              navigation
              loop
              centeredSlides
              speed={800}
              grabCursor
              autoplay={{ delay: 3500, disableOnInteraction: false }}
              spaceBetween={14}
              breakpoints={{
                0: { slidesPerView: 1.15 },
                640: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
              }}
              className='nearby-swiper'
            >
              {experiences.map((experience, index) => (
                <SwiperSlide key={experience.title}>
                  <div className='slide-inner'>
                    <div
                      className={`transition-all duration-700 ${
                        isInView
                          ? 'opacity-100 translate-y-0'
                          : 'opacity-0 translate-y-20'
                      }`}
                      style={{ transitionDelay: `${index * 150}ms` }}
                    >
                      <ExperienceCard {...experience} />
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>

        {/* <div className='absolute inset-0 flex flex-col items-center justify-center '>
          <div className='container mx-auto'>
            <div
              className={`transition-all duration-700 ${
                isInView
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-20'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <p className='subtitle mb-4 tracking-widest pt-[120px]'>
                Smart choice for sightseeing{' '}
              </p>
              <h2 className='heading leading-[1.15] mt-5 text-balance'>
                Easy Connectivity to Popular <br /> Sights and Tranquil Retreats
              </h2>
            </div>

            <Swiper
              modules={[Navigation, Autoplay]}
              navigation
              loop
              centeredSlides={true}
              speed={800}
              grabCursor
              autoplay={{ delay: 3500, disableOnInteraction: false }}
              spaceBetween={14} // reduced gap
              breakpoints={{
                0: { slidesPerView: 1.15 },
                640: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
              }}
              className='nearby-swiper !pb-6'
            >
              {experiences.map((experience, index) => (
                <SwiperSlide key={experience.title}>
                  <div
                    className={`transition-all duration-700 ${
                      isInView
                        ? 'opacity-100 translate-y-0'
                        : 'opacity-0 translate-y-20'
                    }`}
                    style={{ transitionDelay: `${index * 150}ms` }}
                  >
                    <ExperienceCard {...experience} />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div> */}
      </div>
    </section>
  );
}
