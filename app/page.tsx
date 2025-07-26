import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Mail, Phone, MapPin } from "lucide-react"
import Footer from "@/components/footer"
import SubscribeSection from "@/components/subscribe-section"
import NavigationMenu from "@/components/navigation-menu"

export default function HomePage() {
  return (
    <div className="min-h-screen flex">
      {/* Sidebar */}
      <div className="w-80 bg-emerald-400 flex flex-col relative">
        <NavigationMenu activePage="home" />

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
      <div className="flex-1 bg-gradient-to-br from-slate-800 via-slate-900 to-teal-900 relative overflow-hidden">
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
          <div className="p-16 min-h-screen flex flex-col justify-center relative">
            {/* Background Person Image */}
            <div className="absolute right-0 top-0 w-1/2 h-full flex items-center justify-end pr-16 opacity-20">
              <div className="w-96 h-96 bg-gradient-to-br from-white/10 to-transparent rounded-full flex items-center justify-center">
                <div className="w-80 h-80 bg-gradient-to-br from-white/5 to-transparent rounded-full"></div>
              </div>
            </div>
            <div className="max-w-5xl">
              {/* Main Title */}
              <h1 className="mb-8">
                <span className="block text-white text-8xl font-black tracking-tight leading-none mb-2 font-bebas">ENGJELL</span>
                <span className="block text-8xl font-black tracking-tight leading-none font-bebas" style={{
                  WebkitTextStroke: '2px white',
                  color: 'transparent'
                }}>RRAKLLI</span>
              </h1>

              {/* Subtitle */}
              <p className="text-white text-xl mb-16 tracking-widest font-medium font-bebas">
                THE 3D GUY | ENTREPRENEUR | SPEAKER
              </p>

              {/* CTA Button */}
              <Button
                variant="outline"
                size="lg"
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-slate-800 px-12 py-6 text-lg rounded-full font-bold tracking-wider transition-all duration-300 mb-32 font-bebas"
              >
                LET'S TALK
              </Button>

              {/* Quote Section */}
              <div className="relative">
                {/* Opening Quote */}
                <div className="absolute -top-20 -left-12 text-orange-400/60 text-[200px] font-bold leading-none select-none">
                  "
                </div>

                {/* Quote Text */}
                <blockquote className="relative z-10 ml-16">
                  <p className="text-orange-400 text-5xl font-bold leading-tight mb-8">
                    If it was easy, everyone
                    <br />
                    would do it.
                  </p>
                  <cite className="block text-orange-300/80 text-xl font-medium not-italic">Engjell Rraklli</cite>
                </blockquote>

                {/* Closing Quote */}
                <div className="absolute -bottom-16 right-8 text-orange-400/60 text-[200px] font-bold leading-none rotate-180 select-none">
                  "
                </div>
              </div>
            </div>
          </div>

          {/* The Entrepreneur Section */}
          <div className="px-16 py-24">
            <div className="max-w-6xl">
              <h2 className="text-white text-5xl font-bold mb-12 uppercase tracking-wide font-bebas">THE ENTREPRENEUR</h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div>
                  <p className="text-white text-3xl font-bold mb-8 leading-tight">
                    A journey of a thousand miles starts with 1 step.
                  </p>
                  <p className="text-white text-xl leading-relaxed mb-8">
                    10 years ago, I quit traditional education to build my own business. Since then, I founded and currently run{" "}
                    <span className="text-orange-400 font-semibold">division5</span>, a company which provides world-class software development services all over the globe. As a highly creative person, I thoroughly enjoy creating things. Be it software or companies. I have failed more than I have succeeded. Each experience came with a big set of learnings that has helped shape me into the entrepreneur I am today. I share my experience of{" "}
                    <span className="text-orange-400 font-semibold">scaling the unscalable</span>, growing service-based businesses to 7-figures and more.
                  </p>
                  <Link href="/entrepreneur">
                    <Button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-slate-800 font-bold px-8 py-4 text-lg transition-all duration-300 font-bebas">
                      FIND MORE
                    </Button>
                  </Link>
                </div>
                <div className="relative">
                  <div className="w-full h-96 bg-gradient-to-br from-emerald-400/20 to-teal-600/20 rounded-2xl flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-32 h-32 bg-emerald-400 rounded-full flex items-center justify-center mb-6 mx-auto">
                        <span className="text-black text-4xl font-bold">🎤</span>
                      </div>
                      <p className="text-white text-xl font-semibold">Speaking & Leadership</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* The 3D Guy Section */}
          <div className="px-16 py-24">
            <div className="max-w-6xl">
              <h2 className="text-white text-5xl font-bold mb-12 uppercase tracking-wide font-bebas">THE 3D GUY</h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div className="relative">
                  <div className="w-full h-96 bg-gradient-to-br from-blue-400/20 to-purple-600/20 rounded-2xl flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-32 h-32 bg-blue-400 rounded-full flex items-center justify-center mb-6 mx-auto">
                        <span className="text-black text-4xl font-bold">🎮</span>
                      </div>
                      <p className="text-white text-xl font-semibold">3D Game Scene</p>
                    </div>
                  </div>
                </div>
                <div>
                  <p className="text-white text-3xl font-bold mb-8 leading-tight">
                    Passion turned into deep expertise.
                  </p>
                  <p className="text-white text-xl leading-relaxed mb-8">
                    I built my first game at 15, fell in love with 3D, and have been playing with 3D technology on the browser since 2017. I've built applications with{" "}
                    <span className="text-orange-400 font-semibold">Babylon.js</span> and{" "}
                    <span className="text-orange-400 font-semibold">Three.js</span>, and became known as "The 3D guy" after helping companies build complex 3D browser apps.
                  </p>
                  <Link href="/the-3d-guy">
                    <Button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-slate-800 font-bold px-8 py-4 text-lg transition-all duration-300 font-bebas">
                      FIND MORE
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* The Book Section */}
          <div className="px-16 py-24">
            <div className="max-w-6xl">
              <h2 className="text-white text-5xl font-bold mb-12 uppercase tracking-wide font-bebas">THE BOOK</h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div>
                  <p className="text-white text-3xl font-bold mb-8 leading-tight">
                    Build scalable 3D web apps.
                  </p>
                  <p className="text-white text-xl leading-relaxed mb-8">
                    I've been tinkering with{" "}
                    <span className="text-orange-400 font-semibold">Three.js</span> and{" "}
                    <span className="text-orange-400 font-semibold">Babylon.js</span> since 2017. I was impressed with what you could do with graphics in the browser. I invested a lot of time in these technologies and started helping companies build performant 3D web apps. That's how I became known as the 3D guy.
                  </p>
                </div>
                <div className="relative">
                  <div className="w-full h-96 bg-gradient-to-br from-purple-400/20 to-pink-600/20 rounded-2xl flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-32 h-32 bg-purple-400 rounded-full flex items-center justify-center mb-6 mx-auto">
                        <span className="text-black text-4xl font-bold">📚</span>
                      </div>
                      <p className="text-white text-xl font-semibold">3D Guide Book</p>
                      <p className="text-white text-sm mt-2">THE WEB HOW TO</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Subscribe Section */}
          <div className="px-16 py-24">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-white text-5xl font-bold mb-8 uppercase tracking-wide font-bebas">SUBSCRIBE</h2>
              <p className="text-gray-300 text-xl mb-12 leading-relaxed">
                Subscribe to my weekly newsletter about growing service-based businesses globally. Submit your email below.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto">
                <input
                  type="email"
                  placeholder="E-mail"
                  className="bg-slate-700 border-slate-600 text-white placeholder:text-gray-400 flex-1 px-6 py-4 rounded-lg border"
                />
                <Button className="bg-emerald-400 hover:bg-emerald-500 text-black font-bold px-8 py-4 text-lg font-bebas">
                  SEND
                </Button>
              </div>
            </div>
          </div>

          {/* Footer */}
          <Footer />
        </div>
      </div>
    </div>
  )
}
