import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin } from "lucide-react"
import NavigationMenu from "@/components/navigation-menu"

export default function ContactPage() {
  return (
    <div className="min-h-screen flex">
      {/* Sidebar */}
      <div className="hidden lg:block w-64 bg-emerald-400 flex flex-col fixed h-screen">
        <NavigationMenu activePage="contact" />
      </div>

      {/* Main Content */}
      <div className="flex-1 bg-gradient-to-br from-slate-800 via-slate-900 to-teal-900 relative overflow-hidden lg:ml-64">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `repeating-linear-gradient(
              45deg,
              transparent,
              transparent 40px,
              rgba(255,255,255,0.1) 40px,
              rgba(255,255,255,0.1) 80px
            )`
          }}>
            <div className="absolute bottom-0 right-0 w-full h-full opacity-5">
              <div className="absolute bottom-20 right-20 text-white text-6xl font-bold opacity-20">
                ENTREPRENEUR /
              </div>
            </div>
          </div>
        </div>

        {/* Scrollable Content */}
        <div className="relative z-10 overflow-y-auto h-full">
          {/* Page Title */}
          <div className="p-16 text-center">
            <h1 className="text-white text-8xl font-bold mb-16 font-bebas uppercase tracking-wide">CONTACTS</h1>
          </div>

          {/* Content Sections */}
          <div className="px-16 pb-16">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                {/* MY CONTACTS Section - Left Column */}
                <div>
                  <h2 className="text-white text-4xl font-bold mb-4 font-bebas uppercase tracking-wide">MY CONTACTS</h2>
                  <h3 className="text-white text-3xl font-bold mb-8 font-bebas">Want to reach out?</h3>
                  
                  <div className="space-y-6">
                    <div className="flex items-center space-x-4">
                      <Mail className="text-white text-xl" />
                      <a href="mailto:info@engjellrraklli.com" className="text-blue-400 underline font-montserrat">
                        info@engjellrraklli.com
                      </a>
                    </div>
                    
                    <div className="flex items-center space-x-4">
                      <Phone className="text-white text-xl" />
                      <span className="text-gray-300 font-montserrat">+35569-38-86-643</span>
                    </div>
                    
                    <div className="flex items-center space-x-4">
                      <MapPin className="text-white text-xl" />
                      <span className="text-gray-300 font-montserrat">Tirane, Albania 10299</span>
                    </div>
                  </div>
                </div>

                {/* SEND ME AN EMAIL Section - Right Column */}
                <div>
                  <h2 className="text-white text-4xl font-bold mb-4 font-bebas uppercase tracking-wide">SEND ME AN EMAIL</h2>
                  <h3 className="text-white text-3xl font-bold mb-8 font-bebas">Have a question?</h3>
                  
                  <div className="space-y-6">
                    <Input
                      placeholder="Your Name"
                      className="bg-slate-700 border-slate-600 text-white placeholder:text-gray-400 rounded-lg"
                    />
                    
                    <Input
                      type="email"
                      placeholder="Your Email"
                      className="bg-slate-700 border-slate-600 text-white placeholder:text-gray-400 rounded-lg"
                    />
                    
                    <Textarea
                      placeholder="Your Message"
                      rows={6}
                      className="bg-slate-700 border-slate-600 text-white placeholder:text-gray-400 rounded-lg resize-none"
                    />
                    
                    <Button className="bg-emerald-400 hover:bg-emerald-500 text-black font-bold px-8 py-4 text-lg font-bebas">
                      SEND MESSAGE
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
