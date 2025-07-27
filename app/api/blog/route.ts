import { NextRequest, NextResponse } from 'next/server'
import { getDraftPosts, getDraftPostsByCategory, searchDraftPosts, testBloggerAPI, clearPostCache } from '@/lib/blogger'

// In-memory cache
const cache: Record<string, { data: any, lastFetched: number }> = {}
const ONE_DAY = 24 * 60 * 60 * 1000

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const category = searchParams.get('category')
    const search = searchParams.get('search')
    const maxResults = parseInt(searchParams.get('maxResults') || '10')
    const pageToken = searchParams.get('pageToken')

    // Create cache key based on parameters (don't cache paginated requests)
    const cacheKey = pageToken ? null : `blog-${category || 'all'}-${search || 'none'}-${maxResults}`

    // Serve from cache if available and fresh (only cache first page and non-search results)
    if (cacheKey && !search && maxResults <= 10 && cache[cacheKey] && (Date.now() - cache[cacheKey].lastFetched < ONE_DAY)) {
      console.log('Serving blog posts from cache')
      return NextResponse.json(cache[cacheKey].data)
    }

    // Test basic API connection
    const testResult = await testBloggerAPI()

    if (!testResult.success) {
      console.error('Blogger API test failed:', testResult.error)
      return NextResponse.json(
        {
          error: 'Blogger API connection failed',
          details: testResult.error,
          suggestion: 'Please check your API key and blog ID configuration. Visit /api/blog/test for detailed diagnostics.'
        },
        { status: 500 }
      )
    }

    let posts
    let nextPageToken

    if (search) {
      posts = await searchDraftPosts(search, maxResults)
    } else if (category && category !== 'All') {
      posts = await getDraftPostsByCategory(category, maxResults)
    } else {
      const result = await getDraftPosts(maxResults, pageToken || undefined)
      posts = result.posts
      nextPageToken = result.nextPageToken
    }

    const response = {
      posts,
      nextPageToken,
      apiStatus: 'connected',
      blogInfo: testResult.blogInfo,
      cached: false
    }

    // Cache the response (only for non-search and reasonable page sizes, and first page)
    if (cacheKey && !search && maxResults <= 10) {
      cache[cacheKey] = { data: response, lastFetched: Date.now() }
      console.log('Cached blog posts for:', cacheKey)
    }

    return NextResponse.json(response)
  } catch (error) {
    console.error('Error fetching blog posts:', error)
    return NextResponse.json(
      {
        error: 'Failed to fetch blog posts',
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    )
  }
}

// POST method to clear cache
export async function POST(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const action = searchParams.get('action')

    if (action === 'clear-cache') {
      const cacheKeys = Object.keys(cache)
      Object.keys(cache).forEach(key => delete cache[key])
      console.log('Blog cache cleared. Removed keys:', cacheKeys)
      
      // Also clear post cache
      clearPostCache()
      
      return NextResponse.json({
        success: true,
        message: 'Blog cache and post cache cleared successfully',
        clearedKeys: cacheKeys.length
      })
    }

    return NextResponse.json({ error: 'Invalid action' }, { status: 400 })
  } catch (error) {
    console.error('Error clearing blog cache:', error)
    return NextResponse.json(
      {
        error: 'Failed to clear cache',
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    )
  }
} 