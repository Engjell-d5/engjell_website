import { MetadataRoute } from 'next'
import fs from 'fs'
import path from 'path'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://engjellrraklli.com'

  // Read blog post slugs from local file
  let blogPostUrls: MetadataRoute.Sitemap = []
  try {
    const postsPath = path.join(process.cwd(), 'data', 'posts.json')
    const postsData = JSON.parse(fs.readFileSync(postsPath, 'utf-8'))
    if (Array.isArray(postsData.posts)) {
      blogPostUrls = postsData.posts.map((post: any) => ({
        url: `${baseUrl}/blog/${post.slug}`,
        lastModified: post.updated ? new Date(post.updated) : new Date(),
        changeFrequency: 'monthly',
        priority: 0.6,
      }))
    }
  } catch (e) {
    // If file missing or error, skip blog posts
    blogPostUrls = []
  }

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${baseUrl}/entrepreneur`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/the-3d-guy`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/podcast`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.5,
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${baseUrl}/link-in-bio`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    ...blogPostUrls,
  ]
} 