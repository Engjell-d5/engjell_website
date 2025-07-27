import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Clock } from "lucide-react"
import SubscribeSection from "@/components/subscribe-section"
import NavigationMenu from "@/components/navigation-menu"

const blogPosts = [
  {
    id: 1,
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit eni, dolor sit amet.",
    excerpt: "Lorem ipsum dolor sit amet, consectetur aquom adipiscing elit, sed do eiusmod tempor incididunt ut labore et.",
    readTime: "10 m",
    image: "/placeholder.jpg"
  },
  {
    id: 2,
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit eni, dolor sit amet.",
    excerpt: "Lorem ipsum dolor sit amet, consectetur aquom adipiscing elit, sed do eiusmod tempor incididunt ut labore et.",
    readTime: "15 m",
    image: "/placeholder.jpg"
  },
  {
    id: 3,
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit eni, dolor sit amet.",
    excerpt: "Lorem ipsum dolor sit amet, consectetur aquom adipiscing elit, sed do eiusmod tempor incididunt ut labore et.",
    readTime: "20 m",
    image: "/placeholder.jpg"
  },
  {
    id: 4,
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit eni, dolor sit amet.",
    excerpt: "Lorem ipsum dolor sit amet, consectetur aquom adipiscing elit, sed do eiusmod tempor incididunt ut labore et.",
    readTime: "12 m",
    image: "/placeholder.jpg"
  },
  {
    id: 5,
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit eni, dolor sit amet.",
    excerpt: "Lorem ipsum dolor sit amet, consectetur aquom adipiscing elit, sed do eiusmod tempor incididunt ut labore et.",
    readTime: "18 m",
    image: "/placeholder.jpg"
  },
  {
    id: 6,
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit eni, dolor sit amet.",
    excerpt: "Lorem ipsum dolor sit amet, consectetur aquom adipiscing elit, sed do eiusmod tempor incididunt ut labore et.",
    readTime: "25 m",
    image: "/placeholder.jpg"
  }
]

export default function BlogPage() {
  return (
    <div className="min-h-screen flex">
      {/* Sidebar */}
      <div className="w-64 bg-emerald-400 flex flex-col fixed h-screen">
        <NavigationMenu activePage="blog" />

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
            <h1 className="text-white text-8xl font-bold mb-16 font-bebas uppercase tracking-wide">BLOG</h1>
          </div>

          {/* Blog Posts Grid */}
          <div className="px-16 pb-16">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {blogPosts.map((post) => (
                  <div key={post.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
                    {/* Image */}
                    <div className="h-48 bg-gray-200">
                      <img 
                        src={post.image} 
                        alt={post.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    
                    {/* Content */}
                    <div className="p-6">
                      <h3 className="text-black font-bold text-lg mb-3 leading-tight">
                        {post.title}
                      </h3>
                      <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center text-gray-500 text-sm">
                        <Clock size={16} className="mr-2" />
                        {post.readTime}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Subscription Section */}
          <SubscribeSection 
            heading="SCALING THE UNSCALABLE"
            title="I write about scaling service-based businesses in my newsletter. Subscribe below."
            placeholder="Mail"
            buttonText="SUBSCRIBE"
          />
        </div>
      </div>
    </div>
  )
}
