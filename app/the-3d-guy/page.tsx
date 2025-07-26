import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Instagram, Linkedin, Twitter, ArrowLeft } from "lucide-react"

export default function The3DGuyPage() {
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
            <Link href="/the-3d-guy" className="block text-white py-3 text-lg font-medium bg-white/20 px-4 rounded">
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

          <h1 className="text-white text-6xl font-bold mb-8">THE 3D GUY</h1>

          <div className="prose prose-invert prose-lg max-w-none">
            <p className="text-xl text-gray-300 leading-relaxed mb-8">
              Welcome to the world of 3D technology and immersive experiences. As "The 3D Guy," I specialize in creating
              cutting-edge 3D solutions that transform how we interact with digital content.
            </p>

            <h2 className="text-3xl font-bold text-white mb-6">3D Expertise</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="bg-slate-700/50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-white mb-3">3D Modeling & Animation</h3>
                <p className="text-gray-300">
                  Creating stunning 3D models and animations for various industries including gaming, architecture, and
                  product visualization.
                </p>
              </div>

              <div className="bg-slate-700/50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-white mb-3">Virtual Reality</h3>
                <p className="text-gray-300">
                  Developing immersive VR experiences that transport users to new worlds and enhance training and
                  education.
                </p>
              </div>

              <div className="bg-slate-700/50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-white mb-3">Augmented Reality</h3>
                <p className="text-gray-300">
                  Building AR applications that blend digital content with the real world for enhanced user experiences.
                </p>
              </div>

              <div className="bg-slate-700/50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-white mb-3">3D Web Development</h3>
                <p className="text-gray-300">
                  Creating interactive 3D web experiences using cutting-edge technologies like Three.js and WebGL.
                </p>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-white mb-6">Recent Projects</h2>

            <div className="space-y-6 mb-8">
              <div className="border-l-4 border-orange-400 pl-6">
                <h3 className="text-xl font-bold text-white mb-2">Interactive 3D Product Configurator</h3>
                <p className="text-gray-300">
                  Developed a real-time 3D product configurator for a major automotive brand, allowing customers to
                  customize vehicles in 3D.
                </p>
              </div>

              <div className="border-l-4 border-orange-400 pl-6">
                <h3 className="text-xl font-bold text-white mb-2">VR Training Simulation</h3>
                <p className="text-gray-300">
                  Created an immersive VR training platform for healthcare professionals, reducing training costs by
                  40%.
                </p>
              </div>

              <div className="border-l-4 border-orange-400 pl-6">
                <h3 className="text-xl font-bold text-white mb-2">AR Marketing Campaign</h3>
                <p className="text-gray-300">
                  Launched an AR marketing campaign that increased brand engagement by 300% for a leading fashion
                  retailer.
                </p>
              </div>
            </div>

            <Button className="bg-orange-400 hover:bg-orange-500 text-black font-bold px-8 py-4">
              View 3D Portfolio
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
