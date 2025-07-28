import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Mail, Phone, MapPin, Rocket, Users, Target, TrendingUp, Shield, Zap, Globe } from "lucide-react"
import Footer from "@/components/footer"
import SubscribeSection from "@/components/subscribe-section"
import SharedBackground from "@/components/shared-background"

import Image from "next/image"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "My Story - Engjell Rraklli",
  description: "Discover the entrepreneurial journey of Engjell Rraklli, from founding Division5 to building a framework for scaling service-based businesses.",
  keywords: ["entrepreneur", "my story", "Division5", "entrepreneurship journey", "business scaling", "service business"],
  openGraph: {
    title: "My Story - Engjell Rraklli",
    description: "Discover the entrepreneurial journey of Engjell Rraklli, from founding Division5 to building a framework for scaling service-based businesses.",
    type: "website",
    url: "https://engjellrraklli.com/entrepreneur/my-story",
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
    title: "My Story - Engjell Rraklli",
    description: "Discover the entrepreneurial journey of Engjell Rraklli, from founding Division5 to building a framework for scaling service-based businesses.",
    images: ["/DSC0019-scaled.jpg"]
  },
  alternates: {
    canonical: "https://engjellrraklli.com/entrepreneur/my-story"
  }
}

export default function MyStoryPage() {
  return (
    <SharedBackground>
          {/* Hero Section */}
          <div className="px-8 md:px-16 lg:px-24 xl:px-32 2xl:px-40 py-16 md:py-24 min-h-screen flex flex-col justify-center">
            <div className="max-w-7xl">
              <div className="text-center mb-16">
                <h1 className="text-white font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bebas uppercase tracking-wide mb-8 text-center">MY STORY</h1>
              </div>

          <div className="prose prose-invert prose-lg max-w-none">
                <h2 className="text-white font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bebas uppercase tracking-wide mb-4 text-center break-words">ENGJELL RRAKLLI - ENTREPRENEUR</h2>
                <h3 className="text-white text-2xl md:text-3xl font-bold mb-8 font-bebas leading-tight">Empowering companies through staff augmentation services.</h3>

                <div className="flex flex-col-reverse md:grid md:grid-cols-2 gap-12 md:gap-16 lg:gap-20 items-center">
                  <div>
                    <p className="text-body text-lg md:text-xl leading-relaxed mb-6 font-montserrat">
                      I started entrepreneurship at a very young age. Just before graduating I quit University to build{" "}
                      <span className="text-emerald-400 font-semibold">division5</span>, a company providing staff augmentation services in the software industry.{" "}
                      <span className="text-emerald-400 font-semibold">division5</span> became very successful both in the domestic and international markets with customers all over the world and over 50 employees.
                    </p>
                    <p className="text-body text-lg md:text-xl leading-relaxed mb-8 font-montserrat">
                      My next goal is to expand on that experience, scale division5 up and build a framework for scaling service-based businesses beyond 7 figures. As a result, I write about my journey of{" "}
                      <span className="text-emerald-400 font-semibold">scaling the unscalable</span> where I share the details of my journey, my lessons, challenges and insights on how to grow service-based businesses to 7-figures and beyond.
                    </p>
                  </div>
                  <div className="relative">
                    <div className="w-full h-80 md:h-96 lg:h-[500px] rounded-2xl overflow-hidden">
                      <Image
                        src="/DSC0019-scaled.jpg"
                        alt="Engjell Rraklli - Entrepreneur"
                        width={600}
                        height={400}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
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