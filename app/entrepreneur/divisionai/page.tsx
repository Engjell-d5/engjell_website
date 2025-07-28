import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Mail, Phone, MapPin, Rocket, Users, Target, TrendingUp, Shield, Zap, Globe, Brain, Cpu, Database, Clock, DollarSign, MessageSquare, Calendar, Star, Sparkles } from "lucide-react"
import Footer from "@/components/footer"
import SubscribeSection from "@/components/subscribe-section"
import SharedBackground from "@/components/shared-background"

import Image from "next/image"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "DivisionAI - AI-Powered Development at Record Speed",
  description: "World-class software delivered at record speed for a fraction of the cost. Real engineers enhanced with AI tools deliver incredible results.",
  keywords: ["DivisionAI", "AI-powered development", "software development", "rapid prototyping", "AI-enhanced engineers", "development credits"],
  openGraph: {
    title: "DivisionAI - AI-Powered Development at Record Speed",
    description: "World-class software delivered at record speed for a fraction of the cost. Real engineers enhanced with AI tools deliver incredible results.",
    type: "website",
    url: "https://engjellrraklli.com/entrepreneur/divisionai",
    images: [
      {
        url: "/DSC0019-scaled.jpg",
        width: 1200,
        height: 630,
        alt: "Engjell Rraklli - DivisionAI AI-Powered Development"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "DivisionAI - AI-Powered Development at Record Speed",
    description: "World-class software delivered at record speed for a fraction of the cost. Real engineers enhanced with AI tools deliver incredible results.",
    images: ["/DSC0019-scaled.jpg"]
  },
  alternates: {
    canonical: "https://engjellrraklli.com/entrepreneur/divisionai"
  }
}

export default function DivisionAIPage() {
  return (
    <SharedBackground>
          {/* Hero Section */}
          <div className="px-8 md:px-16 lg:px-24 xl:px-32 2xl:px-40 py-16 md:py-24 min-h-screen flex flex-col justify-center">
            <div className="max-w-7xl">
              <div className="text-center mb-16">
                <h1 className="text-white font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bebas uppercase tracking-wide mb-8 text-center">DIVISIONAI</h1>
              </div>

          <div className="prose prose-invert prose-lg max-w-none">
                <h3 className="text-white text-2xl md:text-3xl font-bold mb-8 font-bebas leading-tight">
                  Real Engineers Powered by AI
                </h3>
                
                <div className="flex flex-col-reverse md:grid md:grid-cols-2 gap-12 md:gap-16 lg:gap-20 items-center mb-12">
                  <div className="space-y-6 text-gray-300 text-lg md:text-xl leading-relaxed font-montserrat">
                    <p>
                      🚀 World-class software delivered at <span className="text-cyan-400 font-bold">record speed</span> for a <span className="text-purple-400 font-bold">fraction of the cost</span>. Our experienced engineers use cutting-edge AI tools to prototype, build MVPs, and automate workflows <span className="text-green-400 font-bold">10x faster</span> than traditional development teams.
                    </p>
                    <p>
                      We specialize in rapid prototyping and development. Most MVPs are live within 3-7 days. We focus on core features first, get you something testable quickly, then iterate based on real user feedback. Speed is our superpower!
                    </p>
                    <p>
                      Our engineers are experienced professionals who leverage cutting-edge AI tools to work 10x faster. They use AI for code generation, bug detection, testing, and optimization while applying human creativity and problem-solving skills.
                    </p>
                  </div>
                  
                  <div className="relative">
                    <div className="w-full h-80 md:h-96 lg:h-[500px] rounded-2xl overflow-hidden bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center">
                      <Brain className="text-white text-8xl" />
                    </div>
                  </div>
                </div>

                <div className="text-center">
                  <Link href="https://divisionai.co" target="_blank" rel="noopener noreferrer">
                    <Button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-slate-800 font-bold px-8 md:px-12 py-4 md:py-6 text-base md:text-lg transition-all duration-300 font-bebas">
                      START BUILDING NOW
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* How It Works Section */}
          <div className="px-8 md:px-16 lg:px-24 xl:px-32 2xl:px-40 py-16 md:py-24">
            <div className="max-w-7xl">
              <h2 className="text-white font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bebas uppercase tracking-wide mb-16 text-center break-words">HOW AI-POWERED ENGINEERS TRANSFORM DEVELOPMENT</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-20">
                {/* Step 1 */}
                <div className="text-center">
                  <div className="w-16 h-16 flex items-center justify-center mb-6 mx-auto bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl">
                    <Zap className="text-white text-3xl" />
                  </div>
                  <h3 className="text-white font-bold text-xl mb-4 font-bebas uppercase tracking-wide">1. Drop tasks on your board</h3>
                  <p className="text-body text-base md:text-lg leading-relaxed font-montserrat">Add your ideas, features, or automation needs to your personal board. No meetings, no calls - just clear tasks that get picked up instantly by our AI-enhanced engineers!</p>
                </div>

                {/* Step 2 */}
                <div className="text-center">
                  <div className="w-16 h-16 flex items-center justify-center mb-6 mx-auto bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl">
                    <Brain className="text-white text-3xl" />
                  </div>
                  <h3 className="text-white font-bold text-xl mb-4 font-bebas uppercase tracking-wide">2. AI-enhanced engineers build it</h3>
                  <p className="text-body text-base md:text-lg leading-relaxed font-montserrat">Our experienced engineers use advanced AI tools to code faster, catch bugs instantly, and deliver perfect results. Human creativity combined with AI precision and speed!</p>
                </div>

                {/* Step 3 */}
                <div className="text-center">
                  <div className="w-16 h-16 flex items-center justify-center mb-6 mx-auto bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl">
                    <Rocket className="text-white text-3xl" />
                  </div>
                  <h3 className="text-white font-bold text-xl mb-4 font-bebas uppercase tracking-wide">3. Deploy, test, iterate!</h3>
                  <p className="text-body text-base md:text-lg leading-relaxed font-montserrat">Get your working prototype deployed, test with real users, iterate based on feedback, and scale what works. Move from concept to validation at lightning speed!</p>
                </div>
              </div>

              <div className="text-center">
                <Link href="https://divisionai.co" target="_blank" rel="noopener noreferrer">
                  <Button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-slate-800 font-bold px-8 md:px-12 py-4 md:py-6 text-base md:text-lg rounded-full transition-all duration-300 font-bebas">
                    SEE HOW IT WORKS
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          {/* Benefits Section */}
          <div className="px-8 md:px-16 lg:px-24 xl:px-32 2xl:px-40 py-16 md:py-24">
            <div className="max-w-7xl">
              <h2 className="text-white font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bebas uppercase tracking-wide mb-16 text-center break-words">THE OLD PROBLEMS ARE SOLVED WITH AI-POWERED ENGINEERING</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 mb-20">
                {/* Benefit 1 */}
                <div className="text-center">
                  <div className="w-16 h-16 flex items-center justify-center mb-6 mx-auto bg-green-500/20 rounded-full">
                    <Clock className="text-green-400 text-3xl" />
                  </div>
                  <h3 className="text-green-400 font-bold text-xl mb-4 font-bebas uppercase tracking-wide">Lightning Fast Delivery</h3>
                  <p className="text-body text-base md:text-lg leading-relaxed font-montserrat">Ideas to working prototypes in 24-48 hours, not weeks</p>
                </div>

                {/* Benefit 2 */}
                <div className="text-center">
                  <div className="w-16 h-16 flex items-center justify-center mb-6 mx-auto bg-green-500/20 rounded-full">
                    <DollarSign className="text-green-400 text-3xl" />
                  </div>
                  <h3 className="text-green-400 font-bold text-xl mb-4 font-bebas uppercase tracking-wide">Fraction of the Cost</h3>
                  <p className="text-body text-base md:text-lg leading-relaxed font-montserrat">€999-€4,999/month vs €100k+ for a development team</p>
                </div>

                {/* Benefit 3 */}
                <div className="text-center">
                  <div className="w-16 h-16 flex items-center justify-center mb-6 mx-auto bg-green-500/20 rounded-full">
                    <TrendingUp className="text-green-400 text-3xl" />
                  </div>
                  <h3 className="text-green-400 font-bold text-xl mb-4 font-bebas uppercase tracking-wide">Automated Workflows</h3>
                  <p className="text-body text-base md:text-lg leading-relaxed font-montserrat">Save hours every week with intelligent automation</p>
                </div>

                {/* Benefit 4 */}
                <div className="text-center">
                  <div className="w-16 h-16 flex items-center justify-center mb-6 mx-auto bg-green-500/20 rounded-full">
                    <MessageSquare className="text-green-400 text-3xl" />
                  </div>
                  <h3 className="text-green-400 font-bold text-xl mb-4 font-bebas uppercase tracking-wide">Zero Meetings</h3>
                  <p className="text-body text-base md:text-lg leading-relaxed font-montserrat">Task board system eliminates endless calls and meetings</p>
                </div>

                {/* Benefit 5 */}
                <div className="text-center">
                  <div className="w-16 h-16 flex items-center justify-center mb-6 mx-auto bg-green-500/20 rounded-full">
                    <Users className="text-green-400 text-3xl" />
                  </div>
                  <h3 className="text-green-400 font-bold text-xl mb-4 font-bebas uppercase tracking-wide">Expert Engineers</h3>
                  <p className="text-body text-base md:text-lg leading-relaxed font-montserrat">Experienced developers enhanced with AI superpowers</p>
                </div>

                {/* Benefit 6 */}
                <div className="text-center">
                  <div className="w-16 h-16 flex items-center justify-center mb-6 mx-auto bg-green-500/20 rounded-full">
                    <Calendar className="text-green-400 text-3xl" />
                  </div>
                  <h3 className="text-green-400 font-bold text-xl mb-4 font-bebas uppercase tracking-wide">Instant Validation</h3>
                  <p className="text-body text-base md:text-lg leading-relaxed font-montserrat">Test concepts and get market feedback in days, not months</p>
                </div>
              </div>

              <div className="text-center">
                <p className="text-cyan-400 text-xl md:text-2xl font-bold animate-pulse mb-8">⚡ This is how modern development should work - fast, efficient, and results-driven</p>
                <Link href="https://divisionai.co" target="_blank" rel="noopener noreferrer">
                  <Button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-slate-800 font-bold px-8 md:px-12 py-4 md:py-6 text-base md:text-lg rounded-full transition-all duration-300 font-bebas">
                    EXPERIENCE THE POWER
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="px-8 md:px-16 lg:px-24 xl:px-32 2xl:px-40 py-16 md:py-24">
            <div className="max-w-7xl">
              <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8 text-sm">
                <div className="flex items-center space-x-2 text-yellow-400">
                  <Star className="h-5 w-5" />
                  <span className="text-gray-300">Trusted by 50+ companies</span>
                </div>
                <div className="flex items-center space-x-2 text-green-400">
                  <Shield className="h-5 w-5" />
                  <span className="text-gray-300">100% satisfaction guarantee</span>
                </div>
                <div className="flex items-center space-x-2 text-purple-400">
                  <Sparkles className="h-5 w-5" />
                  <span className="text-gray-300">AI-Enhanced Engineers</span>
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