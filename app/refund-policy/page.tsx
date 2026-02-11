"use client";
import Header from "@/components/header";
import Footer from "@/components/sections/footer";
import type { Metadata } from "next";
import { Check } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

// export const metadata: Metadata = {
//   title: "Privacy Policy - Hotel Nakshathra",
//   description:
//     "Privacy Policy for Hotel Nakshathra - Your privacy is important to us",
// };

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <section className="relative w-full overflow-hidden">
        <div className="relative flex flex-col lg:flex-row  w-full">
          {/* LEFT CONTENT - Light Background */}
          <div className="relative z-10 w-full lg:w-1/2 bg-gradient-to-br from-[#F8F4E9] to-[#F1ECE0] flex items-center">
            <div className="w-full px-6 sm:px-10 lg:px-16 xl:px-20 py-16 lg:py-20">
              <div>
                {/* Eyebrow / Subtitle */}

                {/* Main Heading */}
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="heading leading-[1.15] "
                >
                  <span className="text-[#b3862f]">Refund</span> and <br />
                  Cancellation Policy
                  <br />
                </motion.h1>

                {/* Description */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="space-y-6 "
                ></motion.div>

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
              src="/facilities/intro.webp"
              alt="Hotel Nakshathra Elegant Interior"
              fill
              className="object-cover object-center"
              priority
            />

            {/* Image Overlay Content */}
          </div>
        </div>
      </section>
      <section className="pb-20 px-4">
        {/* Content Section */}
        <div className="max-w-6xl mx-auto mt-16">
          <div className="px-8 sm:px-12">
            <div className="space-y-12">
              {/* Introduction */}

              {/* Information Collection */}
              <section className="space-y-4 ">
                <ul className="pl-6 space-y-2">
                  <li className="group list flex items-center gap-3 py-3">
                    <span className="w-6 h-6 rounded-full bg-[#F6F7F9] flex items-center justify-center text-[203 46% 15%] transition-colors duration-300 group-hover:bg-[#F4C430] group-hover:text-white">
                      <Check size={14} />
                    </span>
                    12% will be deducted against cancellation as cancellation
                    fee.
                  </li>
                  <li className="group list flex items-center gap-3 py-3">
                    <span className="w-6 h-6 rounded-full bg-[#F6F7F9] flex items-center justify-center text-[203 46% 15%] transition-colors duration-300 group-hover:bg-[#F4C430] group-hover:text-white">
                      <Check size={14} />
                    </span>
                    Full refund till 48 hours of check in., but there will be
                    cancellation fee..
                  </li>
                  <li className="group list flex items-center gap-3 py-3">
                    <span className="w-6 h-6 rounded-full bg-[#F6F7F9] flex items-center justify-center text-[203 46% 15%] transition-colors duration-300 group-hover:bg-[#F4C430] group-hover:text-white">
                      <Check size={14} />
                    </span>
                    50% refund between 48hours to 24 hours of check in..
                  </li>
                  <li className="group list flex items-center gap-3 py-3">
                    <span className="w-6 h-6 rounded-full bg-[#F6F7F9] flex items-center justify-center text-[203 46% 15%] transition-colors duration-300 group-hover:bg-[#F4C430] group-hover:text-white">
                      <Check size={14} />
                    </span>
                    No refund for cancellation within 24 hours of check in..
                  </li>
                  <li className="group list flex items-center gap-3 py-3">
                    <span className="w-6 h-6 rounded-full bg-[#F6F7F9] flex items-center justify-center text-[203 46% 15%] transition-colors duration-300 group-hover:bg-[#F4C430] group-hover:text-white">
                      <Check size={14} />
                    </span>
                    Refunds are issued within 5 to 7 business days..
                  </li>
                </ul>
              </section>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
