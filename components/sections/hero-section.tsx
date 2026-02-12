'use client';

import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className='relative w-full overflow-hidden'>
      <div className='relative flex flex-col lg:flex-row w-full'>
        {/* LEFT CONTENT */}
        <div className='relative z-10 w-full lg:w-1/2 bg-[#FBF6E6] flex items-center'>
          <div className='w-full px-6 sm:px-10 lg:px-16 xl:px-24 py-30 lg:py-30'>
            <div>
              {/* Eyebrow text */}
              <h6
                className='uppercase text-[20px] tracking-[0.28em] text-[#1F3A44] mb-6'
                style={{
                  fontFamily: '"Marcellus", serif',
                  letterSpacing: 'normal',
                  fontWeight: 700,
                }}
              >
                A Stay Unlike Any Other
              </h6>

              {/* Main heading */}
              <h1 className='heading leading-[1.15] mb-8'>
                Elegant Spaces, Personalized Services and a Serene Ambience
              </h1>

              {/* Description */}
              <p className='para'>
                Thoughtfully designed, spacious rooms with modern bathrooms and
                carefully selected amenities. Experience peaceful living with
                premium comfort, in the heart of Sivakasi.
              </p>

              {/* CTA */}
              <Link
                href='/rooms'
                 className='inline-flex items-center gap-2 bg-[#8F2D2D] hover:bg-[#742222] text-white px-10 py-3.5 rounded-lg text-[18px] mt-5 font-medium transition'
              >
                Know More
                <ArrowRight className='w-4 h-4' />
              </Link>
            </div>
          </div>
        </div>

        {/* DIAGONAL VECTOR */}
        <div className='hidden lg:block absolute left-1/2 top-0 h-full -translate-x-1/2 z-30 pointer-events-none'>
          <img
            src='/vector-icon.png'
            alt=''
            className='h-full w-auto object-contain'
          />
        </div>

        {/* RIGHT IMAGE */}
        <div className='w-full lg:w-1/2 relative'>
          <img
            src='/home/banner.webp'
            alt='Luxury hotel bedroom'
            className='absolute inset-0 w-full h-full object-cover object-center'
          />
        </div>
      </div>
    </section>
  );
}
