import Header from "@/components/header";
import Footer from "@/components/sections/footer";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Rooms - Nakshatra Royal Stay",
  description: "Explore our luxury rooms and suites",
};

export default function RoomsPage() {
  return (
    <main className="min-h-screen bg-[#FAF8F3] text-[#2E2E2E]">
      <Header />

      <section className="pt-32 pb-24 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Page Heading */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-heading font-semibold">
              Our Rooms
            </h1>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              Thoughtfully designed rooms offering comfort, elegance and calm
              for every kind of stay.
            </p>
          </div>

          {/* Rooms Grid */}
          <div className="grid md:grid-cols-2 gap-10">
            {/* Card 1 – Classic */}
            <div className="relative h-80 rounded-2xl overflow-hidden border border-[#D8CFC0]">
              {/* Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage:
                    "url('/cozy-hotel-room-with-ambient-lighting.jpg')",
                }}
              />

              {/* Dark + Blur Overlay */}
              <div className="absolute inset-0 bg-black/70" />

              {/* Content */}
              <div className="relative z-10 h-full p-8 flex flex-col justify-between text-white">
                <div>
                  <h2 className="text-2xl font-heading font-semibold mb-3">
                    Standard Single
                  </h2>

                  {/* Tariff */}
                  <div className="mb-4">
                    <p className="text-[#E8DCCB] text-sm font-semibold">
                      ₹1499{" "}
                      <span className="text-xs font-normal text-white/80">
                        + 5% tax (₹1574)
                      </span>
                    </p>
                    <div className="mt-1 h-px w-24 bg-[#E8DCCB]" />
                  </div>

                  <p className="text-sm leading-relaxed text-white/90">
                    Designed for solo travellers, the standard single room
                    offers a cozy and functional space with warm decor that
                    provides comfort and relaxation.
                  </p>
                </div>

                <Link
                  href="/rooms/standard-single-room"
                  className="self-start inline-flex items-center gap-2 text-xs uppercase tracking-wider px-5 py-2 rounded-full bg-white/20 backdrop-blur border border-white/30 text-white hover:bg-white hover:text-[#2E2E2E] transition-all duration-300"
                >
                  Read More
                </Link>
              </div>
            </div>

            {/* Card 2 – Accent Border */}
            <div className="relative h-80 rounded-2xl overflow-hidden border border-[#D8CFC0]">
              {/* Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage:
                    "url('/cozy-hotel-room-with-ambient-lighting.jpg')",
                }}
              />

              {/* Dark + Blur Overlay */}
              <div className="absolute inset-0 bg-black/70" />

              {/* Content */}
              <div className="relative z-10 h-full p-8 flex flex-col justify-between text-white">
                <div>
                  <h2 className="text-2xl font-heading font-semibold mb-3">
                    Standard Double
                  </h2>

                  {/* Tariff */}
                  <div className="mb-4">
                    <p className="text-[#E8DCCB] text-sm font-semibold">
                      ₹1999{" "}
                      <span className="text-xs font-normal text-white/80">
                        + 5% tax (₹2099)
                      </span>
                    </p>
                    <div className="mt-1 h-px w-24 bg-[#E8DCCB]" />
                  </div>

                  <p className="text-sm leading-relaxed text-white/90">
                    The Standard Double Room is a spacious and well-appointed
                    accommodation offering enhanced comfort, privacy and modern
                    amenities.
                  </p>
                </div>

                <Link
                  href="/rooms/standard-double-room"
                  className="self-start inline-flex items-center gap-2 text-xs uppercase tracking-wider px-5 py-2 rounded-full bg-white/20 backdrop-blur border border-white/30 text-white hover:bg-white hover:text-[#2E2E2E] transition-all duration-300"
                >
                  Read More
                </Link>
              </div>
            </div>

            {/* Card 3 – Soft Highlight */}
            <div className="relative h-80 rounded-2xl overflow-hidden border border-[#D8CFC0]">
              {/* Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage:
                    "url('/cozy-hotel-room-with-ambient-lighting.jpg')",
                }}
              />

              {/* Dark + Blur Overlay */}
              <div className="absolute inset-0 bg-black/70" />

              {/* Content */}
              <div className="relative z-10 h-full p-8 flex flex-col justify-between text-white">
                <div>
                  <h2 className="text-2xl font-heading font-semibold mb-3">Deluxe Room</h2>

                  {/* Tariff */}
                  <div className="mb-4">
                    <p className="text-[#E8DCCB] text-sm font-semibold">
                      ₹2399{" "}
                      <span className="text-xs font-normal text-white/80">
                        + 5% tax (₹2519)
                      </span>
                    </p>
                    <div className="mt-1 h-px w-24 bg-[#E8DCCB]" />
                  </div>

                  <p className="text-sm leading-relaxed text-white/90">
                    The Deluxe Room offers enhanced space with elegant interiors
                    and premium comforts, creating a refined yet inviting
                    atmosphere.
                  </p>
                </div>

                <Link
                  href="/rooms/deluxe-room"
                  className="self-start inline-flex items-center gap-2 text-xs uppercase tracking-wider px-5 py-2 rounded-full bg-white/20 backdrop-blur border border-white/30 text-white hover:bg-white hover:text-[#2E2E2E] transition-all duration-300"
                >
                  Read More
                </Link>
              </div>
            </div>

            {/* Card 4 – Minimal Luxury */}
            <div className="relative h-80 rounded-2xl overflow-hidden border border-[#D8CFC0]">
              {/* Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage:
                    "url('/cozy-hotel-room-with-ambient-lighting.jpg')",
                }}
              />

              {/* Dark + Blur Overlay */}
              <div className="absolute inset-0 bg-black/70" />

              {/* Content */}
              <div className="relative z-10 h-full p-8 flex flex-col justify-between text-white">
                <div>
                  <h2 className="text-2xl font-heading font-semibold mb-3">
                    Super Deluxe Room
                  </h2>

                  {/* Tariff */}
                  <div className="mb-4">
                    <p className="text-[#E8DCCB] text-sm font-semibold">
                      ₹3999{" "}
                      <span className="text-xs font-normal text-white/80">
                        + 5% tax (₹4199)
                      </span>
                    </p>
                    <div className="mt-1 h-px w-24 bg-[#E8DCCB]" />
                  </div>

                  <p className="text-sm leading-relaxed text-white/90">
                    The Super Deluxe Room is the most spacious category at Hotel
                    Nakshathra, featuring refined decor, superior amenities and
                    exceptional comfort.
                  </p>
                </div>

                <Link
                  href="/rooms/super-deluxe-room"
                  className="self-start inline-flex items-center gap-2 text-xs uppercase tracking-wider px-5 py-2 rounded-full bg-white/20 backdrop-blur border border-white/30 text-white hover:bg-white hover:text-[#2E2E2E] transition-all duration-300"
                >
                  Read More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
