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
        {/* two-column layout: left (stats + text + CTA), right (heading + image) */}
        <div className='grid grid-cols-1 lg:grid-cols-12 gap-12 items-start'>

          {/* LEFT COLUMN */}
          <div className='lg:col-span-6'>
            <div className={`transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
              <div className='grid grid-cols-2 gap-8 mb-8'>
                <div className='text-left'>
                  <div className='text-6xl md:text-7xl font-serif font-semibold text-[#2C1810]'>+{countAmenities}</div>
                  <p className='text-sm text-[#5C4A42] mt-2'>Amenity Services</p>
                </div>

                <div className='text-left'>
                  <div className='text-6xl md:text-7xl font-serif font-semibold text-[#2C1810]'>+{countRooms}</div>
                  <p className='text-sm text-[#5C4A42] mt-2'>Total Luxury Rooms</p>
                </div>
              </div>

              <div className='text-[#5C4A42] leading-relaxed space-y-4 mb-6'>
                <p>
                  Nakshathra Royal Stay, a smart business class hotel situated in Palani with a promise 'Hey we are different' from existing hotels in the region with a vow to delight you... For those who look for finest accommodation at good value, Nakshathra Royal Stay would certainly be a DOUBLE DELIGHT.
                </p>

                <p>
                  Carefully chosen amenities furnish the rooms, to ensure pleasant and comfortable long stays. Both our superior and executive guest rooms are decorated in an elegant and modern design with stylish bathrooms and muted color schemes.
                </p>
              </div>

              <div>
                <button className='px-8 py-3 bg-[#8b3232] text-white font-semibold hover:bg-[#7a2e2e] transition-colors duration-300'>
                  View And Book The Rooms
                </button>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className='lg:col-span-6'>
            <div className={`transition-all duration-700 delay-200 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
              <h6 className='text-sm tracking-widest text-[#C89A32] mb-3'>ABOUT OUR HOTEL</h6>
              <h2 className='font-serif text-4xl md:text-5xl text-[#12303a] mb-6'>Redefining Stays with Warmth and Elegance</h2>
            </div>

            <div className={`mt-6 transition-all duration-700 delay-300 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
              <div className='rounded-lg overflow-hidden shadow-md'>
                <img src='/about-img.jpg' alt='Hotel Room Interior' className='w-full h-auto object-cover' />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
