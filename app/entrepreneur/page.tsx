import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Mail, Phone, MapPin, Rocket, Users, Target, TrendingUp, Shield, Zap, Globe, Brain, Palette, TrendingUp as TrendingUpIcon, User, BookOpen, Heart, Building2, Code, Lightbulb, BarChart3, Paintbrush } from "lucide-react"
import Footer from "@/components/footer"
import SubscribeSection from "@/components/subscribe-section"
import SharedBackground from "@/components/shared-background"

import Image from "next/image"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Entrepreneur - Engjell Rraklli",
  description: "Explore the diverse portfolio of businesses and divisions founded by Engjell Rraklli, from staff augmentation to AI solutions and 3D visualization.",
  keywords: ["engjell rraklli", "divisions", "businesses", "Division5", "Division3D", "DivisionAI", "DivisionGrowth", "DivisionDesign", "entrepreneur"],
  openGraph: {
    title: "Entrepreneur - Engjell Rraklli",
    description: "Explore the diverse portfolio of businesses and divisions founded by Engjell Rraklli, from staff augmentation to AI solutions and 3D visualization.",
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
    description: "Explore the diverse portfolio of businesses and divisions founded by Engjell Rraklli, from staff augmentation to AI solutions and 3D visualization.",
    images: ["/DSC0019-scaled.jpg"]
  },
  alternates: {
    canonical: "https://engjellrraklli.com/entrepreneur"
  }
}

export default function EntrepreneurPage() {
  return (
    <SharedBackground>
          {/* Hero Section with Background Image */}
          <div className="relative px-8 md:px-16 lg:px-24 xl:px-32 2xl:px-40 py-24 md:py-32 mb-8 md:mb-12">
            <div className="absolute inset-0 rounded-2xl overflow-hidden">
              <Image
                src="/DSC0036-scaled.jpg"
                alt="Engjell Rraklli - Entrepreneur and Business Leader"
                fill
                className="object-cover object-top"
                priority
                quality={95}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20"></div>
            </div>
            <div className="relative z-10 max-w-6xl mx-auto text-center">
              <h1 className="text-white text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold font-bebas uppercase tracking-wide">ENTREPRENEUR</h1>
            </div>
              </div>

          {/* Content Section */}
          <div className="px-8 md:px-16 lg:px-24 xl:px-32 2xl:px-40 py-8 md:py-12">
            <div className="max-w-7xl mx-auto">
          <div className="prose prose-invert prose-lg max-w-none">
                <h2 className="text-white font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bebas uppercase tracking-wide mb-4 text-left break-words">BUILDING THE FUTURE</h2>
                <h3 className="text-white text-2xl md:text-3xl font-bold mb-8 font-bebas leading-tight text-left">One entrepreneur, multiple ventures, endless possibilities.</h3>

                <div className="max-w-4xl">
                  <blockquote className="text-emerald-400 text-xl md:text-2xl font-semibold italic mb-6 border-l-4 border-emerald-400 pl-6 text-left">
                    "Success isn't about building one great company, it's about building multiple great companies that work together."
                  </blockquote>
                  <p className="text-body text-lg md:text-xl leading-relaxed mb-6 font-montserrat text-left">
                    From my early days as a young entrepreneur, I've always believed in the power of diversification and specialization. Each division represents a unique expertise area, allowing us to serve clients with world-class solutions across multiple domains.
                  </p>
                  <p className="text-body text-lg md:text-xl leading-relaxed mb-8 font-montserrat text-left">
                    What started as a single staff augmentation company has evolved into a comprehensive ecosystem of specialized divisions, each focused on delivering exceptional value in their respective fields.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* FOUNDER & CEO Section */}
          <div className="px-8 md:px-16 lg:px-24 xl:px-32 2xl:px-40 py-8 md:py-12">
            <div className="w-full">
              <h2 className="text-white font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bebas uppercase tracking-wide mb-8 md:mb-12 text-center break-words">
                FOUNDER & CEO
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 mb-20">
                {/* Division5 */}
                <Link href="/entrepreneur/division5" className="group">
                  <Card className="relative bg-transparent border-2 border-emerald-400/40 text-emerald-400 hover:border-emerald-400 hover:bg-transparent transition-all duration-700 h-64 overflow-hidden shadow-lg hover:shadow-emerald-400/20 hover:scale-105">
                    <div className="absolute inset-0 bg-gradient-to-br from-emerald-400/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
                    <div className="absolute inset-0 bg-gradient-to-br from-emerald-400/10 via-transparent to-transparent opacity-60"></div>
                    <div className="relative z-10 h-full flex flex-col justify-center items-center">
                      <div className="w-20 h-20 flex items-center justify-center mb-5 transition-all duration-700 transform translate-y-0 group-hover:-translate-y-[calc(100%-1px)]">
                        <div className="relative">
                          <Users className="text-emerald-400 group-hover:text-emerald-400 text-4xl transition-colors duration-700 group-hover:scale-110" />
                          <div className="absolute inset-0 bg-emerald-400/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                        </div>
                      </div>
                      <CardTitle className="text-emerald-400 group-hover:text-emerald-400 font-bebas uppercase tracking-wide text-2xl transition-all duration-700 transform translate-y-0 group-hover:-translate-y-full opacity-100 group-hover:opacity-0">DIVISION 5</CardTitle>
                      <div className="absolute inset-0 flex items-center justify-center transform translate-y-full group-hover:translate-y-0 transition-all duration-700 delay-300">
                        <p className="text-emerald-400/90 text-sm leading-relaxed font-montserrat text-center px-4 max-w-xs">
                          Elite engineering teams on demand. 50+ world-class developers scaling your tech infrastructure.
                        </p>
                      </div>
                    </div>
                  </Card>
                </Link>

                {/* DivisionGrowth */}
                <Link href="/entrepreneur/divisiongrowth" className="group">
                  <Card className="relative bg-transparent border-2 border-blue-400/40 text-blue-400 hover:border-blue-400 hover:bg-transparent transition-all duration-700 h-64 overflow-hidden shadow-lg hover:shadow-blue-400/20 hover:scale-105">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-400/10 via-transparent to-transparent opacity-60"></div>
                    <div className="relative z-10 h-full flex flex-col justify-center items-center">
                      <div className="w-20 h-20 flex items-center justify-center mb-5 transition-all duration-700 transform translate-y-0 group-hover:-translate-y-[calc(100%-1px)]">
                        <div className="relative">
                          <TrendingUpIcon className="text-blue-400 group-hover:text-blue-400 text-4xl transition-colors duration-700 group-hover:scale-110" />
                          <div className="absolute inset-0 bg-blue-400/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                        </div>
                      </div>
                      <CardTitle className="text-blue-400 group-hover:text-blue-400 font-bebas uppercase tracking-wide text-2xl transition-all duration-700 transform translate-y-0 group-hover:-translate-y-full opacity-100 group-hover:opacity-0">DIVISION GROWTH</CardTitle>
                      <div className="absolute inset-y-0 flex items-center justify-center transform translate-y-full group-hover:translate-y-0 transition-all duration-700 delay-300">
                        <p className="text-blue-400/90 text-sm leading-relaxed font-montserrat text-center px-4 max-w-xs">
                          LinkedIn automation for B2B companies. Connect with decision makers and deliver qualified meetings.
                        </p>
                      </div>
                    </div>
                  </Card>
                </Link>

                {/* Division3D */}
                <Link href="/entrepreneur/division3d" className="group">
                  <Card className="relative bg-transparent border-2 border-purple-400/40 text-purple-400 hover:border-purple-400 hover:bg-transparent transition-all duration-700 h-64 overflow-hidden shadow-lg hover:shadow-purple-400/20 hover:scale-105">
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-400/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-400/10 via-transparent to-transparent opacity-60"></div>
                    <div className="relative z-10 h-full flex flex-col justify-center items-center">
                      <div className="w-20 h-20 flex items-center justify-center mb-5 transition-all duration-700 transform translate-y-0 group-hover:-translate-y-[calc(100%-1px)]">
                        <div className="relative">
                          <Rocket className="text-purple-400 group-hover:text-purple-400 text-4xl transition-colors duration-700 group-hover:scale-110" />
                          <div className="absolute inset-0 bg-purple-400/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                        </div>
                      </div>
                      <CardTitle className="text-purple-400 group-hover:text-purple-400 font-bebas uppercase tracking-wide text-2xl transition-all duration-700 transform translate-y-0 group-hover:-translate-y-full opacity-100 group-hover:opacity-0">DIVISION 3D</CardTitle>
                      <div className="absolute inset-0 flex items-center justify-center transform translate-y-full group-hover:translate-y-0 transition-all duration-700 delay-300">
                        <p className="text-purple-400/90 text-sm leading-relaxed font-montserrat text-center px-4 max-w-xs">
                          Next-gen 3D experiences in the browser. From virtual showrooms to interactive visualizations.
                        </p>
                      </div>
                    </div>
                  </Card>
                </Link>

                {/* DivisionAI */}
                <Link href="/entrepreneur/divisionai" className="group">
                  <Card className="relative bg-transparent border-2 border-cyan-400/40 text-cyan-400 hover:border-cyan-400 hover:bg-transparent transition-all duration-700 h-64 overflow-hidden shadow-lg hover:shadow-cyan-400/20 hover:scale-105">
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/10 via-transparent to-transparent opacity-60"></div>
                    <div className="relative z-10 h-full flex flex-col justify-center items-center">
                      <div className="w-20 h-20 flex items-center justify-center mb-5 transition-all duration-700 transform translate-y-0 group-hover:-translate-y-[calc(100%-1px)]">
                        <div className="relative">
                          <Brain className="text-cyan-400 group-hover:text-cyan-400 text-4xl transition-colors duration-700 group-hover:scale-110" />
                          <div className="absolute inset-0 bg-cyan-400/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                        </div>
                      </div>
                      <CardTitle className="text-cyan-400 group-hover:text-cyan-400 font-bebas uppercase tracking-wide text-2xl transition-all duration-700 transform translate-y-0 group-hover:-translate-y-full opacity-100 group-hover:opacity-0">DIVISION AI</CardTitle>
                      <div className="absolute inset-0 flex items-center justify-center transform translate-y-full group-hover:translate-y-0 transition-all duration-700 delay-300">
                        <p className="text-cyan-400/90 text-sm leading-relaxed font-montserrat text-center px-4 max-w-xs">
                          Real engineers powered by AI. World-class software delivered at record speed for a fraction of the cost.
                        </p>
                      </div>
                    </div>
                  </Card>
                </Link>
              </div>
            </div>
          </div>

          {/* CO-FOUNDER Section */}
          <div className="px-8 md:px-16 lg:px-24 xl:px-32 2xl:px-40 py-8 md:py-12">
            <div className="w-full">
              <h2 className="text-white font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bebas uppercase tracking-wide mb-8 md:mb-12 text-center break-words">
                CO-FOUNDER
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-10 md:gap-12 mb-20 max-w-4xl mx-auto">
                {/* DivisionDesign */}
                <Link href="/entrepreneur/divisiondesign" className="group">
                  <Card className="relative bg-transparent border-2 border-pink-400/40 text-pink-400 hover:border-pink-400 hover:bg-transparent transition-all duration-700 h-64 overflow-hidden shadow-lg hover:shadow-pink-400/20 hover:scale-105">
                    <div className="absolute inset-0 bg-gradient-to-br from-pink-400/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
                    <div className="absolute inset-0 bg-gradient-to-br from-pink-400/10 via-transparent to-transparent opacity-60"></div>
                    <div className="relative z-10 h-full flex flex-col justify-center items-center">
                      <div className="w-20 h-20 flex items-center justify-center mb-5 transition-all duration-700 transform translate-y-0 group-hover:-translate-y-[calc(100%-1px)]">
                        <div className="relative">
                          <Palette className="text-pink-400 group-hover:text-pink-400 text-4xl transition-colors duration-700 group-hover:scale-110" />
                          <div className="absolute inset-0 bg-pink-400/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                        </div>
                      </div>
                      <CardTitle className="text-pink-400 group-hover:text-pink-400 font-bebas uppercase tracking-wide text-2xl transition-all duration-700 transform translate-y-0 group-hover:-translate-y-full opacity-100 group-hover:opacity-0">DIVISION DESIGN</CardTitle>
                      <div className="absolute inset-0 flex items-center justify-center transform translate-y-full group-hover:translate-y-0 transition-all duration-700 delay-300">
                        <p className="text-pink-400/90 text-sm leading-relaxed font-montserrat text-center px-4 max-w-xs">
                          Design that moves markets. From pixel-perfect interfaces to brand experiences that create emotional connections.
                        </p>
                      </div>
                    </div>
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
