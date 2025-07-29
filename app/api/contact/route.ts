import { NextRequest, NextResponse } from 'next/server'

interface ContactFormData {
  name: string
  email: string
  message: string
  honeypot?: string // Hidden field to catch bots
  timestamp?: string // To prevent rapid submissions
}

// Simple in-memory rate limiting (for production, use Redis or similar)
const rateLimitMap = new Map<string, { count: number; resetTime: number }>()

// Rate limiting function
const checkRateLimit = (identifier: string, limit: number = 5, windowMs: number = 15 * 60 * 1000) => {
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

// Spam detection functions
const isSpamContent = (message: string): boolean => {
  const spamKeywords = [
    'viagra', 'casino', 'loan', 'debt', 'weight loss', 'diet pills',
    'make money fast', 'work from home', 'earn money online',
    'click here', 'buy now', 'limited time', 'act now',
    'free trial', 'guaranteed', 'no risk', '100% free'
  ]
  
  const lowerMessage = message.toLowerCase()
  return spamKeywords.some(keyword => lowerMessage.includes(keyword))
}

const isSuspiciousEmail = (email: string): boolean => {
  // Check for suspicious email patterns
  const suspiciousPatterns = [
    /^[a-z]{1,3}\d{1,3}@/, // Very short username with numbers
    /\d{4,}@/, // Too many consecutive numbers
    /@.*\d{4,}/, // Domain with too many numbers
    /@.*\.(xyz|top|club|online|site|website)$/i // Suspicious TLDs
  ]
  
  return suspiciousPatterns.some(pattern => pattern.test(email))
}

const isSuspiciousName = (name: string): boolean => {
  // Check for suspicious name patterns
  const suspiciousPatterns = [
    /^[a-z]{1,2}\d{1,3}$/i, // Very short with numbers
    /\d{4,}/, // Too many numbers
    /^[a-z]{20,}$/i, // Too long without spaces
    /[^\w\s-]/ // Special characters (except hyphens)
  ]
  
  return suspiciousPatterns.some(pattern => pattern.test(name))
}

// Create transporter for sending emails using custom SMTP
const createTransporter = async () => {
  // Debug: Log environment variables (without sensitive data)
  console.log('=== SMTP CONFIGURATION DEBUG ===')
  console.log('SMTP_HOST:', process.env.SMTP_HOST ? `"${process.env.SMTP_HOST}"` : 'NOT SET')
  console.log('SMTP_PORT:', process.env.SMTP_PORT ? `"${process.env.SMTP_PORT}"` : 'NOT SET')
  console.log('SMTP_SECURE:', process.env.SMTP_SECURE ? `"${process.env.SMTP_SECURE}"` : 'NOT SET')
  console.log('EMAIL_USER:', process.env.EMAIL_USER ? `"${process.env.EMAIL_USER}"` : 'NOT SET')
  console.log('EMAIL_PASS:', process.env.EMAIL_PASS ? 'SET (hidden)' : 'NOT SET')
  
  // Check if SMTP configuration is available
  if (!process.env.SMTP_HOST) {
    console.log('❌ SMTP_HOST is missing')
    return null
  }
  if (!process.env.EMAIL_USER) {
    console.log('❌ EMAIL_USER is missing')
    return null
  }
  if (!process.env.EMAIL_PASS) {
    console.log('❌ EMAIL_PASS is missing')
    return null
  }

  // Use require for nodemailer (more reliable in Next.js)
  const nodemailer = require('nodemailer')
  console.log('✅ Nodemailer loaded successfully')

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
      console.log(`🔄 Trying SMTP configuration ${i + 1}:`, {
        host: smtpConfigs[i].host,
        port: smtpConfigs[i].port,
        secure: smtpConfigs[i].secure
      })
      
      const transporter = nodemailer.createTransport(smtpConfigs[i])
      
      // Verify the connection
      await transporter.verify()
      console.log(`✅ SMTP configuration ${i + 1} works!`)
      return transporter
    } catch (error) {
      console.log(`❌ SMTP configuration ${i + 1} failed:`, error.message)
      if (i === smtpConfigs.length - 1) {
        console.error('❌ All SMTP configurations failed')
        console.log('💡 TROUBLESHOOTING: If you get "535 Authentication Failed", make sure to:')
        console.log('   1. Use an App Password (not your regular password)')
        console.log('   2. Enable 2FA in Zoho and generate an App Password')
        console.log('   3. Check that your email domain matches your Zoho account')
        console.log('   4. Try using port 465 with secure: true')
        return null
      }
    }
  }
}

export async function POST(request: NextRequest) {
  try {
    const body: ContactFormData = await request.json()
    
    // Get client IP for rate limiting
    const clientIP = request.headers.get('x-forwarded-for') || 
                    request.headers.get('x-real-ip') || 
                    'unknown'
    
    // Rate limiting check (5 submissions per 15 minutes per IP)
    if (!checkRateLimit(clientIP, 5, 15 * 60 * 1000)) {
      return NextResponse.json(
        { message: 'Too many submissions. Please try again later.' },
        { status: 429 }
      )
    }
    
    // Honeypot check - if honeypot field is filled, it's likely a bot
    if (body.honeypot && body.honeypot.trim() !== '') {
      console.log('Honeypot triggered by:', clientIP)
      return NextResponse.json(
        { message: 'Message sent successfully' }, // Don't reveal it's a honeypot
        { status: 200 }
      )
    }
    
    // Timestamp validation - prevent rapid submissions
    if (body.timestamp) {
      const submissionTime = parseInt(body.timestamp)
      const now = Date.now()
      const timeDiff = now - submissionTime
      
      // If submission is too fast (less than 3 seconds), likely a bot
      if (timeDiff < 3000) {
        console.log('Rapid submission detected from:', clientIP)
        return NextResponse.json(
          { message: 'Please wait a moment before submitting again.' },
          { status: 400 }
        )
      }
      
      // If submission is too old (more than 1 hour), reject
      if (timeDiff > 60 * 60 * 1000) {
        console.log('Old timestamp detected from:', clientIP)
        return NextResponse.json(
          { message: 'Session expired. Please refresh the page and try again.' },
          { status: 400 }
        )
      }
    }
    
    // Validate required fields
    if (!body.name || !body.email || !body.message) {
      return NextResponse.json(
        { message: 'All fields are required' },
        { status: 400 }
      )
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(body.email)) {
      return NextResponse.json(
        { message: 'Please provide a valid email address' },
        { status: 400 }
      )
    }

    // Validate message length
    if (body.message.trim().length < 10) {
      return NextResponse.json(
        { message: 'Message must be at least 10 characters long' },
        { status: 400 }
      )
    }
    
    if (body.message.trim().length > 2000) {
      return NextResponse.json(
        { message: 'Message is too long. Please keep it under 2000 characters.' },
        { status: 400 }
      )
    }

    // Spam content detection
    if (isSpamContent(body.message)) {
      console.log('Spam content detected from:', clientIP, 'Message:', body.message.substring(0, 100))
      return NextResponse.json(
        { message: 'Message contains inappropriate content.' },
        { status: 400 }
      )
    }

    // Suspicious email detection
    if (isSuspiciousEmail(body.email)) {
      console.log('Suspicious email detected:', body.email, 'from IP:', clientIP)
      return NextResponse.json(
        { message: 'Please provide a valid email address.' },
        { status: 400 }
      )
    }

    // Suspicious name detection
    if (isSuspiciousName(body.name)) {
      console.log('Suspicious name detected:', body.name, 'from IP:', clientIP)
      return NextResponse.json(
        { message: 'Please provide a valid name.' },
        { status: 400 }
      )
    }

    // Create transporter
    const transporter = await createTransporter()

    // Log the submission (always do this)
    console.log('Contact form submission received:', {
      name: body.name,
      email: body.email,
      ip: clientIP,
      timestamp: new Date().toISOString(),
      messagePreview: body.message.substring(0, 100) + '...'
    })

    // Try to send email if transporter is available
    if (transporter) {
      try {
        // Email content
        const mailOptions = {
          from: process.env.EMAIL_USER,
          to: process.env.EMAIL_USER, // Send to yourself
          replyTo: body.email, // Reply-to will be the sender's email
          subject: `New Contact Form Submission from ${body.name}`,
          html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
              <h2 style="color: #10b981;">New Contact Form Submission</h2>
              <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
                <p><strong>Name:</strong> ${body.name}</p>
                <p><strong>Email:</strong> <a href="mailto:${body.email}">${body.email}</a></p>
                <p><strong>Date:</strong> ${new Date().toLocaleString()}</p>
                <p><strong>IP Address:</strong> ${clientIP}</p>
              </div>
              <div style="background-color: #ffffff; padding: 20px; border-left: 4px solid #10b981; margin: 20px 0;">
                <h3 style="margin-top: 0;">Message:</h3>
                <p style="line-height: 1.6; white-space: pre-wrap;">${body.message}</p>
              </div>
              <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 30px 0;">
              <p style="color: #6b7280; font-size: 14px;">
                This message was sent from your website contact form at engjellrraklli.com
              </p>
            </div>
          `
        }

        // Send email
        await transporter.sendMail(mailOptions)
        console.log('Email sent successfully to:', process.env.EMAIL_USER)
      } catch (emailError) {
        console.error('Failed to send email:', emailError)
        // Don't fail the request if email fails, just log it
      }
    } else {
      console.log('Email not sent - SMTP not configured. Check console for form submission details.')
    }

    return NextResponse.json(
      { message: 'Message sent successfully' },
      { status: 200 }
    )

  } catch (error) {
    console.error('Contact form API error:', error)
    return NextResponse.json(
      { message: 'Failed to send message. Please try again later.' },
      { status: 500 }
    )
  }
} 