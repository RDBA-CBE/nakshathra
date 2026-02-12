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
            <h2 className='heading text-center !mb-0'>Sholayar Dam</h2>
          </p>
        </div>
      </div>

      {/* MAIN SECTION */}
      <section className='py-20 bg-white'>
        <div className='max-w-6xl mx-auto px-4'>
          {/* Big Image */}
          <div className='relative w-full h-[450px] md:h-[550px] rounded-xl overflow-hidden mb-10'>
            <Image
              src='/sholiyar-dam.jpg' // replace with your image
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
              Sholayar is situated 20 km from Valparai, a hill station in the
              Anaimalai Hills of the Coimbatore district, Tamil Nadu India. A
              part of the hydroelectric project of Tamil Nadu, special
              permission is required to visit the dam.
            </p>
            <p className='para'>
              Sholayar Dam is built by Sholayar Flanking in 1964 and Sholayar
              Saddle Dam in 1965. The reservoir has an area of 8.705 square km
              and the length of the dam is 430.60 metres. The Sholayar Dam has a
              height of 66 metres and 430 metres width, Sholayar Flanking has a
              height of 28 metres and 19 metres width and Sholayar Saddle has a
              height of 259 metres and 109 metres width.
            </p>
            <p className='para'>
              The Solaiyar dam is a vital reservoir under the Parambikulam
              Aliyar Project and has a water storage capacity of 160 ft (49 m).
              The reservoir’s overflowing waters are let into the Parambikulam
              Reservoir through the saddle dam. It is constructed by a team who
              was working under K Palanisamy, the most popular engineer in that
              area.
            </p>
            <p className='para'>
              Valparai is a newly explored tourist spot located in the Anamalai
              hills of Westernghats. Entering the forest and tea gardens of
              valparai you can enjoy the presence of many streams, dams,
              valleys, waterfalls, high mountains, grass lands, flora and fauna.
            </p>

            <p className='para'>
              Ecotourism is given more importance than regular form of tourism.
              Chinnakallar in valparai records maximum rainfall next to
              chirapungi. Valparai is the only hill station in the world which
              has 12 dams and hydro electric power stations.
            </p>

            <p className='para'>
              Within 8 km distance there is a beautiful place which is the
              confluence of the three rivers Kuriarkutty, Karapara and
              Parambikulam, Old bird sanctuary and the Chalakudy River which
              flows across the dam.
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
