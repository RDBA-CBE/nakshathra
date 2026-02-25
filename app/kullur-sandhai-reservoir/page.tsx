'use client';

import Header from '@/components/header';
import Footer from '@/components/sections/footer';
import Image from 'next/image';
import { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function StandardSingleRoom() {
  return (
    <main className='min-h-screen bg-white'>
      <Header />

      {/* Breadcrumb Strip */}
      <div className='w-full bg-[#F8F5F0]'>
        <div className='max-w-6xl mx-auto px-4 py-2'>
           <div className='max-w-6xl mx-auto px-4 py-2'>
            <h2 className='heading text-center !mb-0'>
              Kullur Sandhai Reservoir
            </h2>
          </div>
        </div>
      </div>

      {/* MAIN SECTION */}
      <section className='py-20 bg-white'>
        <div className='max-w-6xl mx-auto px-4'>
          {/* Big Image */}
          <div className='relative w-full h-[450px] md:h-[550px] rounded-xl overflow-hidden mb-10'>
            <Image
              src='/nearby/kullur-sandhai.webp' // replace with your image
              alt='Sholiyar Dam'
              fill
              className='object-cover'
              priority
            />
          </div>

          {/* Content Section */}
          <div className='space-y-6'>
            {/* Title */}
            {/* <h2 className='heading'>
              Masani Amman Temple Pollachi
            </h2> */}
            {/* Description Paragraphs */}
            <p className='para'>
              Guests staying at Hotel Nakshatra in Sivakasi can enjoy a peaceful
              nature escape to the tranquil Kullur Sandhai Reservoir, located
              approximately 20–25 km away, with a comfortable drive of around
              30–40 minutes. The route takes travelers through scenic rural
              landscapes and quiet countryside roads, offering a relaxing
              journey that gradually shifts from the lively town atmosphere to
              serene natural surroundings.
            </p>
            <p className='para'>
              Surrounded by open skies and calm waters, the reservoir provides
              an ideal setting for leisurely evening outings, photography, and
              moments of quiet relaxation. The gentle ambience and refreshing
              views make it a perfect short excursion for guests looking to
              unwind and connect with nature without traveling far from the
              comfort of their stay. Its convenient distance from Hotel
              Nakshatra makes Kullur Sandhai Reservoir a charming addition to a
              well-rounded and memorable Sivakasi travel experience.
            </p>
            
            <Link href='/explore-nearby-places'>
              <button className='inline-flex items-center gap-2 bg-[#8F2D2D] hover:bg-[#742222] text-white px-5 py-3 rounded-lg text-[16px] font-medium transition cursor-pointer'>
                Back
              </button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
