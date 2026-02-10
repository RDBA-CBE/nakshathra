"use client";

import { useRef } from "react";
import { useInView } from "@/hooks/use-in-view";

export default function LuxuryBanner() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef);

  return (
    <section
      ref={sectionRef}
      className="
        relative
        flex items-center justify-center
        
        px-4 sm:px-6
        overflow-hidden
        marquee-four
      "
    >
      <div className="w-full overflow-hidden whitespace-nowrap relative">
        <div
          className={`
            flex whitespace-nowrap
            gap-4 sm:gap-8 lg:gap-20
            font-heading
            marquee-title animate-marquee
            leading-tight
            transition-all duration-1000
            ${isInView ? "opacity-100 scale-100" : "opacity-0 scale-95"}
          `}
        >
          <span>Dine in comfort</span>
          <span>Dine in comfort</span>
          <span>Dine in comfort</span>
        </div>
      </div>
    </section>
  );
}
