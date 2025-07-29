import { NextRequest, NextResponse } from 'next/server'

interface PodcastApplicationData {
  // Personal Information
  name: string
  email: string
  phone: string
  linkedin: string
  website: string
  
  // Business Information
  companyName: string
  companyWebsite: string
  industry: string
  companySize: string
  revenue: string
  yearsInBusiness: string
  
  // Business Details
  businessDescription: string
  targetMarket: string
  uniqueValue: string
  
  // Success Metrics
  keyAchievements: string
  growthMetrics: string
  challengesOvercome: string
  
  // Podcast Topics
  topicsOfInterest: string
  storyHighlights: string
  audienceValue: string
  
  // Technical
  honeypot?: string
  timestamp?: string
}

// Simple in-memory rate limiting (for production, use Redis or similar)
const rateLimitMap = new Map<string, { count: number; resetTime: number }>()

// Rate limiting function
const checkRateLimit = (identifier: string, limit: number = 3, windowMs: number = 24 * 60 * 60 * 1000) => {
  const now = Date.now()
  const record = rateLimitMap.get(identifier)
  
  if (!record || now > record.resetTime) {
    rateLimitMap.set(identifier, { count: 1, resetTime: now + windowMs })
    return true
  }
  
  if (record.count >= limit) {
    return false
  }
  
  record.count++
  return true
}

// Create transporter for sending emails using custom SMTP
const createTransporter = async () => {
  // Check if SMTP configuration is available
  if (!process.env.SMTP_HOST || !process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
    console.log('❌ SMTP configuration missing for podcast applications')
    return null
  }

  // Use require for nodemailer (more reliable in Next.js)
  const nodemailer = require('nodemailer')
  console.log('✅ Nodemailer loaded successfully for podcast applications')

  // Try multiple SMTP configurations for Zoho
  const smtpConfigs = [
    // Configuration 1: Standard TLS
    {
      host: process.env.SMTP_HOST,
      port: 587,
      secure: false,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      },
      tls: {
        rejectUnauthorized: false
      }
    },
    // Configuration 2: SSL
    {
      host: process.env.SMTP_HOST,
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    },
    // Configuration 3: Custom port from env
    {
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: process.env.SMTP_SECURE === 'true',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      },
      tls: {
        rejectUnauthorized: false
      }
    }
  ]

  for (let i = 0; i < smtpConfigs.length; i++) {
    try {
      console.log(`🔄 Trying SMTP configuration ${i + 1} for podcast applications`)
      
      const transporter = nodemailer.createTransport(smtpConfigs[i])
      
      // Verify the connection
      await transporter.verify()
      console.log(`✅ SMTP configuration ${i + 1} works for podcast applications!`)
      return transporter
    } catch (error) {
      console.log(`❌ SMTP configuration ${i + 1} failed for podcast applications:`, error.message)
      if (i === smtpConfigs.length - 1) {
        console.error('❌ All SMTP configurations failed for podcast applications')
        return null
      }
    }
  }
}

export async function POST(request: NextRequest) {
  try {
    const body: PodcastApplicationData = await request.json()
    
    // Get client IP for rate limiting
    const clientIP = request.headers.get('x-forwarded-for') || 
                    request.headers.get('x-real-ip') || 
                    'unknown'
    
    // Rate limiting check (3 submissions per 24 hours per IP)
    if (!checkRateLimit(clientIP, 3, 24 * 60 * 60 * 1000)) {
      return NextResponse.json(
        { message: 'Too many applications. Please try again later.' },
        { status: 429 }
      )
    }
    
    // Honeypot check - if honeypot field is filled, it's likely a bot
    if (body.honeypot && body.honeypot.trim() !== '') {
      console.log('Honeypot triggered by podcast application from:', clientIP)
      return NextResponse.json(
        { message: 'Application submitted successfully' }, // Don't reveal it's a honeypot
        { status: 200 }
      )
    }
    
    // Timestamp validation - prevent rapid submissions
    if (body.timestamp) {
      const submissionTime = parseInt(body.timestamp)
      const now = Date.now()
      const timeDiff = now - submissionTime
      
      // If submission is too fast (less than 5 seconds), likely a bot
      if (timeDiff < 5000) {
        console.log('Rapid podcast application submission detected from:', clientIP)
        return NextResponse.json(
          { message: 'Please wait a moment before submitting again.' },
          { status: 400 }
        )
      }
      
      // If submission is too old (more than 1 hour), reject
      if (timeDiff > 60 * 60 * 1000) {
        console.log('Old timestamp detected in podcast application from:', clientIP)
        return NextResponse.json(
          { message: 'Session expired. Please refresh the page and try again.' },
          { status: 400 }
        )
      }
    }
    
    // Validate required fields
    const requiredFields = ['name', 'email', 'companyName', 'industry', 'businessDescription', 'keyAchievements', 'topicsOfInterest', 'storyHighlights']
    for (const field of requiredFields) {
      if (!body[field as keyof PodcastApplicationData] || !body[field as keyof PodcastApplicationData]?.toString().trim()) {
        return NextResponse.json(
          { message: `${field.charAt(0).toUpperCase() + field.slice(1)} is required` },
          { status: 400 }
        )
      }
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(body.email)) {
      return NextResponse.json(
        { message: 'Please provide a valid email address' },
        { status: 400 }
      )
    }

    // Validate minimum lengths
    if (body.businessDescription.trim().length < 50) {
      return NextResponse.json(
        { message: 'Business description must be at least 50 characters long' },
        { status: 400 }
      )
    }

    if (body.keyAchievements.trim().length < 50) {
      return NextResponse.json(
        { message: 'Key achievements must be at least 50 characters long' },
        { status: 400 }
      )
    }

    if (body.storyHighlights.trim().length < 100) {
      return NextResponse.json(
        { message: 'Story highlights must be at least 100 characters long' },
        { status: 400 }
      )
    }

    // Create transporter
    const transporter = await createTransporter()

    // Log the submission (always do this)
    console.log('Podcast application received:', {
      name: body.name,
      email: body.email,
      company: body.companyName,
      industry: body.industry,
      ip: clientIP,
      timestamp: new Date().toISOString(),
    })

    // Try to send email if transporter is available
    if (transporter) {
      try {
        // Email content
        const mailOptions = {
          from: process.env.EMAIL_USER,
          to: process.env.EMAIL_USER, // Send to yourself
          replyTo: body.email, // Reply-to will be the applicant's email
          subject: `New Podcast Guest Application: ${body.name} from ${body.companyName}`,
          html: `
            <div style="font-family: Arial, sans-serif; max-width: 800px; margin: 0 auto;">
              <h2 style="color: #10b981;">New Podcast Guest Application</h2>
              
              <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
                <h3 style="color: #10b981; margin-top: 0;">Applicant Information</h3>
                <p><strong>Name:</strong> ${body.name}</p>
                <p><strong>Email:</strong> <a href="mailto:${body.email}">${body.email}</a></p>
                <p><strong>Phone:</strong> ${body.phone || 'Not provided'}</p>
                <p><strong>LinkedIn:</strong> ${body.linkedin ? `<a href="${body.linkedin}" target="_blank">${body.linkedin}</a>` : 'Not provided'}</p>
                <p><strong>Personal Website:</strong> ${body.website ? `<a href="${body.website}" target="_blank">${body.website}</a>` : 'Not provided'}</p>
                <p><strong>Date:</strong> ${new Date().toLocaleString()}</p>
                <p><strong>IP Address:</strong> ${clientIP}</p>
              </div>

              <div style="background-color: #ffffff; padding: 20px; border-left: 4px solid #10b981; margin: 20px 0;">
                <h3 style="color: #10b981; margin-top: 0;">Business Information</h3>
                <p><strong>Company:</strong> ${body.companyName}</p>
                <p><strong>Company Website:</strong> ${body.companyWebsite ? `<a href="${body.companyWebsite}" target="_blank">${body.companyWebsite}</a>` : 'Not provided'}</p>
                <p><strong>Industry:</strong> ${body.industry}</p>
                <p><strong>Company Size:</strong> ${body.companySize || 'Not specified'}</p>
                <p><strong>Annual Revenue:</strong> ${body.revenue || 'Not specified'}</p>
                <p><strong>Years in Business:</strong> ${body.yearsInBusiness || 'Not specified'}</p>
                <p><strong>Target Market:</strong> ${body.targetMarket || 'Not provided'}</p>
                <p><strong>Unique Value Proposition:</strong> ${body.uniqueValue || 'Not provided'}</p>
              </div>

              <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
                <h3 style="color: #10b981; margin-top: 0;">Business Description</h3>
                <p style="line-height: 1.6; white-space: pre-wrap;">${body.businessDescription}</p>
              </div>

              <div style="background-color: #ffffff; padding: 20px; border-left: 4px solid #10b981; margin: 20px 0;">
                <h3 style="color: #10b981; margin-top: 0;">Success Metrics & Achievements</h3>
                <p><strong>Key Achievements:</strong></p>
                <p style="line-height: 1.6; white-space: pre-wrap;">${body.keyAchievements}</p>
                
                ${body.growthMetrics ? `
                <p><strong>Growth Metrics:</strong></p>
                <p style="line-height: 1.6; white-space: pre-wrap;">${body.growthMetrics}</p>
                ` : ''}
                
                ${body.challengesOvercome ? `
                <p><strong>Challenges Overcome:</strong></p>
                <p style="line-height: 1.6; white-space: pre-wrap;">${body.challengesOvercome}</p>
                ` : ''}
              </div>

              <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
                <h3 style="color: #10b981; margin-top: 0;">Podcast Topics & Story</h3>
                <p><strong>Topics of Interest:</strong></p>
                <p style="line-height: 1.6; white-space: pre-wrap;">${body.topicsOfInterest}</p>
                
                <p><strong>Story Highlights:</strong></p>
                <p style="line-height: 1.6; white-space: pre-wrap;">${body.storyHighlights}</p>
                
                ${body.audienceValue ? `
                <p><strong>Value to Audience:</strong></p>
                <p style="line-height: 1.6; white-space: pre-wrap;">${body.audienceValue}</p>
                ` : ''}
              </div>

              <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 30px 0;">
              <p style="color: #6b7280; font-size: 14px;">
                This podcast application was submitted from your website at engjellrraklli.com/podcast/apply
              </p>
            </div>
          `
        }

        // Send email
        await transporter.sendMail(mailOptions)
        console.log('Podcast application email sent successfully to:', process.env.EMAIL_USER)
      } catch (emailError) {
        console.error('Failed to send podcast application email:', emailError)
        // Don't fail the request if email fails, just log it
      }
    } else {
      console.log('Podcast application email not sent - SMTP not configured. Check console for application details.')
    }

    return NextResponse.json(
      { message: 'Application submitted successfully' },
      { status: 200 }
    )

  } catch (error) {
    console.error('Podcast application API error:', error)
    return NextResponse.json(
      { message: 'Failed to submit application. Please try again later.' },
      { status: 500 }
    )
  }
} 