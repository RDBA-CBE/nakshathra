"use client";

import { useRef } from "react";
import { useInView } from "@/hooks/use-in-view";

export default function LuxuryBanner() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef);

  return (
    <section
      ref={sectionRef}
      className="py-16 px-6 overflow-hidden marquee-four"
    >
      <div className="w-full overflow-hidden whitespace-nowrap relative">
        <div
          className={`
    flex whitespace-nowrap
    gap-6 sm:gap-10 lg:gap-20
    font-heading
    text-[28px] sm:text-4xl md:text-5xl lg:text-7xl xl:text-8xl
    text-[#C9A961] leading-tight
    animate-marquee marquee-title
    transition-all duration-1000
    ${isInView ? "opacity-100 scale-100" : "opacity-0 scale-95"}
  `}
        >
          <span>Redefining Luxury Through</span>
          <span>Redefining Luxury Through</span>
          <span>Redefining Luxury Through</span>
        </div>
      </div>
    </section>
  );
}
