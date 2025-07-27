import { StoredPost } from './posts-storage'

const SENDER_API_KEY = process.env.SENDER_API_KEY
const SENDER_LIST_ID = process.env.SENDER_LIST_ID

export interface CampaignData {
  name: string
  subject: string
  content: string
  list_id: number
  sender_name?: string
  sender_email?: string
  reply_to?: string
}

export interface CampaignResponse {
  id: string
  name: string
  status: string
}

// Create a campaign in Sender.net
export async function createSenderCampaign(post: StoredPost): Promise<CampaignResponse | null> {
  if (!SENDER_API_KEY || !SENDER_LIST_ID) {
    console.error('Sender.net API key or List ID not configured')
    return null
  }

  console.log(`Creating campaign for post: ${post.title}`)
  console.log(`Using List ID: ${SENDER_LIST_ID}`)

  try {
    // According to Sender.net API docs, we need to use 'groups' array instead of 'list_id'
    const campaignData = {
      title: `Newsletter: ${post.title}`,
      subject: `New Post: ${post.title}`,
      from: 'Engjell Rraklli',
      reply_to: 'info@engjellrraklli.com',
      content_type: 'html',
      content: generateEmailContent(post),
      groups: [SENDER_LIST_ID] // Use groups array with the List ID as string
    }

    console.log('Campaign data prepared:', {
      title: campaignData.title,
      subject: campaignData.subject,
      groups: campaignData.groups,
      contentLength: campaignData.content.length
    })

    const response = await fetch('https://api.sender.net/v2/campaigns', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${SENDER_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(campaignData)
    })

    console.log(`Sender.net API response status: ${response.status}`)

    if (!response.ok) {
      const errorText = await response.text()
      console.error('Sender.net campaign creation error:', errorText)
      console.error('Response status:', response.status)
      console.error('Response headers:', Object.fromEntries(response.headers.entries()))
      return null
    }

    const data = await response.json()
    console.log(`Campaign created successfully for post: ${post.title}`, data)
    
    return {
      id: data.data?.id || data.id,
      name: data.data?.title || data.title,
      status: data.data?.status || data.status
    }

  } catch (error) {
    console.error('Error creating Sender.net campaign:', error)
    return null
  }
}

// Generate email content for the campaign
function generateEmailContent(post: StoredPost): string {
  const featuredImage = post.images?.[0]?.url || ''
  
  return `
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${post.title}</title>
    <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { text-align: center; margin-bottom: 30px; }
        .logo { width: 100px; height: 100px; margin-bottom: 20px; }
        .title { font-size: 28px; font-weight: bold; margin-bottom: 15px; color: #134e4a; }
        .excerpt { font-size: 16px; color: #666; margin-bottom: 25px; line-height: 1.8; }
        .meta { font-size: 14px; color: #999; margin-bottom: 25px; }
        .featured-image { width: 100%; max-width: 500px; height: auto; margin: 20px 0; border-radius: 8px; }
        .cta-button { 
            display: inline-block; 
            background-color: #10b981; 
            color: white; 
            padding: 15px 30px; 
            text-decoration: none; 
            border-radius: 25px; 
            font-weight: bold; 
            margin: 20px 0;
        }
        .footer { margin-top: 40px; padding-top: 20px; border-top: 1px solid #eee; text-align: center; color: #999; }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <img src="https://engjellrraklli.com/logo.svg" alt="Engjell Rraklli" class="logo">
            <h1 style="color: #134e4a; margin: 0;">Scaling the Unscalable</h1>
        </div>
        
        <div class="title">${post.title}</div>
        
        ${featuredImage ? `<img src="${featuredImage}" alt="${post.title}" class="featured-image">` : ''}
        
        <div class="excerpt">${post.excerpt}</div>
        
        <div class="meta">
            <strong>Category:</strong> ${post.category} | 
            <strong>Read Time:</strong> ${post.readTime} | 
            <strong>Published:</strong> ${new Date(post.published).toLocaleDateString()}
        </div>
        
        <div style="text-align: center;">
            <a href="https://engjellrraklli.com/blog/${post.slug}" class="cta-button">
                Read Full Article →
            </a>
        </div>
        
        <div class="footer">
            <p>Thanks for subscribing to my newsletter!</p>
            <p>Follow me on <a href="https://threads.net/@engjellrraklli">Threads</a> | <a href="https://linkedin.com/in/engjell-rraklli-a8b20a68">LinkedIn</a> | <a href="https://instagram.com/engjellrraklli">Instagram</a></p>
            <p><a href="https://engjellrraklli.com">engjellrraklli.com</a></p>
        </div>
    </div>
</body>
</html>
  `.trim()
}

// Create campaigns for all posts that need them
export async function createCampaignsForNewPosts(): Promise<void> {
  const { getPostsNeedingCampaigns, markCampaignCreated } = await import('./posts-storage')
  
  const postsNeedingCampaigns = getPostsNeedingCampaigns()
  
  if (postsNeedingCampaigns.length === 0) {
    console.log('No new posts need campaigns')
    return
  }

  console.log(`Creating campaigns for ${postsNeedingCampaigns.length} new posts...`)
  console.log('Environment check:', {
    hasApiKey: !!SENDER_API_KEY,
    hasListId: !!SENDER_LIST_ID,
    apiKeyLength: SENDER_API_KEY?.length || 0,
    listId: SENDER_LIST_ID
  })

  for (const post of postsNeedingCampaigns) {
    try {
      console.log(`Attempting to create campaign for: ${post.title}`)
      const campaign = await createSenderCampaign(post)
      
      if (campaign) {
        markCampaignCreated(post.id, campaign.id)
        console.log(`✅ Campaign created for: ${post.title} (ID: ${campaign.id})`)
      } else {
        console.log(`❌ Failed to create campaign for: ${post.title} - createSenderCampaign returned null`)
      }
    } catch (error) {
      console.error(`Error creating campaign for ${post.title}:`, error)
    }
  }
} 