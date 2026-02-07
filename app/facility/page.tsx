import Header from "@/components/header";
import Footer from "@/components/sections/footer";
import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Facilities - Nakshatra Royal Stay",
  description: "Discover our world-class facilities and amenities",
};

const facilities = [
  {
    title: "Prime Location in the Heart of Sivakasi",
    desc: "Easy access to local transportation, shopping areas and key landmarks makes commuting effortless and convenient.",
    img: "/images/facilities/location.jpg",
  },
  {
    title: "Complimentary High-Speed Wi-Fi",
    desc: "Stay connected for work, study or leisure with fast, reliable internet throughout the hotel.",
    img: "/images/facilities/wifi.jpg",
  },
  {
    title: "Business-Class Luxury at Exceptional Value",
    desc: "Modern rooms, refined interiors and premium services ensure a comfortable stay without compromise.",
    img: "/images/facilities/interior.jpg",
  },
  {
    title: "Best Rates Guaranteed on Online Bookings",
    desc: "Enjoy competitive pricing and exclusive online offers when you book directly with us.",
    img: "/images/facilities/rates.jpg",
  },
  {
    title: "Modern Amenities with Elegant Interiors",
    desc: "Each room is thoughtfully designed with contemporary decor, ergonomic furnishings and intuitive features for your convenience.",
    img: "/images/facilities/safety.jpg",
  },
  {
    title: "Strict Safety, Hygiene and Cleanliness Protocols",
    desc: "Our high standards ensure a safe and healthy environment for every guest.",
    img: "/images/facilities/hospitality.jpg",
  },
  {
    title: "Warm, Personalized Indian Hospitality",
    desc: "Our attentive staff and bespoke services create a welcoming atmosphere that makes every stay truly special.",
    img: "/images/facilities/hospitality.jpg",
  },
];

export default function FacilityPage() {
  return (
    <main className="min-h-screen">
      <Header />

      <section className="pb-24 px-4 bg-[#FFFFFF]">
        <div className="relative rounded-3xl bg-[#F3EEE6] px-6 sm:px-10 py-6 sm:py-6 text-center">
          <h1 className="mt-4 font-heading text-3xl sm:text-4xl md:text-5xl text-[#152A38] max-w-3xl mx-auto leading-tight">
            Facilities
          </h1>

          <p className="mt-6 text-gray-600 max-w-2xl mx-auto text-sm sm:text-base">
            Stay Connected. Stay Comfortable
            <br />
            Facilities designed for modern lifestyles
          </p>

          <div className="mt-8 flex justify-center">
            <span className="h-[1px] w-24 bg-[#8B4513]/40"></span>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-16 space-y-20 md:space-y-24">
          {/* HERO IMAGE SECTION */}

          {/* INTRO – IMAGE + TEXT */}
          <div className="grid md:grid-cols-2 gap-10 md:gap-14 items-center max-w-6xl mx-auto">
            <div className="relative h-[260px] sm:h-[320px] md:h-[360px] rounded-2xl overflow-hidden">
              <Image
                src="/images/facilities/interior.jpg"
                alt="Modern Hotel Interiors"
                fill
                className="object-cover"
              />
            </div>

            <div>
              <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
                At Hotel Nakshathra, we combine modern convenience with
                authentic Indian hospitality to ensure every stay is seamless,
                comfortable and memorable.
              </p>

              <p className="mt-5 text-gray-700 leading-relaxed text-sm sm:text-base">
                From smooth check-ins to impeccably maintained spaces, we cater
                to the needs of business travellers, pilgrims and families.
                Every room and common area is equipped with modern amenities,
                creating an environment where you can relax and stay productive.
              </p>
            </div>
          </div>

          {/* WHY CHOOSE US */}
          <div className="space-y-10 w-full mx-auto">
            <h2 className="text-2xl font-heading sm:text-3xl  font-semibold text-center">
              Why Choose Hotel Nakshathra?
            </h2>

            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {facilities.map((item) => (
                <div
                  key={item.title}
                  className="group rounded-2xl overflow-hidden bg-white shadow-sm hover:shadow-md transition"
                >
                  <div className="relative h-44 sm:h-48">
                    <Image
                      src={item.img}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>

                  <div className="p-6">
                    <h3 className="text-base font-heading sm:text-lg font-semibold mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-700 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CLOSING */}
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
              At <span className="font-semibold">Hotel Nakshathra</span>, every
              detail is curated to provide comfort, convenience and care, making
              it your ideal choice for business, leisure or spiritual visits in
              Sivakasi.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
