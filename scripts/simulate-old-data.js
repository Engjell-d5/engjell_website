// Script to simulate old podcast data for testing refresh logic
const fs = require('fs');
const path = require('path');

const PODCASTS_FILE = path.join(process.cwd(), 'data', 'podcasts.json');
const BACKUP_FILE = path.join(process.cwd(), 'data', 'podcasts.json.backup');

function simulateOldData() {
  console.log('🕐 Simulating Old Podcast Data\n');
  
  if (!fs.existsSync(PODCASTS_FILE)) {
    console.log('❌ No podcasts.json file found');
    return;
  }

  // Create backup
  fs.copyFileSync(PODCASTS_FILE, BACKUP_FILE);
  console.log('✅ Created backup of current data');

  // Read current data
  const data = JSON.parse(fs.readFileSync(PODCASTS_FILE, 'utf8'));
  
  // Set timestamp to 25 hours ago (older than 24 hours)
  const oldTimestamp = new Date(Date.now() - (25 * 60 * 60 * 1000));
  data.lastUpdated = oldTimestamp.toISOString();
  
  // Save modified data
  fs.writeFileSync(PODCASTS_FILE, JSON.stringify(data, null, 2));
  
  console.log('📝 Modified lastUpdated to:', oldTimestamp.toISOString());
  console.log('⏰ This simulates data that is 25 hours old');
  console.log('🔄 Next API call should trigger a fresh fetch from YouTube');
  console.log('\n💡 To restore original data, run: node scripts/restore-data.js');
}

function restoreData() {
  console.log('🔄 Restoring Original Data\n');
  
  if (!fs.existsSync(BACKUP_FILE)) {
    console.log('❌ No backup file found');
    return;
  }

  fs.copyFileSync(BACKUP_FILE, PODCASTS_FILE);
  fs.unlinkSync(BACKUP_FILE);
  
  console.log('✅ Original data restored');
}

// Check command line argument
const action = process.argv[2];
if (action === 'restore') {
  restoreData();
} else {
  simulateOldData();
} 