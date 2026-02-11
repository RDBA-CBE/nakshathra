"use client";

import Header from "@/components/header";
import Footer from "@/components/sections/footer";
import Image from "next/image";
import { useState } from "react";

const images = [
  "/elegant-hotel-bedroom-interior.jpg",
  "/family-hotel-room-orange-decor.jpg",
  "/premium-hotel-room-warm-lighting.jpg",
  "/hotel-bedroom-interior.jpg",
];

export default function StandardSingleRoom() {
  const [activeImage, setActiveImage] = useState(images[0]);

  return (
    <main className="min-h-screen bg-[#FAF8F3] text-[#2E2E2E]">
      <Header />

      {/* MAIN SECTION */}
      <section className="pt-10 pb-24 px-4">
        <div className="max-w-6xl mx-auto">
          <p className="text-sm text-gray-500 mb-10">
            Home / Rooms / Standard Single Room
          </p>
          <div className="grid lg:grid-cols-2 gap-12">
            {/* LEFT – IMAGE GALLERY */}
            <div className="flex gap-4">
              {/* Thumbnails */}
              <div className="flex flex-col gap-3">
                {images.map((img) => (
                  <button
                    key={img}
                    onClick={() => setActiveImage(img)}
                    className={`relative h-20 w-20 rounded-lg overflow-hidden border
                    ${activeImage === img ? "border-[#8B6F4E]" : "border-gray-300"}`}
                  >
                    <Image
                      src={img}
                      alt="Standard Single Room"
                      fill
                      className="object-cover"
                    />
                  </button>
                ))}
              </div>

              {/* Main Image */}
              <div className="relative flex-1 h-[550px] rounded-2xl overflow-hidden bg-gray-200">
                <Image
                  src={activeImage}
                  alt="Standard Single Room"
                  fill
                  priority
                  className="object-cover"
                />
              </div>
            </div>

            {/* RIGHT – ROOM INFO */}
            <div>
              <h1 className="heading leading-[1.15] mb-4">
                Standard Single
              </h1>

              {/* Tariff */}
              <div className="inline-flex items-center gap-3 mb-6 px-5 py-2 rounded-full bg-[#E8DCCB] text-[#2E2E2E] font-semibold">
                Tariff: ₹1499
                <span className="text-sm font-medium">+ 5% tax (₹1574)</span>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                Designed for solo travellers, the standard single room offers a
                cozy and functional space with warm decor that provides comfort
                and relaxation. Ideal for guests seeking simplicity and
                convenience, this room ensures a pleasant and hassle-free stay.
              </p>

              <section className="pb-24 px-4">
                <div className="max-w-4xl mx-auto space-y-4">
                  {[
                    {
                      title: "Amenities",
                      items: [
                        "Ample car parking",
                        "Wheelchair accessibility",
                        "Lift / elevator access",
                        "High-speed Wi-Fi (complimentary)",
                        "Fine south Indian dining",
                      ],
                    },
                    {
                      title: "Facilities",
                      items: [
                        "Comfortable bed with premium mattress",
                        "Fresh linens & pillows",
                        "Bedside table",
                        "Wardrobe / Closet with hangers",
                        "Writing desk & chair",
                        "Luggage rack",
                        "LED / Smart TV with satellite channels",
                        "Complimentary BreakFast",
                        "Complimentary bottled water",
                        "Room service menu",
                        "24/7 Power Supply ",
                      ],
                    },
                    {
                      title: "Bathroom Facilities",
                      items: [
                        "Hot & cold running water",
                        "Shower ",
                        "Bath towels & hand towels",
                        "Toiletries (soap, shampoo, conditioner)",
                        "Shaving mirror",
                      ],
                    },
                  ].map((section) => (
                    <details
                      key={section.title}
                      className="group rounded-2xl border border-[#E8DCCB] bg-white/70 backdrop-blur transition-all duration-300"
                    >
                      <summary className="flex items-center justify-between cursor-pointer list-none px-6 py-5">
                        <div className="flex items-center gap-4">
                          {/* Accent bar */}
                          <span className="h-8 w-1 rounded-full bg-[#8B6F4E] transition-all duration-300 group-open:h-12" />

                          <h3 className="heading leading-[1.15]">
                            {section.title}
                          </h3>
                        </div>

                        {/* Chevron */}
                        <span className="text-[#8B6F4E] text-lg tracking-tight transition-transform duration-300 group-open:-rotate-90">
                          ›
                        </span>
                      </summary>

                      <div className="px-6 pb-6 pt-2">
                        <ul className="grid sm:grid-cols-2 gap-y-2 gap-x-6 text-sm text-gray-700">
                          {section.items.map((item) => (
                            <li
                              key={item}
                              className="flex items-start gap-3 text-sm text-gray-700"
                            >
                              <span className="mt-0.5 h-5 w-5 rounded-full bg-[#F3EFE6] flex items-center justify-center">
                                <span className="h-2 w-2 rounded-full bg-[#8B6F4E]" />
                              </span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </details>
                  ))}
                </div>
              </section>
            </div>
          </div>
        </div>
      </section>

      {/* DETAILS */}

      <Footer />
    </main>
  );
}
