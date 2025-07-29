import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin } from "lucide-react"
import SharedBackground from "@/components/shared-background"
import Footer from "@/components/footer"
import ContactForm from "@/components/contact-form"

import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact - Engjell Rraklli",
  description: "Get in touch with Engjell Rraklli. Contact information for business inquiries, collaborations, and questions about entrepreneurship, 3D visualization, and podcast opportunities.",
  keywords: ["contact", "get in touch", "business inquiry", "collaboration", "consultation", "engjell rraklli contact"],
  openGraph: {
    title: "Contact - Engjell Rraklli",
    description: "Get in touch with Engjell Rraklli. Contact information for business inquiries, collaborations, and questions about entrepreneurship, 3D visualization, and podcast opportunities.",
    type: "website",
    url: "https://engjellrraklli.com/contact",
    images: [
      {
        url: "/DSC0048-1.jpg",
        width: 1200,
        height: 630,
        alt: "Contact Engjell Rraklli"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact - Engjell Rraklli",
    description: "Get in touch with Engjell Rraklli for business inquiries and collaborations.",
    images: ["/DSC0048-1.jpg"]
  },
  alternates: {
    canonical: "https://engjellrraklli.com/contact"
  }
}

export default function ContactPage() {
  return (
    <SharedBackground>
          {/* Page Title */}
          <div className="px-8 md:px-16 lg:px-24 xl:px-32 2xl:px-40 py-16 md:py-24 text-center">
            <h1 className="text-white text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold mb-12 md:mb-16 font-bebas uppercase tracking-wide">CONTACTS</h1>
          </div>

          {/* Content Sections */}
          <div className="px-8 md:px-16 lg:px-24 xl:px-32 2xl:px-40 pb-16 md:pb-24">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 lg:gap-20">
                {/* MY CONTACTS Section - Left Column */}
                <div>
                  <h2 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold mb-4 font-bebas uppercase tracking-wide">MY CONTACTS</h2>
                  <h3 className="text-white text-2xl md:text-3xl font-bold mb-8 font-bebas">Want to reach out?</h3>
                  
                  <div className="space-y-6">
                    <div className="flex items-center space-x-4">
                      <Mail className="text-white text-xl" />
                      <a href="mailto:info@engjellrraklli.com" className="text-blue-400 underline font-montserrat text-lg">
                        info@engjellrraklli.com
                      </a>
                    </div>
                    
                    <div className="flex items-center space-x-4">
                      <Phone className="text-white text-xl" />
                      <span className="text-gray-300 font-montserrat text-lg">+35569-38-86-643</span>
                    </div>
                    
                    <div className="flex items-center space-x-4">
                      <MapPin className="text-white text-xl" />
                      <span className="text-gray-300 font-montserrat text-lg">Tirane, Albania 10299</span>
                    </div>
                  </div>
                </div>

                {/* SEND ME AN EMAIL Section - Right Column */}
                <div>
                  <h2 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold mb-4 font-bebas uppercase tracking-wide">SEND ME AN EMAIL</h2>
                  <h3 className="text-white text-2xl md:text-3xl font-bold mb-8 font-bebas">Have a question?</h3>
                  
                  <ContactForm />
                </div>
              </div>
            </div>
          </div>

          {/* Footer */}
          <Footer />
    </SharedBackground>
  )
}
