// Script to initialize podcast storage
// This will fetch podcasts from YouTube and create the podcasts.json file

const { getChannelVideos } = require('../lib/youtube');

async function initializePodcastStorage() {
  console.log('🔄 Initializing podcast storage...');
  
  try {
    // Fetch podcasts from YouTube (this will trigger storage)
    const podcasts = await getChannelVideos(10);
    
    console.log(`✅ Successfully fetched ${podcasts.length} podcasts`);
    console.log('📁 podcasts.json file should now be created in the data/ directory');
    
    // List the podcasts that were fetched
    podcasts.forEach((podcast, index) => {
      console.log(`${index + 1}. ${podcast.title} (${podcast.duration})`);
    });
    
  } catch (error) {
    console.error('❌ Error initializing podcast storage:', error);
  }
}

// Run the initialization
initializePodcastStorage(); 