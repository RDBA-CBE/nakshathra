"use client";

import { motion } from "framer-motion";
import Header from "@/components/header";
import Footer from "@/components/sections/footer";

export default function AboutClient() {
  return (
    <main className="min-h-screen text-[#2E2E2E]">
      <Header />

      {/* HERO */}
      <section className="pt-20 bg-[#FAF8F3] pb-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-heading font-semibold"
          >
            About Hotel Nakshathra
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto"
          >
            Hotel Nakshathra is a premium business-class hotel that blends
            modern elegance and authentic Indian hospitality to offer a relaxing
            and pleasant stay.
          </motion.p>
        </div>
      </section>

      {/* CONTENT FLOW */}
      <section className="py-24 bg-white px-4">
        <div className="max-w-5xl mx-auto space-y-20">
          {/* Section 1 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative pl-6 border-l border-[#D8CFC0]"
          >
            <h2 className="text-2xl font-heading font-semibold mb-4">
              Premium comfort for every stay
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Thoughtfully designed for business travellers, pilgrims and
              families alike, the hotel features well-appointed rooms,
              contemporary amenities and intuitive service that ensures
              effortless comfort throughout your visit.
            </p>
          </motion.div>

          {/* Section 2 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative pl-6 border-l border-[#D8CFC0]"
          >
            <h2 className="text-2xl font-heading font-semibold mb-4">
              Dedicated to exceptional hospitality
            </h2>
            <p className="text-gray-700 leading-relaxed">
              With a strong commitment to cleanliness, safety and personalized
              care, every stay at Hotel Nakshathra is crafted to be peaceful,
              reliable and truly satisfying. Our warm hospitality and attention
              to detail create an environment where guests feel welcomed,
              relaxed and well cared for.
            </p>
          </motion.div>

          {/* Section 3 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-[#FAF8F3]rounded-2xl p-8 md:p-12"
          >
            <h2 className="text-2xl font-heading font-semibold mb-4">
              A welcoming stay in the heart of Sivakasi
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Located in the heart of Sivakasi, Hotel Nakshathra provides easy
              access to local transportation, shopping areas and key landmarks,
              making it an ideal choice for both business travellers and
              tourists exploring the region. Its strategic location makes every
              commute smooth and time-saving.
            </p>
          </motion.div>

          {/* Section 4 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative pl-6 border-l border-[#D8CFC0]"
          >
            <h2 className="text-2xl font-heading font-semibold mb-4">
              Thoughtfully curated design
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Blending contemporary design with timeless Indian warmth, Hotel
              Nakshathra balances style and functionality. From tastefully
              designed interiors to attentive service, every element is curated
              to enhance guest comfort and convenience.
            </p>
          </motion.div>

          {/* Closing */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center pt-8"
          >
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Whether you are visiting Sivakasi for business, pilgrimage or
              family travel,{" "}
              <span className="font-semibold">Hotel Nakshathra</span> promises a
              welcoming stay defined by comfort, reliability and genuine
              hospitality.
            </p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
