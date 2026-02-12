'use client';

import { useState, useEffect } from 'react';
import TestimonialCard from '@/components/testimonial-card';

const testimonials = [
  {
    name: 'Hari P',
    date: 'Feb 2026',
    rating: 5,
    review:
      'Hotel stay was comfortable. Restaurant offers south meals and North Indian rotis as well. Very close to the hills. We went by walk to the temple rope car way. Just 500 meters walk. Wash rooms are maintained well',
    avatar: '/placeholder-user.jpg',
    platform: 'Tripadvisor',
  },
  {
    name: 'Senthil K',
    date: 'Feb 2026',
    rating: 4,
    review:
      'Stay at Nakshatra was excellent and comfortable. Room was well maintained. MakeMyTrip quote should be in a good range considering the location of any property and city tiers. Room quote is slightly above the normal quote.',
    avatar: '/placeholder-user.jpg',
    platform: 'Tripadvisor',
  },
  {
    name: 'Ramesh N',
    date: 'Jan 2026',
    rating: 5,
    review:
      'The entire property is maintained very tidy with ample parking space. Food is top notch. The menu is veg and taste and quality is too good. The hotel staff are very cooperative and respond fast to any queries. The hotel rooms are spacious and free of dust. The only little drawback which I encountered was the spring mattress, usually I prefer hard mattress, due to back issues. Property is at a walkable distance to Mayil parking with easy access to battery cars, that take you to the path uphill either through Vinches or cable car.',
    avatar: '/placeholder-user.jpg',
    platform: 'Tripadvisor',
  },
  {
    name: 'Viswamohan K',
    date: 'Dec 2025',
    rating: 4,
    review:
      'Location is good, walkable to Temple Mount road. Breakfast was good, South Indian food. Room was okay, clean',
    avatar: '/placeholder-user.jpg',
    platform: 'Tripadvisor',
  },
  {
    name: 'Ravi N',
    date: 'Nov 2025',
    rating: 5,
    review:
      'Great hotel near to temple and on way to Kodaikanal... Nice room and friendly staff.. Thanks for making our stay relaxing',
    avatar: '/placeholder-user.jpg',
    platform: 'Tripadvisor',
  },
  {
    name: 'Ganesh K',
    date: 'Oct 2025',
    rating: 5,
    review:
      'The location of the hotel is its star attraction. Its very close to Parking 2 and Rope Car station. We had our own taxi, and it reached parking in 5 min, then free electric shuttle to starting point of Rope Car or even steps to climb hill. Veg restaurant is good, it gets busy with waiting during peak times. Rooms were very good.',
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
          <p className='subtitle'>
            Feedback that Mirrors our Commitment
          </p>
          <h2 className='heading leading-[1.15] my-5'>
            Every Review Helps us Improve 
            <br />
            And Continue Delivering Meaningful Stays
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
