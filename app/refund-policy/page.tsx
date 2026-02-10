import Header from "@/components/header";
import Footer from "@/components/sections/footer";
import type { Metadata } from "next";
import { Check } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy - Hotel Nakshathra",
  description:
    "Privacy Policy for Hotel Nakshathra - Your privacy is important to us",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen">
      <Header />

      <section className="pb-20 px-4 bg-[#FFFFFF]">
        {/* Hero Section */}
        <div className="relative rounded-3xl bg-[#F3EEE6] px-6 sm:px-10 py-12 sm:py-16 text-center">
          <h1 className="mt-4 font-heading text-3xl sm:text-4xl md:text-5xl text-[#152A38] max-w-3xl mx-auto leading-tight">
            Refund Policy
          </h1>
        </div>

        {/* Content Section */}
        <div className="max-w-6xl mx-auto mt-16">
          <div className="px-8 sm:px-12">
            <div className="space-y-12">
              {/* Introduction */}

              {/* Information Collection */}
              <section className="space-y-4 ">
                <h2 className="font-heading text-4xl text-[#152A38]">
                  Refund and Cancellation Policy
                </h2>

                <ul className="pl-6 space-y-2">
                  <li className="group flex items-center gap-3 py-3">
                    <span className="w-6 h-6 rounded-full bg-[#F6F7F9] flex items-center justify-center text-[203 46% 15%] transition-colors duration-300 group-hover:bg-[#F4C430] group-hover:text-white">
                      <Check size={14} />
                    </span>
                    12% will be deducted against cancellation as cancellation
                    fee.
                  </li>
                  <li className="group flex items-center gap-3 py-3">
                    <span className="w-6 h-6 rounded-full bg-[#F6F7F9] flex items-center justify-center text-[203 46% 15%] transition-colors duration-300 group-hover:bg-[#F4C430] group-hover:text-white">
                      <Check size={14} />
                    </span>
                    Full refund till 48 hours of check in., but there will be
                    cancellation fee..
                  </li>
                  <li className="group flex items-center gap-3 py-3">
                    <span className="w-6 h-6 rounded-full bg-[#F6F7F9] flex items-center justify-center text-[203 46% 15%] transition-colors duration-300 group-hover:bg-[#F4C430] group-hover:text-white">
                      <Check size={14} />
                    </span>
                    50% refund between 48hours to 24 hours of check in..
                  </li>
                  <li className="group flex items-center gap-3 py-3">
                    <span className="w-6 h-6 rounded-full bg-[#F6F7F9] flex items-center justify-center text-[203 46% 15%] transition-colors duration-300 group-hover:bg-[#F4C430] group-hover:text-white">
                      <Check size={14} />
                    </span>
                    No refund for cancellation within 24 hours of check in..
                  </li>
                  <li className="group flex items-center gap-3 py-3">
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
