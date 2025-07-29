import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Mail, Phone, MapPin, Rocket, Users, Target, TrendingUp, Shield, Zap, Globe, Calendar, ArrowRight, Building2, Palette, Brain, TrendingUp as TrendingUpIcon, Award, BookOpen, Lightbulb, Briefcase, Star, Trophy } from "lucide-react"
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
          <div className="relative px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20 py-16 sm:py-20 md:py-24 lg:py-28 xl:py-32 mb-0">
            <div className="absolute inset-0 rounded-xl sm:rounded-2xl overflow-hidden">
              <Image
                src="/DSC0019-scaled.jpg"
                alt="Engjell Rraklli - Entrepreneur"
                fill
                className="object-cover object-center sm:object-top"
                priority
                quality={95}
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 95vw, (max-width: 1024px) 90vw, (max-width: 1280px) 85vw, 80vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20"></div>
            </div>
            <div className="relative z-10 max-w-4xl sm:max-w-5xl lg:max-w-6xl mx-auto text-center">
              <h1 className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-bold font-bebas uppercase tracking-wide">BIOGRAPHY</h1>
            </div>
          </div>

          {/* Timeline Section - Full Width, No Padding */}
          <div className="w-full pt-8 sm:pt-12 md:pt-16 lg:pt-20">
            <TimelineComponent />
          </div>

          {/* Main Story Section */}
          <div className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20 py-8 sm:py-10 md:py-12 lg:py-16">
            <div className="max-w-3xl sm:max-w-4xl lg:max-w-5xl mx-auto">
              <h2 className="text-white font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bebas uppercase tracking-wide mb-6 sm:mb-8 md:mb-10 lg:mb-12 text-center">ENGJELL RRAKLLI'S STORY</h2>
              
                              <div className="space-y-6 sm:space-y-8 md:space-y-10 lg:space-y-12">
                <div className="text-left">
                  <p className="text-gray-300 text-base sm:text-lg md:text-xl leading-relaxed font-montserrat">
                    In May 2015, I finally took the first step and founded division5. Picture this: A 23-year-old with no connections, no money, no references, and no experience. How hard could it be? That's exactly what I thought. Boy, I had no clue.
                  </p>
                </div>

                <div className="text-left">
                  <p className="text-gray-300 text-base sm:text-lg md:text-xl leading-relaxed font-montserrat">
                    I wanted to build a game development company, but soon after starting, we found ourselves without money. The only way to keep the business going was to provide software development services. I guess this was the first big lesson in my entrepreneurial journey: <span className="text-emerald-400 font-semibold">The market doesn't care about what you want to do</span>.
                  </p>
                </div>

                <div className="text-left">
                  <p className="text-gray-300 text-base sm:text-lg md:text-xl leading-relaxed font-montserrat">
                    Without connections, it's tough—especially when your clients are businesses. Most collaborations in the B2B space happen within internal networks. You need a strong value proposition to gain customers. So I cherished every client I got. I did my best to deliver exceptional service and make my clients happy. Profit wasn't my priority at that time. Maybe that was a mistake. I've left so much money on the table, but I wouldn't change a thing.
                  </p>
                </div>

                <div className="text-left">
                  <p className="text-gray-300 text-base sm:text-lg md:text-xl leading-relaxed font-montserrat">
                    Some clients referred us to others. Slowly but surely, we built a customer base that kept coming back. Not only that, they promoted our services to their inner circles until we had to hire just to keep up with demand. Unwittingly, we were able to <span className="text-purple-400 font-semibold">provide a service people love to share</span>.
                  </p>
                </div>

                <div className="text-left">
                  <p className="text-gray-300 text-base sm:text-lg md:text-xl leading-relaxed font-montserrat">
                    For the first four years of division5, we acquired customers solely through word of mouth. We spent no money on marketing or sales; we just focused on the service we provided and the relationships we built. It's a slow way to grow, but it ensures you get the basics right.
                  </p>
                </div>

                <div className="text-left">
                  <p className="text-gray-300 text-base sm:text-lg md:text-xl leading-relaxed font-montserrat">
                    As we grew, I realized that if I wanted to provide great service, I needed to hire great people and build a culture focused on the quality we aimed to provide. Culture starts at the top. As a leader, it's your responsibility to shape and steer the culture in the right direction. The best way to do this is by leading through example, hiring the right people, and not tolerating behaviors that go against the culture you want to build.
                  </p>
                </div>

                <div className="text-left">
                  <p className="text-gray-300 text-base sm:text-lg md:text-xl leading-relaxed font-montserrat">
                    Today, division5 has customers dating back eight years. They keep coming back because they know they can trust me and that I'm reliable. <span className="text-blue-400 font-semibold">Prioritizing relationships is the best investment you can make</span>. From a single staff augmentation company, we've evolved into a comprehensive ecosystem of specialized divisions, each focused on delivering exceptional value in their respective fields.
                  </p>
                </div>

                <div className="text-left">
                  <p className="text-gray-300 text-base sm:text-lg md:text-xl leading-relaxed font-montserrat">
                    The journey has taught me that business is simple. We tend to overcomplicate things, but in reality, running a successful service-based business means getting the basics right: provide a valuable service, keep customers happy, and serve as many customers as you can. How do you know you're doing the right things? If you provide a service people love to share, that's a great indication that you're headed in the right direction.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Key Lessons Section */}
          <div className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20 py-8 sm:py-10 md:py-12 lg:py-16">
            <div className="max-w-6xl lg:max-w-7xl mx-auto">
              <div className="text-center mb-8 sm:mb-10 md:mb-12">
                <h2 className="text-white font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bebas uppercase tracking-wide mb-3 sm:mb-4">KEY LESSONS</h2>
                <p className="text-gray-300 text-base sm:text-lg md:text-xl font-montserrat">What the journey taught me</p>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                    <Trophy className="w-8 h-8 sm:w-10 sm:h-10 text-emerald-400" />
                  </div>
                  <div className="text-emerald-400 text-xl sm:text-2xl font-bold mb-1 sm:mb-2">Be Patient</div>
                  <div className="text-gray-300 font-montserrat text-sm sm:text-base lg:text-lg">Good things take time</div>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                    <Globe className="w-8 h-8 sm:w-10 sm:h-10 text-purple-400" />
                  </div>
                  <div className="text-purple-400 text-xl sm:text-2xl font-bold mb-1 sm:mb-2">Invest in Yourself</div>
                  <div className="text-gray-300 font-montserrat text-sm sm:text-base lg:text-lg">The best investment you can make</div>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                    <Building2 className="w-8 h-8 sm:w-10 sm:h-10 text-blue-400" />
                  </div>
                  <div className="text-blue-400 text-xl sm:text-2xl font-bold mb-1 sm:mb-2">Relationships First</div>
                  <div className="text-gray-300 font-montserrat text-sm sm:text-base lg:text-lg">More important than profit</div>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 bg-pink-500/20 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                    <Star className="w-8 h-8 sm:w-10 sm:h-10 text-pink-400" />
                  </div>
                  <div className="text-pink-400 text-xl sm:text-2xl font-bold mb-1 sm:mb-2">Clarity & Focus</div>
                  <div className="text-gray-300 font-montserrat text-sm sm:text-base lg:text-lg">As important as persistence</div>
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