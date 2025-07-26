import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Instagram, Linkedin, Twitter, ArrowLeft, Calendar, Clock } from "lucide-react"

const blogPosts = [
  {
    id: 1,
    title: "The Future of 3D Technology in Business",
    excerpt:
      "Exploring how 3D technology is revolutionizing industries from healthcare to retail, and what it means for the future of business.",
    date: "2024-01-15",
    readTime: "5 min read",
    category: "Technology",
    slug: "future-of-3d-technology-in-business",
  },
  {
    id: 2,
    title: "Building a Successful Startup: Lessons Learned",
    excerpt:
      "Key insights from my entrepreneurial journey, including the mistakes I made and the strategies that led to success.",
    date: "2024-01-10",
    readTime: "8 min read",
    category: "Entrepreneurship",
    slug: "building-successful-startup-lessons-learned",
  },
  {
    id: 3,
    title: "Why Virtual Reality is the Next Big Thing",
    excerpt:
      "An in-depth look at the VR market, emerging trends, and why now is the perfect time to invest in virtual reality.",
    date: "2024-01-05",
    readTime: "6 min read",
    category: "VR/AR",
    slug: "why-virtual-reality-next-big-thing",
  },
  {
    id: 4,
    title: "The Art of Public Speaking in Tech",
    excerpt:
      "Tips and strategies for delivering compelling presentations and building your personal brand as a tech speaker.",
    date: "2023-12-28",
    readTime: "4 min read",
    category: "Speaking",
    slug: "art-of-public-speaking-in-tech",
  },
  {
    id: 5,
    title: "From Idea to MVP: A Practical Guide",
    excerpt:
      "A step-by-step guide to turning your innovative ideas into a minimum viable product that customers will love.",
    date: "2023-12-20",
    readTime: "10 min read",
    category: "Product Development",
    slug: "from-idea-to-mvp-practical-guide",
  },
  {
    id: 6,
    title: "The Psychology of Innovation",
    excerpt:
      "Understanding the mindset and mental frameworks that drive successful innovation in technology and business.",
    date: "2023-12-15",
    readTime: "7 min read",
    category: "Innovation",
    slug: "psychology-of-innovation",
  },
]

export default function BlogPage() {
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
            <Link href="/blog" className="block text-white py-3 text-lg font-medium bg-white/20 px-4 rounded">
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
        <div className="max-w-6xl">
          <Link href="/" className="inline-flex items-center text-white mb-8 hover:opacity-80">
            <ArrowLeft className="mr-2" size={20} />
            Back to Home
          </Link>

          <h1 className="text-white text-6xl font-bold mb-4">BLOG</h1>
          <p className="text-gray-300 text-xl mb-12">
            Insights on entrepreneurship, 3D technology, innovation, and the future of business.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {blogPosts.map((post) => (
              <Card key={post.id} className="bg-slate-700/50 border-slate-600 hover:bg-slate-700/70 transition-colors">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-emerald-400 text-sm font-medium">{post.category}</span>
                    <div className="flex items-center text-gray-400 text-sm">
                      <Calendar size={14} className="mr-1" />
                      {new Date(post.date).toLocaleDateString()}
                    </div>
                  </div>
                  <CardTitle className="text-white text-xl hover:text-emerald-400 transition-colors">
                    <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                  </CardTitle>
                  <CardDescription className="text-gray-300">{post.excerpt}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-gray-400 text-sm">
                      <Clock size={14} className="mr-1" />
                      {post.readTime}
                    </div>
                    <Link href={`/blog/${post.slug}`}>
                      <Button variant="ghost" size="sm" className="text-emerald-400 hover:text-emerald-300">
                        Read More →
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
