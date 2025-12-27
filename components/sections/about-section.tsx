'use client';

import { useRef } from 'react';
import { useInView } from '@/hooks/use-in-view';
import { useCounter } from '@/hooks/use-counter';

export default function AboutSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef);

  const countAmenities = useCounter(isInView, 20, 900);
  const countRooms = useCounter(isInView, 49, 900);

  return (
    <section
      ref={sectionRef}
      className="container mx-auto bg-white px-6 md:px-12 lg:px-16 py-24 lg:py-20"
    >
      <div className="container mx-auto">
        {/* PARENT: Stats and Headings aligned to end */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-end mb-14">
          {/* CHILD 1: STATS */}
          <div
            className={`transition-all duration-700 ${
              isInView
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="flex gap-20">
              <div>
                <div
                  className="text-7xl leading-none text-black mb-2"
                  style={{ fontFamily: '"Marcellus", serif' }}
                >
                  +{countAmenities}
                </div>
                <p className="text-sm text-[#5E6E73]">
                  Amenity Services
                </p>
              </div>

              <div>
                <div
                  className="text-7xl leading-none text-black mb-2"
                  style={{ fontFamily: '"Marcellus", serif' }}
                >
                  +{countRooms}
                </div>
                <p className="text-sm text-[#5E6E73]">
                  Total Luxury Rooms
                </p>
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
            <h6 className="text-sm tracking-widest text-[#C89A32] mb-4">
              ABOUT OUR HOTEL
            </h6>

            {/* MAIN HEADING */}
            <h2
              className="text-5xl lg:text-6xl leading-tight text-[#1F3A44]"
              style={{ fontFamily: '"Marcellus", serif' }}
            >
              Redefining Stays with Warmth and Elegance
            </h2>
          </div>
        </div>

        {/* PARENT: Description/CTA and Image aligned to end */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-end">
          {/* LEFT: Description and CTA */}
          <div>
            {/* DESCRIPTION */}
            <div
              className={`transition-all duration-700 mb-14 ${
                isInView
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-10'
              }`}
            >
              <div className="max-w-xl space-y-6 text-[#5E6E73] text-base leading-relaxed">
                <p>
                  Nakshathra Royal Stay, a smart business class hotel situated in
                  Palani with a promise 'Hey we are different' from existing hotels
                  in the region with a vow to delight you... For those who look for
                  finest accommodation at good value, Nakshathra Royal Stay would
                  certainly be a DOUBLE DELIGHT.
                </p>

                <p>
                  Carefully chosen amenities furnish the rooms, to ensure pleasant
                  and comfortable long stays. Both our superior and executive guest
                  rooms are decorated in an elegant and modern design with stylish
                  bathrooms and muted color schemes.
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
              <button className="px-10 py-4 bg-[#8F2D2D] text-white text-sm tracking-wide hover:bg-[#742222] transition">
                View And Book The Rooms
              </button>
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
            <div className="overflow-hidden rounded-xl">
              <img
                src="/about-img.jpg"
                alt="Hotel Room Interior"
                className="w-full h-[460px] object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
