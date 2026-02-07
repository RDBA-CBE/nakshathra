'use client';

import { useRef } from 'react';
import { useInView } from '@/hooks/use-in-view';
import { CheckCircle } from 'lucide-react';

const facilities = [
  'Free Wi-Fi & Prime Location',
  'Rooftop View & 24/7 Support',
  'Affordable & Transparent Pricing',
  'Satisfaction Guarantee',
];

export default function FacilitiesSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef);

  return (
    <section ref={sectionRef} className='py-16 lg:py-24 px-6 md:px-12 lg:px-16 bg-[#fbf2e6]'>
      <div className='container mx-auto'>
        <div className='grid lg:grid-cols-2 gap-12 lg:gap-20 items-center'>
          {/* Left: overlapping framed photos */}
          <div className='relative h-[250px] lg:h-[280px] flex items-center justify-center'>
            <div
              className={`absolute -left-4 lg:-left-8 -top-4 lg:-top-6 w-40 lg:w-48 h-40 lg:h-48 border-8 border-white shadow-[0_8px_40px_rgba(15,23,42,0.15)] transform transition-all duration-700 ${
                isInView ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
              }`}
            >
              <img
                src='/elegant-hotel-bedroom-interior.jpg'
                alt='Hotel Bedroom'
                className='w-full h-full object-cover'
                loading='lazy'
              />
            </div>

            <div
              className={`relative w-48 lg:w-56 h-48 lg:h-56 border-8 border-white shadow-[0_15px_50px_rgba(15,23,42,0.18)] transform transition-all duration-700 ${
                isInView
                  ? 'opacity-100 translate-x-4 lg:translate-x-6 translate-y-4 lg:translate-y-6'
                  : 'opacity-0 -translate-y-6'
              }`}
            >
              <img
                src='/luxury-hotel-bedroom-with-warm-lighting.jpg'
                alt='Luxury Hotel Bedroom'
                className='w-full h-full object-cover'
                loading='lazy'
              />
            </div>
          </div>

          {/* Right: heading + description + pills */}
          <div
            className={`transition-all duration-700 ${
              isInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-6'
            }`}
          >
            <p 
              className='text-sm sm:text-base tracking-widest mb-4'
              style={{ 
                fontFamily: 'sans-serif',
                color: '#C89A32',
                letterSpacing: '0.15em'
              }}
            >
              OUR FACILITIES
            </p>

            <h2 
              className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-6 leading-tight'
              style={{ 
                fontFamily: '"Marcellus", serif',
                color: '#2C1810',
                fontWeight: 400
              }}
            >
              Facilities That Reflect Our Dedication to Excellence
            </h2>

            <p className='text-[#5E6E73] mb-8 max-w-xl leading-relaxed text-base' style={{ fontFamily: 'sans-serif' }}>
              Welcome to Marcus Medical, your pathway to natural-looking results
              delivered by industry-leading professionals — comfortable rooms,
              modern facilities and dedicated support for each guest.
            </p>

            <div className='flex flex-col gap-3'>
              {facilities.map((text, i) => (
                <div
                  key={i}
                  className='inline-flex items-center gap-3 bg-white/90 backdrop-blur px-4 py-2.5 rounded-full shadow-sm border border-gray-100 max-w-md'
                >
                  <span className='flex items-center justify-center w-5 h-5 rounded-full bg-[#e6f7ef] text-green-600 flex-shrink-0'>
                    <CheckCircle size={12} />
                  </span>
                  <span className='text-[#2C1810] text-sm' style={{ fontFamily: 'sans-serif' }}>{text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
