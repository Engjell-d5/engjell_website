import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Mail, Phone, MapPin, BookOpen, Gamepad2, Users, Target, TrendingUp, Shield, Zap, Globe } from "lucide-react"
import Footer from "@/components/footer"
import SubscribeSection from "@/components/subscribe-section"
import SharedBackground from "@/components/shared-background"

import Image from "next/image"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Division3D - Engjell Rraklli",
  description: "Explore Division3D services for cutting-edge 3D browser apps, architectural visualization, and immersive 3D experiences.",
  keywords: ["Division3D", "3D visualization", "3D browser apps", "WebGL", "Three.js", "Babylon.js", "3D technology"],
  openGraph: {
    title: "Division3D - Engjell Rraklli",
    description: "Explore Division3D services for cutting-edge 3D browser apps, architectural visualization, and immersive 3D experiences.",
    type: "website",
    url: "https://engjellrraklli.com/entrepreneur/division3d",
    images: [
      {
        url: "/DSC0055-scaled.jpg",
        width: 1200,
        height: 630,
        alt: "Engjell Rraklli - Division3D and 3D Visualization Expert"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Division3D - Engjell Rraklli",
    description: "Explore Division3D services for cutting-edge 3D browser apps, architectural visualization, and immersive 3D experiences.",
    images: ["/DSC0055-scaled.jpg"]
  },
  alternates: {
    canonical: "https://engjellrraklli.com/entrepreneur/division3d"
  }
}

export default function Division3DPage() {
  return (
    <SharedBackground>
          {/* DIVISION 3D Section */}
          <div className="px-8 md:px-16 lg:px-24 xl:px-32 2xl:px-40 py-16 md:py-24">
            <div className="max-w-7xl mx-auto text-center">
              <h1 className="text-white font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bebas uppercase tracking-wide mb-8 text-center">DIVISION3D</h1>
              <p className="text-body text-lg md:text-xl leading-relaxed font-montserrat max-w-5xl mx-auto">We specialize in cutting-edge, scalable, and fast 3D web applications. Our expertise in browser-based 3D apps transforms your vision into immersive digital experiences. We use the latest technologies to build high-performance 3D solutions.</p>
            </div>
          </div>

          {/* 3D Browser Apps Section */}
          <div className="px-8 md:px-16 lg:px-24 xl:px-32 2xl:px-40">
            <div className="max-w-7xl">
              <div className="flex flex-col md:grid md:grid-cols-2 gap-12 md:gap-16 lg:gap-20 items-start">
                {/* Left side - 3D Image */}
                <div className="relative">
                  <div className="w-full h-80 md:h-96 lg:h-[500px] rounded-2xl overflow-hidden">
                    <Image
                      src="/3d.png"
                      alt="3D Technology"
                      width={600}
                      height={400}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Right side - Content */}
                <div className="space-y-8">
                  <h3 className="text-white font-bold text-3xl md:text-4xl lg:text-5xl font-bebas leading-tight">3D browser apps that run like native.</h3>
                  
                  <p className="text-body text-lg md:text-xl leading-relaxed font-montserrat">division3D provides deep expertise on WebGL, WebGL2 and WebGPU and extensive experience with <span className="text-orange-400 font-semibold">Three.js</span> and <span className="text-orange-400 font-semibold">Babylon.js</span> for building complex 3D applications.</p>
                  
                  <div className="space-y-6">
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-white rounded-full mt-3 flex-shrink-0"></div>
                      <div>
                        <h4 className="text-white font-semibold mb-2 font-bebas">Advanced Rendering Techniques:</h4>
                        <p className="text-body text-base md:text-lg leading-relaxed font-montserrat">
                          Expertise in{" "}
                          <span className="text-orange-400 font-semibold">WebGL</span>,{" "}
                          <span className="text-orange-400 font-semibold">WebGL2</span>,{" "}
                          <span className="text-orange-400 font-semibold">WebGPU</span>,{" "}
                          <span className="text-orange-400 font-semibold">Three.js</span>, and{" "}
                          <span className="text-orange-400 font-semibold">Babylon.js</span> for creating high-performance and realistic 3D environments.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-white rounded-full mt-3 flex-shrink-0"></div>
                      <div>
                        <h4 className="text-white font-semibold mb-2 font-bebas">Future-Proof Architecture:</h4>
                        <p className="text-body text-base md:text-lg leading-relaxed font-montserrat">
                          3D browser applications are built on a robust and flexible architecture that adapts to business needs.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-white rounded-full mt-3 flex-shrink-0"></div>
                      <div>
                        <h4 className="text-white font-semibold mb-2 font-bebas">Cross-Device Compatibility:</h4>
                        <p className="text-body text-base md:text-lg leading-relaxed font-montserrat">
                          3D browser applications are designed to perform consistently across desktops, tablets, and smartphones.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-white rounded-full mt-3 flex-shrink-0"></div>
                      <div>
                        <h4 className="text-white font-semibold mb-2 font-bebas">Efficient Data Handling:</h4>
                        <p className="text-body text-base md:text-lg leading-relaxed font-montserrat">
                          Efficient data handling and management practices minimize latency and ensure application performance.
                        </p>

                        <Link href="https://division3d.co" target="_blank" rel="noopener noreferrer">
                          <Button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-slate-800 font-bold px-8 md:px-12 py-4 md:py-6 text-base md:text-lg mt-10 rounded-full transition-all duration-300 font-bebas">
                            HIRE OUR EXPERTISE
                          </Button>
                        </Link>
                      </div>
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