import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Mail, Phone, MapPin, Rocket, Users, Target, TrendingUp, Shield, Zap, Globe, Brain, Palette, TrendingUp as TrendingUpIcon } from "lucide-react"
import Footer from "@/components/footer"
import SubscribeSection from "@/components/subscribe-section"
import SharedBackground from "@/components/shared-background"

import Image from "next/image"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Entrepreneur - Engjell Rraklli",
  description: "Explore Engjell Rraklli's entrepreneurial ventures including Division5, Division3D, DivisionAI, DivisionGrowth, and DivisionDesign.",
  keywords: ["entrepreneur", "Division5", "Division3D", "DivisionAI", "DivisionGrowth", "DivisionDesign", "business ventures"],
  openGraph: {
    title: "Entrepreneur - Engjell Rraklli",
    description: "Explore Engjell Rraklli's entrepreneurial ventures including Division5, Division3D, DivisionAI, DivisionGrowth, and DivisionDesign.",
    type: "website",
    url: "https://engjellrraklli.com/entrepreneur",
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
    title: "Entrepreneur - Engjell Rraklli",
    description: "Explore Engjell Rraklli's entrepreneurial ventures including Division5, Division3D, DivisionAI, DivisionGrowth, and DivisionDesign.",
    images: ["/DSC0019-scaled.jpg"]
  },
  alternates: {
    canonical: "https://engjellrraklli.com/entrepreneur"
  }
}

export default function EntrepreneurPage() {
  return (
    <SharedBackground>
          {/* Hero Section */}
          <div className="px-8 md:px-16 lg:px-24 xl:px-32 2xl:px-40 py-16 md:py-24 min-h-screen flex flex-col justify-center">
            <div className="max-w-7xl">
              <div className="text-center mb-16">
                <h1 className="text-white font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bebas uppercase tracking-wide mb-8 text-center">ENTREPRENEUR</h1>
              </div>

          <div className="prose prose-invert prose-lg max-w-none">
                <h2 className="text-white font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bebas uppercase tracking-wide mb-4 text-center break-words">ENGJELL RRAKLLI - ENTREPRENEUR</h2>
                <h3 className="text-white text-2xl md:text-3xl font-bold mb-8 font-bebas leading-tight">Building and scaling multiple successful businesses.</h3>

                <div className="flex flex-col-reverse md:grid md:grid-cols-2 gap-12 md:gap-16 lg:gap-20 items-center">
                  <div>
                    <p className="text-body text-lg md:text-xl leading-relaxed mb-6 font-montserrat">
                      I started entrepreneurship at a very young age. Just before graduating I quit University to build{" "}
                      <span className="text-emerald-400 font-semibold">division5</span>, a company providing staff augmentation services in the software industry.{" "}
                      <span className="text-emerald-400 font-semibold">division5</span> became very successful both in the domestic and international markets with customers all over the world and over 50 employees.
                    </p>
                    <p className="text-body text-lg md:text-xl leading-relaxed mb-8 font-montserrat">
                      Since then, I've expanded into multiple ventures including{" "}
                      <span className="text-orange-400 font-semibold">division3D</span>,{" "}
                      <span className="text-blue-400 font-semibold">divisionAI</span>,{" "}
                      <span className="text-green-400 font-semibold">divisionGrowth</span>, and{" "}
                      <span className="text-pink-400 font-semibold">divisionDesign</span>. Each division focuses on specific expertise areas while sharing the same commitment to excellence and innovation.
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

          {/* DIVISIONS Section */}
          <div className="px-8 md:px-16 lg:px-24 xl:px-32 2xl:px-40 py-16 md:py-24">
            <div className="max-w-7xl">
              <h2 className="text-white font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bebas uppercase tracking-wide mb-16 text-center break-words">MY DIVISIONS</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 mb-20">


                {/* Division5 */}
                <Link href="/entrepreneur/division5" className="group">
                  <Card className="bg-transparent border-2 border-emerald-400 text-white hover:bg-emerald-400 hover:text-slate-800 transition-all duration-300 h-full">
                    <CardHeader className="text-center">
                      <div className="w-16 h-16 flex items-center justify-center mb-4 mx-auto">
                        <Zap className="text-emerald-400 group-hover:text-slate-800 text-3xl transition-colors" />
                      </div>
                      <CardTitle className="text-emerald-400 group-hover:text-slate-800 font-bebas uppercase tracking-wide">DIVISION5</CardTitle>
                    </CardHeader>
                    <CardContent className="text-center">
                      <p className="text-body group-hover:text-slate-700 text-base leading-relaxed font-montserrat">
                        Staff augmentation services providing world-class developers to scale your engineering team.
                      </p>
                    </CardContent>
                  </Card>
                </Link>

                {/* Division3D */}
                <Link href="/entrepreneur/division3d" className="group">
                  <Card className="bg-transparent border-2 border-orange-400 text-white hover:bg-orange-400 hover:text-slate-800 transition-all duration-300 h-full">
                    <CardHeader className="text-center">
                      <div className="w-16 h-16 flex items-center justify-center mb-4 mx-auto">
                        <Rocket className="text-orange-400 group-hover:text-slate-800 text-3xl transition-colors" />
                      </div>
                      <CardTitle className="text-orange-400 group-hover:text-slate-800 font-bebas uppercase tracking-wide">DIVISION3D</CardTitle>
                    </CardHeader>
                    <CardContent className="text-center">
                      <p className="text-body group-hover:text-slate-700 text-base leading-relaxed font-montserrat">
                        Cutting-edge 3D browser applications and visualization solutions for immersive experiences.
                      </p>
                    </CardContent>
                  </Card>
                </Link>

                {/* DivisionAI */}
                <Link href="/entrepreneur/divisionai" className="group">
                  <Card className="bg-transparent border-2 border-blue-400 text-white hover:bg-blue-400 hover:text-slate-800 transition-all duration-300 h-full">
                    <CardHeader className="text-center">
                      <div className="w-16 h-16 flex items-center justify-center mb-4 mx-auto">
                        <Brain className="text-blue-400 group-hover:text-slate-800 text-3xl transition-colors" />
                      </div>
                      <CardTitle className="text-blue-400 group-hover:text-slate-800 font-bebas uppercase tracking-wide">DIVISIONAI</CardTitle>
                    </CardHeader>
                    <CardContent className="text-center">
                      <p className="text-body group-hover:text-slate-700 text-base leading-relaxed font-montserrat">
                        AI solutions, machine learning, and intelligent automation for modern businesses.
                      </p>
                    </CardContent>
                  </Card>
                </Link>

                {/* DivisionGrowth */}
                <Link href="/entrepreneur/divisiongrowth" className="group">
                  <Card className="bg-transparent border-2 border-green-400 text-white hover:bg-green-400 hover:text-slate-800 transition-all duration-300 h-full">
                    <CardHeader className="text-center">
                      <div className="w-16 h-16 flex items-center justify-center mb-4 mx-auto">
                        <TrendingUpIcon className="text-green-400 group-hover:text-slate-800 text-3xl transition-colors" />
                      </div>
                      <CardTitle className="text-green-400 group-hover:text-slate-800 font-bebas uppercase tracking-wide">DIVISIONGROWTH</CardTitle>
                    </CardHeader>
                    <CardContent className="text-center">
                      <p className="text-body group-hover:text-slate-700 text-base leading-relaxed font-montserrat">
                        Business growth strategies, marketing optimization, and scalable growth solutions.
                      </p>
                    </CardContent>
                  </Card>
                </Link>

                {/* DivisionDesign */}
                <Link href="/entrepreneur/divisiondesign" className="group">
                  <Card className="bg-transparent border-2 border-pink-400 text-white hover:bg-pink-400 hover:text-slate-800 transition-all duration-300 h-full">
                    <CardHeader className="text-center">
                      <div className="w-16 h-16 flex items-center justify-center mb-4 mx-auto">
                        <Palette className="text-pink-400 group-hover:text-slate-800 text-3xl transition-colors" />
                      </div>
                      <CardTitle className="text-pink-400 group-hover:text-slate-800 font-bebas uppercase tracking-wide">DIVISIONDESIGN</CardTitle>
                    </CardHeader>
                    <CardContent className="text-center">
                      <p className="text-body group-hover:text-slate-700 text-base leading-relaxed font-montserrat">
                        Creative design solutions, brand identity, and visual experiences that bring joy to users.
                      </p>
                    </CardContent>
                  </Card>
                </Link>
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
