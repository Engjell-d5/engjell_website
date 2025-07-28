'use client'

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Mail, Phone, MapPin, CheckCircle, AlertCircle, Loader2 } from "lucide-react"
import Footer from "@/components/footer"
import SubscribeSection from "@/components/subscribe-section"
import Image from "next/image"

export default function HomeClient() {
  const [email, setEmail] = useState("")
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [message, setMessage] = useState("")

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!email) {
      setStatus('error')
      setMessage('Please enter your email address')
      return
    }

    setStatus('loading')
    setMessage("")

    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email })
      })

      const data = await response.json()

      if (response.ok) {
        setStatus('success')
        setMessage(data.message)
        setEmail("")
      } else {
        setStatus('error')
        setMessage(data.error || 'Failed to subscribe. Please try again.')
      }
    } catch (error) {
      setStatus('error')
      setMessage('Failed to subscribe. Please try again.')
    }
  }

  return (
    <div className="min-h-screen flex">
      {/* Fixed Background Image - Behind Everything */}
      <div className="fixed inset-0 overflow-hidden -z-20">
        <div className="absolute inset-0">
          <Image
            src="/DSC0048-1.jpg"
            alt="Background"
            fill
            sizes="100vw"
            className="object-cover"
            style={{ objectPosition: 'center 150%' }}
            priority
            quality={85}
          />
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 relative overflow-hidden ml-0 transition-all duration-300">
        {/* Scrollable Content */}
        <div className="flex-1 bg-[linear-gradient(to_bottom,transparent_0%,#0f172a_15%,#0f172a_70%,#134e4a)] relative overflow-hidden">
          {/* Flowing Wave Pattern Background */}
          <div className="absolute inset-0 opacity-15 z-0">
            <svg className="w-full h-full" viewBox="0 0 1200 1200" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
              {/* Top section waves */}
              <path d="M0 80C200 40 400 120 600 80C800 40 1000 120 1200 80V0H0V80Z" fill="rgba(255,255,255,0.08)" />
              <path d="M0 160C300 120 600 200 900 160C1050 140 1150 180 1200 160V80C1050 100 900 60 750 80C500 120 250 20 0 60V160Z" fill="rgba(255,255,255,0.06)" />
              
              {/* Upper middle section waves */}
              <path d="M0 320C200 280 400 380 600 320C800 260 1000 360 1200 320V240C1000 280 800 180 600 240C400 300 200 200 0 240V320Z" fill="rgba(255,255,255,0.05)" />
              <path d="M0 480C300 440 600 520 900 480C1050 460 1150 500 1200 480V400C1050 420 900 380 750 400C500 440 250 340 0 380V480Z" fill="rgba(255,255,255,0.04)" />
              
              {/* Lower middle section waves */}
              <path d="M0 640C200 600 400 700 600 640C800 580 1000 680 1200 640V560C1000 600 800 500 600 560C400 620 200 520 0 560V640Z" fill="rgba(255,255,255,0.05)" />
              <path d="M0 800C300 760 600 840 900 800C1050 780 1150 820 1200 800V720C1050 740 900 700 750 720C500 760 250 660 0 700V800Z" fill="rgba(255,255,255,0.04)" />
              
              {/* Bottom section waves */}
              <path d="M0 960C200 920 400 1020 600 960C800 900 1000 1000 1200 960V880C1000 920 800 820 600 880C400 940 200 840 0 880V960Z" fill="rgba(255,255,255,0.06)" />
              <path d="M0 1120C300 1080 600 1160 900 1120C1050 1100 1150 1140 1200 1120V1040C1050 1060 900 1020 750 1040C500 1080 250 980 0 1020V1120Z" fill="rgba(255,255,255,0.08)" />
            </svg>
          </div>

          {/* Additional decorative elements */}
          <div className="absolute top-20 right-20 w-96 h-96 rounded-full bg-gradient-to-br from-teal-400/5 to-transparent blur-3xl z-0"></div>
          <div className="absolute bottom-20 left-20 w-80 h-80 rounded-full bg-gradient-to-tr from-emerald-400/5 to-transparent blur-3xl z-0"></div>
        {/* Hero Section */}
          <div className="px-8 md:px-16 lg:px-24 xl:px-32 2xl:px-40 py-16 md:py-24 min-h-screen flex flex-col justify-center relative">


            <div className="max-w-7xl relative z-10">
              {/* Main Title */}
              <h1 className="text-white font-bold text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black tracking-tight leading-none mb-2 font-bebas">
                <span className="block">ENGJELL</span>
                <span className="block text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black tracking-tight leading-none font-bebas" style={{
                  WebkitTextStroke: '2px white',
                  color: 'transparent'
                }}>RRAKLLI</span>
              </h1>

              {/* Subtitle */}
              <p className="text-white text-lg md:text-xl lg:text-2xl mb-16 tracking-widest font-medium font-bebas">
                THE 3D GUY | ENTREPRENEUR | SPEAKER
              </p>

              {/* CTA Button */}
              <Link href="/contact">
                <Button
                  variant="outline"
                  size="lg"
                  className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-slate-800 px-8 md:px-12 py-4 md:py-6 text-base md:text-lg rounded-full font-bold tracking-wider transition-all duration-300 mb-24 md:mb-32 font-bebas"
                >
                  LET'S TALK
                </Button>
              </Link>

              {/* Quote Section */}
              <div className="relative">
                {/* Opening Quote */}
                <div className="absolute -top-16 md:-top-20 -left-8 md:-left-12 text-orange-400/60 text-[120px] md:text-[160px] lg:text-[200px] font-bold leading-none select-none">
                  "
                </div>

                {/* Quote Text */}
                <blockquote className="relative z-10 ml-8 md:ml-16">
                  <p className="text-orange-400 text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-8">
                    If it was easy, everyone
                    <br />
                    would do it.
                  </p>
                  <cite className="block text-orange-300/80 text-lg md:text-xl font-medium not-italic">Engjell Rraklli</cite>
                </blockquote>

                {/* Closing Quote */}
                <div className="absolute -bottom-12 md:-bottom-16 right-4 md:right-8 text-orange-400/60 text-[120px] md:text-[160px] lg:text-[200px] font-bold leading-none rotate-180 select-none">
                  "
                </div>
              </div>
            </div>
          </div>

          {/* Opaque sections */}

            {/* The Entrepreneur Section */}
            <div className="px-8 md:px-16 lg:px-24 xl:px-32 2xl:px-40 py-16 md:py-24 relative z-10">
              <div className="max-w-7xl">
                <h2 className="text-white font-bold text-4xl md:text-5xl lg:text-6xl font-bold mb-12 uppercase tracking-wide font-bebas">THE ENTREPRENEUR</h2>
                  <div className="flex flex-col-reverse md:grid md:grid-cols-2 gap-12 md:gap-16 lg:gap-20 items-center">
                    <div>
                      <p className="text-body text-2xl md:text-3xl font-bold mb-8 leading-tight">
                        A journey of a thousand miles starts with 1 step.
                      </p>
                      <p className="text-body text-lg md:text-xl leading-relaxed mb-8">
                        10 years ago, I quit traditional education to build my own business. Since then, I founded and currently run{" "}
                        <span className="text-orange-400 font-semibold">division5</span>, a company which provides world-class software development services all over the globe. As a highly creative person, I thoroughly enjoy creating things. Be it software or companies. I have failed more than I have succeeded. Each experience came with a big set of learnings that has helped shape me into the entrepreneur I am today. I share my experience of{" "}
                        <span className="text-orange-400 font-semibold">scaling the unscalable</span>, growing service-based businesses to 7-figures and more.
                      </p>
                      <Link href="/entrepreneur">
                        <Button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-slate-800 px-8 md:px-12 py-4 md:py-6 text-base md:text-lg rounded-full font-bold tracking-wider transition-all duration-300 font-bebas">
                          FIND MORE
                        </Button>
                      </Link>
                    </div>
                    <div className="relative">
                      <div className="w-full h-80 md:h-96 lg:h-[500px] rounded-2xl overflow-hidden">
                        <Image
                          src="/DSC0112-scaled.jpg"
                          alt="Engjell Rraklli - Entrepreneur"
                          width={600}
                          height={400}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            {/* The 3D Guy Section */}
            <div className="px-8 md:px-16 lg:px-24 xl:px-32 2xl:px-40 py-16 md:py-24 relative z-10">
              <div className="max-w-7xl">
                <h2 className="text-white font-bold text-4xl md:text-5xl lg:text-6xl font-bold mb-12 uppercase tracking-wide font-bebas">THE 3D GUY</h2>
                  <div className="flex flex-col md:grid md:grid-cols-2 gap-12 md:gap-16 lg:gap-20 items-center">
                    <div className="relative">
                      <div className="w-full h-80 md:h-96 lg:h-[500px] rounded-2xl overflow-hidden">
                        <Image
                          src="/DSC0036-scaled.jpg"
                          alt="Engjell Rraklli - The 3D Guy"
                          width={600}
                          height={400}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                    <div>
                      <p className="text-body text-2xl md:text-3xl font-bold mb-8 leading-tight">
                        Passion turned into deep expertise.
                      </p>
                      <p className="text-body text-lg md:text-xl leading-relaxed mb-8">
                        I built my first game at 15, fell in love with 3D, and have been playing with 3D technology on the browser since 2017. I've built applications with{" "}
                        <span className="text-orange-400 font-semibold">Babylon.js</span> and{" "}
                        <span className="text-orange-400 font-semibold">Three.js</span>, and became known as "The 3D guy" after helping companies build complex 3D browser apps.
                      </p>
                      <Link href="/the-3d-guy">
                        <Button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-slate-800 px-8 md:px-12 py-4 md:py-6 text-base md:text-lg rounded-full font-bold tracking-wider transition-all duration-300 font-bebas">
                          FIND MORE
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

            {/* The Podcast Section */}
            <div className="px-8 md:px-16 lg:px-24 xl:px-32 2xl:px-40 py-16 md:py-24 relative z-10">
              <div className="max-w-7xl">
                <h2 className="text-white font-bold text-4xl md:text-5xl lg:text-6xl font-bold mb-12 uppercase tracking-wide font-bebas">THE PODCAST</h2>
                  <div className="flex flex-col-reverse md:grid md:grid-cols-2 gap-12 md:gap-16 lg:gap-20 items-center">
                    <div>
                      <p className="text-body text-2xl md:text-3xl font-bold mb-8 leading-tight">
                        Conversations that matter.
                      </p>
                      <p className="text-body text-lg md:text-xl leading-relaxed mb-8">
                        Deep conversations with entrepreneurs, innovators, and thought leaders shaping the future of technology and business. I share insights from my journey of{" "}
                        <span className="text-orange-400 font-semibold">scaling the unscalable</span> and growing service-based businesses to 7-figures and beyond. Join me for weekly episodes that inspire and educate.
                      </p>
                      <Link href="/podcast">
                        <Button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-slate-800 px-8 md:px-12 py-4 md:py-6 text-base md:text-lg rounded-full font-bold tracking-wider transition-all duration-300 font-bebas">
                          LISTEN NOW
                        </Button>
                      </Link>
                    </div>
                    <div className="relative">
                      <div className="w-full h-80 md:h-96 lg:h-[500px] rounded-2xl overflow-hidden">
                        <Image
                          src="/IMG_0425-scaled.jpg"
                          alt="Engjell Rraklli - Podcast"
                          width={600}
                          height={400}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
   {/* Subscribe Section */}
   <div className="px-8 md:px-16 lg:px-24 xl:px-32 2xl:px-40 py-16 md:py-24 relative z-10">
              <div className="max-w-5xl mx-auto text-center">
                <h2 className="text-white font-bold text-4xl md:text-5xl lg:text-6xl font-bold mb-8 uppercase tracking-wide font-bebas">SUBSCRIBE</h2>
                <p className="text-gray-300 text-lg md:text-xl mb-12 leading-relaxed">
                  Subscribe to my weekly newsletter about growing service-based businesses globally. Submit your email below.
                </p>

                                 <form
                   onSubmit={handleSubscribe}
                   className="space-y-4 min-h-[200px] flex flex-col justify-center"
                   aria-label="Subscribe to newsletter"
                   autoComplete="off"
                   noValidate
                 >
                  <div className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto w-full">
                    <input
                      type="email"
                      placeholder="E-mail"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      disabled={status === 'loading'}
                      required
                      aria-label="Email address"
                      className="bg-slate-700 border-slate-600 text-white placeholder:text-gray-400 flex-1 px-6 py-4 rounded-lg border text-lg focus:outline-none focus:ring-2 focus:ring-emerald-400 transition-all duration-150 min-w-0"
                    />
                                         <button
                       type="submit"
                       disabled={status === 'loading'}
                       aria-busy={status === 'loading'}
                       aria-live="polite"
                       className="bg-emerald-400 hover:bg-emerald-500 text-black font-bold px-8 py-4 text-lg font-bebas h-14 min-w-[120px] rounded-lg disabled:opacity-50 flex items-center justify-center transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-emerald-400"
                     >
                       <span className="flex items-center justify-center w-full">
                         {status === 'loading' ? (
                           <>
                             <Loader2 size={18} className="mr-2 animate-spin" aria-hidden="true" />
                             <span>Subscribing...</span>
                           </>
                         ) : (
                           <span>SEND</span>
                         )}
                       </span>
                     </button>
                  </div>
                  {/* Status Message - Always reserve space */}
                  <div
                    className="h-8 flex items-center justify-center text-center transition-colors duration-150"
                    aria-live="polite"
                    aria-atomic="true"
                  >
                    {status !== 'idle' && (
                      <div
                        className={`flex items-center justify-center space-x-2 text-sm w-full max-w-xl mx-auto ${
                          status === 'success'
                            ? 'text-emerald-400'
                            : status === 'error'
                            ? 'text-red-400'
                            : 'text-gray-400'
                        }`}
                        role={status === 'error' ? 'alert' : undefined}
                      >
                        {status === 'success' && <CheckCircle size={16} aria-hidden="true" />}
                        {status === 'error' && <AlertCircle size={16} aria-hidden="true" />}
                        <span className="truncate block w-full">{message || (status === 'success' ? 'Subscribed!' : status === 'error' ? 'There was an error.' : '')}</span>
                      </div>
                    )}
                  </div>
                </form>
              </div>
            </div>
         
          {/* Footer */}
          <div className="relative z-10">
            <Footer />
          </div>

        </div>
      </div>
    </div>
  )
} 