# Blogger API Integration Setup

This guide will help you set up the Blogger API integration to fetch draft posts from your Blogger account.

## Overview

The integration allows you to:
- Write blog posts in Blogger as **drafts**
- Keep them unpublished on Blogger (only visible to you)
- Display them on your website as published content
- Maintain full control over when posts go live

## Setup Steps

### 1. Create a Google Cloud Project

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select an existing one
3. Enable the Blogger API v3:
   - Go to "APIs & Services" > "Library"
   - Search for "Blogger API v3"
   - Click "Enable"

### 2. Create API Credentials

1. Go to "APIs & Services" > "Credentials"
2. Click "Create Credentials" > "API Key"
3. Copy the API key (you'll need this later)
4. (Optional) Restrict the API key to Blogger API only for security

### 3. Find Your Blog ID

Your Blog ID can be found in several ways:

**Method 1: From Blogger Dashboard**
1. Go to your Blogger dashboard
2. Look at the URL: `https://www.blogger.com/blog/posts/12345678901234567890`
3. The number at the end is your Blog ID

**Method 2: From Your Blog URL**
- If your blog is: `https://yourblog.blogspot.com`
- Your Blog ID is: `yourblog.blogspot.com`

**Method 3: Using the API**
1. Make a request to: `https://www.googleapis.com/blogger/v3/users/self/blogs?key=YOUR_API_KEY`
2. This will return your blog information including the ID

### 4. Configure Environment Variables

Create a `.env.local` file in your project root with:

```env
BLOGGER_API_KEY=your_blogger_api_key_here
BLOG_ID=your_blog_id_here
```

### 5. Write Posts as Drafts

1. Go to your Blogger dashboard
2. Create new posts but **keep them as drafts**
3. Add labels/categories that match your website categories:
   - Entrepreneurship
   - 3D Technology
   - Leadership
   - Content Marketing
   - Personal Growth
   - Innovation
   - General (default)

4. Include images in your posts (they'll be extracted automatically)
5. Save as draft (don't publish)

## Features

### Automatic Processing
- **Excerpt Generation**: First 200 characters of content
- **Read Time**: Calculated based on word count
- **Slug Generation**: URL-friendly version of title
- **Image Extraction**: Featured images from post content
- **Category Mapping**: Based on labels

### Categories
The system automatically maps Blogger labels to website categories:
- `Entrepreneurship` → Entrepreneurship
- `3D Technology` → 3D Technology
- `Leadership` → Leadership
- `Content Marketing` → Content Marketing
- `Personal Growth` → Personal Growth
- `Innovation` → Innovation
- Any other label → General

### Search & Filtering
- Search through post titles, excerpts, and content
- Filter by category
- Pagination support
- Real-time search results

## API Endpoints

### Get All Draft Posts
```
GET /api/blog?maxResults=10
```

### Get Posts by Category
```
GET /api/blog?category=Entrepreneurship&maxResults=10
```

### Search Posts
```
GET /api/blog?search=scaling&maxResults=10
```

## Troubleshooting

### Common Issues

1. **"Blogger API key not configured"**
   - Check your `.env.local` file
   - Ensure variables are named correctly
   - Restart your development server

2. **"Blog ID not found"**
   - Verify your Blog ID is correct
   - Try the different methods to find your Blog ID
   - Check that your blog is accessible

3. **"No posts found"**
   - Ensure you have draft posts in Blogger
   - Check that your API key has proper permissions
   - Verify the Blogger API is enabled

4. **"403 Forbidden"**
   - Check API key restrictions
   - Ensure Blogger API v3 is enabled
   - Verify your Google Cloud project settings

### Testing the API

You can test the API directly:

```bash
curl "https://www.googleapis.com/blogger/v3/blogs/YOUR_BLOG_ID/posts?key=YOUR_API_KEY&status=DRAFT&maxResults=5"
```

## Security Notes

- Keep your API key secure
- Consider restricting the API key to your domain
- Use environment variables (never commit API keys to git)
- The API only fetches draft posts, so they remain private on Blogger

## Publishing Workflow

1. Write your post in Blogger as a draft
2. Add appropriate labels/categories
3. Include images in the post content
4. Save as draft
5. Your website will automatically display the post
6. When ready to publish on Blogger, simply publish the draft

This gives you full control over your content while maintaining a professional website experience. 