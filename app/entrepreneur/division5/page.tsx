import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Mail, Phone, MapPin, Rocket, Users, Target, TrendingUp, Shield, Zap, Globe } from "lucide-react"
import Footer from "@/components/footer"
import SubscribeSection from "@/components/subscribe-section"
import SharedBackground from "@/components/shared-background"

import Image from "next/image"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Division5 - Engjell Rraklli",
  description: "Discover Division5, a leading staff augmentation company providing world-class developers to scale your engineering team.",
  keywords: ["Division5", "staff augmentation", "software development", "engineering team", "developers", "scaling"],
  openGraph: {
    title: "Division5 - Engjell Rraklli",
    description: "Discover Division5, a leading staff augmentation company providing world-class developers to scale your engineering team.",
    type: "website",
    url: "https://engjellrraklli.com/entrepreneur/division5",
    images: [
      {
        url: "/d5.jpg",
        width: 1200,
        height: 630,
        alt: "Division5 - Staff Augmentation Services"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Division5 - Engjell Rraklli",
    description: "Discover Division5, a leading staff augmentation company providing world-class developers to scale your engineering team.",
    images: ["/d5.jpg"]
  },
  alternates: {
    canonical: "https://engjellrraklli.com/entrepreneur/division5"
  }
}

export default function Division5Page() {
  return (
    <SharedBackground>
          {/* Hero Section */}
          <div className="px-8 md:px-16 lg:px-24 xl:px-32 2xl:px-40 py-16 md:py-24 min-h-screen flex flex-col justify-center">
            <div className="max-w-7xl">
              <div className="text-center mb-16">
                <h1 className="text-white font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bebas uppercase tracking-wide mb-8 text-center">DIVISION5</h1>
              </div>

          <div className="prose prose-invert prose-lg max-w-none">
                <h2 className="text-white font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bebas uppercase tracking-wide mb-4 text-center break-words">DIVISION5</h2>
                <h3 className="text-white text-2xl md:text-3xl font-bold mb-8 font-bebas leading-tight">
                  Augment your engineering team with world-class developers.
                </h3>
                
                <div className="flex flex-col-reverse md:grid md:grid-cols-2 gap-12 md:gap-16 lg:gap-20 items-center mb-12">
                  <div className="space-y-6 text-gray-300 text-lg md:text-xl leading-relaxed font-montserrat">
                    <p>
                      With over a decade of experience in the software development industry, division5 has established itself as a trusted partner for companies seeking to scale their engineering capabilities. Our approach is simple yet powerful: we provide you with exceptional developers who seamlessly integrate into your existing team.
                    </p>
                    <p>
                      We understand that every company has unique needs and challenges. That's why we take a personalized approach to staff augmentation, ensuring that the developers we provide not only have the technical skills you need but also align with your company culture and values.
                    </p>
                    <p>
                      Our commitment to quality, reliability, and transparency has made us the preferred choice for companies ranging from startups to Fortune 500 enterprises. When you choose division5, you're not just getting developers – you're getting partners in your success.
                    </p>
                  </div>
                  
                  <div className="relative">
                    <div className="w-full h-80 md:h-96 lg:h-[500px] rounded-2xl overflow-hidden">
                      <Image
                        src="/d5.jpg"
                        alt="Division5 - Staff Augmentation Services"
                        width={600}
                        height={400}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>

                <div className="text-center">
                  <Link href="https://division5.co" target="_blank" rel="noopener noreferrer">
                    <Button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-slate-800 font-bold px-8 md:px-12 py-4 md:py-6 text-base md:text-lg transition-all duration-300 font-bebas">
                      LEARN MORE
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* OUR STAFF AUGMENTATION MODEL Section */}
          <div className="px-8 md:px-16 lg:px-24 xl:px-32 2xl:px-40 py-16 md:py-24">
            <div className="max-w-7xl">
              <h2 className="text-white font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bebas uppercase tracking-wide mb-16 text-center break-words">OUR STAFF AUGMENTATION MODEL</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 mb-20">
                {/* Feature 1 */}
                <div className="text-center">
                  <div className="w-16 h-16 flex items-center justify-center mb-6 mx-auto">
                    <Zap className="text-white text-3xl" />
                  </div>
                  <h3 className="text-white font-bold text-xl mb-4 font-bebas uppercase tracking-wide">Hire a full-time from 2-weeks to 2 months.</h3>
                  <p className="text-body text-base md:text-lg leading-relaxed font-montserrat">You can easily transition your existing team to division5 or extend your team with our exceptional developers.</p>
                </div>

                {/* Feature 2 */}
                <div className="text-center">
                  <div className="w-16 h-16 flex items-center justify-center mb-6 mx-auto">
                    <Target className="text-white text-3xl" />
                  </div>
                  <h3 className="text-white font-bold text-xl mb-4 font-bebas uppercase tracking-wide">Full transparency on every part of the process.</h3>
                  <p className="text-body text-base md:text-lg leading-relaxed font-montserrat">Starting from recruiting and moving on with every other process, you will always have full information on our process.</p>
                </div>

                {/* Feature 3 */}
                <div className="text-center">
                  <div className="w-16 h-16 flex items-center justify-center mb-6 mx-auto">
                    <TrendingUp className="text-white text-3xl" />
                  </div>
                  <h3 className="text-white text-xl font-bold mb-4 font-bebas uppercase tracking-wide">
                    Scaling was never this flexible.
                  </h3>
                  <p className="text-gray-300 text-base md:text-lg leading-relaxed font-montserrat">
                    We understand how complicated it can be when you need to scale up quickly. We also understand that business is a rollercoaster so you might need to scale down. We got you covered in both cases.
                  </p>
                </div>

                {/* Feature 4 */}
                <div className="text-center">
                  <div className="w-16 h-16 flex items-center justify-center mb-6 mx-auto">
                    <Shield className="text-white text-3xl" />
                  </div>
                  <h3 className="text-white text-xl font-bold mb-4 font-bebas uppercase tracking-wide">
                    Leverage our 9+ years experience in building successful teams.
                  </h3>
                  <p className="text-gray-300 text-base md:text-lg leading-relaxed font-montserrat">
                    If you work with division5, you are not alone. We will guide and support you on your journey to building exceptional software teams.
                  </p>
                </div>

                {/* Feature 5 */}
                <div className="text-center">
                  <div className="w-16 h-16 flex items-center justify-center mb-6 mx-auto">
                    <Users className="text-white text-3xl" />
                  </div>
                  <h3 className="text-white text-xl font-bold mb-4 font-bebas uppercase tracking-wide">
                    The best Albanian talent at your fingertips.
                  </h3>
                  <p className="text-gray-300 text-base md:text-lg leading-relaxed font-montserrat">
                    Our people are our added value. Through our exception recruiting process we will have the best people available for your needs.
                  </p>
                </div>

                {/* Feature 6 */}
                <div className="text-center">
                  <div className="w-16 h-16 flex items-center justify-center mb-6 mx-auto">
                    <Globe className="text-white text-3xl" />
                  </div>
                  <h3 className="text-white text-xl font-bold mb-4 font-bebas uppercase tracking-wide">
                    If you're not happy, you pay nothing.
                  </h3>
                  <p className="text-gray-300 text-base md:text-lg leading-relaxed font-montserrat">
                    Unhappy with our service? You pay nothing. You have nothing to lose with{" "}
                    <span className="text-emerald-400 font-semibold">division5</span>, only to gain.
                  </p>
                </div>
              </div>

              <div className="text-center">
                <Link href="https://division5.co/services/staff-augmentation/" target="_blank" rel="noopener noreferrer">
                  <Button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-slate-800 font-bold px-8 md:px-12 py-4 md:py-6 text-base md:text-lg rounded-full transition-all duration-300 font-bebas">
                    BUILD YOUR TEAM
                  </Button>
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