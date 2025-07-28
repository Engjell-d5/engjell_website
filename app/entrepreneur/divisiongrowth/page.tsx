import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Mail, Phone, MapPin, Rocket, Users, Target, TrendingUp, Shield, Zap, Globe, BarChart3, LineChart, PieChart, Linkedin, MessageSquare, Calendar, Star, Sparkles, Briefcase } from "lucide-react"
import Footer from "@/components/footer"
import SubscribeSection from "@/components/subscribe-section"
import SharedBackground from "@/components/shared-background"

import Image from "next/image"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "DivisionGrowth | LinkedIn Automation for B2B Companies",
  description: "Connect with decision makers through LinkedIn automation. We deliver qualified meetings that grow your B2B business at a fraction of the cost of an in-house team.",
  keywords: ["DivisionGrowth", "LinkedIn automation", "B2B lead generation", "LinkedIn outreach", "sales qualified meetings", "B2B sales", "outbound marketing"],
  openGraph: {
    title: "DivisionGrowth | LinkedIn Automation for B2B Companies",
    description: "Connect with decision makers through LinkedIn automation. We deliver qualified meetings that grow your B2B business at a fraction of the cost of an in-house team.",
    type: "website",
    url: "https://engjellrraklli.com/entrepreneur/divisiongrowth",
    images: [
      {
        url: "/DSC0019-scaled.jpg",
        width: 1200,
        height: 630,
        alt: "Engjell Rraklli - DivisionGrowth LinkedIn Automation"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "DivisionGrowth | LinkedIn Automation for B2B Companies",
    description: "Connect with decision makers through LinkedIn automation. We deliver qualified meetings that grow your B2B business at a fraction of the cost of an in-house team.",
    images: ["/DSC0019-scaled.jpg"]
  },
  alternates: {
    canonical: "https://engjellrraklli.com/entrepreneur/divisiongrowth"
  }
}

export default function DivisionGrowthPage() {
  return (
    <SharedBackground>
          {/* Hero Section */}
          <div className="px-8 md:px-16 lg:px-24 xl:px-32 2xl:px-40 py-16 md:py-24 min-h-screen flex flex-col justify-center">
            <div className="max-w-7xl">
              <div className="text-center mb-16">
                <h1 className="text-white font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bebas uppercase tracking-wide mb-8 text-center">DIVISIONGROWTH</h1>
              </div>

          <div className="prose prose-invert prose-lg max-w-none">
                <h2 className="text-white font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bebas uppercase tracking-wide mb-4 text-center break-words">DIVISIONGROWTH</h2>
                <h3 className="text-white text-2xl md:text-3xl font-bold mb-8 font-bebas leading-tight">
                  LinkedIn Automation for B2B Companies
                </h3>
                
                <div className="flex flex-col-reverse md:grid md:grid-cols-2 gap-12 md:gap-16 lg:gap-20 items-center mb-12">
                  <div className="space-y-6 text-gray-300 text-lg md:text-xl leading-relaxed font-montserrat">
                    <p>
                      Stop wasting time on cold outreach. We connect B2B companies with <span className="font-bold text-white">decision makers</span> through LinkedIn automation, delivering <span className="font-bold text-white">qualified meetings</span> that convert.
                    </p>
                    <p>
                      Our clients see <span className="text-green-400 font-bold">3x more meetings in 30 days</span>. We handle your entire LinkedIn outreach process, from profile optimization to booking qualified meetings with decision makers.
                    </p>
                    <p>
                      Perfect for B2B SaaS companies, professional service firms, and startups who need consistent pipeline generation at a fraction of the cost of an in-house team.
                    </p>
                  </div>
                  
                  <div className="relative">
                    <div className="w-full h-80 md:h-96 lg:h-[500px] rounded-2xl overflow-hidden bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center">
                      <Linkedin className="text-white text-8xl" />
                    </div>
                  </div>
                </div>

                <div className="text-center">
                  <Link href="https://divisiongrowth.com" target="_blank" rel="noopener noreferrer">
                    <Button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-slate-800 font-bold px-8 md:px-12 py-4 md:py-6 text-base md:text-lg transition-all duration-300 font-bebas">
                      TRY OUR SERVICE
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Key Benefits Section */}
          <div className="px-8 md:px-16 lg:px-24 xl:px-32 2xl:px-40 py-16 md:py-24">
            <div className="max-w-7xl">
              <h2 className="text-white font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bebas uppercase tracking-wide mb-16 text-center break-words">WHY CHOOSE DIVISIONGROWTH?</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-20">
                {/* Benefit 1 */}
                <div className="text-center">
                  <div className="w-16 h-16 flex items-center justify-center mb-6 mx-auto bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl">
                    <Linkedin className="text-white text-3xl" />
                  </div>
                  <h3 className="text-white font-bold text-xl mb-4 font-bebas uppercase tracking-wide">LinkedIn Management</h3>
                  <p className="text-body text-base md:text-lg leading-relaxed font-montserrat">We optimize your profile and content strategy to position you as an industry authority and attract your ideal clients.</p>
                </div>

                {/* Benefit 2 */}
                <div className="text-center">
                  <div className="w-16 h-16 flex items-center justify-center mb-6 mx-auto bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl">
                    <Target className="text-white text-3xl" />
                  </div>
                  <h3 className="text-white font-bold text-xl mb-4 font-bebas uppercase tracking-wide">Targeted Outreach</h3>
                  <p className="text-body text-base md:text-lg leading-relaxed font-montserrat">We identify and connect with decision makers in your target industries through personalized, high-converting campaigns.</p>
                </div>

                {/* Benefit 3 */}
                <div className="text-center">
                  <div className="w-16 h-16 flex items-center justify-center mb-6 mx-auto bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl">
                    <MessageSquare className="text-white text-3xl" />
                  </div>
                  <h3 className="text-white font-bold text-xl mb-4 font-bebas uppercase tracking-wide">Meeting Booking</h3>
                  <p className="text-body text-base md:text-lg leading-relaxed font-montserrat">We qualify leads and book meetings directly in your calendar, so you can focus on closing deals, not prospecting.</p>
                </div>
              </div>

              <div className="text-center">
                <Link href="https://divisiongrowth.com" target="_blank" rel="noopener noreferrer">
                  <Button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-slate-800 font-bold px-8 md:px-12 py-4 md:py-6 text-base md:text-lg rounded-full transition-all duration-300 font-bebas">
                    CHECK OUT OUR WEBSITE
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          {/* Results Section */}
          <div className="px-8 md:px-16 lg:px-24 xl:px-32 2xl:px-40 py-16 md:py-24">
            <div className="max-w-7xl">
              <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
                <div className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 text-sm font-medium text-slate-800">
                  <BarChart3 className="h-4 w-4" />
                  <span>Real Results</span>
                </div>
                <div className="space-y-2 max-w-3xl">
                  <h2 className="text-white font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bebas uppercase tracking-wide mb-4 text-center break-words">OUR CLIENTS SEE 3X MORE MEETINGS IN 30 DAYS</h2>
                  <p className="text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed font-montserrat">Don't take our word for it. Here's what our clients have achieved with divisionGrowth.</p>
                </div>
              </div>
              
              <div className="grid gap-6 md:gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
                <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 shadow-lg relative border border-white/10">
                  <div className="absolute top-0 right-0 bg-blue-500 text-white px-3 py-1 text-sm font-medium rounded-bl-lg">Outsourcing Company</div>
                  <div className="flex flex-col h-full">
                    <div className="mb-4">
                      <div className="text-4xl font-bold text-blue-400">287%</div>
                      <div className="text-sm text-gray-300">Increase in qualified meetings</div>
                    </div>
                    <p className="text-gray-300 italic mb-4 font-montserrat">divisionGrowth transformed our outreach strategy. We went from 5-6 meetings per month to 20+ qualified opportunities with decision makers at enterprise companies.</p>
                    <div className="mt-auto pt-4 border-t border-white/10">
                      <div className="font-medium text-white">Engjell Rraklli</div>
                      <div className="text-sm text-gray-300">CEO, division5</div>
                    </div>
                  </div>
                </div>

                <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 shadow-lg relative border border-white/10">
                  <div className="absolute top-0 right-0 bg-purple-500 text-white px-3 py-1 text-sm font-medium rounded-bl-lg">Design Agency</div>
                  <div className="flex flex-col h-full">
                    <div className="mb-4">
                      <div className="text-4xl font-bold text-purple-400">12</div>
                      <div className="text-sm text-gray-300">New enterprise clients in 90 days</div>
                    </div>
                    <p className="text-gray-300 italic mb-4 font-montserrat">The ROI is incredible. Within 3 months, we closed 12 enterprise deals directly from LinkedIn meetings booked by divisionGrowth. Their targeting is extremely precise.</p>
                    <div className="mt-auto pt-4 border-t border-white/10">
                      <div className="font-medium text-white">Paolo Curci</div>
                      <div className="text-sm text-gray-300">CEO, divisionDesign</div>
                    </div>
                  </div>
                </div>

                <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 shadow-lg relative border border-white/10">
                  <div className="absolute top-0 right-0 bg-green-500 text-white px-3 py-1 text-sm font-medium rounded-bl-lg">Events Agency</div>
                  <div className="flex flex-col h-full">
                    <div className="mb-4">
                      <div className="text-4xl font-bold text-green-400">€320K</div>
                      <div className="text-sm text-gray-300">New revenue in 6 months</div>
                    </div>
                    <p className="text-gray-300 italic mb-4 font-montserrat">divisionGrowth helped us connect with perfect-fit clients we couldn't reach before. Our sales team is now focused on closing, not prospecting. Game-changer for our growth.</p>
                    <div className="mt-auto pt-4 border-t border-white/10">
                      <div className="font-medium text-white">Manuel Koelman</div>
                      <div className="text-sm text-gray-300">Founder, PirateX</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="px-8 md:px-16 lg:px-24 xl:px-32 2xl:px-40 py-16 md:py-24">
            <div className="max-w-7xl">
              <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8 text-sm">
                <div className="flex items-center space-x-2 text-yellow-400">
                  <Star className="h-5 w-5" />
                  <span className="text-gray-300">+10 B2B companies trust us</span>
                </div>
                <div className="flex items-center space-x-2 text-green-400">
                  <Shield className="h-5 w-5" />
                  <span className="text-gray-300">3x more meetings in 30 days</span>
                </div>
                <div className="flex items-center space-x-2 text-purple-400">
                  <Sparkles className="h-5 w-5" />
                  <span className="text-gray-300">Fraction of in-house team cost</span>
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