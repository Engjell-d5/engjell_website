import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Instagram, Linkedin, Twitter, ArrowRight, Mail, ExternalLink } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen flex">
      {/* Sidebar */}
      <div className="w-80 bg-emerald-400 flex flex-col relative">
        {/* Logo */}
        <div className="p-8 pt-12">
          <div className="w-28 h-28 rounded-full border-2 border-white flex items-center justify-center">
            <span className="text-white text-3xl font-light italic tracking-wide">ER</span>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-8 pt-8">
          <div className="space-y-2">
            <div className="bg-black text-white px-4 py-3 text-sm font-bold uppercase tracking-wider mb-6">
              ENGJELL RRAKLLI
            </div>
            <Link
              href="/entrepreneur"
              className="block text-white py-4 text-lg font-medium hover:opacity-80 transition-opacity uppercase tracking-wide"
            >
              ENTREPRENEUR
            </Link>
            <Link
              href="/the-3d-guy"
              className="block text-white py-4 text-lg font-medium hover:opacity-80 transition-opacity uppercase tracking-wide"
            >
              THE 3D GUY
            </Link>
            <Link
              href="/blog"
              className="block text-white py-4 text-lg font-medium hover:opacity-80 transition-opacity uppercase tracking-wide"
            >
              BLOG
            </Link>
            <Link
              href="/podcast"
              className="block text-white py-4 text-lg font-medium hover:opacity-80 transition-opacity uppercase tracking-wide"
            >
              PODCAST
            </Link>
            <Link
              href="/contact"
              className="block text-white py-4 text-lg font-medium hover:opacity-80 transition-opacity uppercase tracking-wide"
            >
              CONTACT
            </Link>
          </div>
        </nav>

        {/* Social Icons */}
        <div className="p-8 pb-12">
          <div className="flex space-x-6">
            <Link href="#" className="text-white hover:opacity-80 transition-opacity">
              <Instagram size={28} />
            </Link>
            <Link href="#" className="text-white hover:opacity-80 transition-opacity">
              <Linkedin size={28} />
            </Link>
            <Link href="#" className="text-white hover:opacity-80 transition-opacity">
              <Twitter size={28} />
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
          <div className="p-16 min-h-screen flex flex-col justify-center">
            <div className="max-w-5xl">
              {/* Main Title */}
              <h1 className="mb-8">
                <span className="block text-white text-8xl font-black tracking-tight leading-none mb-2">ENGJELL</span>
                <span className="block text-8xl font-black tracking-tight leading-none font-outline-2">RRAKLLI</span>
              </h1>

              {/* Subtitle */}
              <p className="text-white text-xl mb-16 tracking-widest font-medium">
                ENTREPRENEUR | THE 3D GUY | SPEAKER
              </p>

              {/* CTA Button */}
              <Button
                variant="outline"
                size="lg"
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-slate-800 px-12 py-6 text-lg rounded-full font-bold tracking-wider transition-all duration-300 mb-32"
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
              <h2 className="text-white text-5xl font-bold mb-12 uppercase tracking-wide">The Entrepreneur</h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div>
                  <p className="text-gray-300 text-xl leading-relaxed mb-8">
                    Building innovative solutions and scaling businesses from concept to market leadership. My
                    entrepreneurial journey spans multiple successful ventures in technology, 3D innovation, and digital
                    transformation.
                  </p>
                  <div className="space-y-4 mb-8">
                    <div className="flex items-center text-emerald-400">
                      <ArrowRight size={20} className="mr-3" />
                      <span className="text-lg">Founded 5+ successful tech companies</span>
                    </div>
                    <div className="flex items-center text-emerald-400">
                      <ArrowRight size={20} className="mr-3" />
                      <span className="text-lg">Raised $10M+ in funding</span>
                    </div>
                    <div className="flex items-center text-emerald-400">
                      <ArrowRight size={20} className="mr-3" />
                      <span className="text-lg">Mentored 100+ entrepreneurs</span>
                    </div>
                  </div>
                  <Link href="/entrepreneur">
                    <Button className="bg-emerald-400 hover:bg-emerald-500 text-black font-bold px-8 py-4 text-lg">
                      Learn More
                      <ExternalLink size={20} className="ml-2" />
                    </Button>
                  </Link>
                </div>
                <div className="relative">
                  <div className="w-full h-96 bg-gradient-to-br from-emerald-400/20 to-teal-600/20 rounded-2xl flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-32 h-32 bg-emerald-400 rounded-full flex items-center justify-center mb-6 mx-auto">
                        <span className="text-black text-4xl font-bold">💼</span>
                      </div>
                      <p className="text-white text-xl font-semibold">Innovation & Leadership</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* The 3D Guy Section */}
          <div className="px-16 py-24 bg-slate-900/50">
            <div className="max-w-6xl">
              <h2 className="text-white text-5xl font-bold mb-12 uppercase tracking-wide">The 3D Guy</h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div className="relative order-2 lg:order-1">
                  <div className="w-full h-96 bg-gradient-to-br from-orange-400/20 to-red-600/20 rounded-2xl flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-32 h-32 bg-orange-400 rounded-full flex items-center justify-center mb-6 mx-auto">
                        <span className="text-black text-4xl font-bold">🎯</span>
                      </div>
                      <p className="text-white text-xl font-semibold">3D Innovation</p>
                    </div>
                  </div>
                </div>
                <div className="order-1 lg:order-2">
                  <p className="text-gray-300 text-xl leading-relaxed mb-8">
                    Pioneering the future of 3D technology and immersive experiences. From virtual reality applications
                    to interactive 3D web experiences, I create solutions that transform how people interact with
                    digital content.
                  </p>
                  <div className="space-y-4 mb-8">
                    <div className="flex items-center text-orange-400">
                      <ArrowRight size={20} className="mr-3" />
                      <span className="text-lg">VR/AR Development Expert</span>
                    </div>
                    <div className="flex items-center text-orange-400">
                      <ArrowRight size={20} className="mr-3" />
                      <span className="text-lg">3D Web Applications</span>
                    </div>
                    <div className="flex items-center text-orange-400">
                      <ArrowRight size={20} className="mr-3" />
                      <span className="text-lg">Immersive Experience Design</span>
                    </div>
                  </div>
                  <Link href="/the-3d-guy">
                    <Button className="bg-orange-400 hover:bg-orange-500 text-black font-bold px-8 py-4 text-lg">
                      Explore 3D Work
                      <ExternalLink size={20} className="ml-2" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Subscribe Section */}
          <div className="px-16 py-24">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-white text-5xl font-bold mb-8 uppercase tracking-wide">Subscribe</h2>
              <p className="text-gray-300 text-xl mb-12 leading-relaxed">
                Get exclusive insights on entrepreneurship, 3D technology, and innovation delivered straight to your
                inbox. Join 10,000+ subscribers who stay ahead of the curve.
              </p>

              <Card className="bg-slate-700/50 border-slate-600 max-w-2xl mx-auto">
                <CardHeader>
                  <CardTitle className="text-white text-2xl">Stay Updated</CardTitle>
                  <CardDescription className="text-gray-300">
                    Weekly insights, behind-the-scenes content, and early access to new projects.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Input
                      type="email"
                      placeholder="Enter your email address"
                      className="bg-slate-600 border-slate-500 text-white placeholder:text-gray-400 flex-1"
                    />
                    <Button className="bg-emerald-400 hover:bg-emerald-500 text-black font-bold px-8 py-2">
                      <Mail size={16} className="mr-2" />
                      Subscribe
                    </Button>
                  </div>
                  <p className="text-gray-400 text-sm mt-4">
                    No spam, unsubscribe at any time. Your privacy is important to us.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Footer */}
          <footer className="px-16 py-12 border-t border-slate-700/50">
            <div className="max-w-6xl">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                <div>
                  <h3 className="text-white text-lg font-bold mb-4">Engjell Rraklli</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Entrepreneur, 3D innovator, and speaker passionate about building the future through technology and
                    innovation.
                  </p>
                </div>
                <div>
                  <h4 className="text-white text-md font-semibold mb-4">Quick Links</h4>
                  <div className="space-y-2">
                    <Link
                      href="/entrepreneur"
                      className="block text-gray-400 hover:text-white text-sm transition-colors"
                    >
                      Entrepreneur
                    </Link>
                    <Link href="/the-3d-guy" className="block text-gray-400 hover:text-white text-sm transition-colors">
                      The 3D Guy
                    </Link>
                    <Link href="/blog" className="block text-gray-400 hover:text-white text-sm transition-colors">
                      Blog
                    </Link>
                    <Link href="/podcast" className="block text-gray-400 hover:text-white text-sm transition-colors">
                      Podcast
                    </Link>
                  </div>
                </div>
                <div>
                  <h4 className="text-white text-md font-semibold mb-4">Services</h4>
                  <div className="space-y-2">
                    <Link href="#" className="block text-gray-400 hover:text-white text-sm transition-colors">
                      Speaking
                    </Link>
                    <Link href="#" className="block text-gray-400 hover:text-white text-sm transition-colors">
                      Consulting
                    </Link>
                    <Link href="#" className="block text-gray-400 hover:text-white text-sm transition-colors">
                      3D Development
                    </Link>
                    <Link href="/contact" className="block text-gray-400 hover:text-white text-sm transition-colors">
                      Contact
                    </Link>
                  </div>
                </div>
                <div>
                  <h4 className="text-white text-md font-semibold mb-4">Connect</h4>
                  <div className="flex space-x-4 mb-4">
                    <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                      <Instagram size={20} />
                    </Link>
                    <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                      <Linkedin size={20} />
                    </Link>
                    <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                      <Twitter size={20} />
                    </Link>
                  </div>
                  <p className="text-gray-400 text-sm">hello@engjellrraklli.com</p>
                </div>
              </div>

              <div className="border-t border-slate-700/50 pt-8 flex flex-col md:flex-row justify-between items-center">
                <div className="text-center md:text-left mb-4 md:mb-0">
                  <p className="text-gray-400 text-sm">© 2024 Engjell Rraklli. All rights reserved.</p>
                </div>
                <div className="flex space-x-6">
                  <Link href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                    Privacy Policy
                  </Link>
                  <Link href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                    Terms of Service
                  </Link>
                </div>
              </div>

              <div className="text-center mt-4">
                <p className="text-gray-500 text-xs">
                  Designed and built by{" "}
                  <Link href="#" className="text-orange-400 hover:text-orange-300">
                    division5
                  </Link>
                </p>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </div>
  )
}
