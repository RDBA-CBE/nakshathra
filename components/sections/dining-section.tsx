"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone } from "lucide-react";

export default function DiningSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 },
    );

    const element = document.getElementById("dining-section");
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="dining-section" className="py-16 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-12">
          <p className="text-xl font-heading font-bold text-[#b3862f] uppercase tracking-widest">
            FINE DINING REDEFINED
          </p>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-[#10212b] mt-4">
            Where Fine Dining Meets Fine Living
          </h2>
        </div>

        <div className="grid lg:grid-cols-[70%_30%] gap-8 items-stretch">
          {/* Left: large rounded image */}
          <div
            className={`transition-all duration-700 h-full ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-10"
            }`}
          >
            <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/hotel-restaurant-interior.jpg"
                alt="Restaurant Interior"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Right: info card */}
          <div
            className={`transition-all duration-700 delay-200 h-full ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-10"
            }`}
          >
            <div className="bg-gray-100 rounded-xl p-6 shadow-sm h-full flex flex-col justify-between">
              <h3 className="text-[#10212b] font-heading font mb-4">Hours</h3>

              <div className="space-y-3 mb-6">
                <div className="bg-white rounded-lg px-4 py-2 shadow-sm flex justify-between items-center">
                  <span className="font-medium">Breakfast</span>
                  <span className="text-sm text-gray-600">
                    7.00 AM to 10.30 AM
                  </span>
                </div>
                <div className="bg-white rounded-lg px-4 py-2 shadow-sm flex justify-between items-center">
                  <span className="font-medium">Lunch</span>
                  <span className="text-sm text-gray-600">
                    1.00 PM to 2.30 PM
                  </span>
                </div>
                <div className="bg-white rounded-lg px-4 py-2 shadow-sm flex justify-between items-center">
                  <span className="font-medium">Supper</span>
                  <span className="text-sm text-gray-600">
                    6.00 PM to 7.00 PM
                  </span>
                </div>
                <div className="bg-white rounded-lg px-4 py-2 shadow-sm flex justify-between items-center">
                  <span className="font-medium">Dinner</span>
                  <span className="text-sm text-gray-600">
                    8.30 PM to 10.00 PM
                  </span>
                </div>
              </div>

              <p className="text-gray-700 mb-6 text-sm">
                Lorem ipsum dolor sit amet, consectetur eiusmod tempor
                incididunt ut labore et dolore. Excepteur sint occaecat
                cupidatat non proiden est laborum.
              </p>

              <div className="flex">
                <Button className="bg-[#8b3128] hover:bg-[#77261f] text-white">
                  Explore More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
