'use client'

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Mail, Phone, MapPin, CheckCircle, AlertCircle, Loader2, Play } from "lucide-react"
import Footer from "@/components/footer"
import SubscribeSection from "@/components/subscribe-section"
import Image from "next/image"
import { YouTubeVideo } from "@/lib/youtube"

export default function HomeClient() {
  const [email, setEmail] = useState("")
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [message, setMessage] = useState("")
  const [podcastEpisodes, setPodcastEpisodes] = useState<YouTubeVideo[]>([]);
  const [podcastLoading, setPodcastLoading] = useState(true);

  // Fetch podcast episodes
  useEffect(() => {
    async function fetchPodcastEpisodes() {
      try {
        const videosResponse = await fetch(`/api/podcast?action=get-channel-videos&page=1&limit=1`);
        const videosData = await videosResponse.json();
        
        setPodcastEpisodes(videosData.videos || []);
      } catch (error) {
        console.error('Error fetching podcast episodes:', error);
      } finally {
        setPodcastLoading(false);
      }
    }

    fetchPodcastEpisodes();
  }, []);

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
            className="object-cover object-center object-[center_50%] sm:object-[center_70%] md:object-[center_120%]"
            priority
            quality={95}
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

            {/* Combined Sections Row */}
            <div className="px-4 md:px-8 lg:px-12 py-16 md:py-24 relative z-10">
              <div className="w-full">
                <h2 className="text-white font-bold text-4xl md:text-5xl lg:text-6xl font-bold mb-12 uppercase tracking-wide font-bebas text-center">EXPLORE</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
                  {/* The Entrepreneur */}
                  <Link href="/entrepreneur" className="group">
                    <div className="relative overflow-hidden rounded-2xl transition-all duration-300 hover:scale-105 border-2 border-emerald-400/20 hover:border-emerald-400/40">
                      <div className="aspect-[4/5] relative">
                        <Image
                          src="/DSC0112-scaled.jpg"
                          alt="Engjell Rraklli - Entrepreneur"
                          fill
                          className="object-cover transition-transform duration-300 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/50 via-emerald-800/10 to-transparent"></div>
                        <div className="absolute bottom-6 left-6 right-6">
                          <h3 className="text-white font-bold text-2xl md:text-3xl mb-2 font-bebas uppercase tracking-wide">ENTREPRENEUR</h3>
                          <p className="text-emerald-400 font-semibold text-lg md:text-xl font-bebas uppercase tracking-wide">BUILD</p>
                          <div className="mt-3 flex items-center gap-2">
                            <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                            <span className="text-emerald-300 text-sm font-medium">Scale & Grow</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>

                  {/* The 3D Guy */}
                  <Link href="/entrepreneur/division3d" className="group">
                    <div className="relative overflow-hidden rounded-2xl transition-all duration-300 hover:scale-105 border-2 border-purple-400/20 hover:border-purple-400/40">
                      <div className="aspect-[4/5] relative">
                        <Image
                          src="/DSC0036-scaled.jpg"
                          alt="Engjell Rraklli - The 3D Guy"
                          fill
                          className="object-cover transition-transform duration-300 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-purple-900/50 via-purple-800/10 to-transparent"></div>
                        <div className="absolute bottom-6 left-6 right-6">
                          <h3 className="text-white font-bold text-2xl md:text-3xl mb-2 font-bebas uppercase tracking-wide">3D GUY</h3>
                          <p className="text-purple-400 font-semibold text-lg md:text-xl font-bebas uppercase tracking-wide">CREATE</p>
                          <div className="mt-3 flex items-center gap-2">
                            <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                            <span className="text-purple-300 text-sm font-medium">Visualize & Design</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>

                  {/* The Podcast */}
                  <Link href="/podcast" className="group">
                    <div className="relative overflow-hidden rounded-2xl transition-all duration-300 hover:scale-105 border-2 border-orange-400/20 hover:border-orange-400/40">
                      <div className="aspect-[4/5] relative">
                        <Image
                          src="/IMG_0425-scaled.jpg"
                          alt="Engjell Rraklli - Podcast"
                          fill
                          className="object-cover transition-transform duration-300 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-orange-900/50 via-orange-800/10 to-transparent"></div>
                        <div className="absolute bottom-6 left-6 right-6">
                          <h3 className="text-white font-bold text-2xl md:text-3xl mb-2 font-bebas uppercase tracking-wide">PODCAST</h3>
                          <p className="text-orange-400 font-semibold text-lg md:text-xl font-bebas uppercase tracking-wide">LISTEN</p>
                          <div className="mt-3 flex items-center gap-2">
                            <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                            <span className="text-orange-300 text-sm font-medium">Learn & Connect</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>

          {/* Latest Podcast Episodes Section */}
          <div className="px-8 md:px-16 lg:px-24 xl:px-32 2xl:px-40 py-16 md:py-24 relative z-10">
            {/* Background Pattern for Podcasts */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-0 w-full h-full">
                <svg className="w-full h-full" viewBox="0 0 1200 800" fill="none" xmlns="http://www.w3.org/2000/svg">
                  {/* Sound waves pattern */}
                  <path d="M0 200 Q150 150 300 200 T600 200 T900 200 T1200 200" stroke="rgba(255,255,255,0.3)" strokeWidth="2" fill="none"/>
                  <path d="M0 250 Q150 200 300 250 T600 250 T900 250 T1200 250" stroke="rgba(255,255,255,0.2)" strokeWidth="2" fill="none"/>
                  <path d="M0 300 Q150 250 300 300 T600 300 T900 300 T1200 300" stroke="rgba(255,255,255,0.1)" strokeWidth="2" fill="none"/>
                  {/* Circular elements representing speakers */}
                  <circle cx="100" cy="100" r="20" fill="rgba(255,255,255,0.1)"/>
                  <circle cx="1100" cy="100" r="20" fill="rgba(255,255,255,0.1)"/>
                  <circle cx="100" cy="700" r="15" fill="rgba(255,255,255,0.1)"/>
                  <circle cx="1100" cy="700" r="15" fill="rgba(255,255,255,0.1)"/>
                </svg>
              </div>
            </div>
            
            <div className="max-w-7xl relative z-10">
              <div className="text-center mb-12">
                <h2 className="text-white font-bold text-4xl md:text-5xl lg:text-6xl font-bold uppercase tracking-wide font-bebas mb-4">LATEST EPISODES</h2>
                <p className="text-gray-300 text-lg md:text-xl font-montserrat">Deep conversations with entrepreneurs and innovators</p>
              </div>

              <div className="grid grid-cols-1 gap-8 md:gap-12">
                {podcastLoading ? (
                  // Loading state
                  <div className="bg-gradient-to-br from-orange-400/10 to-red-400/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-orange-400/20">
                    <div className="aspect-[16/9] relative overflow-hidden bg-gray-800 animate-pulse">
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-2 mb-3">
                        <div className="h-4 bg-gray-700 rounded animate-pulse w-20"></div>
                        <span className="text-gray-400">•</span>
                        <div className="h-4 bg-gray-700 rounded animate-pulse w-16"></div>
                      </div>
                      <div className="h-6 bg-gray-700 rounded animate-pulse w-3/4 mb-3"></div>
                      <div className="h-4 bg-gray-700 rounded animate-pulse w-full mb-2"></div>
                      <div className="h-4 bg-gray-700 rounded animate-pulse w-2/3"></div>
                    </div>
                  </div>
                ) : podcastEpisodes.length > 0 ? (
                  // Podcast episode
                  <Link href={podcastEpisodes[0].url} target="_blank" rel="noopener noreferrer" className="group">
                    <div className="bg-gradient-to-br from-orange-400/10 to-red-400/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-orange-400/20 transition-all duration-300 hover:scale-105 hover:border-orange-400/40">
                      <div className="aspect-[16/9] relative overflow-hidden">
                        <Image
                          src={podcastEpisodes[0].thumbnail}
                          alt={podcastEpisodes[0].title}
                          fill
                          className="object-cover transition-transform duration-300 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <div className="bg-orange-400/90 backdrop-blur-sm rounded-full p-6 transform scale-75 group-hover:scale-100 transition-transform duration-300">
                            <Play className="h-10 w-10 text-white fill-white" />
                          </div>
                        </div>
                        <div className="absolute top-4 right-4 bg-orange-400/90 backdrop-blur-sm rounded-full px-3 py-1 text-xs font-bold text-white">
                          LATEST
                        </div>
                      </div>
                      <div className="p-6">
                        <div className="flex items-center gap-2 mb-3">
                          <span className="text-orange-400 text-sm font-semibold uppercase tracking-wide">Podcast</span>
                          <span className="text-gray-400">•</span>
                          <span className="text-gray-400 text-sm">{podcastEpisodes[0].duration}</span>
                          <span className="text-gray-400">•</span>
                          <span className="text-orange-400 text-sm">🎧 Listen</span>
                        </div>
                        <h3 className="text-white font-bold text-xl mb-3 font-bebas uppercase tracking-wide group-hover:text-orange-400 transition-colors">
                          {podcastEpisodes[0].title}
                        </h3>
                        <p className="text-gray-300 text-sm leading-relaxed font-montserrat line-clamp-3">
                          {podcastEpisodes[0].description.length > 150 
                            ? `${podcastEpisodes[0].description.substring(0, 150)}...` 
                            : podcastEpisodes[0].description}
                        </p>
                      </div>
                    </div>
                  </Link>
                ) : (
                  // Fallback when no episodes
                  <div className="bg-gradient-to-br from-orange-400/10 to-red-400/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-orange-400/20">
                    <div className="aspect-[16/9] relative overflow-hidden">
                      <Image
                        src="/IMG_0425-scaled.jpg"
                        alt="Scaling the Unscalable Podcast"
                        fill
                        className="object-cover"
                        />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                      <div className="absolute top-4 right-4 bg-orange-400/90 backdrop-blur-sm rounded-full px-3 py-1 text-xs font-bold text-white">
                        COMING SOON
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="text-orange-400 text-sm font-semibold uppercase tracking-wide">Podcast</span>
                        <span className="text-gray-400">•</span>
                        <span className="text-gray-400 text-sm">Coming soon</span>
                      </div>
                      <h3 className="text-white font-bold text-xl mb-3 font-bebas uppercase tracking-wide">
                        Scaling the Unscalable
                      </h3>
                      <p className="text-gray-300 text-sm leading-relaxed font-montserrat">
                        Deep conversations with entrepreneurs, innovators, and thought leaders shaping the future of technology and business.
                      </p>
                    </div>
                  </div>
                )}
              </div>

              <div className="text-center mt-12">
                <Link href="/podcast">
                  <Button className="bg-gradient-to-r from-orange-400 to-red-400 hover:from-orange-500 hover:to-red-500 text-white px-8 md:px-12 py-4 md:py-6 text-base md:text-lg rounded-full font-bold tracking-wider transition-all duration-300 font-bebas shadow-lg hover:shadow-xl">
                    LISTEN TO ALL EPISODES
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>

          {/* Latest Blog Posts Section */}
          <div className="px-8 md:px-16 lg:px-24 xl:px-32 2xl:px-40 py-16 md:py-24 relative z-10">
            {/* Background Pattern for Blogs */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-0 w-full h-full">
                <svg className="w-full h-full" viewBox="0 0 1200 800" fill="none" xmlns="http://www.w3.org/2000/svg">
                  {/* Text/document pattern */}
                  <rect x="50" y="50" width="100" height="120" rx="8" fill="rgba(255,255,255,0.1)" stroke="rgba(255,255,255,0.2)" strokeWidth="1"/>
                  <rect x="70" y="80" width="60" height="2" fill="rgba(255,255,255,0.3)"/>
                  <rect x="70" y="90" width="40" height="2" fill="rgba(255,255,255,0.2)"/>
                  <rect x="70" y="100" width="50" height="2" fill="rgba(255,255,255,0.2)"/>
                  
                  <rect x="1050" y="50" width="100" height="120" rx="8" fill="rgba(255,255,255,0.1)" stroke="rgba(255,255,255,0.2)" strokeWidth="1"/>
                  <rect x="1070" y="80" width="60" height="2" fill="rgba(255,255,255,0.3)"/>
                  <rect x="1070" y="90" width="40" height="2" fill="rgba(255,255,255,0.2)"/>
                  <rect x="1070" y="100" width="50" height="2" fill="rgba(255,255,255,0.2)"/>
                  
                  <rect x="50" y="650" width="100" height="120" rx="8" fill="rgba(255,255,255,0.1)" stroke="rgba(255,255,255,0.2)" strokeWidth="1"/>
                  <rect x="70" y="680" width="60" height="2" fill="rgba(255,255,255,0.3)"/>
                  <rect x="70" y="690" width="40" height="2" fill="rgba(255,255,255,0.2)"/>
                  <rect x="70" y="700" width="50" height="2" fill="rgba(255,255,255,0.2)"/>
                  
                  <rect x="1050" y="650" width="100" height="120" rx="8" fill="rgba(255,255,255,0.1)" stroke="rgba(255,255,255,0.2)" strokeWidth="1"/>
                  <rect x="1070" y="680" width="60" height="2" fill="rgba(255,255,255,0.3)"/>
                  <rect x="1070" y="690" width="40" height="2" fill="rgba(255,255,255,0.2)"/>
                  <rect x="1070" y="700" width="50" height="2" fill="rgba(255,255,255,0.2)"/>
                  
                  {/* Quote marks */}
                  <text x="200" y="200" fill="rgba(255,255,255,0.2)" fontSize="60" fontFamily="serif">"</text>
                  <text x="1000" y="200" fill="rgba(255,255,255,0.2)" fontSize="60" fontFamily="serif">"</text>
                  <text x="200" y="600" fill="rgba(255,255,255,0.2)" fontSize="60" fontFamily="serif">"</text>
                  <text x="1000" y="600" fill="rgba(255,255,255,0.2)" fontSize="60" fontFamily="serif">"</text>
                </svg>
              </div>
            </div>
            
            <div className="max-w-7xl relative z-10">
              <div className="text-center mb-12">
                <h2 className="text-white font-bold text-4xl md:text-5xl lg:text-6xl font-bold uppercase tracking-wide font-bebas mb-4">LATEST INSIGHTS</h2>
                <p className="text-gray-300 text-lg md:text-xl font-montserrat">Thoughts on scaling service-based businesses and entrepreneurship</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                {/* Blog Post 1 */}
                <Link href="/blog/culture-starts-at-the-top" className="group">
                  <div className="bg-gradient-to-br from-emerald-400/10 to-teal-400/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-emerald-400/20 transition-all duration-300 hover:scale-105 hover:border-emerald-400/40 h-full flex flex-col">
                    <div className="aspect-[16/9] relative overflow-hidden flex-shrink-0">
                      <Image
                        src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj6CV6kTVlxgjA36P8XO4Al8gaPycuSZuR5HVgH9SR839ffF9-YVCL5IUe5yxzgLh1hag3w-57rpBB1XasVQVMZmq9zPTelatHTMHs8OdeEhwvOrnvOV4DILOf-qvhhpK8k-o52tpof2hZht4o-HSm3cUC_aCH_btAR7d1daXUPY5-PlwmaW8J9xofAKLs/w640-h426/DSC0091.jpg"
                        alt="Culture starts at the top"
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                      <div className="absolute top-4 left-4 bg-emerald-400/90 backdrop-blur-sm rounded-full px-3 py-1 text-xs font-bold text-white">
                        FEATURED
                      </div>
                      <div className="absolute bottom-4 right-4 bg-white/20 backdrop-blur-sm rounded-full px-3 py-1 text-xs font-bold text-white">
                        📖 Read
                      </div>
                    </div>
                    <div className="p-6 flex-1 flex flex-col">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="text-emerald-400 text-sm font-semibold uppercase tracking-wide">Entrepreneurship</span>
                        <span className="text-gray-400">•</span>
                        <span className="text-gray-400 text-sm">3 min read</span>
                        <span className="text-gray-400">•</span>
                        <span className="text-emerald-400 text-sm">📖 Read</span>
                      </div>
                      <h3 className="text-white font-bold text-xl mb-3 font-bebas uppercase tracking-wide group-hover:text-emerald-400 transition-colors">
                        Culture starts at the top
                      </h3>
                      <p className="text-gray-300 text-sm leading-relaxed font-montserrat line-clamp-3 flex-1">
                        It was mid-2020, right after the pandemic lockdown, when we saw a huge surge in demand for our services at division5. At that time, we were a team of about...
                      </p>
                    </div>
                  </div>
                </Link>

                {/* Blog Post 2 */}
                <Link href="/blog/provide-a-service-people-love-to-share" className="group">
                  <div className="bg-gradient-to-br from-emerald-400/10 to-teal-400/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-emerald-400/20 transition-all duration-300 hover:scale-105 hover:border-emerald-400/40 h-full flex flex-col">
                    <div className="aspect-[16/9] relative overflow-hidden flex-shrink-0">
                        <Image
                        src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhIibynJHZpcNGIlTlUZLk62vZ-0yu2X0Io3eipYkfE0D1V5EdTEVaUotJgMnGaEZ8iQmE2E1FzJ9gQ7k2T5CX4KMLmcjpUisfaSg0R9dTFuDtHJubH2K2LmuiiPrm7l3zHICYvc1s1WjgORmMj0dJFkXUQqnoBG6JMQgd9QzTWvLKK8DcsXvAwttP8xmE/w640-h426/DSC0142.jpg"
                        alt="Provide a service people love to share"
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                      <div className="absolute top-4 left-4 bg-blue-400/90 backdrop-blur-sm rounded-full px-3 py-1 text-xs font-bold text-white">
                        POPULAR
                      </div>
                      <div className="absolute bottom-4 right-4 bg-white/20 backdrop-blur-sm rounded-full px-3 py-1 text-xs font-bold text-white">
                        📖 Read
                      </div>
                    </div>
                    <div className="p-6 flex-1 flex flex-col">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="text-emerald-400 text-sm font-semibold uppercase tracking-wide">Entrepreneurship</span>
                        <span className="text-gray-400">•</span>
                        <span className="text-gray-400 text-sm">3 min read</span>
                        <span className="text-gray-400">•</span>
                        <span className="text-emerald-400 text-sm">📖 Read</span>
                      </div>
                      <h3 className="text-white font-bold text-xl mb-3 font-bebas uppercase tracking-wide group-hover:text-emerald-400 transition-colors">
                        Provide a service people love to share
                      </h3>
                      <p className="text-gray-300 text-sm leading-relaxed font-montserrat line-clamp-3 flex-1">
                        A few months into my entrepreneurial journey, I was trying to figure out how to stay in business. Without connections, it's tough—especially when your clients are businesses...
                      </p>
                    </div>
                  </div>
                </Link>
                </div>

              <div className="text-center mt-12">
                <Link href="/blog">
                  <Button className="bg-gradient-to-r from-emerald-400 to-teal-400 hover:from-emerald-500 hover:to-teal-500 text-white px-8 md:px-12 py-4 md:py-6 text-base md:text-lg rounded-full font-bold tracking-wider transition-all duration-300 font-bebas shadow-lg hover:shadow-xl">
                    READ ALL POSTS
                  </Button>
                </Link>
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