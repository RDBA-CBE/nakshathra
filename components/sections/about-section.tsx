'use client';

import { useRef } from 'react';
import { useInView } from '@/hooks/use-in-view';
import { useCounter } from '@/hooks/use-counter';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function AboutSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef);

  const countAmenities = useCounter(isInView, 20, 900);
  const countRooms = useCounter(isInView, 49, 900);

  return (
    <section
      ref={sectionRef}
      className='container mx-auto bg-white px-6 md:px-12 lg:px-16 py-24 lg:py-16'
    >
      <div className='container mx-auto'>
        {/* PARENT: Stats and Headings aligned to end */}
        <div
          className='grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 lg:gap-20 mb-8 md:mb-8 lg:mb-14 items-end'
        >
          {/* CHILD 1: STATS */}
          <div
            className={`transition-all duration-700 ${
              isInView
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-10'
            }`}
          >
            <div className='flex gap-20'>
              <div>
                <div
                  className='text-7xl leading-none text-[#1F3A44] mb-2'
                  style={{ fontFamily: '"Marcellus", serif' }}
                >
                  +{countAmenities}
                </div>
                <p className='para'>Amenity Services</p>
              </div>

              <div>
                <div
                  className='text-7xl leading-none text-[#1F3A44] mb-2'
                  style={{ fontFamily: '"Marcellus", serif' }}
                >
                  +{countRooms}
                </div>
                <p className='para'>Total Luxury Rooms</p>
              </div>
            </div>
          </div>

          {/* CHILD 2: HEADINGS */}
          <div
            className={`transition-all duration-700 delay-200 ${
              isInView
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-10'
            }`}
          >
            {/* SMALL HEADING */}

            <p className='subtitle'>About Our Hotel</p>

            {/* MAIN HEADING */}
            <h2 className='leading-[1.15] heading mt-5'>
              Redefining Stays with Warmth and Elegance
            </h2>
          </div>
        </div>

        {/* PARENT: Description/CTA and Image aligned to end */}
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-20'>
          {/* LEFT: Description and CTA */}
          <div>
            {/* DESCRIPTION */}
            <div
              className={`transition-all duration-700 mb-8 ${
                isInView
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-10'
              }`}
            >
              <div className='max-w-xl space-y-6 text-base font-heading text-[#1F2A37] leading-relaxed'>
                <p className='para'>
                  Hotel Nakshatra is a premium business-class hotel, that blends
                  modern elegance with authentic Indian hospitality for a
                  relaxing and pleasant stay. Our well-appointed rooms,
                  contemporary amenities and intuitive service ensure effortless
                  comfort for business travellers, pilgrims and families alike.
                  With a strong focus on cleanliness, safety and personalized
                  care, every stay at Hotel Nakshatra is crafted to be peaceful
                  reliable and truly satisfying.
                </p>

                <p className='para'>
                  Nestled amidst the busy streets of Sivakasi, the hotel
                  provides easy access to local transportation, shopping areas
                  and key landmarks, making it an ideal choice for both business
                  travellers and tourists exploring the region. Its strategic
                  location makes every commute smooth and time-saving. The
                  hotel’s calm setting provides a refreshing escape from
                  congestion, allowing business travellers and pilgrims alike to
                  relax and move effortlessly between engagements.
                </p>
              </div>
            </div>

            {/* CTA */}
            <div
              className={`transition-all duration-700 ${
                isInView
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-10'
              }`}
            >
              <Link href='/about'>
                <button className='inline-flex items-center gap-2 bg-[#8F2D2D] hover:bg-[#742222] text-white px-5 py-3 rounded-lg text-[16px] font-medium transition cursor-pointer'>
                  Know More
                  <ArrowRight className='ml-2 h-4 w-4' />
                </button>
              </Link>
            </div>
          </div>

          {/* RIGHT: IMAGE */}
          <div
            className={`transition-all duration-700 delay-300 ${
              isInView
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-10'
            }`}
          >
            <div className='overflow-hidden rounded-xl'>
              <img
                src='/home/about.webp'
                alt='Hotel Room Interior'
                className='w-full h-[460px] object-cover'
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
