import { NextRequest, NextResponse } from 'next/server'
import { loadStoredPosts, getPostsNeedingCampaigns } from '@/lib/posts-storage'
import { createCampaignsForNewPosts } from '@/lib/sender-campaigns'

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const action = searchParams.get('action')

    if (action === 'needing-campaigns') {
      const postsNeedingCampaigns = getPostsNeedingCampaigns()
      return NextResponse.json({
        posts: postsNeedingCampaigns,
        count: postsNeedingCampaigns.length
      })
    }

    // Default: return all stored posts
    const storedData = loadStoredPosts()
    return NextResponse.json(storedData)

  } catch (error) {
    console.error('Error fetching stored posts:', error)
    return NextResponse.json(
      { error: 'Failed to fetch stored posts' },
      { status: 500 }
    )
  }
}

export async function POST(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const action = searchParams.get('action')

    if (action === 'create-campaigns') {
      await createCampaignsForNewPosts()
      return NextResponse.json({
        success: true,
        message: 'Campaign creation process completed'
      })
    }

    return NextResponse.json(
      { error: 'Invalid action' },
      { status: 400 }
    )

  } catch (error) {
    console.error('Error processing posts action:', error)
    return NextResponse.json(
      { error: 'Failed to process action' },
      { status: 500 }
    )
  }
} 