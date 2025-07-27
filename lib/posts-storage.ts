import fs from 'fs'
import path from 'path'

const POSTS_FILE = path.join(process.cwd(), 'data', 'posts.json')

export interface StoredPost {
  id: string
  title: string
  slug: string
  published: string
  updated: string
  excerpt: string
  content: string // Full post content
  category: string
  readTime: string
  labels: string[] // All tags/labels
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
  url?: string // Original Blogger URL
  selfLink?: string // Blogger API link
  campaignCreated?: boolean
  campaignId?: string
}

export interface PostsData {
  lastChecked: string
  posts: StoredPost[]
}

// Ensure data directory exists
function ensureDataDirectory() {
  const dataDir = path.dirname(POSTS_FILE)
  if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir, { recursive: true })
  }
}

// Load stored posts from file
export function loadStoredPosts(): PostsData {
  ensureDataDirectory()
  
  if (!fs.existsSync(POSTS_FILE)) {
    return {
      lastChecked: new Date().toISOString(),
      posts: []
    }
  }

  try {
    const data = fs.readFileSync(POSTS_FILE, 'utf8')
    return JSON.parse(data)
  } catch (error) {
    console.error('Error loading stored posts:', error)
    return {
      lastChecked: new Date().toISOString(),
      posts: []
    }
  }
}

// Save posts to file
export function saveStoredPosts(data: PostsData): void {
  ensureDataDirectory()
  
  try {
    fs.writeFileSync(POSTS_FILE, JSON.stringify(data, null, 2))
  } catch (error) {
    console.error('Error saving stored posts:', error)
  }
}

// Compare current posts with stored posts to find new ones
export function findNewPosts(currentPosts: StoredPost[]): StoredPost[] {
  const storedData = loadStoredPosts()
  const storedPostIds = new Set(storedData.posts.map(p => p.id))
  
  console.log(`🔍 findNewPosts: ${currentPosts.length} current posts, ${storedData.posts.length} stored posts`)
  console.log(`🔍 Stored post IDs:`, Array.from(storedPostIds))
  
  const newPosts = currentPosts.filter(post => !storedPostIds.has(post.id))
  console.log(`🔍 Found ${newPosts.length} new posts:`, newPosts.map(p => p.title))
  
  return newPosts
}

// Update stored posts with current posts
export function updateStoredPosts(currentPosts: StoredPost[]): void {
  const storedData = loadStoredPosts()
  
  // Merge current posts with stored posts, keeping campaign info
  const mergedPosts = currentPosts.map(currentPost => {
    const storedPost = storedData.posts.find(p => p.id === currentPost.id)
    return {
      ...currentPost,
      campaignCreated: storedPost?.campaignCreated || false,
      campaignId: storedPost?.campaignId
    }
  })

  const updatedData: PostsData = {
    lastChecked: new Date().toISOString(),
    posts: mergedPosts
  }

  saveStoredPosts(updatedData)
}

// Mark a post as having a campaign created
export function markCampaignCreated(postId: string, campaignId: string): void {
  const storedData = loadStoredPosts()
  
  const updatedPosts = storedData.posts.map(post => {
    if (post.id === postId) {
      return {
        ...post,
        campaignCreated: true,
        campaignId
      }
    }
    return post
  })

  const updatedData: PostsData = {
    ...storedData,
    posts: updatedPosts
  }

  saveStoredPosts(updatedData)
}

// Get posts that need campaigns created
export function getPostsNeedingCampaigns(): StoredPost[] {
  const storedData = loadStoredPosts()
  return storedData.posts.filter(post => !post.campaignCreated)
}

// Get all stored posts
export function getAllStoredPosts(): StoredPost[] {
  const storedData = loadStoredPosts()
  return storedData.posts
}

// Get stored posts with pagination
export function getStoredPostsPaginated(page: number = 1, limit: number = 10): { posts: StoredPost[], hasMore: boolean, total: number } {
  const storedData = loadStoredPosts()
  const startIndex = (page - 1) * limit
  const endIndex = startIndex + limit
  const posts = storedData.posts.slice(startIndex, endIndex)
  
  return {
    posts,
    hasMore: endIndex < storedData.posts.length,
    total: storedData.posts.length
  }
}

// Get stored post by slug
export function getStoredPostBySlug(slug: string): StoredPost | null {
  const storedData = loadStoredPosts()
  return storedData.posts.find(post => post.slug === slug) || null
}

// Get stored posts by category
export function getStoredPostsByCategory(category: string, maxResults: number = 10): StoredPost[] {
  const storedData = loadStoredPosts()
  return storedData.posts
    .filter(post => post.category === category)
    .slice(0, maxResults)
}

// Search stored posts
export function searchStoredPosts(query: string, maxResults: number = 10): StoredPost[] {
  const storedData = loadStoredPosts()
  const searchTerm = query.toLowerCase()
  
  return storedData.posts
    .filter(post => 
      post.title.toLowerCase().includes(searchTerm) ||
      post.excerpt.toLowerCase().includes(searchTerm) ||
      post.content.toLowerCase().includes(searchTerm)
    )
    .slice(0, maxResults)
}

// Check if stored data is fresh (within 24 hours)
export function isStoredDataFresh(): boolean {
  const storedData = loadStoredPosts()
  if (!storedData.lastChecked || storedData.posts.length === 0) {
    return false
  }
  
  const lastChecked = new Date(storedData.lastChecked)
  const now = new Date()
  const hoursDiff = (now.getTime() - lastChecked.getTime()) / (1000 * 60 * 60)
  
  return hoursDiff < 24
} 