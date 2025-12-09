'use client';

import { useRef } from 'react';
import { useInView } from '@/hooks/use-in-view';
import { useCounter } from '@/hooks/use-counter';

export default function AboutSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef);

  const countAmenities = useCounter(isInView, 20, 800);
  const countRooms = useCounter(isInView, 49, 800);

  return (
    <section ref={sectionRef} className='py-20 px-6 bg-white'>
      <div className='container mx-auto'>
        
        {/* ⭐ GRID CONTAINER — 12 COLS */}
        <div className='grid grid-cols-1 xl:grid-cols-12 gap-16'>

          {/*  CHILD 1 — col-xl-5 */}
          <div className='xl:col-span-5'>
            <div
              className={`grid grid-cols-2 gap-8 transition-all duration-700 ${
                isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              <div className='text-center'>
                <div className='text-8xl font-semibold font-serif text-[#2C1810] mb-2'>
                  +{countAmenities}
                </div>
                <p className='text-gray-600 text-sm'>Aromatic Services</p>
              </div>

              <div className='text-center'>
                <div className='text-8xl font-semibold font-serif text-[#2C1810] mb-2'>
                  +{countRooms}
                </div>
                <p className='text-gray-600 text-sm'>Total Luxury Rooms</p>
              </div>
            </div>
          </div>

          {/* CHILD 2 — col-xl-7 */}
          <div className='xl:col-span-7'>
            <div
              className={`transition-all duration-700 delay-300 about-section ${
                isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              <h6 className='mb-3 tracking-widest text-sm text-[#C89A32]'>
                ABOUT OUR HOTEL
              </h6>

              <h2 className='text-4xl font-serif text-[#2C1810] mb-8'>
                Redefining Stays with Warmth and Elegance
              </h2>
            </div>
          </div>

          {/* CHILD 3 — col-xl-5 */}
          <div
            className={`xl:col-span-5 space-y-6 text-gray-600 leading-relaxed about-section transition-all duration-700 delay-200 ${
              isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <p>
              Nakshathra Royal Stay, a smart business class hotel situated in
              Palani with a promise 'Hey we are different' from existing hotels
              in the region with vow to delight you. For those who look for the
              finest accommodation at a good value, Nakshathra Royal Stay would
              certainly be a double delight.
            </p>

            <p>
              Carefully chosen amenities furnish the rooms to ensure pleasant
              and comfortable long stays. Both our superior and executive guest
              rooms are decorated in elegant and modern designs with stylish
              bathrooms and muted color schemes.
            </p>

            <div className='pt-4'>
              <button className='px-8 py-3 bg-[#8b3232] text-white font-semibold hover:bg-[#A88327] transition-colors duration-300'>
                View and Book the Rooms
              </button>
            </div>
          </div>

          {/* CHILD 4 — col-xl-7 */}
          <div
            className={`xl:col-span-7 relative transition-all duration-700 delay-300 ${
              isInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}
          >
            <div className='relative h-[auto] rounded-lg overflow-hidden'>
              <img
                src='/about-img.jpg'
                alt='Hotel Room Interior'
                className='w-full h-full object-cover'
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
