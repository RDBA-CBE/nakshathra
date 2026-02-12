"use client";

import { useRef } from "react";
import { Check } from "lucide-react";
import { useInView } from "@/hooks/use-in-view";

const facilities = [
  "Prime location in the heart of Sivakasi",
  "Complimentary high-speed Wi-Fi",
  "Business-class luxury at exceptional value",
  "Best rates guaranteed on online bookings",
  "Modern amenities complemented by elegant interiors",
  "Strict safety, hygiene and cleanliness protocols",
];

export default function FacilitiesSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref);

  return (
    <section ref={ref} className="bg-[#fbf2e6] py-20 lg:py-28 px-6 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* LEFT – OVERLAPPING IMAGES */}
          <div className="relative flex justify-center overflow-hidden">
            {/* Image 1 */}
            <div
              className={`
      relative lg:absolute lg:left-0 lg:top-0
      w-[260px] sm:w-[300px] lg:w-[380px]
      h-[340px] sm:h-[400px] lg:h-[480px]
      border-[10px] border-white
      
      transition-all duration-700
      ${
        isInView
          ? "opacity-100 translate-x-0 translate-y-0"
          : "opacity-0 lg:-translate-x-6 lg:-translate-y-6"
      }
    `}
            >
              <img
                src="/home/facilities/img2.webp"
                alt="Room"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Image 2 */}
            <div
              className={`
      relative lg:ml-40 lg:mt-32
      w-[260px] sm:w-[300px] lg:w-[380px]
      h-[340px] sm:h-[400px] lg:h-[480px]
      border-[10px] border-white
      
      transition-all duration-700 delay-150
      ${
        isInView
          ? "opacity-100 translate-x-0 translate-y-0"
          : "opacity-0 lg:translate-x-6 lg:translate-y-6"
      }
    `}
            >
              <img
                src="/home/facilities/img1.webp"
                alt="Luxury Room"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* RIGHT – TEXT CONTENT */}
          <div
            className={`transition-all duration-700
            ${isInView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}
            `}
          >
            <p className="subtitle tracking-widest">
            Stay Connected. Stay Comfortable
          </p>
            

            <h2
              className="heading leading-[1.15] my-5"
              
            >
              Facilities Designed for
              <br />
              Modern Lifestyles
            </h2>

            <p className="para mb-4">
              Seamless check-ins, impeccably maintained spaces, modern amenities
              and attentive service for a comfortable and relaxing stay.
            </p>

            {/* PILLS */}
            <div className="flex flex-col gap-4">
              {facilities.map((item, i) => (
                <div
                  key={i}
                  className="group flex items-center gap-3 bg-white px-5 py-3 rounded-full w-fit shadow-sm transition"
                >
                  {/* Tick */}
                  <span
                    className="w-6 h-6 rounded-full bg-[#F6F7F9] flex items-center justify-center text-[203 46% 15%] transition-colors duration-300 group-hover:bg-[#F4C430] group-hover:text-white">
                    <Check size={14} />
                  </span>

                  {/* Text */}
                  <span className="text-base item-text">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
