import { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { ExternalLink, Mail, Phone, MapPin, Youtube, Linkedin, Instagram } from "lucide-react"

export const metadata: Metadata = {
  title: "Engjell Rraklli - Links",
  description: "Connect with Engjell Rraklli - Entrepreneur, 3D Expert & Podcast Host. Find all my links in one place.",
  keywords: ["engjell rraklli", "links", "bio", "entrepreneur", "3D expert", "podcast", "connect"],
  openGraph: {
    title: "Engjell Rraklli - Links",
    description: "Connect with Engjell Rraklli - Entrepreneur, 3D Expert & Podcast Host. Find all my links in one place.",
    type: "website",
    url: "https://engjellrraklli.com/link-in-bio",
    images: [
      {
        url: "/DSC0048-1.jpg",
        width: 1200,
        height: 630,
        alt: "Engjell Rraklli - Links"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Engjell Rraklli - Links",
    description: "Connect with Engjell Rraklli - Entrepreneur, 3D Expert & Podcast Host.",
    images: ["/DSC0048-1.jpg"]
  },
  alternates: {
    canonical: "https://engjellrraklli.com/link-in-bio"
  }
}

export default function BioPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-teal-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" viewBox="0 0 1200 1200" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path d="M0 80C200 40 400 120 600 80C800 40 1000 120 1200 80V0H0V80Z" fill="rgba(255,255,255,0.08)" />
          <path d="M0 160C300 120 600 200 900 160C1050 140 1150 180 1200 160V80C1050 100 900 60 750 80C500 120 250 20 0 60V160Z" fill="rgba(255,255,255,0.06)" />
          <path d="M0 320C200 280 400 380 600 320C800 260 1000 360 1200 320V240C1000 280 800 180 600 240C400 300 200 200 0 240V320Z" fill="rgba(255,255,255,0.05)" />
          <path d="M0 480C300 440 600 520 900 480C1050 460 1150 500 1200 480V400C1050 420 900 380 750 400C500 440 250 340 0 380V480Z" fill="rgba(255,255,255,0.04)" />
          <path d="M0 640C200 600 400 700 600 640C800 580 1000 680 1200 640V560C1000 600 800 500 600 560C400 620 200 520 0 560V640Z" fill="rgba(255,255,255,0.05)" />
          <path d="M0 800C300 760 600 840 900 800C1050 780 1150 820 1200 800V720C1050 740 900 700 750 720C500 760 250 660 0 700V800Z" fill="rgba(255,255,255,0.04)" />
          <path d="M0 960C200 920 400 1020 600 960C800 900 1000 1000 1200 960V880C1000 920 800 820 600 880C400 940 200 840 0 880V960Z" fill="rgba(255,255,255,0.06)" />
          <path d="M0 1120C300 1080 600 1160 900 1120C1050 1100 1150 1140 1200 1120V1040C1050 1060 900 1020 750 1040C500 1080 250 980 0 1020V1120Z" fill="rgba(255,255,255,0.08)" />
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 py-8">
        {/* Profile Section */}
        <div className="text-center mb-12">
          {/* Profile Image */}
          <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-4 border-emerald-400/30 shadow-2xl">
            <Image
              src="/DSC0048-1.jpg"
              alt="Engjell Rraklli"
              width={128}
              height={128}
              className="w-full h-full object-cover"
            />
          </div>
          
          {/* Name and Title */}
          <h1 className="text-white text-3xl font-bold mb-2 font-bebas tracking-wide">
            ENGJELL RRAKLLI
          </h1>
          <p className="text-emerald-400 text-lg mb-4 font-montserrat">
            Entrepreneur • 3D Expert • Podcast Host
          </p>
          
          {/* Bio */}
          <p className="text-gray-300 text-base max-w-md mx-auto leading-relaxed font-montserrat">
            Building companies, creating 3D experiences, and sharing insights on scaling service-based businesses.
          </p>
        </div>

        {/* Links Section */}
        <div className="w-full max-w-md space-y-4 mb-12">
          {/* Main Website */}
          <Link 
            href="/"
            className="block w-full bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-4 text-white text-center font-semibold hover:bg-white/20 transition-all duration-300 group"
          >
            <div className="flex items-center justify-center space-x-3">
              <span className="text-lg">🏠</span>
              <span>Visit My Website</span>
              <ExternalLink size={16} className="opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          </Link>

          {/* Podcast */}
          <Link 
            href="/podcast"
            className="block w-full bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-4 text-white text-center font-semibold hover:bg-white/20 transition-all duration-300 group"
          >
            <div className="flex items-center justify-center space-x-3">
              <Youtube size={20} className="text-red-400" />
              <span>Scaling the Unscalable Podcast</span>
              <ExternalLink size={16} className="opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          </Link>

          {/* Entrepreneur Page */}
          <Link 
            href="/entrepreneur"
            className="block w-full bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-4 text-white text-center font-semibold hover:bg-white/20 transition-all duration-300 group"
          >
            <div className="flex items-center justify-center space-x-3">
              <span className="text-lg">💼</span>
              <span>Entrepreneur Journey</span>
              <ExternalLink size={16} className="opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          </Link>

          {/* 3D Guy Page */}
          <Link 
                            href="/entrepreneur"
            className="block w-full bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-4 text-white text-center font-semibold hover:bg-white/20 transition-all duration-300 group"
          >
            <div className="flex items-center justify-center space-x-3">
              <span className="text-lg">🎮</span>
              <span>The 3D Guy</span>
              <ExternalLink size={16} className="opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          </Link>

          {/* Blog */}
          <Link 
            href="/blog"
            className="block w-full bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-4 text-white text-center font-semibold hover:bg-white/20 transition-all duration-300 group"
          >
            <div className="flex items-center justify-center space-x-3">
              <span className="text-lg">📝</span>
              <span>Blog & Articles</span>
              <ExternalLink size={16} className="opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          </Link>

          {/* Division5 */}
          <Link 
            href="https://division5.co"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full bg-emerald-500/20 backdrop-blur-sm border border-emerald-400/30 rounded-2xl p-4 text-emerald-300 text-center font-semibold hover:bg-emerald-500/30 transition-all duration-300 group"
          >
            <div className="flex items-center justify-center space-x-3">
              <span className="text-lg">🚀</span>
              <span>Division5 - Staff Augmentation</span>
              <ExternalLink size={16} className="opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          </Link>

          {/* Division3D */}
          <Link 
            href="https://division3d.co"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full bg-blue-500/20 backdrop-blur-sm border border-blue-400/30 rounded-2xl p-4 text-blue-300 text-center font-semibold hover:bg-blue-500/30 transition-all duration-300 group"
          >
            <div className="flex items-center justify-center space-x-3">
              <span className="text-lg">🎨</span>
              <span>Division3D - 3D Services</span>
              <ExternalLink size={16} className="opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          </Link>

          {/* Contact */}
          <Link 
            href="/contact"
            className="block w-full bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-4 text-white text-center font-semibold hover:bg-white/20 transition-all duration-300 group"
          >
            <div className="flex items-center justify-center space-x-3">
              <Mail size={20} className="text-emerald-400" />
              <span>Get In Touch</span>
              <ExternalLink size={16} className="opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          </Link>
        </div>

                 {/* Social Links */}
         <div className="flex space-x-6 mb-8">
           <Link 
             href="https://threads.net/@engjellrraklli"
             target="_blank"
             rel="noopener noreferrer"
             className="w-12 h-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300"
             aria-label="Threads"
           >
             <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
               <path d="M12.186 24h-.007c-3.581-.024-6.334-1.205-8.184-3.509C2.35 18.44 1.5 15.586 1.5 12.022V0h3.82v12.022c0 2.776.484 4.95 1.451 6.494 1.54 2.524 4.08 3.787 7.615 3.787 3.581 0 6.334-1.205 8.184-3.509C24.65 18.44 25.5 15.586 25.5 12.022V0h3.82v12.022c0 2.776-.484 4.95-1.451 6.494-1.54 2.524-4.08 3.787-7.615 3.787-3.581 0-6.334 1.205-8.184 3.509C24.65 18.44 25.5 15.586 25.5 12.022V0h3.82v12.022c0 2.776-.484 4.95-1.451 6.494-1.54 2.524-4.08 3.787-7.615 3.787z"/>
             </svg>
           </Link>
           
           <Link 
             href="https://linkedin.com/in/engjell-rraklli-a8b20a68"
             target="_blank"
             rel="noopener noreferrer"
             className="w-12 h-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300"
             aria-label="LinkedIn"
           >
             <Linkedin size={20} />
           </Link>
           
           <Link 
             href="https://instagram.com/engjellrraklli"
             target="_blank"
             rel="noopener noreferrer"
             className="w-12 h-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300"
             aria-label="Instagram"
           >
             <Instagram size={20} />
           </Link>
         </div>

        {/* Footer */}
        <div className="text-center">
          <p className="text-gray-400 text-sm font-montserrat">
            © 2025 Engjell Rraklli. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  )
} 