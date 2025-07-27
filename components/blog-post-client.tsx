'use client'

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Calendar, Clock, Share2 } from "lucide-react"
import { BlogPost } from "@/lib/blogger"
import SharedBackground from "@/components/shared-background"

interface BlogPostClientProps {
  post: BlogPost
}

export default function BlogPostClient({ post }: BlogPostClientProps) {
  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: post.title,
        text: post.excerpt,
        url: window.location.href
      })
    } else {
      // Fallback: copy to clipboard
      navigator.clipboard.writeText(window.location.href)
      alert('Link copied to clipboard!')
    }
  }

  return (
    <SharedBackground>
      <div className="p-16">
        <div className="max-w-4xl mx-auto">
          <Link href="/blog" className="inline-flex items-center text-white mb-8 hover:opacity-80 transition-opacity">
            <ArrowLeft className="mr-2" size={20} />
            Back to Blog
          </Link>

          <article className="prose prose-invert prose-lg max-w-none">
            <div className="mb-8">
              <span className="text-emerald-400 text-sm font-medium font-bebas tracking-wider">
                {post.category}
              </span>
              <h1 className="text-white text-4xl sm:text-5xl font-bold mt-2 mb-4 font-bebas leading-tight">
                {post.title}
              </h1>
              <div className="flex items-center justify-between text-gray-400 text-sm">
                <div className="flex items-center space-x-4">
                  <div className="flex items-center">
                    <Calendar size={14} className="mr-1" />
                    {new Date(post.published).toLocaleDateString()}
                  </div>
                  <div className="flex items-center">
                    <Clock size={14} className="mr-1" />
                    {post.readTime}
                  </div>
                </div>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="text-gray-400 hover:text-white"
                  onClick={handleShare}
                >
                  <Share2 size={16} className="mr-2" />
                  Share
                </Button>
              </div>
            </div>

            {/* Content */}
            <div 
              className="text-gray-300 leading-relaxed text-lg font-montserrat"
              dangerouslySetInnerHTML={{ __html: post.content }} 
            />
          </article>

          {/* Author Info */}
          <div className="mt-16 pt-8 border-t border-slate-700">
            <div className="flex items-center space-x-4">
              <img 
                src="/logo.svg" 
                alt="Engjell Rraklli"
                className="w-16 h-16"
              />
              <div>
                <h3 className="text-white text-xl font-bold font-bebas">
                  {post.author.displayName}
                </h3>
                <p className="text-gray-400 text-sm">
                  Entrepreneur, 3D visualization expert, and host of 'Scaling the Unscalable' podcast
                </p>
              </div>
            </div>
          </div>

          {/* Tags */}
          {post.labels && post.labels.length > 0 && (
            <div className="mt-8 pt-8 border-t border-slate-700">
              <h4 className="text-white text-lg font-bold mb-4 font-bebas">Tags:</h4>
              <div className="flex flex-wrap gap-2">
                {post.labels.map((label, index) => (
                  <span 
                    key={index}
                    className="bg-emerald-400/20 text-emerald-300 px-3 py-1 rounded-full text-sm font-medium"
                  >
                    {label}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Subscribe Section */}
          <div className="mt-16 pt-8 border-t border-slate-700">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="mb-4 md:mb-0">
                <h3 className="text-white text-xl font-bold mb-2 font-bebas">Enjoyed this article?</h3>
                <p className="text-gray-300">Subscribe to get notified about new posts.</p>
              </div>
              <Button className="bg-emerald-400 hover:bg-emerald-500 text-black font-bold px-6 py-3 font-bebas">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>
    </SharedBackground>
  )
} 