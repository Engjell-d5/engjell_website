# Blogger API 403 Forbidden Error - Troubleshooting Guide

## Quick Diagnosis

Visit this URL to test your API connection:
```
http://localhost:3000/api/blog/test
```

This will show you exactly what's wrong with your setup.

## Common Causes & Solutions

### 1. **API Key Issues**

**Problem**: Invalid or restricted API key

**Solutions**:
- [ ] Verify your API key is correct (no extra spaces)
- [ ] Check that Blogger API v3 is enabled in Google Cloud Console
- [ ] Remove API key restrictions temporarily for testing
- [ ] Create a new API key if needed

**Steps**:
1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Navigate to "APIs & Services" > "Credentials"
3. Find your API key and click "Edit"
4. Temporarily remove all restrictions
5. Test again
6. Re-add restrictions after confirming it works

### 2. **Blog ID Issues**

**Problem**: Incorrect Blog ID format

**Solutions**:
- [ ] Verify your Blog ID is correct
- [ ] Try different Blog ID formats

**Finding Your Blog ID**:

**Method 1 - From Blogger Dashboard**:
1. Go to your Blogger dashboard
2. Look at the URL: `https://www.blogger.com/blog/posts/12345678901234567890`
3. The number at the end is your Blog ID

**Method 2 - From Blog URL**:
- If your blog is: `https://yourblog.blogspot.com`
- Your Blog ID is: `yourblog.blogspot.com`

**Method 3 - Using API**:
```bash
curl "https://www.googleapis.com/blogger/v3/users/self/blogs?key=YOUR_API_KEY"
```

### 3. **Blog Ownership Issues**

**Problem**: API key doesn't have access to your blog

**Solutions**:
- [ ] Ensure you're the owner of the blog
- [ ] Check blog privacy settings
- [ ] Verify you're using the correct Google account

**Steps**:
1. Go to your Blogger dashboard
2. Check that you're logged in with the correct Google account
3. Verify you're the owner/admin of the blog
4. Check blog settings > Basic > Blog readers (should be "Anybody")

### 4. **Draft Post Access Issues**

**Problem**: Cannot access draft posts specifically

**Solutions**:
- [ ] Ensure you have draft posts in your blog
- [ ] Check that drafts are saved under your account
- [ ] Try accessing published posts first

**Test Steps**:
1. Create a test draft post in Blogger
2. Save it as draft (don't publish)
3. Test the API again

### 5. **Environment Variables**

**Problem**: Environment variables not loaded

**Solutions**:
- [ ] Check `.env.local` file exists
- [ ] Verify variable names are correct
- [ ] Restart your development server

**Correct Format**:
```env
BLOGGER_API_KEY=your_actual_api_key_here
BLOG_ID=your_actual_blog_id_here
```

## Step-by-Step Debugging

### Step 1: Test Basic Connection
Visit: `http://localhost:3000/api/blog/test`

This will tell you:
- ✅ If your API key is configured
- ✅ If your Blog ID is configured  
- ✅ If you can access your blog
- ✅ If you can access published posts
- ✅ If you can access draft posts

### Step 2: Check Environment Variables
Make sure your `.env.local` file has:
```env
BLOGGER_API_KEY=AIzaSyC...your_actual_key
BLOG_ID=your_blog_id_here
```

### Step 3: Test API Key Manually
```bash
curl "https://www.googleapis.com/blogger/v3/blogs/YOUR_BLOG_ID?key=YOUR_API_KEY"
```

### Step 4: Test Draft Access
```bash
curl "https://www.googleapis.com/blogger/v3/blogs/YOUR_BLOG_ID/posts?key=YOUR_API_KEY&status=DRAFT&maxResults=1"
```

## Common Error Messages

### "Cannot access blog: 403 Forbidden"
- **Cause**: Invalid API key or Blog ID
- **Solution**: Double-check your credentials

### "Cannot access published posts: 403 Forbidden"
- **Cause**: API key restrictions or blog privacy
- **Solution**: Remove API key restrictions temporarily

### "Cannot access draft posts: 403 Forbidden"
- **Cause**: Draft posts require special permissions
- **Solution**: Ensure you're the blog owner and have draft posts

### "BLOGGER_API_KEY not configured"
- **Cause**: Missing environment variable
- **Solution**: Check your `.env.local` file

## Alternative Solutions

### Option 1: Use Published Posts Instead
If draft access continues to fail, you can modify the code to use published posts:

```typescript
// In lib/blogger.ts, change this line:
const url = `https://www.googleapis.com/blogger/v3/blogs/${BLOG_ID}/posts?key=${BLOGGER_API_KEY}&maxResults=${maxResults}&fetchBodies=true&fetchImages=true`
// Remove: &status=DRAFT
```

### Option 2: Use OAuth2 Instead of API Key
For better permissions, consider using OAuth2 authentication instead of API keys.

### Option 3: Fallback to Static Content
If API issues persist, you can fall back to the original static blog posts.

## Getting Help

If you're still having issues:

1. **Run the test endpoint**: `http://localhost:3000/api/blog/test`
2. **Check the console logs** for detailed error messages
3. **Verify your Google Cloud Console settings**
4. **Ensure you have draft posts in your Blogger account**

The test endpoint will give you the exact error message and help identify the specific issue. 