"use client";

import ExperienceCard from "@/components/experience-card";
import { link } from "fs";

const experiences = [
  {
    title: "Attakatti View Point",
    // description: "Excepteur sint occaecat",
    image: "/attakathi-loam-view-point.jpg",
    rotation: "rotate-6",
    link:"/attakathi-loem-view-point"
  },
  {
    title: "Sholayar Dam",
    // description: "Sunt culpa aliquip officia",
    image: "/sholiyar-dam.jpg",
    rotation: "rotate-0",
    link:"/sholayar-dam"
  },
  {
    title: "Masani Amman Temple Pollachi",
    // description: "Quis nostrud exercitation",
    image: "/masani-temple.jpg",
    rotation: "rotate-6",
    link:"/masani-amman-temple-pollachi"
  },
];

export default function PoojaTiming() {
  return (
    <section className="pb-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Heading */}
        <div className="text-center mb-14">
          <p className="subtitle mb-4 tracking-widest">
            Smart choice for sightseeing
          </p>
          <h2 className="heading leading-[1.15]">
            Easy Connectivity to Popular <br />
            Sights and Tranquil Retreats
          </h2>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {experiences.map((experience) => (
            <ExperienceCard
              key={experience.title}
              title={experience.title}
              // description={experience.description}
              image={experience.image}
              rotation={experience.rotation}
               link={experience.link}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
