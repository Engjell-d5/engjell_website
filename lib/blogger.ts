// Blogger API integration for fetching draft posts
// This allows you to write posts in Blogger but keep them as drafts
// so they're only published on your website

const BLOGGER_API_KEY = process.env.BLOGGER_API_KEY
const BLOG_ID = process.env.BLOG_ID

// In-memory cache for blog posts
const postCache: Record<string, { data: any, lastFetched: number }> = {}
const ONE_DAY = 24 * 60 * 60 * 1000

export interface BlogPost {
  id: string
  title: string
  content: string
  excerpt: string
  published: string
  updated: string
  labels: string[]
  author: {
    displayName: string
    image: {
      url: string
    }
  }
  images?: {
    url: string
    width: number
    height: number
  }[]
  slug: string
  readTime: string
  category: string
}

export interface BloggerResponse {
  items: Array<{
    id: string
    blog: {
      id: string
    }
    published: string
    updated: string
    url: string
    selfLink: string
    title: string
    content: string
    author: {
      id: string
      displayName: string
      url: string
      image: {
        url: string
      }
    }
    labels: string[]
    status: string
  }>
  nextPageToken?: string
}

// Test function to debug API connection
export async function testBloggerAPI(): Promise<{ success: boolean; error?: string; blogInfo?: any; posts?: any }> {
  if (!BLOGGER_API_KEY) {
    return { success: false, error: 'BLOGGER_API_KEY not configured' }
  }

  try {
    // First, test if we can access the blog at all
    const blogUrl = `https://www.googleapis.com/blogger/v3/blogs/${BLOG_ID}?key=${BLOGGER_API_KEY}`
    const blogResponse = await fetch(blogUrl)
    
    if (!blogResponse.ok) {
      return { 
        success: false, 
        error: `Cannot access blog: ${blogResponse.status} ${blogResponse.statusText}` 
      }
    }

    const blogInfo = await blogResponse.json()
    
    // Test if we can access published posts
    const publishedUrl = `https://www.googleapis.com/blogger/v3/blogs/${BLOG_ID}/posts?key=${BLOGGER_API_KEY}&maxResults=1`
    const publishedResponse = await fetch(publishedUrl)
    
    if (!publishedResponse.ok) {
      return { 
        success: false, 
        error: `Cannot access published posts: ${publishedResponse.status} ${publishedResponse.statusText}. This is likely an API key permissions issue.`,
        blogInfo 
      }
    }

    const publishedData = await publishedResponse.json()
    
    return { 
      success: true, 
      blogInfo,
      posts: publishedData
    }
  } catch (error) {
    return { 
      success: false, 
      error: error instanceof Error ? error.message : 'Unknown error' 
    }
  }
}

// Extract excerpt from content (first 200 characters)
function extractExcerpt(content: string): string {
  // Remove HTML tags
  const textContent = content.replace(/<[^>]*>/g, '')
  return textContent.length > 200 ? textContent.substring(0, 200) + '...' : textContent
}

// Extract featured image from content
function extractFeaturedImage(content: string): { url: string; width: number; height: number } | undefined {
  const imgMatch = content.match(/<img[^>]+src="([^"]+)"[^>]*>/i)
  if (imgMatch) {
    return {
      url: imgMatch[1],
      width: 1200,
      height: 630
    }
  }
  return undefined
}

// Calculate read time based on content length
function calculateReadTime(content: string): string {
  const wordsPerMinute = 200
  const wordCount = content.replace(/<[^>]*>/g, '').split(/\s+/).length
  const minutes = Math.ceil(wordCount / wordsPerMinute)
  return `${minutes} min read`
}

// Generate slug from title
function generateSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')
}

// Get category from labels
function getCategory(labels: string[]): string {
  const categoryLabels = ['Entrepreneurship', '3D Technology', 'Leadership', 'Content Marketing', 'Personal Growth', 'Innovation']
  const category = labels.find(label => categoryLabels.includes(label))
  return category || 'General'
}

export async function getDraftPosts(maxResults: number = 10, pageToken?: string): Promise<{ posts: BlogPost[], nextPageToken?: string }> {
  if (!BLOGGER_API_KEY || !BLOG_ID) {
    console.error('Blogger API key or Blog ID not configured')
    return { posts: [] }
  }

  try {
    // Fetch published posts directly
    let url = `https://www.googleapis.com/blogger/v3/blogs/${BLOG_ID}/posts?key=${BLOGGER_API_KEY}&maxResults=${maxResults}&fetchBodies=true&fetchImages=true`
    if (pageToken) {
      url += `&pageToken=${pageToken}`
    }
    
    const response = await fetch(url)
    
    if (!response.ok) {
      console.error(`Published posts access failed: ${response.status} ${response.statusText}`)
      
      // Try to get more detailed error information
      try {
        const errorData = await response.json()
        console.error('Error details:', errorData)
      } catch (e) {
        // Ignore JSON parsing errors
      }
      
      throw new Error(`Blogger API error: ${response.status} ${response.statusText}`)
    }

    const data: BloggerResponse = await response.json()
    
    const posts = data.items.map(item => ({
      id: item.id,
      title: item.title,
      content: item.content,
      excerpt: extractExcerpt(item.content),
      published: item.published,
      updated: item.updated,
      labels: item.labels || [],
      author: {
        displayName: item.author.displayName,
        image: item.author.image
      },
      images: extractFeaturedImage(item.content) ? [extractFeaturedImage(item.content)!] : undefined,
      slug: generateSlug(item.title),
      readTime: calculateReadTime(item.content),
      category: getCategory(item.labels || [])
    }))

    return {
      posts,
      nextPageToken: data.nextPageToken
    }
  } catch (error) {
    console.error('Error fetching posts from Blogger:', error)
    return { posts: [] }
  }
}

export async function getDraftPost(postId: string): Promise<BlogPost | null> {
  if (!BLOGGER_API_KEY || !BLOG_ID) {
    console.error('Blogger API key or Blog ID not configured')
    return null
  }

  try {
    const url = `https://www.googleapis.com/blogger/v3/blogs/${BLOG_ID}/posts/${postId}?key=${BLOGGER_API_KEY}&fetchBodies=true&fetchImages=true`
    
    const response = await fetch(url)
    
    if (!response.ok) {
      throw new Error(`Blogger API error: ${response.status} ${response.statusText}`)
    }

    const item = await response.json()
    
    return {
      id: item.id,
      title: item.title,
      content: item.content,
      excerpt: extractExcerpt(item.content),
      published: item.published,
      updated: item.updated,
      labels: item.labels || [],
      author: {
        displayName: item.author.displayName,
        image: item.author.image
      },
      images: extractFeaturedImage(item.content) ? [extractFeaturedImage(item.content)!] : undefined,
      slug: generateSlug(item.title),
      readTime: calculateReadTime(item.content),
      category: getCategory(item.labels || [])
    }
  } catch (error) {
    console.error('Error fetching draft post from Blogger:', error)
    return null
  }
}

// Get posts by category
export async function getDraftPostsByCategory(category: string, maxResults: number = 10): Promise<BlogPost[]> {
  const result = await getDraftPosts(maxResults * 2) // Fetch more to filter
  return result.posts.filter(post => post.category === category).slice(0, maxResults)
}

// Search posts
export async function searchDraftPosts(query: string, maxResults: number = 10): Promise<BlogPost[]> {
  const result = await getDraftPosts(maxResults * 3) // Fetch more to search
  const searchTerm = query.toLowerCase()
  
  return result.posts.filter(post => 
    post.title.toLowerCase().includes(searchTerm) ||
    post.excerpt.toLowerCase().includes(searchTerm) ||
    post.content.toLowerCase().includes(searchTerm)
  ).slice(0, maxResults)
}

// Get post by slug with caching
export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  const cacheKey = `post-slug-${slug}`
  
  // Serve from cache if available and fresh
  if (postCache[cacheKey] && (Date.now() - postCache[cacheKey].lastFetched < ONE_DAY)) {
    console.log('Serving blog post from cache:', slug)
    return postCache[cacheKey].data
  }

  try {
    // Fetch all posts and find the one with matching slug
    const result = await getDraftPosts(50) // Fetch more to find the post
    const post = result.posts.find(p => p.slug === slug)
    
    if (post) {
      // Cache the post
      postCache[cacheKey] = { data: post, lastFetched: Date.now() }
      console.log('Cached blog post:', slug)
    }
    
    return post || null
  } catch (error) {
    console.error('Error fetching post by slug:', error)
    return null
  }
}

// Clear post cache
export function clearPostCache(): void {
  const cacheKeys = Object.keys(postCache)
  Object.keys(postCache).forEach(key => delete postCache[key])
  console.log('Post cache cleared. Removed keys:', cacheKeys.length)
} 