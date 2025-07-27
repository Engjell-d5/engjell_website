'use client'

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Clock, ArrowRight, Calendar, Tag } from "lucide-react"
import SubscribeSection from "@/components/subscribe-section"
import Footer from "@/components/footer"
import Image from "next/image"
import { useState } from "react"

const blogPosts = [
  {
    id: 1,
    title: "The Art of Scaling Service-Based Businesses",
    excerpt: "Discover the proven strategies and frameworks I've used to scale Division5 from a small startup to a thriving staff augmentation company serving clients worldwide.",
    readTime: "8 min read",
    category: "Entrepreneurship",
    date: "2024-01-15",
    image: "/DSC0112-scaled.jpg",
    slug: "scaling-service-businesses"
  },
  {
    id: 2,
    title: "3D Visualization: The Future of Digital Marketing",
    excerpt: "Explore how 3D technology is revolutionizing digital marketing and creating immersive experiences that drive engagement and conversions.",
    readTime: "12 min read",
    category: "3D Technology",
    date: "2024-01-10",
    image: "/DSC0036-scaled.jpg",
    slug: "3d-visualization-marketing"
  },
  {
    id: 3,
    title: "Building High-Performance Teams in Tech",
    excerpt: "Learn the key principles and practices for building and managing high-performance teams in the fast-paced world of technology.",
    readTime: "15 min read",
    category: "Leadership",
    date: "2024-01-05",
    image: "/DSC0019-scaled.jpg",
    slug: "high-performance-teams"
  },
  {
    id: 4,
    title: "The Podcast Revolution: Why Audio Content Matters",
    excerpt: "Dive into the growing importance of podcast content and how it's becoming a powerful tool for thought leadership and audience building.",
    readTime: "10 min read",
    category: "Content Marketing",
    date: "2024-01-01",
    image: "/IMG_0425-scaled.jpg",
    slug: "podcast-revolution"
  },
  {
    id: 5,
    title: "From Developer to Entrepreneur: My Journey",
    excerpt: "Follow my personal journey from being a developer to becoming an entrepreneur and the lessons learned along the way.",
    readTime: "14 min read",
    category: "Personal Growth",
    date: "2023-12-28",
    image: "/DSC0055-scaled.jpg",
    slug: "developer-to-entrepreneur"
  },
  {
    id: 6,
    title: "Innovation in the Digital Age: What's Next?",
    excerpt: "Explore the emerging trends and technologies that will shape the future of business and digital innovation.",
    readTime: "18 min read",
    category: "Innovation",
    date: "2023-12-20",
    image: "/DSC0048-1.jpg",
    slug: "innovation-digital-age"
  }
]

const categories = ["All", "Entrepreneurship", "3D Technology", "Leadership", "Content Marketing", "Personal Growth", "Innovation"]

export default function BlogClient() {
  const [selectedCategory, setSelectedCategory] = useState("All")

  const filteredPosts = selectedCategory === "All" 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory)

  return (
    <div className="flex-1 bg-gradient-to-br from-slate-800 via-slate-900 to-teal-900 relative overflow-hidden ml-0 transition-all duration-300">
      {/* Scrollable Content */}
      <div className="relative z-10 overflow-y-auto h-full">
        {/* Page Title */}
        <div className="p-16 text-center">
          <h1 className="text-white text-4xl sm:text-5xl md:text-8xl font-bold mb-16 font-bebas uppercase tracking-wide text-center break-words">BLOG</h1>
        </div>

        {/* Hero Section */}
        <div className="px-16 pb-16">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-white text-3xl sm:text-4xl md:text-4xl font-bold mb-6 font-bebas uppercase tracking-wide text-center break-words">INSIGHTS & PERSPECTIVES</h2>
              <p className="text-white text-xl mb-8 font-montserrat max-w-3xl mx-auto">
                Deep dive into entrepreneurship, business scaling, 3D visualization, and the future of technology. 
                Real insights from real experiences.
              </p>
              
              {/* Category Filter */}
              <div className="flex flex-wrap justify-center gap-4 mb-12">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                      selectedCategory === category
                        ? 'bg-emerald-400 text-black shadow-lg'
                        : 'bg-emerald-400/20 text-emerald-300 hover:bg-emerald-400/30'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
              
              {/* Results Count */}
              <div className="text-gray-400 text-sm mb-8">
                {filteredPosts.length} {filteredPosts.length === 1 ? 'article' : 'articles'} found
              </div>
            </div>

            {/* Blog Posts Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
                <div key={post.id} className="bg-slate-700/50 border-slate-600 hover:bg-slate-700/70 transition-all duration-300 hover:scale-105 overflow-hidden rounded-lg">
                  {/* Image */}
                  <div className="relative group h-48">
                    <Image 
                      src={post.image} 
                      alt={post.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <Button 
                        size="lg" 
                        className="bg-emerald-400 hover:bg-emerald-500 text-black rounded-full w-16 h-16"
                        asChild
                      >
                        <Link href={`/blog/${post.slug}`}>
                          <ArrowRight size={24} className="ml-1" />
                        </Link>
                      </Button>
                    </div>
                    
                    {/* Category Badge - Improved visibility */}
                    <div className="absolute top-3 left-3">
                      <span className="bg-black bg-opacity-90 text-white px-3 py-1 rounded-full text-xs font-bold font-bebas tracking-wider border border-white/20">
                        {post.category}
                      </span>
                    </div>
                    
                    {/* Read Time */}
                    <div className="absolute top-3 right-3 bg-black bg-opacity-75 text-white text-sm px-2 py-1 rounded">
                      <Clock size={12} className="mr-1 inline" />
                      {post.readTime}
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-white text-lg font-bold mb-3 line-clamp-2">
                      {post.title}
                    </h3>
                    
                    <p className="text-gray-300 text-sm mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between text-gray-400 text-sm mb-4">
                      <div className="flex items-center">
                        <Calendar size={14} className="mr-1" />
                        {new Date(post.date).toLocaleDateString()}
                      </div>
                      <div className="flex items-center">
                        <Clock size={14} className="mr-1" />
                        {post.readTime}
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="text-gray-400 text-sm">
                        <div className="flex items-center space-x-4">
                          <span>{post.category}</span>
                        </div>
                      </div>
                      <Button 
                        size="sm" 
                        className="bg-emerald-400 hover:bg-emerald-500 text-black"
                        asChild
                      >
                        <Link href={`/blog/${post.slug}`}>
                          <ArrowRight size={14} className="mr-1" />
                          Read
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* No Results Message */}
            {filteredPosts.length === 0 && (
              <div className="text-center py-16">
                <div className="text-gray-400 text-lg mb-4">No articles found in this category</div>
                <Button 
                  onClick={() => setSelectedCategory("All")}
                  className="bg-emerald-400 hover:bg-emerald-500 text-black font-bold px-6 py-2 rounded-lg font-bebas"
                >
                  VIEW ALL ARTICLES
                </Button>
              </div>
            )}

            {/* Load More Button */}
            {filteredPosts.length > 0 && (
              <div className="text-center mt-12">
                <Button 
                  className="bg-emerald-400 hover:bg-emerald-500 text-black font-bold px-8 py-3 rounded-lg font-bebas"
                >
                  LOAD MORE ARTICLES
                </Button>
              </div>
            )}
          </div>
        </div>

        {/* Subscribe Section */}
        <SubscribeSection 
          heading="SCALING THE UNSCALABLE"
          title="Get exclusive insights on entrepreneurship, business scaling, and innovation delivered to your inbox."
          placeholder="Email"
          buttonText="SUBSCRIBE"
        />

        {/* Footer */}
        <Footer />
      </div>
    </div>
  )
} 