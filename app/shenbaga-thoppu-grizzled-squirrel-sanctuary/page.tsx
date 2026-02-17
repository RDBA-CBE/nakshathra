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
          <p className='para'>
            <h2 className='heading text-center !mb-0'>
              Shenbaga Thoppu Grizzled Squirrel Sanctuary
            </h2>
          </p>
        </div>
      </div>

      {/* MAIN SECTION */}
      <section className='py-20 bg-white'>
        <div className='max-w-6xl mx-auto px-4'>
          {/* Big Image */}
          <div className='relative w-full h-[450px] md:h-[550px] rounded-xl overflow-hidden mb-10'>
            <Image
              src='/nearby/shenbaga-thoppu.webp' // replace with your image
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
              Guests staying at Hotel Nakshatra in Sivakasi can enjoy an
              unforgettable nature escape to the serene Shenbaga Thoppu Grizzled
              Squirrel Sanctuary, located approximately 30–35 km away, with a
              scenic drive of around 45–60 minutes depending on road conditions.
              The journey gradually transitions from the lively streets of
              Sivakasi to the lush foothills of the Western Ghats, offering
              beautiful countryside views along the way.
            </p>
            <p className='para'>
              As visitors approach the sanctuary, the landscape transforms into
              dense greenery and cool forest surroundings, creating a refreshing
              contrast to city life. Known for its rich biodiversity and
              peaceful atmosphere, the sanctuary is ideal for nature lovers,
              photography enthusiasts, and travelers seeking quiet moments amid
              natural beauty. Its accessible distance from Hotel Nakshatra makes
              it a perfect half-day excursion, allowing guests to combine
              comfort, adventure, and eco-tourism into a well-rounded and
              memorable stay in the Sivakasi region.
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
