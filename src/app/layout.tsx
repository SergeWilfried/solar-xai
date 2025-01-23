import { GeistSans } from "geist/font/sans"
import type { Metadata } from "next"
import "./globals.css"

import Footer from "@/components/ui/Footer"
import { NavBar } from "@/components/ui/Navbar"
import { siteConfig } from "./siteConfig"

export const metadata: Metadata = {
  metadataBase: new URL("https://solartech.com"), // Replace with actual domain if different
  title: siteConfig.name,
  description: siteConfig.description,
  keywords: [
    "Smart Farming",
    "Precision Agriculture",
    "Autonomous Farming",
    "Agricultural Technology",
    "AgTech",
    "Farm Automation",
    "Drones",
    "Sensors",
    "Irrigation",
    "Yield Analytics",
    "Sustainable Farming",
  ],
  authors: [
    {
      name: "QuadraxAI, Inc.", // Use company name
      url: "https://solartech.com/about", // Link to about us page
    },
  ],
  creator: "Solar Technologies, Inc.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://solartech.com", // Full URL
    title: "Solar Technologies - Smart Farming Solutions",
    description: "AI-powered solutions for sustainable, efficient, and profitable farming. Autonomous monitoring, precision agriculture, smart irrigation, and more.",
    siteName: "Solar Technologies",
    images: [
        {
            url: "https://solartech.com/images/og-image.jpg", // Add a relevant image URL here
            width: 1200,
            height: 630,
            alt: "Solar Technologies Smart Farming Solutions",
        }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Solar Technologies - Smart Farming Solutions",
    description: "AI-powered solutions for sustainable, efficient, and profitable farming. Autonomous monitoring, precision agriculture, smart irrigation, and more.",
    creator: "@SolarTechAg", // Replace with actual Twitter handle if available
    images: {
        url: "https://solartech.com/images/twitter-card.jpg", // Add a relevant image URL here
        alt: "Solar Technologies Smart Farming Solutions",
    },
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${GeistSans.className} min-h-screen overflow-x-hidden scroll-auto bg-gray-50 antialiased selection:bg-orange-100 selection:text-orange-600`}
      >
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
