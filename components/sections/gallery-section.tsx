'use client';

import { useRef, useState, useEffect } from 'react';
import { useInView } from '@/hooks/use-in-view';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const galleryImages = [
  '/home/gallery/L-img1.webp',
  '/home/gallery/L-img2.webp',
  '/home/gallery/L-img3.webp',
  '/home/gallery/L-img4.webp',
  '/home/gallery/S-img1.webp',
  '/home/gallery/S-img2.webp',
  '/home/gallery/S-img3.webp',
  '/home/gallery/S-img4.webp',
];

const imageGroups: string[][] = [];
for (let i = 0; i < galleryImages.length; i += 4) {
  imageGroups.push(galleryImages.slice(i, i + 4));
}

export default function GallerySection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % imageGroups.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section ref={sectionRef} className='py-24 bg-white overflow-hidden'>
      <div className='container mx-auto max-w-7xl px-6'>
        {/* Header */}
        <div
          className={`flex flex-col md:flex-row justify-between items-start md:items-center mb-16 gap-6 transition-all duration-700 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div>
            <p className='text-[#C9A962] font-heading text-xl tracking-widest uppercase font-semibold mb-4'>
              OUR GALLERY
            </p>

            <h2 className='font-heading text-[44px] md:text-[64px] leading-[1.15] text-[#1F3A44]'>
              Sophisticated Interiors Thoughtfully 
              <br />
              Balanced with Comfort and Warmth
            </h2>
          </div>

          <Button className='bg-[#8B3A3A] hover:bg-[#6F2A2A] text-white px-8 py-6 rounded-md group'>
            View All
            <ArrowRight className='ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform' />
          </Button>
        </div>
      </div>

      {/* FULL-BLEED SLIDER */}
      <div className='w-full relative'>
        <div
          className='flex transition-transform duration-700 ease-in-out'
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {imageGroups.map((group, index) => (
            <div
              key={index}
              className='min-w-full px-6 grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6'
            >
              {/* BIG */}
              <div className='h-[300px] md:h-[520px] rounded-2xl overflow-hidden shadow-lg'>
                <img
                  src={group[0]}
                  className='w-full h-full object-cover'
                  alt=''
                />
              </div>

              {/* SMALL */}
              <div className='h-[300px] md:h-[380px] rounded-2xl overflow-hidden shadow-lg self-center'>
                <img
                  src={group[1]}
                  className='w-full h-full object-cover'
                  alt=''
                />
              </div>

              {/* BIG */}
              <div className='h-[300px] md:h-[520px] rounded-2xl overflow-hidden shadow-lg'>
                <img
                  src={group[2]}
                  className='w-full h-full object-cover'
                  alt=''
                />
              </div>

              {/* SMALL */}
              <div className='h-[300px] md:h-[380px] rounded-2xl overflow-hidden shadow-lg self-center'>
                <img
                  src={group[3]}
                  className='w-full h-full object-cover'
                  alt=''
                />
              </div>
            </div>
          ))}
        </div>

        {/* Dots */}
        {/* <div className="flex justify-center gap-2 mt-10">
          {imageGroups.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentSlide(i)}
              className={`h-2 rounded-full transition-all ${
                i === currentSlide
                  ? "w-8 bg-[#8B3A3A]"
                  : "w-2 bg-[#D6C2A0]"
              }`}
            />
          ))}
        </div> */}
      </div>
    </section>
  );
}
