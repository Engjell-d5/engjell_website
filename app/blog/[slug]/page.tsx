import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Instagram, Linkedin, Twitter, ArrowLeft, Calendar, Clock, Share2 } from "lucide-react"
import { notFound } from "next/navigation"
import { Metadata } from "next"

const blogPosts = {
  "future-of-3d-technology-in-business": {
    title: "The Future of 3D Technology in Business",
    date: "2024-01-15",
    readTime: "5 min read",
    category: "Technology",
    excerpt: "Discover how 3D technology is reshaping business operations, from virtual showrooms to immersive training programs.",
    content: `
      <p>The landscape of business is rapidly evolving, and at the forefront of this transformation is 3D technology. From virtual showrooms to immersive training programs, 3D technology is reshaping how companies operate, engage with customers, and deliver value.</p>

      <h2>The Current State of 3D in Business</h2>
      <p>Today, we're seeing unprecedented adoption of 3D technology across various industries. Retail companies are using 3D product configurators to enhance online shopping experiences, while manufacturing firms leverage 3D modeling for rapid prototyping and design validation.</p>

      <h2>Key Applications Driving Growth</h2>
      <h3>1. E-commerce and Retail</h3>
      <p>Online retailers are implementing 3D product viewers that allow customers to examine products from every angle, reducing return rates by up to 40%. Companies like IKEA and Amazon have pioneered AR applications that let customers visualize products in their own spaces.</p>

      <h3>2. Healthcare and Medical Training</h3>
      <p>Medical institutions are using 3D visualization for surgical planning and student training. Virtual anatomy lessons and 3D medical simulations are improving learning outcomes while reducing costs.</p>

      <h3>3. Real Estate and Architecture</h3>
      <p>Virtual property tours and 3D architectural visualizations have become standard practice, especially accelerated by the pandemic. These tools enable remote viewing and better client communication.</p>

      <h2>The Technology Behind the Revolution</h2>
      <p>Several technological advances are making 3D more accessible:</p>
      <ul>
        <li>WebGL and WebXR enabling browser-based 3D experiences</li>
        <li>Cloud rendering reducing hardware requirements</li>
        <li>AI-powered 3D content generation</li>
        <li>5G networks enabling real-time streaming of complex 3D content</li>
      </ul>

      <h2>Looking Ahead: What's Next?</h2>
      <p>The future of 3D technology in business is incredibly promising. We're moving toward a world where 3D interfaces become as common as traditional 2D websites. The metaverse concept, while still evolving, represents the ultimate convergence of 3D technology and business.</p>

      <p>Key trends to watch include:</p>
      <ul>
        <li>Photorealistic real-time rendering</li>
        <li>AI-generated 3D content</li>
        <li>Haptic feedback integration</li>
        <li>Cross-platform 3D experiences</li>
      </ul>

      <h2>Preparing Your Business for the 3D Future</h2>
      <p>To stay competitive, businesses should start exploring 3D technology now. Begin with small pilot projects, invest in team training, and partner with experienced 3D developers. The companies that embrace this technology early will have a significant advantage in the coming years.</p>

      <p>The question isn't whether 3D technology will transform your industry—it's how quickly you'll adapt to leverage its potential.</p>
    `,
  },
  "building-successful-startup-lessons-learned": {
    title: "Building a Successful Startup: Lessons Learned",
    date: "2024-01-10",
    readTime: "8 min read",
    category: "Entrepreneurship",
    excerpt: "Key lessons from founding multiple startups, including validation strategies, team building, and the mindset shifts that lead to success.",
    content: `
      <p>After founding multiple startups and experiencing both spectacular failures and remarkable successes, I've learned that entrepreneurship is as much about mindset as it is about execution. Here are the key lessons that have shaped my journey.</p>

      <h2>Lesson 1: Start with the Problem, Not the Solution</h2>
      <p>My biggest mistake early on was falling in love with a technology rather than understanding the problem it solved. I spent months building a sophisticated 3D platform before realizing there wasn't a strong market demand for it.</p>

      <p>The breakthrough came when I shifted focus to understanding customer pain points first. This led to developing solutions that people actually wanted to pay for.</p>

      <h2>Lesson 2: Validate Early and Often</h2>
      <p>Build a minimum viable product (MVP) as quickly as possible and get it in front of real users. I learned this the hard way after spending a year perfecting a product in isolation, only to discover users wanted something completely different.</p>

      <h3>My Validation Framework:</h3>
      <ul>
        <li>Conduct 50+ customer interviews before writing a single line of code</li>
        <li>Create landing pages to test demand</li>
        <li>Build prototypes, not perfect products</li>
        <li>Measure everything and iterate based on data</li>
      </ul>

      <h2>Lesson 3: Team is Everything</h2>
      <p>I used to think I could do everything myself. This mindset limited my growth and nearly killed my first startup. The moment I started hiring people smarter than me in their respective areas, everything changed.</p>

      <p>Look for team members who complement your skills, share your vision, and aren't afraid to challenge your ideas. Diversity of thought is crucial for innovation.</p>

      <h2>Lesson 4: Cash Flow is King</h2>
      <p>Revenue is vanity, profit is sanity, but cash flow is reality. I learned this during a particularly challenging period when we had great revenue numbers but couldn't pay our bills because of payment delays.</p>

      <p>Always maintain a cash flow buffer and understand your unit economics inside and out. Know exactly how much it costs to acquire a customer and how much they're worth over their lifetime.</p>

      <h2>Lesson 5: Embrace Failure as Education</h2>
      <p>Every failure taught me something valuable. My first startup failed because I ignored market feedback. My second struggled because I hired too quickly. Each failure was expensive education that made subsequent ventures more successful.</p>

      <h2>Lesson 6: Focus is Your Superpower</h2>
      <p>As entrepreneurs, we're naturally curious and see opportunities everywhere. But saying yes to everything means saying no to excellence. I learned to ruthlessly prioritize and focus on doing one thing exceptionally well before expanding.</p>

      <h2>The Mindset Shift That Changed Everything</h2>
      <p>The biggest transformation in my entrepreneurial journey came when I stopped thinking like an employee and started thinking like an owner. This meant:</p>
      <ul>
        <li>Taking full responsibility for outcomes</li>
        <li>Thinking long-term instead of quarter-to-quarter</li>
        <li>Investing in relationships, not just transactions</li>
        <li>Building systems, not just solving immediate problems</li>
      </ul>

      <p>Success in entrepreneurship isn't about having the perfect idea or the most funding—it's about having the right mindset, validating your assumptions, and being willing to learn from every experience.</p>
    `,
  },
}

type Props = {
  params: { slug: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = blogPosts[params.slug as keyof typeof blogPosts]
  
  if (!post) {
    return {
      title: 'Blog Post Not Found',
      description: 'The requested blog post could not be found.'
    }
  }

  return {
    title: `${post.title} - Engjell Rraklli`,
    description: post.excerpt,
    keywords: [post.category.toLowerCase(), "blog", "engjell rraklli", "entrepreneurship", "technology", "business"],
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      url: `https://engjellrraklli.com/blog/${params.slug}`,
      publishedTime: post.date,
      authors: ["Engjell Rraklli"],
      images: [
        {
          url: "/DSC0048-1.jpg",
          width: 1200,
          height: 630,
          alt: post.title
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: ["/DSC0048-1.jpg"]
    },
    alternates: {
      canonical: `https://engjellrraklli.com/blog/${params.slug}`
    }
  }
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = blogPosts[params.slug as keyof typeof blogPosts]

  if (!post) {
    notFound()
  }

  return (
    <div className="min-h-screen flex">
      {/* Sidebar */}
      <div className="w-64 bg-emerald-400 flex flex-col fixed h-screen">
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
      <div className="flex-1 bg-slate-800 p-16 ml-0 transition-all duration-300">
        <div className="max-w-4xl">
          <Link href="/blog" className="inline-flex items-center text-white mb-8 hover:opacity-80">
            <ArrowLeft className="mr-2" size={20} />
            Back to Blog
          </Link>

          <article className="prose prose-invert prose-lg max-w-none">
            <div className="mb-8">
              <span className="text-emerald-400 text-sm font-medium">{post.category}</span>
              <h1 className="text-white text-5xl font-bold mt-2 mb-4">{post.title}</h1>
              <div className="flex items-center justify-between text-gray-400 text-sm">
                <div className="flex items-center space-x-4">
                  <div className="flex items-center">
                    <Calendar size={14} className="mr-1" />
                    {new Date(post.date).toLocaleDateString()}
                  </div>
                  <div className="flex items-center">
                    <Clock size={14} className="mr-1" />
                    {post.readTime}
                  </div>
                </div>
                <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
                  <Share2 size={16} className="mr-2" />
                  Share
                </Button>
              </div>
            </div>

            <div className="text-gray-300 leading-relaxed" dangerouslySetInnerHTML={{ __html: post.content }} />
          </article>

          <div className="mt-16 pt-8 border-t border-slate-700">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-white text-xl font-bold mb-2">Enjoyed this article?</h3>
                <p className="text-gray-300">Subscribe to get notified about new posts.</p>
              </div>
              <Button className="bg-emerald-400 hover:bg-emerald-500 text-black font-bold px-6 py-3">Subscribe</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
