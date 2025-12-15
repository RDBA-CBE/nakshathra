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
    <section ref={sectionRef} className='py-24 px-6 bg-[#fbf2e6]'>
      <div className='container mx-auto'>
        <div className='grid lg:grid-cols-2 gap-16 items-center'>
          {/* Left: overlapping framed photos */}
          <div className='relative h-[420px] flex items-center justify-center'>
            <div
              className={`absolute -left-8 -top-6 w-64 h-64 rounded-md border-8 border-white shadow-[0_8px_40px_rgba(15,23,42,0.15)] transform transition-all duration-700 ${
                isInView ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
              }`}
            >
              <img
                src='/images/room-1.jpg'
                alt='Bedroom 1'
                className='w-full h-full object-cover rounded-sm'
                loading='lazy'
              />
            </div>

            <div
              className={`relative w-72 h-72 rounded-md border-8 border-white shadow-[0_15px_50px_rgba(15,23,42,0.18)] transform transition-all duration-700 ${
                isInView
                  ? 'opacity-100 translate-x-6 translate-y-6'
                  : 'opacity-0 -translate-y-6'
              }`}
            >
              <img
                src='/images/room-2.jpg'
                alt='Bedroom 2'
                className='w-full h-full object-cover rounded-sm'
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
            <p className='text-[#b3862f] font-heading text-xl font-bold mb-4 tracking-wide'>
              OUR FACILITIES
            </p>

            <h2 className='font-heading text-4xl md:text-5xl lg:text-6xl text-[#10212b] mb-6 leading-tight'>
              Facilities That Reflect Our Dedication to Excellence
            </h2>

            <p className='text-gray-700 mb-8 max-w-xl leading-relaxed'>
              Welcome to Marcus Medical, your pathway to natural-looking results
              delivered by industry-leading professionals — comfortable rooms,
              modern facilities and dedicated support for each guest.
            </p>

            <div className='flex flex-col gap-4'>
              {facilities.map((text, i) => (
                <div
                  key={i}
                  className='inline-flex items-center gap-3 bg-white/90 backdrop-blur px-5 py-2 rounded-full shadow-sm border border-gray-100 max-w-md'
                >
                  <span className='flex items-center justify-center w-7 h-7 rounded-full bg-[#e6f7ef] text-green-600'>
                    <CheckCircle size={16} />
                  </span>
                  <span className='text-gray-800'>{text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
