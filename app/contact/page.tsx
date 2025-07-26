import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Instagram, Linkedin, Twitter, ArrowLeft, Mail, Phone, MapPin, Send } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="min-h-screen flex">
      {/* Sidebar */}
      <div className="w-80 bg-emerald-400 flex flex-col">
        <div className="p-8">
          <Link href="/">
            <div className="w-24 h-24 rounded-full border-2 border-white flex items-center justify-center">
              <span className="text-white text-2xl font-light italic">ER</span>
            </div>
          </Link>
        </div>

        <nav className="flex-1 px-8">
          <div className="space-y-1">
            <div className="bg-black text-white px-4 py-2 text-sm font-bold uppercase tracking-wider">
              ENGJELL RRAKLLI
            </div>
            <Link
              href="/entrepreneur"
              className="block text-white py-3 text-lg font-medium hover:opacity-80 transition-opacity"
            >
              ENTREPRENEUR
            </Link>
            <Link
              href="/the-3d-guy"
              className="block text-white py-3 text-lg font-medium hover:opacity-80 transition-opacity"
            >
              THE 3D GUY
            </Link>
            <Link
              href="/blog"
              className="block text-white py-3 text-lg font-medium hover:opacity-80 transition-opacity"
            >
              BLOG
            </Link>
            <Link
              href="/podcast"
              className="block text-white py-3 text-lg font-medium hover:opacity-80 transition-opacity"
            >
              PODCAST
            </Link>
            <Link href="/contact" className="block text-white py-3 text-lg font-medium bg-white/20 px-4 rounded">
              CONTACT
            </Link>
          </div>
        </nav>

        <div className="p-8">
          <div className="flex space-x-4">
            <Link href="#" className="text-white hover:opacity-80 transition-opacity">
              <Instagram size={24} />
            </Link>
            <Link href="#" className="text-white hover:opacity-80 transition-opacity">
              <Linkedin size={24} />
            </Link>
            <Link href="#" className="text-white hover:opacity-80 transition-opacity">
              <Twitter size={24} />
            </Link>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 bg-slate-800 p-16">
        <div className="max-w-6xl">
          <Link href="/" className="inline-flex items-center text-white mb-8 hover:opacity-80">
            <ArrowLeft className="mr-2" size={20} />
            Back to Home
          </Link>

          <h1 className="text-white text-6xl font-bold mb-4">CONTACT</h1>
          <p className="text-gray-300 text-xl mb-12">
            Let's discuss your next project, speaking opportunity, or collaboration.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="bg-slate-700/50 border-slate-600">
              <CardHeader>
                <CardTitle className="text-white text-2xl">Get in Touch</CardTitle>
                <CardDescription className="text-gray-300">
                  Fill out the form below and I'll get back to you within 24 hours.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-white text-sm font-medium mb-2 block">First Name</label>
                    <Input
                      placeholder="John"
                      className="bg-slate-600 border-slate-500 text-white placeholder:text-gray-400"
                    />
                  </div>
                  <div>
                    <label className="text-white text-sm font-medium mb-2 block">Last Name</label>
                    <Input
                      placeholder="Doe"
                      className="bg-slate-600 border-slate-500 text-white placeholder:text-gray-400"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-white text-sm font-medium mb-2 block">Email</label>
                  <Input
                    type="email"
                    placeholder="john@example.com"
                    className="bg-slate-600 border-slate-500 text-white placeholder:text-gray-400"
                  />
                </div>

                <div>
                  <label className="text-white text-sm font-medium mb-2 block">Company</label>
                  <Input
                    placeholder="Your Company"
                    className="bg-slate-600 border-slate-500 text-white placeholder:text-gray-400"
                  />
                </div>

                <div>
                  <label className="text-white text-sm font-medium mb-2 block">Subject</label>
                  <Input
                    placeholder="What would you like to discuss?"
                    className="bg-slate-600 border-slate-500 text-white placeholder:text-gray-400"
                  />
                </div>

                <div>
                  <label className="text-white text-sm font-medium mb-2 block">Message</label>
                  <Textarea
                    placeholder="Tell me more about your project or inquiry..."
                    rows={6}
                    className="bg-slate-600 border-slate-500 text-white placeholder:text-gray-400"
                  />
                </div>

                <Button className="w-full bg-emerald-400 hover:bg-emerald-500 text-black font-bold py-3">
                  <Send size={16} className="mr-2" />
                  Send Message
                </Button>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              <Card className="bg-slate-700/50 border-slate-600">
                <CardHeader>
                  <CardTitle className="text-white text-2xl">Contact Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-emerald-400 rounded-full flex items-center justify-center">
                      <Mail size={20} className="text-black" />
                    </div>
                    <div>
                      <p className="text-white font-medium">Email</p>
                      <p className="text-gray-300">hello@engjellrraklli.com</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-emerald-400 rounded-full flex items-center justify-center">
                      <Phone size={20} className="text-black" />
                    </div>
                    <div>
                      <p className="text-white font-medium">Phone</p>
                      <p className="text-gray-300">+1 (555) 123-4567</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-emerald-400 rounded-full flex items-center justify-center">
                      <MapPin size={20} className="text-black" />
                    </div>
                    <div>
                      <p className="text-white font-medium">Location</p>
                      <p className="text-gray-300">San Francisco, CA</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-slate-700/50 border-slate-600">
                <CardHeader>
                  <CardTitle className="text-white text-2xl">Speaking & Consulting</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 mb-4">
                    Available for speaking engagements, workshops, and consulting on:
                  </p>
                  <ul className="text-gray-300 space-y-2">
                    <li>• Entrepreneurship and startup strategy</li>
                    <li>• 3D technology and immersive experiences</li>
                    <li>• Innovation and digital transformation</li>
                    <li>• Leadership and team building</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-slate-700/50 border-slate-600">
                <CardHeader>
                  <CardTitle className="text-white text-2xl">Response Time</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300">
                    I typically respond to all inquiries within 24 hours. For urgent matters, please mention it in your
                    subject line.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
