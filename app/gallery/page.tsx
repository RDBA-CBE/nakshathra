import Header from "@/components/header"
import Footer from "@/components/sections/footer"
import GallerySection from "@/components/sections/gallery-section"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Gallery - Nakshatra Royal Stay",
  description: "View our stunning hotel interiors and facilities",
}

export default function GalleryPage() {
  return (
    <main className="min-h-screen bg-[#FAF8F3]">
      <Header />
      <div className="pt-32">
        <GallerySection />
      </div>
      <Footer />
    </main>
  )
}
