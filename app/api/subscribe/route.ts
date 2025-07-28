import { NextRequest, NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'

const SENDER_API_KEY = process.env.SENDER_API_KEY
const SENDER_LIST_ID = process.env.SENDER_LIST_ID

// Rate limiting config
const RATE_LIMIT_FILE = path.join(process.cwd(), 'data', 'rate-limit.json')
const RATE_LIMIT_WINDOW = 10 * 60 * 1000 // 10 minutes
const RATE_LIMIT_MAX = 5 // max requests per window per IP

function getClientIp(req: NextRequest) {
  // Try to get the real IP from headers (works with Vercel, etc.)
  return req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || req.ip || 'unknown'
}

function readRateLimitFile() {
  try {
    if (!fs.existsSync(RATE_LIMIT_FILE)) return {}
    const data = fs.readFileSync(RATE_LIMIT_FILE, 'utf-8')
    return JSON.parse(data)
  } catch {
    return {}
  }
}

function writeRateLimitFile(data: any) {
  fs.writeFileSync(RATE_LIMIT_FILE, JSON.stringify(data, null, 2), 'utf-8')
}

export async function POST(request: NextRequest) {
  // --- Rate limiting logic ---
  const ip = getClientIp(request)
  const now = Date.now()
  let rateData = readRateLimitFile()
  if (!rateData[ip]) rateData[ip] = []
  // Remove old timestamps
  rateData[ip] = rateData[ip].filter((ts: number) => now - ts < RATE_LIMIT_WINDOW)
  if (rateData[ip].length >= RATE_LIMIT_MAX) {
    return NextResponse.json(
      { error: 'Too many requests. Please try again later.' },
      { status: 429 }
    )
  }
  // Add this request
  rateData[ip].push(now)
  writeRateLimitFile(rateData)
  // --- End rate limiting logic ---

  try {
    const { email } = await request.json()

    if (!email) {
      return NextResponse.json(
        { error: 'Email is required' },
        { status: 400 }
      )
    }

    if (!SENDER_API_KEY || !SENDER_LIST_ID) {
      console.error('Sender.net API key or List ID not configured')
      return NextResponse.json(
        { error: 'Subscription service not configured' },
        { status: 500 }
      )
    }

    // Add subscriber to Sender.net list
    const response = await fetch(`https://api.sender.net/v2/subscribers`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${SENDER_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: email,
        list_ids: [parseInt(SENDER_LIST_ID)],
        status: 'active'
      })
    })

    if (!response.ok) {
      const errorData = await response.json()
      console.error('Sender.net API error:', errorData)
      
      // Handle specific error cases
      if (response.status === 409) {
        return NextResponse.json(
          { error: 'This email is already subscribed' },
          { status: 409 }
        )
      }
      
      return NextResponse.json(
        { error: 'Failed to subscribe. Please try again.' },
        { status: 500 }
      )
    }

    const data = await response.json()
    
    return NextResponse.json({
      success: true,
      message: 'Successfully subscribed to newsletter!',
      subscriber: data
    })

  } catch (error) {
    console.error('Error subscribing to newsletter:', error)
    return NextResponse.json(
      { error: 'Failed to subscribe. Please try again.' },
      { status: 500 }
    )
  }
} 