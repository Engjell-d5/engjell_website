'use client'

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Clock, ArrowRight, Calendar, Tag, Search, Loader2 } from "lucide-react"
import SubscribeSection from "@/components/subscribe-section"
import Footer from "@/components/footer"
import Image from "next/image"
import { useState, useEffect } from "react"
import SharedBackground from "@/components/shared-background"
import { BlogPost } from "@/lib/blogger"

const categories = ["All", "Entrepreneurship", "3D Technology", "Leadership", "Content Marketing", "Personal Growth", "Innovation"]

export default function BlogClient() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [searchQuery, setSearchQuery] = useState("")
  const [posts, setPosts] = useState<BlogPost[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [hasMore, setHasMore] = useState(true)
  const [currentPage, setCurrentPage] = useState(1)
  const [nextPageToken, setNextPageToken] = useState<string | null>(null)

  const fetchPosts = async (category: string = selectedCategory, search: string = searchQuery, page: number = 1, token?: string | null) => {
    try {
      setLoading(true)
      setError(null)
      
      const params = new URLSearchParams()
      if (category && category !== 'All') params.append('category', category)
      if (search) params.append('search', search)
      params.append('maxResults', '6')
      if (token) params.append('pageToken', token)
      
      const response = await fetch(`/api/blog?${params.toString()}`)
      
      if (!response.ok) {
        throw new Error('Failed to fetch posts')
      }
      
      const data = await response.json()
      
      if (page === 1) {
        setPosts(data.posts)
        setNextPageToken(data.nextPageToken || null)
      } else {
        setPosts(prev => [...prev, ...data.posts])
        setNextPageToken(data.nextPageToken || null)
      }
      
      // Handle both storage-based (hasMore) and API-based (nextPageToken) pagination
      setHasMore(data.hasMore || !!data.nextPageToken)
      setCurrentPage(page)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch posts')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchPosts()
  }, [])

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category)
    setCurrentPage(1)
    setNextPageToken(null)
    fetchPosts(category, searchQuery, 1)
  }

  const handleSearch = (query: string) => {
    setSearchQuery(query)
    setCurrentPage(1)
    setNextPageToken(null)
    fetchPosts(selectedCategory, query, 1)
  }

  const loadMore = () => {
    fetchPosts(selectedCategory, searchQuery, currentPage + 1, nextPageToken)
  }

  const filteredPosts = posts

  return (
    <SharedBackground>
        {/* Hero Section with Background Image */}
        <div className="relative px-8 md:px-16 lg:px-24 xl:px-32 2xl:px-40 py-24 md:py-32 mb-8 md:mb-12">
          <div className="absolute inset-0 rounded-2xl overflow-hidden">
            <Image
              src="/DSC0112-scaled.jpg"
              alt="Blog - Engjell Rraklli"
              fill
              className="object-cover"
              priority
              quality={95}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20"></div>
          </div>
          <div className="relative z-10 max-w-6xl mx-auto text-center">
            <h1 className="text-white text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold font-bebas uppercase tracking-wide">BLOG</h1>
          </div>
        </div>

        {/* Content Section */}
        <div className="px-8 md:px-16 lg:px-24 xl:px-32 2xl:px-40 py-8 md:py-12">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-white font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bebas uppercase tracking-wide text-center break-words">INSIGHTS & PERSPECTIVES</h2>
              <p className="text-body text-lg md:text-xl mb-8 font-montserrat max-w-4xl mx-auto">
                Deep dive into entrepreneurship, business scaling, 3D visualization, and the future of technology. 
                Real insights from real experiences.
              </p>
              
              {/* Search Bar */}
              <div className="max-w-md mx-auto mb-8">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <Input
                    type="text"
                    placeholder="Search articles..."
                    value={searchQuery}
                    onChange={(e) => handleSearch(e.target.value)}
                    className="pl-10 bg-slate-700/50 border-slate-600 text-white placeholder-gray-400 focus:border-emerald-400 text-lg py-4"
                  />
                </div>
              </div>
              
              {/* Category Filter */}
              <div className="flex flex-wrap justify-center gap-4 mb-12">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => handleCategoryChange(category)}
                    className={`px-4 py-2 rounded-full text-sm md:text-base font-medium transition-all duration-300 ${
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
              <div className="text-gray-400 text-sm md:text-base mb-8">
                {!loading && `${filteredPosts.length} ${filteredPosts.length === 1 ? 'article' : 'articles'} found`}
              </div>
            </div>

            {/* Error Message */}
            {error && (
              <div className="text-center py-16">
                <div className="text-red-400 text-lg mb-4">{error}</div>
                <Button 
                  onClick={() => fetchPosts()}
                  className="bg-emerald-400 hover:bg-emerald-500 text-black font-bold px-6 py-2 rounded-lg font-bebas"
                >
                  TRY AGAIN
                </Button>
              </div>
            )}

            {/* Loading State */}
            {loading && filteredPosts.length === 0 && (
              <div className="flex flex-col items-center justify-center py-20">
                <div className="relative mb-8">
                  <div className="w-24 h-24 border-4 border-emerald-400/30 rounded-full animate-pulse"></div>
                  <div className="absolute top-2 left-2 w-20 h-20 border-4 border-emerald-400/60 rounded-full animate-spin" style={{ animationDuration: '2s' }}></div>
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <div className="w-8 h-8 bg-emerald-400 rounded-full flex items-center justify-center animate-pulse">
                      <Tag size={16} className="text-black" />
                    </div>
                  </div>
                </div>
                <div className="text-center">
                  <h3 className="text-white font-bold text-2xl mb-4 font-bebas tracking-wider">LOADING ARTICLES</h3>
                  <div className="flex items-center justify-center space-x-2">
                    <div className="w-2 h-2 bg-emerald-400 rounded-full animate-bounce" style={{ animationDelay: '0s' }}></div>
                    <div className="w-2 h-2 bg-emerald-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                    <div className="w-2 h-2 bg-emerald-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  </div>
                  <p className="text-body text-sm mt-4 font-montserrat">Fetching the latest insights...</p>
                </div>
              </div>
            )}

            {/* Blog Posts Grid */}
            {!loading && !error && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {filteredPosts.map((post) => (
                  <div key={post.id} className="bg-slate-700/50 border-slate-600 hover:bg-slate-700/70 transition-all duration-300 hover:scale-105 overflow-hidden rounded-lg">
                    {/* Image */}
                    <div className="relative group h-48">
                      <Image 
                        src={post.images?.[0]?.url || "/DSC0048-1.jpg"} 
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
                      
                      {/* Category Badge */}
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
                      
                      <p className="text-body text-sm mb-4 line-clamp-3">
                        {post.excerpt}
                      </p>
                      
                      <div className="flex items-center justify-between text-gray-400 text-sm mb-4">
                        <div className="flex items-center">
                          <Calendar size={14} className="mr-1" />
                          {new Date(post.published).toLocaleDateString()}
                        </div>
                      </div>

                      <div className="flex items-center justify-between">
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
            )}

            {/* No Results Message */}
            {!loading && !error && filteredPosts.length === 0 && (
              <div className="text-center py-16">
                <div className="text-gray-400 text-lg mb-4">No articles found</div>
                <Button 
                  onClick={() => {
                    setSelectedCategory("All")
                    setSearchQuery("")
                    fetchPosts("All", "", 1)
                  }}
                  className="bg-emerald-400 hover:bg-emerald-500 text-black font-bold px-6 py-2 rounded-lg font-bebas"
                >
                  VIEW ALL ARTICLES
                </Button>
              </div>
            )}

            {/* Load More Button */}
            {!loading && !error && filteredPosts.length > 0 && hasMore && (
              <div className="text-center mt-12">
                <Button 
                  onClick={loadMore}
                  disabled={loading}
                  className="bg-emerald-400 hover:bg-emerald-500 text-black font-bold px-8 md:px-12 py-3 md:py-4 text-base md:text-lg rounded-lg font-bebas disabled:opacity-50"
                >
                  {loading ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin mr-2" />
                      LOADING...
                    </>
                  ) : (
                    'LOAD MORE ARTICLES'
                  )}
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
    </SharedBackground>
  )
} 