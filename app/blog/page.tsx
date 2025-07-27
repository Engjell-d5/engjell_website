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
      <div className="hidden lg:block w-64 bg-emerald-400 flex flex-col fixed h-screen">
        <NavigationMenu activePage="blog" />
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
                BLOG / BLOG / BLOG
              </div>
            </div>
          </div>
        </div>

        {/* Scrollable Content */}
        <div className="relative z-10 overflow-y-auto h-full">
          {/* Page Title */}
          <div className="p-16 text-center">
            <h1 className="text-white text-8xl font-bold mb-16 font-bebas uppercase tracking-wide">BLOG</h1>
          </div>

          {/* Blog Posts Grid */}
          <div className="px-16 pb-16">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {blogPosts.map((post) => (
                  <div key={post.id} className="bg-slate-700/50 rounded-lg overflow-hidden hover:bg-slate-700/70 transition-all duration-300 hover:scale-105">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-6">
                      <h3 className="text-white text-xl font-bold mb-3 line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-gray-300 text-sm mb-4 line-clamp-3">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center text-gray-400 text-sm">
                          <Clock size={14} className="mr-1" />
                          {post.readTime}
                        </div>
                        <Link href={`/blog/${post.id}`}>
                          <Button variant="outline" size="sm" className="border-white text-white hover:bg-white hover:text-slate-800">
                            Read More
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Subscribe Section */}
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
