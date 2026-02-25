'use client';

import { useState, useEffect, useRef } from 'react';
import TestimonialCard from '@/components/testimonial-card';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, FreeMode } from 'swiper/modules';

import 'swiper/css';

const testimonials = [
  {
    name: 'Arun Kumar',
    date: '',
    rating: 5,
    review:
      'Had a very peaceful and comfortable stay. The rooms were clean and spacious. The staff members were polite and supportive throughout our visit. The location is convenient for temple visits. Highly recommended for families.',
    avatar: '/placeholder-user.jpg',
    platform: 'Tripadvisor',
  },
  {
    name: 'Kavitha Ramesh',
    date: '',
    rating: 4,
    review:
      'Excellent hospitality and well maintained rooms. The ambience is calm and pleasant. Check in and check out process was smooth. Worth the money and we will definitely visit again.',
    avatar: '/placeholder-user.jpg',
    platform: 'Tripadvisor',
  },
  {
    name: 'Sathish Kumar',
    date: '',
    rating: 5,
    review:
      'Good hotel with neat rooms and prompt service. The staff responded quickly to our requests. Very close to major attractions. Overall a satisfying experience.',
    avatar: '/placeholder-user.jpg',
    platform: 'Tripadvisor',
  },
  {
    name: 'Meena Lakshmi',
    date: '',
    rating: 4,
    review:
      'We stayed here with family and had a wonderful experience. Clean surroundings and comfortable bedding made our stay relaxing. The service was professional and friendly',
    avatar: '/placeholder-user.jpg',
    platform: 'Tripadvisor',
  },
  {
    name: 'Praveen Raj',
    date: '',
    rating: 5,
    review:
      'One of the best stays in the area. The property is well maintained and the atmosphere is peaceful. Staff were courteous and helpful. I would strongly recommend this hotel to others.',
    avatar: '/placeholder-user.jpg',
    platform: 'Tripadvisor',
  },
];

export default function TestimonialsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const swiperRef = useRef<any>(null); // ✅ TOP LEVEL

  const perPage = 2;
  const pageCount = Math.ceil(testimonials.length / perPage);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('testimonials-section');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section id='testimonials-section' className='pb-20 overflow-hidden'>
      <div className='container mx-auto px-4'>
        {/* Heading */}
        <div
          className={`text-center mb-12 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <p className='subtitle'>Feedback that Mirrors our Commitment</p>
          <h2 className='heading leading-[1.15] my-5'>
            Every Review Helps us Improve
            <br />
            And Continue Delivering Meaningful Stays
          </h2>
        </div>

        {/* Swiper */}
        <div
          className={`transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <Swiper
            modules={[Autoplay]}
            loop={true}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            slidesPerView={1}
            slidesPerGroup={1}
            breakpoints={{
              768: {
                slidesPerView: 2,
                slidesPerGroup: 2,
              },
            }}
            spaceBetween={32}
            onSlideChange={(swiper) => {
              setActiveIndex(swiper.snapIndex);
            }}
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <div className='h-full'>
                  <TestimonialCard {...testimonial} />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Pagination dots */}
        <div className='flex justify-center gap-3 mt-8'>
          {Array.from({ length: pageCount }).map((_, i) => (
            <button
              key={i}
              aria-label={`Go to page ${i + 1}`}
              className='p-1 rounded-full'
              onClick={() => {
                swiperRef.current?.slideToLoop(i);
              }}
            >
              <span
                className={`inline-flex items-center justify-center w-4 h-4 rounded-full ${
                  activeIndex === i ? 'border-2 border-[#8B4513]' : ''
                }`}
              >
                <span
                  className={`block rounded-full transition-all duration-200 ${
                    activeIndex === i
                      ? 'w-2.5 h-2.5 bg-transparent'
                      : 'w-2.5 h-2.5 bg-[#8B4513]'
                  }`}
                />
              </span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
