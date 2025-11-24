import Header from "@/components/header"
import Footer from "@/components/sections/footer"
import AboutSection from "@/components/sections/about-section"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About Us - Nakshatra Royal Stay",
  description: "Learn more about Nakshatra Royal Stay and our commitment to excellence",
}

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#FAF8F3]">
      <Header />
      <div className="pt-32">
        <AboutSection />
      </div>
      <Footer />
    </main>
  )
}
