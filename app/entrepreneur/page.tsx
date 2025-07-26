import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Instagram, Linkedin, Twitter, ArrowLeft } from "lucide-react"

export default function EntrepreneurPage() {
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
            <Link href="/entrepreneur" className="block text-white py-3 text-lg font-medium bg-white/20 px-4 rounded">
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
            <Link
              href="/contact"
              className="block text-white py-3 text-lg font-medium hover:opacity-80 transition-opacity"
            >
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
        <div className="max-w-4xl">
          <Link href="/" className="inline-flex items-center text-white mb-8 hover:opacity-80">
            <ArrowLeft className="mr-2" size={20} />
            Back to Home
          </Link>

          <h1 className="text-white text-6xl font-bold mb-8">ENTREPRENEUR</h1>

          <div className="prose prose-invert prose-lg max-w-none">
            <p className="text-xl text-gray-300 leading-relaxed mb-8">
              As an entrepreneur, I believe in turning innovative ideas into reality. My journey has been about
              identifying opportunities, building solutions, and creating value in the digital landscape.
            </p>

            <h2 className="text-3xl font-bold text-white mb-6">My Entrepreneurial Journey</h2>

            <p className="text-gray-300 mb-6">
              Starting from humble beginnings, I've built multiple successful ventures by focusing on emerging
              technologies and understanding market needs. My approach combines technical expertise with business acumen
              to create sustainable, scalable solutions.
            </p>

            <h3 className="text-2xl font-bold text-white mb-4">Key Ventures</h3>

            <ul className="text-gray-300 space-y-3 mb-8">
              <li>• Founded and scaled multiple tech startups</li>
              <li>• Specialized in 3D technology and immersive experiences</li>
              <li>• Mentored over 100+ aspiring entrepreneurs</li>
              <li>• Invested in emerging technology companies</li>
            </ul>

            <div className="bg-emerald-400/10 border border-emerald-400/20 rounded-lg p-8 mb-8">
              <blockquote className="text-emerald-400 text-2xl font-bold italic">
                "Success is not just about having great ideas, it's about executing them with precision and
                persistence."
              </blockquote>
            </div>

            <Button className="bg-emerald-400 hover:bg-emerald-500 text-black font-bold px-8 py-4">
              Let's Collaborate
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
