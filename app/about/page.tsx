"use client";

import { useRef } from "react";
import { useInView } from "@/hooks/use-in-view";
import { useCounter } from "@/hooks/use-counter";
import { motion } from "framer-motion";
import Header from "@/components/header";
import Footer from "@/components/sections/footer";
import Image from "next/image";

export default function AboutClient() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef);

  const countAmenities = useCounter(isInView, 20, 900);
  const countRooms = useCounter(isInView, 49, 900);
  return (
    <main className="min-h-screen bg-white">
      <Header />

      {/* Hero Banner with Elegant Typography */}
      <section className="relative w-full overflow-hidden">
        <div className="relative flex flex-col lg:flex-row w-full">
          {/* LEFT CONTENT - Light Background */}
          <div className="relative z-10 w-full lg:w-1/2 bg-gradient-to-br from-[#F8F4E9] to-[#F1ECE0] flex items-center">
            <div className="w-full px-6 sm:px-10 lg:px-16 xl:px-20 py-20 lg:py-20">
              <div>
                {/* Eyebrow / Subtitle */}

                {/* Main Heading */}
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="heading leading-[1.15]"
                >
                  About <span className="text-[#b3862f]">Us</span>{" "}
                </motion.h1>

                {/* Description */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="space-y-6 mb-10 "
                >
                  <p className="para">
                    Hotel Nakshathra is a premium business-class hotel that
                    blends modern elegance and authentic Indian hospitality to
                    offer a relaxing and pleasant stay. Thoughtfully designed
                    for business travellers, pilgrims and families alike, the
                    hotel features well-appointed rooms, contemporary amenities
                    and intuitive service that ensures effortless comfort
                    throughout your visit.
                  </p>
                  
                </motion.div>

                {/* Decorative Line */}

                {/* Features */}
              </div>
            </div>
          </div>

          {/* DIAGONAL SEPARATOR */}
          <div className="hidden lg:block absolute left-1/2 top-0 h-full -translate-x-1/2 z-20 pointer-events-none">
            <div className="relative h-full w-px">
              <div className="absolute inset-y-0 left-1/2 transform -translate-x-1/2 w-[2px]">
                <div className="h-full bg-gradient-to-b from-[#8B4513]/20 via-[#8B4513]/40 to-[#8B4513]/20"></div>
              </div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-[#FBF6E6] border-2 border-[#8B4513]/30 rounded-full"></div>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="w-full lg:w-1/2 relative">
            <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent z-10"></div>
            <Image
              src="/about/comfort.webp"
              alt="Hotel Nakshathra Elegant Interior"
              fill
              className="object-cover object-center"
              priority
            />

            {/* Image Overlay Content */}
          </div>
        </div>
      </section>

      {/* Hospitality Section - Full Width */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            {/* Large Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative aspect-[5/4] rounded-3xl overflow-hidden">
                <Image
                  src="/about/hospitality.webp"
                  alt="Exceptional Hospitality at Hotel Nakshathra"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
              </div>
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div>
                <div className="h-px w-24 bg-gradient-to-r from-[#8B4513] to-transparent mb-6"></div>
                <h2 className="heading leading-[1.15]">
                  Dedicated to{" "}
                  <span className="text-[#b3862f]">Exceptional</span>{" "}
                  Hospitality
                </h2>
              </div>

              <p className="para">
                With a strong commitment to cleanliness, safety and personalized
                care, every stay at Hotel Nakshathra is crafted to be peaceful,
                reliable and truly satisfying. Our warm hospitality and
                attention to detail create an environment where guests feel
                welcomed, relaxed and well cared for.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Location Section - Elegant Split Layout */}
      <section className="py-20 bg-[#FBF6E6]">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div>
                <div className="h-px w-24 bg-gradient-to-r from-[#8B4513] to-transparent mb-6"></div>
                <h2 className="heading leading-[1.15]">
                  A Welcoming Stay in the{" "}
                  <span className="text-[#b3862f]">Heart of Sivakasi</span>
                </h2>
              </div>

              <div className="space-y-6">
                <p className="para">
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
            </motion.div>

            {/* Map Image with Overlay */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative aspect-square rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/about/welcoming-stay.webp"
                  alt="Hotel Nakshathra Location in Sivakasi"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-[#8B4513]/10 to-transparent"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Design Philosophy - Centered Layout */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="heading leading-[1.15] mb-8">
              Thoughtfully{" "}
              <span className="text-[#b3862f]">Curated Design</span>
            </h2>
            <p className="para">
              Blending contemporary design with timeless Indian warmth, Hotel
              Nakshathra balances style and functionality. From tastefully
              designed interiors to attentive service, every element is curated
              to enhance guest comfort and convenience.
            </p>
          </motion.div>

          {/* Large Design Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative mb-16"
          >
            <div className="relative aspect-[16/9] rounded-3xl overflow-hidden">
              <Image
                src="/about/design.webp"
                alt="Hotel Nakshathra Interior Design"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Final Promise - Elegant Statement */}
      <section className="relative py-32 overflow-hidden">
        {/* Background Container */}
        <div className="absolute inset-0">
          {/* Background Image - Full Size & Fit */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: "url('/home/dining.webp')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          {/* Light Overlay for Better Readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/55" />
        </div>

        <div className="relative max-w-4xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Glass Card */}
            <div className="relative overflow-hidden rounded-3xl bg-white/85 backdrop-blur-md shadow-2xl border border-white/30">
              {/* Decorative Border Elements */}
              <div className="absolute -top-4 -left-4 w-8 h-8 border-t-2 border-l-2 border-[#8B4513]/20 rounded-tl-lg" />
              <div className="absolute -bottom-4 -right-4 w-8 h-8 border-b-2 border-r-2 border-[#8B4513]/20 rounded-br-lg" />

              <div className="relative z-10 text-center space-y-8 px-6 sm:px-12 py-16">
                {/* Main Content */}
                <div className="space-y-8">
                  {/* Opening Line */}
                  <p className="para">
                    Whether you are visiting Sivakasi for{" "}
                    <span className="text-[#b3862f] font-medium">Business</span>
                    ,{" "}
                    <span className="text-[#b3862f] font-medium">
                      Pilgrimage
                    </span>{" "}
                    or{" "}
                    <span className="text-[#b3862f] font-medium">
                      Family Travel
                    </span>
                    ,
                  </p>

                  {/* Hotel Name Divider Section */}
                  
                    {/* Top Divider */}
                    

                    {/* Hotel Name */}
                    <div className="text-3xl sm:text-4xl md:text-5xl font-heading text-[#b3862f] mb-6">
                      Hotel Nakshathra
                    </div>

                    {/* Closing Line */}
                    <p className="para max-w-2xl mx-auto ">
                      promises a welcoming stay defined by comfort, reliability
                      and genuine hospitality.
                    </p>

                    {/* Bottom Divider */}
                    <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#8B4513]/25 to-transparent" />
                  
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
