import Header from "@/components/header";
import Footer from "@/components/sections/footer";
import type { Metadata } from "next";
import { MapPin, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export const metadata: Metadata = {
  title: "Contact Us - Nakshatra Royal Stay",
  description: "Get in touch with Nakshatra Royal Stay",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <Header />

      <section className=" pb-24 px-4 bg-[#FFFFFF]">
        <div className="relative rounded-3xl bg-[#F3EEE6] px-6 sm:px-10 py-6 sm:py-6 text-center">
          <h1 className="mt-4 font-heading text-3xl sm:text-4xl md:text-5xl text-[#152A38] max-w-3xl mx-auto leading-tight">
            Contact
          </h1>

          <p className="mt-6 text-gray-600 max-w-5xl mx-auto text-sm sm:text-base">
            At Hotel Nakshathra, we strive to make your experience seamless and
            memorable. Reach out to us for bookings, inquiries or any
            assistance, you’ll receive prompt and personalized support.{" "}
          </p>

          <div className="mt-8 flex justify-center">
            <span className="h-[1px] w-24 bg-[#8B4513]/40"></span>
          </div>
        </div>
        <div className="max-w-6xl mt-16 mx-auto">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-stretch">
            {/* Left: Contact Info */}
            <div className="bg-[#152A38] text-white rounded-2xl p-10 flex flex-col justify-between">
              <div>
                <h2 className="font-heading text-3xl mb-6">
                  We’d love to hear from you.
                </h2>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <Phone className="w-6 h-6 text-[#E6C8A0]" />
                    <div>
                      <p className="font-medium">Phone</p>
                      <p className="text-white/80">+91 90871 73000</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Mail className="w-6 h-6 text-[#E6C8A0]" />
                    <div>
                      <p className="font-medium">Email</p>
                      <p className="text-white/80">
                        contact@nakshatraroyalstay.com
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <MapPin className="w-6 h-6 text-[#E6C8A0]" />
                    <div>
                      <p className="font-medium">Location</p>
                      <p className="text-white/80">Papum, Arunachal Pradesh</p>
                    </div>
                  </div>
                </div>
              </div>

              <p className="mt-10 text-sm text-white/60">
                We usually respond within 24 hours.
              </p>
            </div>

            {/* Right: Form */}
            <div className="bg-white rounded-2xl shadow-xl p-10">
              <h2 className="font-heading text-3xl text-[#152A38] mb-6">
                Send Us a Message
              </h2>

              <form className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Name
                    </label>
                    <Input placeholder="Your name" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email
                    </label>
                    <Input type="email" placeholder="your@email.com" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Subject
                  </label>
                  <Input placeholder="How can we help?" />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <Textarea rows={6} placeholder="Write your message..." />
                </div>

                <Button className="w-full bg-[#8B4513] hover:bg-[#723610] text-white py-6 text-lg">
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
