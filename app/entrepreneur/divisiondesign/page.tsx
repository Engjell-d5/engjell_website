import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Mail, Phone, MapPin, Rocket, Users, Target, TrendingUp, Shield, Zap, Globe, Palette, Brush, Eye, Sparkles } from "lucide-react"
import Footer from "@/components/footer"
import SubscribeSection from "@/components/subscribe-section"
import SharedBackground from "@/components/shared-background"

import Image from "next/image"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "DivisionDesign - Engjell Rraklli",
  description: "Discover DivisionDesign (designJoy), specializing in creative design solutions, brand identity, and visual experiences that delight users.",
  keywords: ["DivisionDesign", "designJoy", "creative design", "brand identity", "visual design", "user experience", "design solutions"],
  openGraph: {
    title: "DivisionDesign - Engjell Rraklli",
    description: "Discover DivisionDesign (designJoy), specializing in creative design solutions, brand identity, and visual experiences that delight users.",
    type: "website",
    url: "https://engjellrraklli.com/entrepreneur/divisiondesign",
    images: [
      {
        url: "/DSC0019-scaled.jpg",
        width: 1200,
        height: 630,
        alt: "Engjell Rraklli - DivisionDesign and Creative Design"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "DivisionDesign - Engjell Rraklli",
    description: "Discover DivisionDesign (designJoy), specializing in creative design solutions, brand identity, and visual experiences that delight users.",
    images: ["/DSC0019-scaled.jpg"]
  },
  alternates: {
    canonical: "https://engjellrraklli.com/entrepreneur/divisiondesign"
  }
}

export default function DivisionDesignPage() {
  return (
    <SharedBackground>
          {/* Hero Section */}
          <div className="px-8 md:px-16 lg:px-24 xl:px-32 2xl:px-40 py-16 md:py-24 min-h-screen flex flex-col justify-center">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <h1 className="text-white font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bebas uppercase tracking-wide mb-8 text-center">DIVISIONDESIGN</h1>
              </div>

          <div className="prose prose-invert prose-lg max-w-none">
                <h3 className="text-white text-2xl md:text-3xl font-bold mb-8 font-bebas leading-tight">
                  Creating delightful design experiences that bring joy to users.
                </h3>
                
                <div className="flex flex-col-reverse md:grid md:grid-cols-2 gap-12 md:gap-16 lg:gap-20 items-center mb-12">
                  <div className="space-y-6 text-gray-300 text-lg md:text-xl leading-relaxed font-montserrat">
                    <p>
                      DivisionDesign, also known as <span className="text-pink-400 font-semibold">designJoy</span>, specializes in creating exceptional design experiences that delight users and drive business success. We believe that great design should bring joy to both users and businesses.
                    </p>
                    <p>
                      Our team of creative designers and UX experts work together to craft beautiful, functional, and user-centered design solutions that enhance brand identity and create memorable user experiences.
                    </p>
                    <p>
                      From brand identity and visual design to user experience and interface design, DivisionDesign delivers creative solutions that not only look stunning but also solve real business problems and create meaningful connections with users.
                    </p>
                  </div>
                  
                  <div className="relative">
                    <div className="w-full h-80 md:h-96 lg:h-[500px] rounded-2xl overflow-hidden bg-gradient-to-br from-pink-600 to-purple-600 flex items-center justify-center">
                      <Palette className="text-white text-8xl" />
                    </div>
                  </div>
                </div>

                <div className="text-center">
                  <Link href="#" target="_blank" rel="noopener noreferrer">
                    <Button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-slate-800 font-bold px-8 md:px-12 py-4 md:py-6 text-base md:text-lg transition-all duration-300 font-bebas">
                      LEARN MORE
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* DESIGN SERVICES Section */}
          <div className="px-8 md:px-16 lg:px-24 xl:px-32 2xl:px-40 py-16 md:py-24">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-white font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bebas uppercase tracking-wide mb-16 text-center break-words">DESIGN SERVICES</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 mb-20 max-w-6xl mx-auto">
                {/* Feature 1 */}
                <div className="text-center">
                  <div className="w-16 h-16 flex items-center justify-center mb-6 mx-auto">
                    <Palette className="text-white text-3xl" />
                  </div>
                  <h3 className="text-white font-bold text-xl mb-4 font-bebas uppercase tracking-wide">Brand Identity Design</h3>
                  <p className="text-body text-base md:text-lg leading-relaxed font-montserrat">Comprehensive brand identity solutions including logos, color palettes, typography, and brand guidelines.</p>
                </div>

                {/* Feature 2 */}
                <div className="text-center">
                  <div className="w-16 h-16 flex items-center justify-center mb-6 mx-auto">
                    <Brush className="text-white text-3xl" />
                  </div>
                  <h3 className="text-white font-bold text-xl mb-4 font-bebas uppercase tracking-wide">Visual Design</h3>
                  <p className="text-body text-base md:text-lg leading-relaxed font-montserrat">Stunning visual designs for websites, applications, marketing materials, and digital experiences.</p>
                </div>

                {/* Feature 3 */}
                <div className="text-center">
                  <div className="w-16 h-16 flex items-center justify-center mb-6 mx-auto">
                    <Eye className="text-white text-3xl" />
                  </div>
                  <h3 className="text-white text-xl font-bold mb-4 font-bebas uppercase tracking-wide">
                    User Experience Design
                  </h3>
                  <p className="text-gray-300 text-base md:text-lg leading-relaxed font-montserrat">
                    User-centered design approaches that create intuitive, accessible, and delightful user experiences.
                  </p>
                </div>

                {/* Feature 4 */}
                <div className="text-center">
                  <div className="w-16 h-16 flex items-center justify-center mb-6 mx-auto">
                    <Sparkles className="text-white text-3xl" />
                  </div>
                  <h3 className="text-white text-xl font-bold mb-4 font-bebas uppercase tracking-wide">
                    Creative Direction
                  </h3>
                  <p className="text-gray-300 text-base md:text-lg leading-relaxed font-montserrat">
                    Strategic creative direction and design leadership to ensure cohesive and impactful design outcomes.
                  </p>
                </div>

                {/* Feature 5 */}
                <div className="text-center">
                  <div className="w-16 h-16 flex items-center justify-center mb-6 mx-auto">
                    <Target className="text-white text-3xl" />
                  </div>
                  <h3 className="text-white text-xl font-bold mb-4 font-bebas uppercase tracking-wide">
                    Interface Design
                  </h3>
                  <p className="text-gray-300 text-base md:text-lg leading-relaxed font-montserrat">
                    Beautiful and functional interface designs that enhance user engagement and drive conversions.
                  </p>
                </div>

                {/* Feature 6 */}
                <div className="text-center">
                  <div className="w-16 h-16 flex items-center justify-center mb-6 mx-auto">
                    <Globe className="text-white text-3xl" />
                  </div>
                  <h3 className="text-white text-xl font-bold mb-4 font-bebas uppercase tracking-wide">
                    Design Systems
                  </h3>
                  <p className="text-gray-300 text-base md:text-lg leading-relaxed font-montserrat">
                    Scalable design systems and component libraries that ensure consistency and efficiency across projects.
                  </p>
                </div>
              </div>

              <div className="text-center">
                <Link href="#" target="_blank" rel="noopener noreferrer">
                  <Button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-slate-800 font-bold px-8 md:px-12 py-4 md:py-6 text-base md:text-lg rounded-full transition-all duration-300 font-bebas">
                    START YOUR PROJECT
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