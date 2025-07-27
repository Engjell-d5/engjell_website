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
      <div className="w-64 bg-emerald-400 flex flex-col fixed h-screen">
        <NavigationMenu activePage="contact" />

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
      <div className="flex-1 bg-gradient-to-br from-slate-800 via-slate-900 to-teal-900 relative overflow-hidden ml-0 transition-all duration-300">

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
                      placeholder="Your Email"
                      rows={6}
                      className="bg-slate-700 border-slate-600 text-white placeholder:text-gray-400 rounded-lg"
                    />
                    
                    <Button className="bg-emerald-400 hover:bg-emerald-500 text-white font-bold px-8 py-4 text-lg rounded-lg font-bebas">
                      SEND
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
