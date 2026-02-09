"use client";

import { motion } from "framer-motion";
import Header from "@/components/header";
import Footer from "@/components/sections/footer";
import Image from "next/image";

export default function AboutClient() {
  return (
    <main className="min-h-screen">
      <Header />

      <section className="pb-24 px-4 bg-[#FFFFFF]">
        {/* HERO */}
        <div className="relative rounded-3xl bg-[#F3EEE6] px-6 sm:px-10 py-6 sm:py-6 text-center">
          <h1 className="mt-4 font-heading text-3xl sm:text-4xl md:text-5xl text-[#152A38] max-w-3xl mx-auto leading-tight">
            About
          </h1>

          <p className="mt-6 text-gray-600 max-w-5xl mx-auto text-sm sm:text-base">
            Hotel Nakshathra is a premium business-class hotel that blends
            modern elegance and authentic Indian hospitality to offer a relaxing
            and pleasant stay. Thoughtfully designed for business travellers,
            pilgrims and families alike, the hotel features well-appointed
            rooms, contemporary amenities and intuitive service that ensures
            effortless comfort throughout your visit.
          </p>

          <div className="mt-8 flex justify-center">
            <span className="h-[1px] w-24 bg-[#8B4513]/40"></span>
          </div>
        </div>

        {/* CONTENT FLOW */}

        <div className="max-w-6xl mx-auto mt-20 space-y-28 px-4">
          {/* Block 1 */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="grid md:grid-cols-2 gap-12 items-stretch"
          >
            {/* Image */}
            <div className="relative rounded-3xl overflow-hidden min-h-[240px]">
              <Image
                src="/hotel-hallway-elegant.jpg"
                alt="Premium comfort rooms"
                fill
                className="object-cover"
              />
            </div>

            {/* Content */}
            <div className="flex flex-col justify-center">
              <span className="uppercase tracking-widest text-xs text-[#8B4513]">
                Comfort
              </span>
              <h2 className="mt-3 text-2xl sm:text-3xl font-heading font-semibold text-[#2C2416]">
                Premium comfort for every stay
              </h2>
              <p className="mt-5 text-gray-700 leading-relaxed">
                Thoughtfully designed for business travellers, pilgrims and
                families, our rooms combine refined interiors, modern amenities
                and intuitive service to ensure effortless comfort throughout
                your stay.
              </p>
            </div>
          </motion.div>

          {/* Block 2 (reverse) */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="grid md:grid-cols-2 gap-12 items-stretch"
          >
            {/* Image */}
            <div className="md:order-2 relative rounded-3xl overflow-hidden min-h-[240px]">
              <Image
                src="/hotel-reception-modern.jpg"
                alt="Exceptional hospitality"
                fill
                className="object-cover"
              />
            </div>

            {/* Content */}
            <div className="md:order-1 flex flex-col justify-center">
              <span className="uppercase tracking-widest text-xs text-[#8B4513]">
                Hospitality
              </span>
              <h2 className="mt-3 text-2xl sm:text-3xl font-heading font-semibold text-[#2C2416]">
                Dedicated to exceptional hospitality
              </h2>
              <p className="mt-5 text-gray-700 leading-relaxed">
                With a strong commitment to cleanliness, safety and personalized
                care, every stay at Hotel Nakshathra is crafted to be peaceful,
                reliable and truly satisfying. Our warm hospitality and
                attention to detail create an environment where guests feel
                welcomed, relaxed and well cared for.
              </p>
            </div>
          </motion.div>

          {/* Block 3 – Highlight Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative rounded-3xl overflow-hidden bg-[#F3EEE6]"
          >
            <div className="grid md:grid-cols-2 gap-10 p-10 md:p-14 items-stretch">
              {/* Image */}
              <div className="relative rounded-2xl overflow-hidden min-h-[260px]">
                <Image
                  src="/hotel-hallway-elegant.jpg"
                  alt="Central location Sivakasi"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Content */}
              <div className="flex flex-col justify-center">
                <h2 className="text-2xl sm:text-3xl font-heading font-semibold text-[#2C2416]">
                  A welcoming stay in the heart of Sivakasi
                </h2>
                <p className="mt-5 text-gray-700 leading-relaxed">
                  Located in the heart of Sivakasi, Hotel Nakshathra provides
                  easy access to local transportation, shopping areas and key
                  landmarks, making it an ideal choice for both business
                  travellers and tourists exploring the region. Its strategic
                  location makes every commute smooth and time-saving. The
                  hotel’s calm setting provides a refreshing escape from
                  congestion, allowing business travellers and pilgrims to relax
                  and move effortlessly between engagements.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Block 4 */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="grid md:grid-cols-2 gap-12 items-stretch"
          >
            {/* Content */}
            <div className="flex flex-col justify-center">
              <span className="uppercase tracking-widest text-xs text-[#8B4513]">
                Design
              </span>
              <h2 className="mt-3 text-2xl sm:text-3xl font-heading font-semibold text-[#2C2416]">
                Thoughtfully curated design
              </h2>
              <p className="mt-5 text-gray-700 leading-relaxed">
                Blending contemporary design with timeless Indian warmth, Hotel
                Nakshathra balances style and functionality. From tastefully
                designed interiors to attentive service, every element is
                curated to enhance guest comfort and convenience.
              </p>
            </div>

            {/* Image */}
            <div className="relative rounded-3xl overflow-hidden min-h-[240px]">
              <Image
                src="/hotel-lobby-seating.jpg"
                alt="Thoughtful design interiors"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>

          {/* Closing */}
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative mt-20 rounded-3xl overflow-hidden"
        >
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: "url('/hotel-exterior-night.jpg')",
            }}
          />

          {/* Animated Blur Overlay */}
          <motion.div
            initial={{
              backgroundColor: "rgba(0,0,0,0.2)",
            }}
            whileInView={{
              backgroundColor: "rgba(0,0,0,0.45)",
            }}
            transition={{ duration: 1 }}
            className="absolute inset-0"
          />

          {/* Content */}
          <div className="relative overflow-hidden rounded-3xl">
            {/* Background image */}
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: "url('/hotel-exterior-night.jpg')" }}
            />

            {/* Overlay */}
           <motion.div
  initial={{
    backgroundColor: "rgba(145, 145, 145, 0.8)",
    backdropFilter: "blur(0px)",
  }}
  whileInView={{
    backgroundColor: "rgba(0, 0, 0, 0.45)",
    backdropFilter: "blur(8px)",
  }}
  transition={{ duration: 1, ease: "easeOut" }}
  className="absolute inset-0"
 />


            {/* Content */}
            <div className="relative z-10 px-6 py-16 text-center">
              <p className="text-lg text-[#E8DCCB] max-w-3xl mx-auto">
                Whether you are visiting Sivakasi for business, pilgrimage or
                family travel,
                <span className="font-semibold text-white">
                  {" "}
                  Hotel Nakshathra{" "}
                </span>
                promises a welcoming stay defined by comfort, reliability and
                genuine hospitality.
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      <Footer />
    </main>
  );
}
