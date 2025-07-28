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
          {/* Hero Section with Background Image */}
          <div className="relative px-8 md:px-16 lg:px-24 xl:px-32 2xl:px-40 py-24 md:py-32 mb-8 md:mb-12">
            <div className="absolute inset-0 rounded-2xl overflow-hidden">
              <Image
                src="/growth.jpg"
                alt="DivisionGrowth - LinkedIn Automation for B2B Companies"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20"></div>
            </div>
            <div className="relative z-10 max-w-6xl mx-auto text-center">
              <h1 className="text-white text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold font-bebas uppercase tracking-wide">DIVISIONGROWTH</h1>
            </div>
          </div>

          {/* Content Section */}
          <div className="px-8 md:px-16 lg:px-24 xl:px-32 2xl:px-40 py-8 md:py-12">
            <div className="max-w-7xl mx-auto">
              <div className="prose prose-invert prose-lg max-w-none">
                <h3 className="text-white text-2xl md:text-3xl font-bold mb-8 font-bebas leading-tight text-center">
                  LinkedIn Automation for B2B Companies
                </h3>
                
                <div className="space-y-6 text-gray-300 text-lg md:text-xl leading-relaxed font-montserrat max-w-4xl mx-auto mb-12">
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

          {/* Who Benefits Most Section */}
          <div className="px-8 md:px-16 lg:px-24 xl:px-32 2xl:px-40 py-16 md:py-24">
            <div className="max-w-7xl">
              <div className="text-center mb-16">
                <h2 className="text-white font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bebas uppercase tracking-wide mb-8 text-center break-words">WHO BENEFITS MOST FROM OUR SERVICES?</h2>
                <p className="text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed font-montserrat max-w-4xl mx-auto">Our LinkedIn automation services are designed specifically for B2B companies that need a consistent flow of qualified meetings.</p>
              </div>
              
              <div className="grid gap-8 md:gap-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 shadow-lg border border-white/10">
                  <div className="text-center">
                    <h3 className="text-white font-bold text-xl mb-4 font-bebas uppercase tracking-wide">B2B SaaS Companies</h3>
                    <p className="text-gray-300 font-montserrat">Looking to connect with decision makers at mid-market and enterprise companies</p>
                  </div>
                </div>

                <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 shadow-lg border border-white/10">
                  <div className="text-center">
                    <h3 className="text-white font-bold text-xl mb-4 font-bebas uppercase tracking-wide">Professional Service Firms</h3>
                    <p className="text-gray-300 font-montserrat">Consultancies, agencies, and firms seeking to expand their client roster</p>
                  </div>
                </div>

                <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 shadow-lg border border-white/10">
                  <div className="text-center">
                    <h3 className="text-white font-bold text-xl mb-4 font-bebas uppercase tracking-wide">Startups with Limited Resources</h3>
                    <p className="text-gray-300 font-montserrat">Need outbound sales but can't afford a full-time SDR team</p>
                  </div>
                </div>

                <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 shadow-lg border border-white/10">
                  <div className="text-center">
                    <h3 className="text-white font-bold text-xl mb-4 font-bebas uppercase tracking-wide">Companies with Long Sales Cycles</h3>
                    <p className="text-gray-300 font-montserrat">Need consistent pipeline generation to maintain growth</p>
                  </div>
                </div>
              </div>

                             <div className="text-center mt-12">
                 <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 shadow-lg border border-white/10 max-w-2xl mx-auto">
                   <h3 className="text-white font-bold text-xl mb-4 font-bebas uppercase tracking-wide">Not sure if we're right for you?</h3>
                   <div className="space-y-3 text-left mb-8">
                     <div className="flex items-center space-x-3">
                       <div className="w-2 h-2 bg-green-400 rounded-full flex-shrink-0"></div>
                       <span className="text-gray-300 font-montserrat">You need 10+ qualified meetings per month with decision makers</span>
                     </div>
                     <div className="flex items-center space-x-3">
                       <div className="w-2 h-2 bg-green-400 rounded-full flex-shrink-0"></div>
                       <span className="text-gray-300 font-montserrat">Your average deal size is €10K+ (for positive ROI)</span>
                     </div>
                     <div className="flex items-center space-x-3">
                       <div className="w-2 h-2 bg-green-400 rounded-full flex-shrink-0"></div>
                       <span className="text-gray-300 font-montserrat">You have a clear ICP and value proposition</span>
                     </div>
                     <div className="flex items-center space-x-3">
                       <div className="w-2 h-2 bg-green-400 rounded-full flex-shrink-0"></div>
                       <span className="text-gray-300 font-montserrat">Your sales team can handle additional meetings</span>
                     </div>
                   </div>
                   <Link href="https://divisiongrowth.com" target="_blank" rel="noopener noreferrer">
                     <Button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-slate-800 font-bold px-8 md:px-12 py-4 md:py-6 text-base md:text-lg transition-all duration-300 font-bebas">
                       VISIT DIVISIONGROWTH
                     </Button>
                   </Link>
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