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
            <h2 className='heading text-center !mb-0'>Vembakottai Dam</h2>
          </div>
        </div>
      </div>

      {/* MAIN SECTION */}
      {/* MAIN SECTION */}
      <section className='py-20 bg-white'>
        <div className='max-w-6xl mx-auto px-4'>
          {/* Big Image */}
          <div className='relative w-full h-[450px] md:h-[550px] rounded-xl overflow-hidden mb-10'>
            <Image
              src='/nearby/vembakottai-dam.webp' // replace with your image
              alt='Masani Amman Temple Pollachi'
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
              From Hotel Nakshatra in Sivakasi, guests can enjoy a relaxing
              excursion to the serene Vembakottai Dam, located approximately
              14–15 km away and easily reachable within a comfortable 20–30
              minute drive. The route takes travelers through scenic rural
              landscapes and quiet village surroundings, offering a refreshing
              change of pace from the town’s vibrant atmosphere. Surrounded by
              open skies and peaceful waters, the dam serves as a perfect
              destination for those seeking moments of calm, nature photography,
              or a leisurely evening outing with family and friends.
            </p>
            <p className='para'>
               The gentle
              breeze, tranquil reservoir views, and unhurried ambience create an
              ideal setting for relaxation and reflection, making it a
              delightful addition to any travel itinerary. Its convenient
              proximity to Hotel Nakshatra allows guests to experience both the
              cultural charm of Sivakasi and the natural beauty of the region,
              ensuring a balanced and memorable stay filled with comfort,
              exploration, and scenic enjoyment.
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
