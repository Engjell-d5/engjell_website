import fs from 'fs'
import path from 'path'

const PODCASTS_FILE = path.join(process.cwd(), 'data', 'podcasts.json')

export interface StoredPodcast {
  id: string
  title: string
  description: string
  publishedAt: string
  thumbnails: {
    default: { url: string; width: number; height: number }
    medium: { url: string; width: number; height: number }
    high: { url: string; width: number; height: number }
  }
  channelTitle: string
  duration: string
  viewCount: string
  url: string
  lastFetched: string
}

export interface PodcastsData {
  lastUpdated: string
  podcasts: StoredPodcast[]
}

// Ensure data directory exists
function ensureDataDirectory() {
  const dataDir = path.dirname(PODCASTS_FILE)
  if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir, { recursive: true })
  }
}

// Load stored podcasts from file
export function loadStoredPodcasts(): PodcastsData {
  ensureDataDirectory()
  
  if (!fs.existsSync(PODCASTS_FILE)) {
    return {
      lastUpdated: new Date().toISOString(),
      podcasts: []
    }
  }

  try {
    const data = fs.readFileSync(PODCASTS_FILE, 'utf8')
    return JSON.parse(data)
  } catch (error) {
    console.error('Error loading stored podcasts:', error)
    return {
      lastUpdated: new Date().toISOString(),
      podcasts: []
    }
  }
}

// Save podcasts to file
export function saveStoredPodcasts(data: PodcastsData): void {
  ensureDataDirectory()
  
  try {
    fs.writeFileSync(PODCASTS_FILE, JSON.stringify(data, null, 2))
  } catch (error) {
    console.error('Error saving stored podcasts:', error)
  }
}

// Compare current podcasts with stored podcasts to find new ones
export function findNewPodcasts(currentPodcasts: StoredPodcast[]): StoredPodcast[] {
  const storedData = loadStoredPodcasts()
  const storedPodcastIds = new Set(storedData.podcasts.map(p => p.id))
  
  return currentPodcasts.filter(podcast => !storedPodcastIds.has(podcast.id))
}

// Update stored podcasts with current podcasts
export function updateStoredPodcasts(currentPodcasts: StoredPodcast[]): void {
  const storedData = loadStoredPodcasts()
  
  // Merge current podcasts with stored podcasts, keeping existing data
  const mergedPodcasts = currentPodcasts.map(currentPodcast => {
    const storedPodcast = storedData.podcasts.find(p => p.id === currentPodcast.id)
    return {
      ...currentPodcast,
      lastFetched: new Date().toISOString(),
      // Keep existing data if available, otherwise use current
      viewCount: storedPodcast?.viewCount || currentPodcast.viewCount,
      duration: storedPodcast?.duration || currentPodcast.duration
    }
  })

  const updatedData: PodcastsData = {
    lastUpdated: new Date().toISOString(),
    podcasts: mergedPodcasts
  }

  saveStoredPodcasts(updatedData)
}

// Get podcasts that were updated recently (within specified hours)
export function getRecentlyUpdatedPodcasts(hours: number = 24): StoredPodcast[] {
  const storedData = loadStoredPodcasts()
  const cutoffTime = new Date(Date.now() - hours * 60 * 60 * 1000)
  
  return storedData.podcasts.filter(podcast => {
    const lastFetched = new Date(podcast.lastFetched)
    return lastFetched > cutoffTime
  })
}

// Get podcast by ID
export function getPodcastById(id: string): StoredPodcast | null {
  const storedData = loadStoredPodcasts()
  return storedData.podcasts.find(podcast => podcast.id === id) || null
}

// Get total count of stored podcasts
export function getPodcastCount(): number {
  const storedData = loadStoredPodcasts()
  return storedData.podcasts.length
}

// Clear all stored podcasts
export function clearStoredPodcasts(): void {
  const data: PodcastsData = {
    lastUpdated: new Date().toISOString(),
    podcasts: []
  }
  saveStoredPodcasts(data)
  console.log('Podcast storage cleared')
}

// Get podcasts with pagination
export function getStoredPodcastsPaginated(page: number = 1, limit: number = 10): {
  podcasts: StoredPodcast[]
  total: number
  page: number
  totalPages: number
  hasNext: boolean
  hasPrev: boolean
} {
  const storedData = loadStoredPodcasts()
  const total = storedData.podcasts.length
  const totalPages = Math.ceil(total / limit)
  const startIndex = (page - 1) * limit
  const endIndex = startIndex + limit
  
  const podcasts = storedData.podcasts.slice(startIndex, endIndex)
  
  return {
    podcasts,
    total,
    page,
    totalPages,
    hasNext: page < totalPages,
    hasPrev: page > 1
  }
} 