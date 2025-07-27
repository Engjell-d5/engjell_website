import { NextRequest, NextResponse } from 'next/server'

const SENDER_API_KEY = process.env.SENDER_API_KEY
const SENDER_LIST_ID = process.env.SENDER_LIST_ID

export async function POST(request: NextRequest) {
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