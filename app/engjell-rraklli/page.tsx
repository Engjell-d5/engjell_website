import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Mail, Phone, MapPin, Rocket, Users, Target, TrendingUp, Shield, Zap, Globe, Brain, Palette, TrendingUp as TrendingUpIcon, User, BookOpen, Heart, Building2 } from "lucide-react"
import Footer from "@/components/footer"
import SubscribeSection from "@/components/subscribe-section"
import SharedBackground from "@/components/shared-background"

import Image from "next/image"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Engjell Rraklli - Personal",
  description: "Discover the personal side of Engjell Rraklli - entrepreneur, 3D expert, and podcast host. Learn about my story, journey, and personal insights.",
  keywords: ["engjell rraklli", "personal", "my story", "entrepreneur journey", "3D expert", "podcast host"],
  openGraph: {
    title: "Engjell Rraklli - Personal",
    description: "Discover the personal side of Engjell Rraklli - entrepreneur, 3D expert, and podcast host. Learn about my story, journey, and personal insights.",
    type: "website",
    url: "https://engjellrraklli.com/engjell-rraklli",
    images: [
      {
        url: "/DSC0019-scaled.jpg",
        width: 1200,
        height: 630,
        alt: "Engjell Rraklli - Entrepreneur and 3D Expert"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Engjell Rraklli - Personal",
    description: "Discover the personal side of Engjell Rraklli - entrepreneur, 3D expert, and podcast host. Learn about my story, journey, and personal insights.",
    images: ["/DSC0019-scaled.jpg"]
  },
  alternates: {
    canonical: "https://engjellrraklli.com/engjell-rraklli"
  }
}

export default function EngjellRraklliPage() {
  return (
    <SharedBackground>
          {/* Hero Section */}
          <div className="px-8 md:px-16 lg:px-24 xl:px-32 2xl:px-40 py-16 md:py-24 min-h-screen flex flex-col justify-center">
            <div className="max-w-7xl">
              <div className="text-center mb-16">
                <h1 className="text-white font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bebas uppercase tracking-wide mb-8 text-center">ENGJELL RRAKLLI</h1>
              </div>

          <div className="prose prose-invert prose-lg max-w-none">
                <h2 className="text-white font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bebas uppercase tracking-wide mb-4 text-center break-words">PERSONAL JOURNEY</h2>
                <h3 className="text-white text-2xl md:text-3xl font-bold mb-8 font-bebas leading-tight">Entrepreneur, 3D Expert & Podcast Host</h3>

                <div className="flex flex-col-reverse md:grid md:grid-cols-2 gap-12 md:gap-16 lg:gap-20 items-center">
                  <div>
                    <p className="text-body text-lg md:text-xl leading-relaxed mb-6 font-montserrat">
                      Welcome to my personal space. Here you'll discover the story behind the entrepreneur, the passion behind the 3D expert, and the voice behind the podcast. From my early days as a young entrepreneur to building multiple successful businesses, this is where I share my personal journey and insights.
                    </p>
                    <p className="text-body text-lg md:text-xl leading-relaxed mb-8 font-montserrat">
                      Beyond the business ventures and technical expertise, I'm passionate about sharing knowledge, mentoring others, and building meaningful connections. This section is dedicated to the personal side of my journey - the lessons learned, the challenges overcome, and the vision for the future.
                    </p>
                  </div>
                  <div className="relative">
                    <div className="w-full h-80 md:h-96 lg:h-[500px] rounded-2xl overflow-hidden">
                      <Image
                        src="/DSC0019-scaled.jpg"
                        alt="Engjell Rraklli - Entrepreneur and 3D Expert"
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

          {/* PERSONAL CONTENT Section */}
          <div className="px-8 md:px-16 lg:px-24 xl:px-32 2xl:px-40 py-16 md:py-24">
            <div className="max-w-7xl">
              <h2 className="text-white font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bebas uppercase tracking-wide mb-16 text-center break-words">PERSONAL CONTENT</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 mb-20">
                {/* My Story */}
                <Link href="/engjell-rraklli/my-story" className="group">
                  <Card className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-slate-800 transition-all duration-300 h-full">
                    <CardHeader className="text-center">
                      <div className="w-16 h-16 flex items-center justify-center mb-4 mx-auto">
                        <BookOpen className="text-white group-hover:text-slate-800 text-3xl transition-colors" />
                      </div>
                      <CardTitle className="text-white group-hover:text-slate-800 font-bebas uppercase tracking-wide">MY STORY</CardTitle>
                    </CardHeader>
                    <CardContent className="text-center">
                      <p className="text-body group-hover:text-slate-700 text-base leading-relaxed font-montserrat">
                        Discover my entrepreneurial journey from founding Division5 to building a framework for scaling service-based businesses.
                      </p>
                    </CardContent>
                  </Card>
                </Link>

                {/* My Divisions */}
                <Link href="/engjell-rraklli/my-divisions" className="group">
                  <Card className="bg-transparent border-2 border-emerald-400 text-white hover:bg-emerald-400 hover:text-slate-800 transition-all duration-300 h-full">
                    <CardHeader className="text-center">
                      <div className="w-16 h-16 flex items-center justify-center mb-4 mx-auto">
                        <Building2 className="text-emerald-400 group-hover:text-slate-800 text-3xl transition-colors" />
                      </div>
                      <CardTitle className="text-emerald-400 group-hover:text-slate-800 font-bebas uppercase tracking-wide">MY DIVISIONS</CardTitle>
                    </CardHeader>
                    <CardContent className="text-center">
                      <p className="text-body group-hover:text-slate-700 text-base leading-relaxed font-montserrat">
                        Explore my portfolio of businesses and divisions, from staff augmentation to AI solutions and 3D visualization.
                      </p>
                    </CardContent>
                  </Card>
                </Link>

                {/* Coming Soon - Personal Insights */}
                <div className="group">
                  <Card className="bg-transparent border-2 border-emerald-400 text-white opacity-60 h-full">
                    <CardHeader className="text-center">
                      <div className="w-16 h-16 flex items-center justify-center mb-4 mx-auto">
                        <Heart className="text-emerald-400 text-3xl" />
                      </div>
                      <CardTitle className="text-emerald-400 font-bebas uppercase tracking-wide">PERSONAL INSIGHTS</CardTitle>
                    </CardHeader>
                    <CardContent className="text-center">
                      <p className="text-body text-base leading-relaxed font-montserrat">
                        Personal reflections, life lessons, and insights from my journey as an entrepreneur and leader.
                      </p>
                      <p className="text-emerald-400 text-sm mt-2 font-semibold">COMING SOON</p>
                    </CardContent>
                  </Card>
                </div>

                {/* Coming Soon - Behind the Scenes */}
                <div className="group">
                  <Card className="bg-transparent border-2 border-orange-400 text-white opacity-60 h-full">
                    <CardHeader className="text-center">
                      <div className="w-16 h-16 flex items-center justify-center mb-4 mx-auto">
                        <User className="text-orange-400 text-3xl" />
                      </div>
                      <CardTitle className="text-orange-400 font-bebas uppercase tracking-wide">BEHIND THE SCENES</CardTitle>
                    </CardHeader>
                    <CardContent className="text-center">
                      <p className="text-body text-base leading-relaxed font-montserrat">
                        A glimpse into my daily life, work process, and the people and experiences that shape my journey.
                      </p>
                      <p className="text-orange-400 text-sm mt-2 font-semibold">COMING SOON</p>
                    </CardContent>
                  </Card>
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