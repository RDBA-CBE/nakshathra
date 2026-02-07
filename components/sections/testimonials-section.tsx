'use client';

import { useState, useEffect } from 'react';
import TestimonialCard from '@/components/testimonial-card';

const testimonials = [
  {
    name: 'Sarath Kumar',
    date: 'March 15, 2024',
    rating: 5,
    review:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure.',
    avatar: '/placeholder-user.jpg',
    platform: 'Tripadvisor',
  },
  {
    name: 'Ramesh Sharma',
    date: 'March 10, 2024',
    rating: 5,
    review:
      'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat, delivering a seamless and satisfying guest experience with exceptional service, refined comfort, and consistent attention.',
    avatar: '/placeholder-user.jpg',
    platform: 'Tripadvisor',
  },
  {
    name: 'Anita Desai',
    date: 'Feb 28, 2024',
    rating: 5,
    review:
      'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    avatar: '/placeholder-user.jpg',
    platform: 'Tripadvisor',
  },
  {
    name: 'Vikram Patel',
    date: 'Feb 10, 2024',
    rating: 5,
    review:
      'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    avatar: '/placeholder-user.jpg',
    platform: 'Tripadvisor',
  },
  {
    name: 'Priya Nair',
    date: 'Jan 22, 2024',
    rating: 5,
    review:
      'Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Pellentesque in ipsum id orci porta dapibus.',
    avatar: '/placeholder-user.jpg',
    platform: 'Tripadvisor',
  },
  {
    name: 'Arjun Rao',
    date: 'Jan 05, 2024',
    rating: 5,
    review:
      'Quisque velit nisi, pretium ut lacinia in, elementum id enim. Nulla porttitor accumsan tincidunt.',
    avatar: '/placeholder-user.jpg',
    platform: 'Tripadvisor',
  },
];

export default function TestimonialsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [page, setPage] = useState(0);
  const perPage = 2;
  const pageCount = Math.ceil(testimonials.length / perPage);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('testimonials-section');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section id='testimonials-section' className='py-16 overflow-hidden'>
      <div className='container mx-auto px-4'>
        <div
          className={`text-center mb-12 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <span className='text-[#bd9454] font-heading text-xl tracking-wider uppercase font-bold leading-[1.2]'>
            Testimonials
          </span>
          <h2 className='font-heading text-[44px] md:text-[64px] text-[#152A38] mb-4'>
            Our Guests Consistently Praise The
            <br />
            Service And Warm Hospitality
          </h2>
        </div>

        <div
          className={`grid md:grid-cols-2 gap-8 items-stretch transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {testimonials
            .slice(page * perPage, page * perPage + perPage)
            .map((testimonial, index) => (
              <div
                key={page * perPage + index}
                className='transition-all duration-1000 h-full'
                style={{ transitionDelay: `${index * 100 + 400}ms` }}
              >
                <TestimonialCard {...testimonial} />
              </div>
            ))}
        </div>

        {/* Pagination dots */}
        <div className='flex justify-center gap-3 mt-8'>
          {Array.from({ length: pageCount }).map((_, i) => (
            <button
              key={i}
              aria-label={`Go to page ${i + 1}`}
              aria-current={page === i}
              onClick={() => setPage(i)}
              className='p-1 rounded-full transition-colors duration-200'
            >
              {/* Outer circle */}
              <span
                className={`inline-flex items-center justify-center w-4 h-4 rounded-full ${
                  page === i
                    ? 'border-2 border-[#8B4513] bg-transparent'
                    : 'bg-transparent'
                }`}
              >
                {/* Inner circle: empty for active, filled for inactive */}
                <span
                  className={`block rounded-full transition-all duration-200 ${
                    page === i
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
