import Header from "@/components/header";
import Footer from "@/components/sections/footer";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Rooms - Nakshatra Royal Stay",
  description: "Explore our luxury rooms and suites",
};

const rooms = [
  {
    id: "01",
    title: "Standard Single",
    price: "₹1499 + 5% tax (₹1574)",
    description:
      "Designed for solo travellers, the standard single room offers a cozy and functional space with warm decor that provides comfort and relaxation.",
    image: "/cozy-hotel-room-with-ambient-lighting.jpg",
    link: "/rooms/standard-single-room",
  },
  {
    id: "02",
    title: "Standard Double",
    price: "₹1999 + 5% tax (₹2099)",
    description:
      "The Standard Double Room is a spacious and well-appointed accommodation offering enhanced comfort, privacy and modern amenities.",
    image: "/cozy-hotel-room-with-ambient-lighting.jpg",
    link: "/rooms/standard-double-room",
  },
  {
    id: "03",
    title: "Deluxe Room",
    price: "₹2399 + 5% tax (₹2519)",
    description:
      "The Deluxe Room offers enhanced space with elegant interiors and premium comforts, creating a refined yet inviting atmosphere.",
    image: "/cozy-hotel-room-with-ambient-lighting.jpg",
    link: "/rooms/deluxe-room",
  },
  {
    id: "04",
    title: "Super Deluxe Room",
    price: "₹3999 + 5% tax (₹4199)",
    description:
      "The Super Deluxe Room is the most spacious category at Hotel Nakshathra, featuring refined decor, superior amenities and exceptional comfort. ",
    image: "/cozy-hotel-room-with-ambient-lighting.jpg",
    link: "/rooms/super-deluxe-room",
  },
];

export default function RoomsPage() {
  return (
    <main className="min-h-screen">
      <Header />

      <section className=" pb-24 px-4 bg-[#FFFFFF]">
        <div className="relative rounded-3xl bg-[#F3EEE6] px-6 sm:px-10 py-6 sm:py-6 text-center">
          <h1 className="mt-4 font-heading text-3xl sm:text-4xl md:text-5xl text-[#152A38] max-w-3xl mx-auto leading-tight">
            Our Rooms
          </h1>

          <p className="mt-6 text-gray-600 max-w-5xl mx-auto text-sm sm:text-base">
            Discover thoughtfully designed rooms that reflects warmth and
            comfort. Each room features calming interiors, functional layouts
            and contemporary amenities, crafted to provide a peaceful and
            convenient stay. Whether you’re visiting for a short stop or an
            extended stay, our rooms offer the perfect balance of simplicity,
            comfort and elegance.
          </p>

          <div className="mt-8 flex justify-center">
            <span className="h-[1px] w-24 bg-[#8B4513]/40"></span>
          </div>
        </div>
        <div className="max-w-6xl mt-16 mx-auto">
          {/* Heading */}

          {/* Rooms Grid */}
          <div className="grid gap-10 sm:grid-cols-2 mt-16 lg:grid-cols-2">
            {rooms.map((room) => (
              <div
                key={room.id}
                className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden"
              >
                {/* Image */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={room.image}
                    alt={room.title}
                    className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>

                {/* Content */}
                <div className="p-6 relative">
                  {/* Room Number */}
                  <span className="absolute top-6 right-6 text-5xl font-light text-gray-200">
                    {room.id}
                  </span>

                  {/* Icon */}

                  <h3 className="text-xl font-heading font-semibold mb-2">
                    {room.title}
                  </h3>

                  <p className="text-sm font-semibold text-[#9C8468] mb-3">
                    {room.price}
                  </p>

                  <p className="text-sm text-gray-600 leading-relaxed mb-6">
                    {room.description}
                  </p>

                  <Link
                    href={room.link}
                    className="inline-flex items-center gap-2 text-sm font-medium text-[#2E2E2E] hover:text-[#9C8468] transition"
                  >
                    Read More <span>→</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
