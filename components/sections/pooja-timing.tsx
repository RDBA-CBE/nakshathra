'use client';

import ExperienceCard from '@/components/experience-card';
import { link } from 'fs';

const experiences = [
  {
    title: 'Attakatti View Point',
    // description: "Excepteur sint occaecat",
    image: '/attakathi-loam-view-point.jpg',
    rotation: 'rotate-6',
    link: '/attakathi-loem-view-point',
  },
  {
    title: 'Sholayar Dam',
    // description: "Sunt culpa aliquip officia",
    image: '/sholiyar-dam.jpg',
    rotation: 'rotate-0',
    link: '/sholayar-dam',
  },
  {
    title: 'Masani Amman Temple Pollachi',
    // description: "Quis nostrud exercitation",
    image: '/masani-temple.jpg',
    rotation: 'rotate-6',
    link: '/masani-amman-temple-pollachi',
  },
];

export default function PoojaTiming() {
  return (
    <section className='pb-20 md:pb-20 bg-white'>
      <div className='max-w-7xl mx-auto px-4'>
        {/* Inner Container */}
        <div className='bg-[#f5f0e8] rounded-3xl px-6 sm:px-10 lg:px-16 py-12 md:py-16'>
          {/* Heading */}
          <div className='text-center max-w-3xl mx-auto mb-12 md:mb-16'>
            <p className='subtitle mb-4 tracking-[0.2em] text-sm uppercase'>
              Smart Choice for Sightseeing
            </p>

            <h2 className='heading leading-tight text-2xl sm:text-3xl lg:text-4xl'>
              Easy Connectivity to Popular <br className='hidden sm:block' />
              Sights and Tranquil Retreats
            </h2>
          </div>

          {/* Cards Grid */}
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8'>
            {experiences.map((experience) => (
              <ExperienceCard
                key={experience.title}
                title={experience.title}
                image={experience.image}
                rotation={experience.rotation}
                link={experience.link}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
