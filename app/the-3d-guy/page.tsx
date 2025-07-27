import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Mail, Phone, MapPin, BookOpen, Gamepad2, Users, Target, TrendingUp, Shield, Zap, Globe } from "lucide-react"
import Footer from "@/components/footer"
import SubscribeSection from "@/components/subscribe-section"
import NavigationMenu from "@/components/navigation-menu"
import Image from "next/image"

export default function The3DGuyPage() {
  return (
    <div className="min-h-screen flex">
      {/* Sidebar */}
      <div className="w-64 bg-emerald-400 flex flex-col fixed h-screen">
        <NavigationMenu activePage="3d-guy" />

        {/* Social Icons */}
        <div className="p-8 pb-12">
          <div className="flex space-x-6">
            <Link href="#" className="text-white hover:opacity-80 transition-opacity">
              <span className="text-xl font-bold">©</span>
            </Link>
            <Link href="#" className="text-white hover:opacity-80 transition-opacity">
              <span className="text-xl font-bold">in</span>
            </Link>
            <Link href="#" className="text-white hover:opacity-80 transition-opacity">
              <span className="text-xl font-bold">X</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 bg-gradient-to-br from-slate-800 via-slate-900 to-teal-900 relative overflow-hidden ml-64">
        {/* Flowing Wave Pattern Background */}
        <div className="absolute inset-0 opacity-30">
          <svg className="w-full h-full" viewBox="0 0 1200 800" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Top flowing lines */}
            <path d="M0 100C300 50 600 150 900 100C1050 75 1150 125 1200 100V0H0V100Z" fill="rgba(255,255,255,0.03)" />
            <path
              d="M0 150C250 100 500 200 750 150C900 125 1050 175 1200 150V50C1050 75 900 25 750 50C500 100 250 0 0 50V150Z"
              fill="rgba(255,255,255,0.02)"
            />

            {/* Middle flowing lines */}
            <path
              d="M0 300C200 250 400 350 600 300C800 250 1000 350 1200 300V200C1000 250 800 150 600 200C400 250 200 150 0 200V300Z"
              fill="rgba(255,255,255,0.02)"
            />
            <path
              d="M0 400C300 350 600 450 900 400C1050 375 1150 425 1200 400V300C1050 325 900 275 750 300C500 350 250 250 0 300V400Z"
              fill="rgba(255,255,255,0.01)"
            />

            {/* Bottom flowing lines */}
            <path
              d="M0 600C200 550 400 650 600 600C800 550 1000 650 1200 600V500C1000 550 800 450 600 500C400 550 200 450 0 500V600Z"
              fill="rgba(255,255,255,0.02)"
            />
            <path
              d="M0 750C250 700 500 800 750 750C900 725 1050 775 1200 750V650C1050 675 900 625 750 650C500 700 250 600 0 650V750Z"
              fill="rgba(255,255,255,0.01)"
            />
          </svg>
        </div>

        {/* Additional decorative elements */}
        <div className="absolute top-20 right-20 w-96 h-96 rounded-full bg-gradient-to-br from-teal-400/5 to-transparent blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 rounded-full bg-gradient-to-tr from-emerald-400/5 to-transparent blur-3xl"></div>

        {/* Scrollable Content */}
        <div className="relative z-10 overflow-y-auto h-full">
          {/* Hero Section */}
          <div className="p-16 min-h-screen flex flex-col justify-center">
            <div className="max-w-6xl">
              <div className="text-center mb-16">
                <h1 className="text-white text-8xl font-bold mb-8 font-bebas uppercase tracking-wide">THE 3D GUY</h1>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                {/* Left side - Image */}
                <div className="relative">
                  <div className="w-full h-96 rounded-2xl overflow-hidden">
                    <Image
                      src="/DSC0055-scaled.jpg"
                      alt="Engjell Rraklli - The 3D Guy"
                      width={600}
                      height={400}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Right side - Text content */}
                <div className="space-y-6">
                  <h2 className="text-white text-2xl font-bold font-bebas uppercase tracking-wide">
                    ENGJELL RRAKLLI - THE 3D GUY
                  </h2>
                  <p className="text-white text-3xl font-bold leading-relaxed font-bebas">
                    Building scalable and performant 3D browser apps.
                  </p>
                  
                  <div className="space-y-6 text-white text-lg leading-relaxed font-montserrat">
                    <p>
                      I built my first game at 15, fell in love with computer graphics, and became known as "the 3D guy" after helping companies build complex 3D browser apps. My passion for 3D technology has driven me to push the boundaries of what's possible in web-based{" "}
                      <span className="text-orange-400 font-semibold">business</span> applications.
                    </p>
                    
                    <p>
                      I've contributed to{" "}
                      <span className="text-orange-400 font-semibold">Babylon.js</span> and built a C++ game engine from scratch. My deep expertise in 3D and computer graphics has been the foundation for creating immersive experiences that transform how businesses interact with their customers.
                    </p>
                    
                    <p>
                      A few years ago I decided to found{" "}
                      <span className="text-orange-400 font-semibold">division3D</span>. Initially what started as a subset of{" "}
                      <span className="text-orange-400 font-semibold">division5</span> in the 3D space has quickly grown into a company of it's own where we help companies building scalable and complex 3D web applications.
                    </p>
                  </div>
                </div>
              </div>
            </div>
              </div>



          {/* DIVISION 3D Section */}
          <div className="px-16 py-24">
            <div className="max-w-6xl mx-auto text-center">
              <h2 className="text-white text-5xl font-bold mb-8 font-bebas uppercase tracking-wide">DIVISION 3D</h2>
              <p className="text-white text-xl leading-relaxed font-montserrat max-w-4xl mx-auto">
                We specialize in cutting-edge, scalable, and fast 3D web applications. Our expertise in browser-based 3D apps transforms your vision into immersive digital experiences. We use the latest technologies to build high-performance 3D solutions.
                </p>
              </div>
          </div>

          {/* 3D Browser Apps Section */}
          <div className="px-16 py-24">
            <div className="max-w-6xl">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                {/* Left side - 3D Image */}
                <div className="relative">
                  <div className="w-full h-96 rounded-2xl overflow-hidden">
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
                  <h3 className="text-white text-4xl font-bold font-bebas leading-tight">
                    3D browser apps that run like native.
                  </h3>
                  
                  <p className="text-white text-lg leading-relaxed font-montserrat">
                    division3D provides deep expertise on WebGL, WebGL2 and WebGPU and extensive experience with{" "}
                    <span className="text-orange-400 font-semibold">Three.js</span> and{" "}
                    <span className="text-orange-400 font-semibold">Babylon.js</span> for building complex 3D applications.
                  </p>
                  
                  <div className="space-y-6">
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-white rounded-full mt-3 flex-shrink-0"></div>
                      <div>
                        <h4 className="text-white font-semibold mb-2 font-bebas">Advanced Rendering Techniques:</h4>
                        <p className="text-white text-base leading-relaxed font-montserrat">
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
                        <p className="text-white text-base leading-relaxed font-montserrat">
                          3D browser applications are built on a robust and flexible architecture that adapts to business needs.
                        </p>
                      </div>
              </div>

                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-white rounded-full mt-3 flex-shrink-0"></div>
                      <div>
                        <h4 className="text-white font-semibold mb-2 font-bebas">Cross-Device Compatibility:</h4>
                        <p className="text-white text-base leading-relaxed font-montserrat">
                          3D browser applications are designed to perform consistently across desktops, tablets, and smartphones.
                        </p>
                      </div>
              </div>

                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-white rounded-full mt-3 flex-shrink-0"></div>
                      <div>
                        <h4 className="text-white font-semibold mb-2 font-bebas">Efficient Data Handling:</h4>
                        <p className="text-white text-base leading-relaxed font-montserrat">
                          Efficient data handling and management practices minimize latency and ensure application performance.
                        </p>

                        <Link href="https://division3d.co" target="_blank" rel="noopener noreferrer">
                          <Button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-slate-800 font-bold px-12 py-6 mt-10 text-lg rounded-full transition-all duration-300 font-bebas">
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
        </div>
      </div>
    </div>
  )
}
