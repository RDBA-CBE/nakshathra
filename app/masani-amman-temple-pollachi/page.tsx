'use client';

import Header from '@/components/header';
import Footer from '@/components/sections/footer';
import Image from 'next/image';
import { useState } from 'react';
import Link from 'next/link';

export default function StandardSingleRoom() {
  return (
    <main className='min-h-screen bg-white'>
      <Header />

      {/* Breadcrumb Strip */}
      <div className='w-full bg-[#F8F5F0]'>
        <div className='max-w-6xl mx-auto px-4 py-2'>
          <p className='para'>
            <h2 className='heading text-center !mb-0'>
              Masani Amman Temple - Pollachi
            </h2>
          </p>
        </div>
      </div>

      {/* MAIN SECTION */}
      {/* MAIN SECTION */}
      <section className='pt-12 pb-24 bg-white'>
        <div className='max-w-6xl mx-auto px-4'>
          {/* Big Image */}
          <div className='relative w-full h-[450px] md:h-[550px] rounded-xl overflow-hidden mb-10'>
            <Image
              src='/masani-temple.jpg' // replace with your image
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
              At a distance of 14 km from Pollachi Junction, Sri Masani Amman
              Temple is a sacred Hindu temple located at Anaimalai near
              Pollachi, Tamil Nadu. Situated at the confluence of Aliyar River
              and the Uppar stream, it is one of the popular places of
              pilgrimage near Coimbatore, and among the top Pollachi places to
              visit.
            </p>
            <p className='para'>
              Also known as Anaimalai Masani Amman Temple is dedicated to
              Goddess Arulmigu Masani Amman. The presiding deity is seen in a
              lying posture measuring 15 feet with four hands holding a skull,
              snake, drum, and a trident. The most noteworthy feature of the
              temple is that it serves as a welfare government listening to the
              grievances of the public, as a clinical dispensary rectifying the
              physical ills of people, and as a court of justice easing the
              suffering of men and women. Besides the presiding deity, the
              temple also has idols of Neethi Kal or the Stone of Justice and
              Mahamuniappan.
            </p>
            <p className='para'>
              According to the legend, the Masani Amman Temple was constructed
              in the name of a girl who ate a mango from a tree belonging to
              King Nanan. The king came to know this and awarded her a death
              sentence. The people of the village objected to the act but the
              king executed the sentence. Later, the aggravated people fought
              against Nannur and killed him in a battle. After the victory, they
              built a shrine in the memory of the lady and named her Masani
              Devi, and continued with their worship. Masani meaning graveyard
              in the local Tamil language. Also, legend has it that Lord Rama
              had stayed in a graveyard at Anaimalai while searching for Sita.
              Before leaving for Sri Lanka, Lord Rama created an idol of the
              goddess to worship, using clay. Hence, the image is placed this
              way. It is one of the best places to visit as part of Pollachi
              holiday packages.
            </p>
            <p className='para'>
              Masani Amman is believed to relieve girls off of physical health
              issues when they attain puberty. The prasad distributed at the
              temple is called Pachilam Marundu. It is considered to be highly
              beneficial for women who wish to bear a child to consume this
              prasad and tie a black thread around their wrist. Devotees also
              offer ground chilies to the justice stone with a wish to recover
              their possessions that have been stolen. Some even write their
              worries and issues on a piece of paper and tie it around the hands
              of the deity. It is believed that they get the solutions or their
              issues are resolved within 90 days.
            </p>

            <p className='para'>
              The annual Kundam Festival celebrated here is a major draw
              attended by thousands of devotees amid much pomp and splendor. On
              Tuesdays, Fridays, and new moon days, special poojas are performed
              at this temple.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
