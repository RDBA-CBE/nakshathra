import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono, Playfair_Display } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })
const _playfair = Playfair_Display({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Hotel Nakshatra - Luxury Hotel in Sivakasi",
  description:
    "Experience comfort and luxury at Nakshatra. Premium hotel accommodations in Sivakasi with modern amenities and exceptional service.",
  generator: "v0.app",
  keywords: "luxury hotel, Sivakasi hotel, Nakshatra, premium accommodation",
  authors: [{ name: "Nakshatra" }],
  openGraph: {
    title: "Nakshatra - Luxury Hotel in Sivakasi",
    description: "Experience comfort and luxury at Nakshatra.",
    type: "website",
  },
  icons: {
    icon: [
      {
        url: "/favicon.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/favicon.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/HN-favicon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/favicon.png",
  },
}

export const viewport = {
  themeColor: "#8B4513",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
