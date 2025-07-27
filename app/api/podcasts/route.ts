import { NextRequest, NextResponse } from 'next/server'
import { 
  loadStoredPodcasts, 
  getPodcastCount, 
  getRecentlyUpdatedPodcasts,
  getStoredPodcastsPaginated,
  clearStoredPodcasts
} from '@/lib/podcast-storage'

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const action = searchParams.get('action')
    const page = parseInt(searchParams.get('page') || '1')
    const limit = parseInt(searchParams.get('limit') || '10')
    const hours = parseInt(searchParams.get('hours') || '24')

    switch (action) {
      case 'count':
        const count = getPodcastCount()
        return NextResponse.json({ count })

      case 'recent':
        const recentPodcasts = getRecentlyUpdatedPodcasts(hours)
        return NextResponse.json({
          podcasts: recentPodcasts,
          count: recentPodcasts.length,
          hours
        })

      case 'paginated':
        const paginatedData = getStoredPodcastsPaginated(page, limit)
        return NextResponse.json(paginatedData)

      default:
        // Return all stored podcasts
        const storedData = loadStoredPodcasts()
        return NextResponse.json(storedData)
    }

  } catch (error) {
    console.error('Error fetching stored podcasts:', error)
    return NextResponse.json(
      { error: 'Failed to fetch stored podcasts' },
      { status: 500 }
    )
  }
}

export async function POST(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const action = searchParams.get('action')

    switch (action) {
      case 'clear':
        clearStoredPodcasts()
        return NextResponse.json({
          success: true,
          message: 'Podcast storage cleared successfully'
        })

      default:
        return NextResponse.json(
          { error: 'Invalid action' },
          { status: 400 }
        )
    }

  } catch (error) {
    console.error('Error processing podcasts action:', error)
    return NextResponse.json(
      { error: 'Failed to process action' },
      { status: 500 }
    )
  }
} 