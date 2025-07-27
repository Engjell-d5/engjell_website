// Test script to demonstrate podcast refresh logic
const fs = require('fs');
const path = require('path');

const PODCASTS_FILE = path.join(process.cwd(), 'data', 'podcasts.json');

function testRefreshLogic() {
  console.log('🧪 Testing Podcast Refresh Logic\n');
  
  if (!fs.existsSync(PODCASTS_FILE)) {
    console.log('❌ No podcasts.json file found');
    return;
  }

  const data = JSON.parse(fs.readFileSync(PODCASTS_FILE, 'utf8'));
  const lastUpdated = new Date(data.lastUpdated);
  const now = new Date();
  const hoursSinceUpdate = (now - lastUpdated) / (1000 * 60 * 60);
  const needsRefresh = hoursSinceUpdate > 24;

  console.log('📊 Current Status:');
  console.log(`   Last Updated: ${lastUpdated.toISOString()}`);
  console.log(`   Current Time: ${now.toISOString()}`);
  console.log(`   Hours Since Update: ${hoursSinceUpdate.toFixed(2)}`);
  console.log(`   Needs Refresh: ${needsRefresh ? '✅ YES' : '❌ NO'}`);
  console.log(`   Stored Podcasts: ${data.podcasts.length}`);
  
  console.log('\n🔄 Refresh Logic:');
  console.log('   • If < 24 hours: Serve from storage (fast)');
  console.log('   • If > 24 hours: Fetch from YouTube (fresh data)');
  console.log('   • Force refresh: Always fetch from YouTube');
  
  console.log('\n📋 Next Refresh:');
  const nextRefresh = new Date(lastUpdated.getTime() + (24 * 60 * 60 * 1000));
  console.log(`   Will refresh at: ${nextRefresh.toISOString()}`);
  
  const timeUntilRefresh = (nextRefresh - now) / (1000 * 60 * 60);
  if (timeUntilRefresh > 0) {
    console.log(`   Time until refresh: ${timeUntilRefresh.toFixed(2)} hours`);
  } else {
    console.log('   ⚠️  Data is overdue for refresh!');
  }
}

testRefreshLogic(); 