import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter_Tight } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { MagneticCursor } from "@/components/ui/magnetic-cursor"
import "./globals.css"

const interTight = Inter_Tight({
  subsets: ["latin"],
  variable: "--font-inter-tight",
})

export const metadata: Metadata = {
  title: "Menana Digital | Digital Marketing Agency",
  description: "We build high-converting digital funnels, landing pages, and growth strategies that turn clicks into customers.",
  keywords: ["digital marketing", "lead generation", "landing pages", "conversion optimization", "paid ads", "growth"],
  authors: [{ name: "Menana Digital" }],
  openGraph: {
    title: "Menana Digital | Digital Marketing Agency",
    description: "We build high-converting digital funnels, landing pages, and growth strategies that turn clicks into customers.",
    type: "website",
  },
}

export const viewport: Viewport = {
  themeColor: "#ffffff",
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
      <body className={`${interTight.className} font-sans antialiased`}>
        <MagneticCursor />
        {children}
        <Analytics />
      </body>
    </html>
  )
}
