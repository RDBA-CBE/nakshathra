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
              Thiru Aavinnankudi Temple
            </h2>
          </p>
        </div>
      </div>

      {/* MAIN SECTION */}
      {/* MAIN SECTION */}
      <section className='py-20 bg-white'>
        <div className='max-w-6xl mx-auto px-4'>
          {/* Big Image */}
          <div className='relative w-full h-[450px] md:h-[550px] rounded-xl overflow-hidden mb-10'>
            <Image
              src='/attakathi-loam-view-point.jpg' // replace with your image
              alt='Attakatti and Loam’s View Point'
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
              At a distance of 7 km from Monkey Falls, 12 km from Aliyar Dam, 31
              km from Valparai and 35 km from Pollachi, Loam's View Point is a
              beautiful vantage point located on Valparai-Pollachi Road in
              Tamilnadu. Situated in the Anamalai Hills of Western Ghats, it is
              one of the popular viewpoints in Valparai and among the must-visit
              places as part of Valparai Tour Packages.
            </p>
            <p className='para'>
              The Loam's Viewpoint is situated at the 9th hairpin bend of the
              winding Pollachi - Aliyar - Valparai hill road. This viewpoint has
              been named after Mathew Loam, who marked the roadway back in 1886.
              There is a platform at the viewpoint that offers an impeccable
              view of the Aliyar Dam and its reservoir, Anamalai mountain ranges
              of the Western Ghats, as well as the stunning sunset views. The
              place is also a good vantage point to look out into the plains, as
              far as the town of Pollachi.
            </p>
            <p className='para'>
              Loam's View Point is an important vantage point that one cannot
              afford to miss while making their way to Valparai. This vantage
              point overlooks multiple scenic hairpin bends. This is also a
              great place to see the endangered Nilgiri Tahr, especially towards
              late afternoon. This is also the spot to catch the views of the
              setting sun behind the hills. The place is monkey infested, so
              beware.
            </p>
            <Link href='/pooja-time'>
              <button className='inline-flex items-center gap-2 bg-[#8F2D2D] hover:bg-[#742222] text-white px-10 py-3.5 rounded-lg text-[18px] font-medium transition cursor-pointer'>
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
