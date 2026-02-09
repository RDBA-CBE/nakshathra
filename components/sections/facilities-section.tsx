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
          <div className="relative flex justify-center">
            {/* Image 1 */}
            <div
              className={`absolute left-0 top-0 w-[340px] h-[440px] lg:w-[380px] lg:h-[480px] border-[10px] border-white shadow-[0_15px_50px_rgba(0,0,0,0.18)]
              transition-all duration-700
              ${isInView ? "opacity-100 translate-x-0 translate-y-0" : "opacity-0 -translate-x-6 -translate-y-6"}
              `}
            >
              <img
                src="/elegant-hotel-bedroom-interior.jpg"
                alt="Room"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Image 2 */}
            <div
              className={`relative ml-40 mt-32 w-[340px] h-[440px] lg:w-[380px] lg:h-[480px] border-[10px] border-white shadow-[0_20px_60px_rgba(0,0,0,0.22)]
              transition-all duration-700 delay-150
              ${isInView ? "opacity-100 translate-x-0 translate-y-0" : "opacity-0 translate-x-6 translate-y-6"}
              `}
            >
              <img
                src="/luxury-hotel-bedroom-with-warm-lighting.jpg"
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
            <p
              className="text-sm tracking-[0.25em] mb-4"
              style={{ color: "#C89A32", fontFamily: "sans-serif" }}
            >
             Stay Connected. Stay Comfortable
            </p>

            <h2
              className="text-[42px] lg:text-[54px] leading-[1.15] mb-6"
              style={{
                fontFamily: '"Marcellus", serif',
                color: "#1F2A37",
                fontWeight: 400,
              }}
            >
              Facilities Designed for 
              <br />
              Modern Lifestyles
            </h2>

            <p
              className="text-[#5E6E73] max-w-xl mb-10 leading-relaxed"
              style={{ fontFamily: "sans-serif" }}
            >
              Seamless check-ins, impeccably maintained spaces, modern amenities and attentive service for a comfortable and relaxing stay.
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
                    className="
      w-6 h-6 rounded-full
      bg-[#F6F7F9]              /* normal light yellow */
      flex items-center justify-center
      text-[203 46% 15%] 
      transition-colors duration-300
      group-hover:bg-[#F4C430] /* hover yellow */
      group-hover:text-white
    "
                  >
                    <Check size={14} />
                  </span>

                  {/* Text */}
                  <span className="text-base font-heading text-[#1F2A37]">
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
