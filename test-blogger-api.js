// Simple Blogger API test script
// Run this with: node test-blogger-api.js

// Load environment variables from .env file
require('dotenv').config();

const API_KEY = process.env.BLOGGER_API_KEY;
const BLOG_ID = process.env.BLOG_ID;

if (!API_KEY || !BLOG_ID) {
  console.error('❌ Missing environment variables');
  console.error('Make sure BLOGGER_API_KEY and BLOG_ID are set');
  process.exit(1);
}

console.log('🔑 API Key:', API_KEY.substring(0, 10) + '...');
console.log('📝 Blog ID:', BLOG_ID);
console.log('');

async function testAPI() {
  try {
    // Test 1: Basic blog access
    console.log('🧪 Test 1: Basic blog access...');
    const blogUrl = `https://www.googleapis.com/blogger/v3/blogs/${BLOG_ID}?key=${API_KEY}`;
    const blogResponse = await fetch(blogUrl);
    
    if (!blogResponse.ok) {
      console.error(`❌ Failed: ${blogResponse.status} ${blogResponse.statusText}`);
      const errorText = await blogResponse.text();
      console.error('Error details:', errorText);
      return;
    }
    
    const blogData = await blogResponse.json();
    console.log('✅ Success! Blog name:', blogData.name);
    console.log('📊 Total posts:', blogData.posts?.totalItems || 0);
    console.log('');

    // Test 2: Published posts
    console.log('🧪 Test 2: Published posts...');
    const publishedUrl = `https://www.googleapis.com/blogger/v3/blogs/${BLOG_ID}/posts?key=${API_KEY}&maxResults=1`;
    const publishedResponse = await fetch(publishedUrl);
    
    if (!publishedResponse.ok) {
      console.error(`❌ Failed: ${publishedResponse.status} ${publishedResponse.statusText}`);
    } else {
      const publishedData = await publishedResponse.json();
      console.log('✅ Success! Published posts:', publishedData.items?.length || 0);
    }
    console.log('');

    // Test 3: Draft posts
    console.log('🧪 Test 3: Draft posts...');
    const draftUrl = `https://www.googleapis.com/blogger/v3/blogs/${BLOG_ID}/posts?key=${API_KEY}&status=DRAFT&maxResults=1`;
    const draftResponse = await fetch(draftUrl);
    
    if (!draftResponse.ok) {
      console.error(`❌ Failed: ${draftResponse.status} ${draftResponse.statusText}`);
      const errorText = await draftResponse.text();
      console.error('Error details:', errorText);
    } else {
      const draftData = await draftResponse.json();
      console.log('✅ Success! Draft posts:', draftData.items?.length || 0);
      if (draftData.items?.length > 0) {
        console.log('📝 First draft title:', draftData.items[0].title);
      }
    }

  } catch (error) {
    console.error('❌ Network error:', error.message);
  }
}

testAPI(); 