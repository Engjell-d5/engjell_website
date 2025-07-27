import { NextRequest, NextResponse } from 'next/server'
import { getDraftPosts, getDraftPostsByCategory, searchDraftPosts, testBloggerAPI, clearPostCache } from '@/lib/blogger'
import { 
  getAllStoredPosts, 
  getStoredPostsPaginated, 
  getStoredPostsByCategory, 
  searchStoredPosts, 
  getStoredPostBySlug,
  isStoredDataFresh,
  loadStoredPosts
} from '@/lib/posts-storage'

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
    const slug = searchParams.get('slug')
    const forceRefresh = searchParams.get('forceRefresh') === 'true'

    // Handle single post request by slug
    if (slug) {
      const storedPost = getStoredPostBySlug(slug)
      if (storedPost) {
        return NextResponse.json({
          post: storedPost,
          fromStorage: true
        })
      }
      return NextResponse.json({ error: 'Post not found' }, { status: 404 })
    }

    // Check if we have fresh stored data and no force refresh
    const hasFreshData = isStoredDataFresh() && !forceRefresh
    console.log('🔍 isStoredDataFresh() returned:', isStoredDataFresh(), ', forceRefresh =', forceRefresh, ', hasFreshData =', hasFreshData)
    
    if (hasFreshData) {
      console.log('Serving blog posts from storage (fresh data available)')
      
      let posts
      let hasMore = false
      let total = 0

      if (search) {
        posts = searchStoredPosts(search, maxResults)
      } else if (category && category !== 'All') {
        posts = getStoredPostsByCategory(category, maxResults)
      } else {
        const page = pageToken ? parseInt(pageToken) : 1
        const result = getStoredPostsPaginated(page, maxResults)
        posts = result.posts
        hasMore = result.hasMore
        total = result.total
      }

      return NextResponse.json({
        posts,
        hasMore,
        total,
        fromStorage: true,
        lastUpdated: loadStoredPosts().lastChecked
      })
    }

    // If no fresh data, fetch from API and update storage
    console.log('🔄 Fetching fresh data from Blogger API (no fresh data available)')
    console.log('📊 Debug: hasFreshData =', hasFreshData, ', forceRefresh =', forceRefresh)
    
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
      console.log('📝 Calling getDraftPosts with maxResults =', maxResults, ', pageToken =', pageToken)
      const result = await getDraftPosts(maxResults, pageToken || undefined)
      console.log('✅ getDraftPosts returned', result.posts.length, 'posts')
      posts = result.posts
      nextPageToken = result.nextPageToken
    }

    const response = {
      posts,
      nextPageToken,
      apiStatus: 'connected',
      blogInfo: testResult.blogInfo,
      fromStorage: false,
      refreshed: true
    }

    // Force campaign creation for new posts when data is refreshed
    console.log('🚀 Triggering campaign creation for fresh data...')
    try {
      const { createCampaignsForNewPosts } = await import('@/lib/sender-campaigns')
      createCampaignsForNewPosts().catch(error => {
        console.error('❌ Error creating campaigns for new posts:', error)
      })
    } catch (error) {
      console.error('❌ Error importing campaign creation function:', error)
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