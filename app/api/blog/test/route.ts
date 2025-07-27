import { NextResponse } from 'next/server'
import { testBloggerAPI } from '@/lib/blogger'

export async function GET() {
  try {
    const result = await testBloggerAPI()
    
    return NextResponse.json({
      success: result.success,
      error: result.error,
      blogInfo: result.blogInfo,
      environment: {
        hasApiKey: !!process.env.BLOGGER_API_KEY,
        hasBlogId: !!process.env.BLOG_ID,
        blogId: process.env.BLOG_ID
      }
    })
  } catch (error) {
    return NextResponse.json(
      { 
        success: false, 
        error: error instanceof Error ? error.message : 'Unknown error' 
      },
      { status: 500 }
    )
  }
} 