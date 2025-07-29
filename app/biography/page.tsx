import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Mail, Phone, MapPin, Rocket, Users, Target, TrendingUp, Shield, Zap, Globe, Calendar, ArrowRight, Building2, Palette, Brain, TrendingUp as TrendingUpIcon } from "lucide-react"
import Footer from "@/components/footer"
import SubscribeSection from "@/components/subscribe-section"
import SharedBackground from "@/components/shared-background"
import TimelineComponent from "@/components/timeline-component"

import Image from "next/image"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Biography - Engjell Rraklli",
  description: "Discover the entrepreneurial journey of Engjell Rraklli, from founding Division5 to building a framework for scaling service-based businesses.",
  keywords: ["entrepreneur", "biography", "Division5", "entrepreneurship journey", "business scaling", "service business"],
  openGraph: {
    title: "Biography - Engjell Rraklli",
    description: "Discover the entrepreneurial journey of Engjell Rraklli, from founding Division5 to building a framework for scaling service-based businesses.",
    type: "website",
    url: "https://engjellrraklli.com/biography",
    images: [
      {
        url: "/DSC0019-scaled.jpg",
        width: 1200,
        height: 630,
        alt: "Engjell Rraklli - Entrepreneur and Business Leader"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Biography - Engjell Rraklli",
    description: "Discover the entrepreneurial journey of Engjell Rraklli, from founding Division5 to building a framework for scaling service-based businesses.",
    images: ["/DSC0019-scaled.jpg"]
  },
  alternates: {
    canonical: "https://engjellrraklli.com/biography"
  }
}

export default function BiographyPage() {
  return (
    <SharedBackground>
          {/* Hero Section with Background Image */}
          <div className="relative px-8 md:px-16 lg:px-24 xl:px-32 2xl:px-40 py-24 md:py-32 mb-8 md:mb-12">
            <div className="absolute inset-0 rounded-2xl overflow-hidden">
              <Image
                src="/DSC0019-scaled.jpg"
                alt="Engjell Rraklli - Entrepreneur"
                fill
                className="object-cover"
                priority
                quality={95}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20"></div>
            </div>
            <div className="relative z-10 max-w-6xl mx-auto text-center">
              <h1 className="text-white text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold font-bebas uppercase tracking-wide">BIOGRAPHY</h1>
            </div>
          </div>

          {/* Content Section */}
          <div className="px-8 md:px-16 lg:px-24 xl:px-32 2xl:px-40 py-8 md:py-12">
            <div className="max-w-7xl mx-auto">
              <div className="prose prose-invert prose-lg max-w-none">
                <h2 className="text-white font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bebas uppercase tracking-wide mb-8 text-left break-words">ENGJELL RRAKLLI - ENTREPRENEUR</h2>

                <div className="max-w-4xl">
                  <p className="text-body text-lg md:text-xl leading-relaxed mb-6 font-montserrat text-left">
                    I started entrepreneurship at a very young age. Just before graduating I quit University to build{" "}
                    <span className="text-emerald-400 font-semibold">division5</span>, a company providing staff augmentation services in the software industry.{" "}
                    <span className="text-emerald-400 font-semibold">division5</span> became very successful both in the domestic and international markets with customers all over the world and over 50 employees.
                  </p>
                  <p className="text-body text-lg md:text-xl leading-relaxed mb-8 font-montserrat text-left">
                    My next goal is to expand on that experience, scale division5 up and build a framework for scaling service-based businesses beyond 7 figures. As a result, I write about my journey of{" "}
                    <span className="text-emerald-400 font-semibold">scaling the unscalable</span> where I share the details of my journey, my lessons, challenges and insights on how to grow service-based businesses to 7-figures and beyond.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Timeline Section */}
          <div className="px-8 md:px-16 lg:px-24 xl:px-32 2xl:px-40 py-12 md:py-16">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-white font-bold text-4xl md:text-5xl lg:text-6xl font-bebas uppercase tracking-wide mb-3">ENTREPRENEURIAL JOURNEY</h2>
                <p className="text-gray-300 text-lg md:text-xl font-montserrat">A decade of building, pivoting, and scaling businesses</p>
              </div>
              
              <TimelineComponent />
            </div>
          </div>

          {/* SCALING THE UNSCALABLE Section */}
          <SubscribeSection 
            heading="SCALING THE UNSCALABLE"
            title="I write about scaling service-based businesses in my newsletter. Subscribe below."
            placeholder="Mail"
            buttonText="SUBSCRIBE"
          />

          {/* Footer */}
          <Footer />
    </SharedBackground>
  )
} 