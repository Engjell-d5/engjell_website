// YouTube Data API utility functions
// You'll need to get a YouTube Data API key from Google Cloud Console

import { StoredPodcast, updateStoredPodcasts, findNewPodcasts } from './podcast-storage'

const YOUTUBE_API_KEY = process.env.YOUTUBE_API_KEY || '';
const CHANNEL_USERNAME = 'engjellrraklli'; // Your YouTube username
const PODCAST_PLAYLIST_ID = 'PL_ScalingTheUnscalable'; // This will need to be updated with your actual playlist ID

export interface YouTubeVideo {
  id: string;
  title: string;
  description: string;
  publishedAt: string;
  duration: string;
  thumbnail: string;
  viewCount: string;
  likeCount: string;
  url: string;
}

export async function getChannelVideos(maxResults: number = 10): Promise<YouTubeVideo[]> {
  if (!YOUTUBE_API_KEY) {
    console.warn('YouTube API key not found. Using mock data.');
    return getMockVideos();
  }

  try {
    // First, try to get the channel by username
    let channelResponse = await fetch(
      `https://www.googleapis.com/youtube/v3/channels?part=contentDetails&forUsername=${CHANNEL_USERNAME}&key=${YOUTUBE_API_KEY}`
    );
    
    if (!channelResponse.ok) {
      throw new Error(`Failed to fetch channel data: ${channelResponse.status}`);
    }

    const channelData = await channelResponse.json();
    
    // If no channel found by username, try searching for the channel
    if (!channelData.items || channelData.items.length === 0) {
      console.log('Channel not found by username, trying search...');
      const searchResponse = await fetch(
        `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${CHANNEL_USERNAME}&type=channel&key=${YOUTUBE_API_KEY}`
      );
      
      if (!searchResponse.ok) {
        throw new Error(`Failed to search for channel: ${searchResponse.status}`);
      }
      
      const searchData = await searchResponse.json();
      
      if (!searchData.items || searchData.items.length === 0) {
        console.warn('Channel not found, using mock data.');
        return getMockVideos();
      }
      
      // Get the first channel from search results
      const channelId = searchData.items[0].snippet.channelId;
      channelResponse = await fetch(
        `https://www.googleapis.com/youtube/v3/channels?part=contentDetails&id=${channelId}&key=${YOUTUBE_API_KEY}`
      );
      
      if (!channelResponse.ok) {
        throw new Error(`Failed to fetch channel by ID: ${channelResponse.status}`);
      }
      
      const channelDataById = await channelResponse.json();
      if (!channelDataById.items || channelDataById.items.length === 0) {
        console.warn('Channel not found by ID, using mock data.');
        return getMockVideos();
      }
      
      channelData.items = channelDataById.items;
    }

    const uploadsPlaylistId = channelData.items[0]?.contentDetails?.relatedPlaylists?.uploads;

    if (!uploadsPlaylistId) {
      console.warn('Could not find uploads playlist, using mock data.');
      return getMockVideos();
    }

    // Then, get the videos from the uploads playlist
    const videosResponse = await fetch(
      `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${uploadsPlaylistId}&maxResults=${maxResults}&key=${YOUTUBE_API_KEY}`
    );

    if (!videosResponse.ok) {
      throw new Error(`Failed to fetch videos: ${videosResponse.status}`);
    }

    const videosData = await videosResponse.json();
    
    if (!videosData.items || videosData.items.length === 0) {
      console.warn('No videos found, using mock data.');
      return getMockVideos();
    }
    
    // Get detailed video information including duration and statistics
    const videoIds = videosData.items.map((item: any) => item.snippet.resourceId.videoId).join(',');
    const detailsResponse = await fetch(
      `https://www.googleapis.com/youtube/v3/videos?part=contentDetails,statistics&id=${videoIds}&key=${YOUTUBE_API_KEY}`
    );

    if (!detailsResponse.ok) {
      throw new Error(`Failed to fetch video details: ${detailsResponse.status}`);
    }

    const detailsData = await detailsResponse.json();
    const detailsMap = new Map(detailsData.items.map((item: any) => [item.id, item]));

    const videos = videosData.items.map((item: any) => {
      const details = detailsMap.get(item.snippet.resourceId.videoId) as any;
      const duration = details?.contentDetails?.duration || 'PT0S';
      
      // Skip YouTube Shorts (videos shorter than 60 seconds)
      const durationInSeconds = parseDurationToSeconds(duration);
      if (durationInSeconds < 60) {
        return null; // This will be filtered out
      }
      
      return {
        id: item.snippet.resourceId.videoId,
        title: item.snippet.title,
        description: item.snippet.description,
        publishedAt: item.snippet.publishedAt,
        duration: formatDuration(duration),
        thumbnail: item.snippet.thumbnails.maxres?.url || item.snippet.thumbnails.high?.url,
        viewCount: formatNumber(details?.statistics?.viewCount || '0'),
        likeCount: formatNumber(details?.statistics?.likeCount || '0'),
        url: `https://www.youtube.com/watch?v=${item.snippet.resourceId.videoId}`
      };
    }).filter(Boolean); // Remove null entries (Shorts)

    // Convert to StoredPodcast format and update storage
    const storedPodcasts: StoredPodcast[] = videos.map((video: YouTubeVideo) => ({
      id: video.id,
      title: video.title,
      description: video.description,
      publishedAt: video.publishedAt,
      thumbnails: {
        default: { url: video.thumbnail, width: 120, height: 90 },
        medium: { url: video.thumbnail, width: 320, height: 180 },
        high: { url: video.thumbnail, width: 480, height: 360 }
      },
      channelTitle: 'Engjell Rraklli',
      duration: video.duration,
      viewCount: video.viewCount,
      url: video.url,
      lastFetched: new Date().toISOString()
    }))

    // Update stored podcasts
    updateStoredPodcasts(storedPodcasts)
    
    // Check for new podcasts
    const newPodcasts = findNewPodcasts(storedPodcasts)
    if (newPodcasts.length > 0) {
      console.log(`Found ${newPodcasts.length} new podcasts`)
    }

    return videos

  } catch (error) {
    console.error('Error fetching YouTube videos:', error);
    return getMockVideos();
  }
}

export async function getPlaylistVideos(playlistId: string, maxResults: number = 10): Promise<YouTubeVideo[]> {
  if (!YOUTUBE_API_KEY) {
    console.warn('YouTube API key not found. Using mock data.');
    return getMockVideos();
  }

  try {
    // Get videos from the specific playlist
    const videosResponse = await fetch(
      `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${playlistId}&maxResults=${maxResults}&key=${YOUTUBE_API_KEY}`
    );

    if (!videosResponse.ok) {
      throw new Error(`Failed to fetch playlist videos: ${videosResponse.status}`);
    }

    const videosData = await videosResponse.json();
    
    if (!videosData.items || videosData.items.length === 0) {
      console.warn('No videos found in playlist, using mock data.');
      return getMockVideos();
    }
    
    // Get detailed video information including duration and statistics
    const videoIds = videosData.items.map((item: any) => item.snippet.resourceId.videoId).join(',');
    const detailsResponse = await fetch(
      `https://www.googleapis.com/youtube/v3/videos?part=contentDetails,statistics&id=${videoIds}&key=${YOUTUBE_API_KEY}`
    );

    if (!detailsResponse.ok) {
      throw new Error(`Failed to fetch video details: ${detailsResponse.status}`);
    }

    const detailsData = await detailsResponse.json();
    const detailsMap = new Map(detailsData.items.map((item: any) => [item.id, item]));

    const videos = videosData.items.map((item: any) => {
      const details = detailsMap.get(item.snippet.resourceId.videoId) as any;
      const duration = details?.contentDetails?.duration || 'PT0S';
      
      // Skip YouTube Shorts (videos shorter than 60 seconds)
      const durationInSeconds = parseDurationToSeconds(duration);
      if (durationInSeconds < 60) {
        return null; // This will be filtered out
      }
      
      return {
        id: item.snippet.resourceId.videoId,
        title: item.snippet.title,
        description: item.snippet.description,
        publishedAt: item.snippet.publishedAt,
        duration: formatDuration(duration),
        thumbnail: item.snippet.thumbnails.maxres?.url || item.snippet.thumbnails.high?.url,
        viewCount: formatNumber(details?.statistics?.viewCount || '0'),
        likeCount: formatNumber(details?.statistics?.likeCount || '0'),
        url: `https://www.youtube.com/watch?v=${item.snippet.resourceId.videoId}`
      };
    }).filter(Boolean); // Remove null entries (Shorts)

    // Convert to StoredPodcast format and update storage
    const storedPodcasts: StoredPodcast[] = videos.map((video: YouTubeVideo) => ({
      id: video.id,
      title: video.title,
      description: video.description,
      publishedAt: video.publishedAt,
      thumbnails: {
        default: { url: video.thumbnail, width: 120, height: 90 },
        medium: { url: video.thumbnail, width: 320, height: 180 },
        high: { url: video.thumbnail, width: 480, height: 360 }
      },
      channelTitle: 'Engjell Rraklli',
      duration: video.duration,
      viewCount: video.viewCount,
      url: video.url,
      lastFetched: new Date().toISOString()
    }))

    // Update stored podcasts
    updateStoredPodcasts(storedPodcasts)
    
    // Check for new podcasts
    const newPodcasts = findNewPodcasts(storedPodcasts)
    if (newPodcasts.length > 0) {
      console.log(`Found ${newPodcasts.length} new podcasts from playlist`)
    }

    return videos

  } catch (error) {
    console.error('Error fetching playlist videos:', error);
    return getMockVideos();
  }
}

export async function searchPlaylists(query: string, maxResults: number = 5): Promise<any[]> {
  if (!YOUTUBE_API_KEY) {
    console.warn('YouTube API key not found. Cannot search playlists.');
    return [];
  }

  try {
    const searchResponse = await fetch(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${encodeURIComponent(query)}&type=playlist&maxResults=${maxResults}&key=${YOUTUBE_API_KEY}`
    );

    if (!searchResponse.ok) {
      throw new Error(`Failed to search playlists: ${searchResponse.status}`);
    }

    const searchData = await searchResponse.json();
    return searchData.items || [];

  } catch (error) {
    console.error('Error searching playlists:', error);
    return [];
  }
}

function formatDuration(duration: string): string {
  // Convert ISO 8601 duration to readable format
  const match = duration.match(/PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?/);
  if (!match) return '0 min';
  
  const hours = parseInt(match[1] || '0');
  const minutes = parseInt(match[2] || '0');
  const seconds = parseInt(match[3] || '0');
  
  if (hours > 0) {
    return `${hours}h ${minutes}m`;
  } else if (minutes > 0) {
    return `${minutes}m ${seconds}s`;
  } else {
    return `${seconds}s`;
  }
}

function parseDurationToSeconds(duration: string): number {
  // Convert ISO 8601 duration to total seconds
  const match = duration.match(/PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?/);
  if (!match) return 0;
  
  const hours = parseInt(match[1] || '0');
  const minutes = parseInt(match[2] || '0');
  const seconds = parseInt(match[3] || '0');
  
  return hours * 3600 + minutes * 60 + seconds;
}

function formatNumber(num: string): string {
  const number = parseInt(num);
  if (number >= 1000000) {
    return `${(number / 1000000).toFixed(1)}M`;
  } else if (number >= 1000) {
    return `${(number / 1000).toFixed(1)}K`;
  }
  return number.toString();
}

function getMockVideos(): YouTubeVideo[] {
  return [
    {
      id: '1',
      title: 'The Future of Entrepreneurship in the Digital Age',
      description: 'A deep dive into how technology is reshaping entrepreneurship and what it means for the next generation of business leaders.',
      publishedAt: '2024-01-20T10:00:00Z',
      duration: '45 min',
      thumbnail: 'https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg',
      viewCount: '12.5K',
      likeCount: '1.2K',
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
    },
    {
      id: '2',
      title: 'Building 3D Experiences That Matter',
      description: 'Exploring the intersection of 3D technology and user experience design with industry experts.',
      publishedAt: '2024-01-13T10:00:00Z',
      duration: '38 min',
      thumbnail: 'https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg',
      viewCount: '8.9K',
      likeCount: '856',
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
    },
    {
      id: '3',
      title: 'From Startup to Scale: Lessons in Growth',
      description: 'Real stories from entrepreneurs who successfully scaled their startups from idea to IPO.',
      publishedAt: '2024-01-06T10:00:00Z',
      duration: '52 min',
      thumbnail: 'https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg',
      viewCount: '15.2K',
      likeCount: '1.8K',
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
    },
    {
      id: '4',
      title: 'The Psychology of Innovation',
      description: 'Understanding the mental frameworks and cognitive patterns that drive breakthrough innovations.',
      publishedAt: '2023-12-30T10:00:00Z',
      duration: '41 min',
      thumbnail: 'https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg',
      viewCount: '9.7K',
      likeCount: '1.1K',
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
    },
    {
      id: '5',
      title: 'Virtual Reality: Beyond Gaming',
      description: 'Exploring the practical applications of VR in business, education, and healthcare.',
      publishedAt: '2023-12-23T10:00:00Z',
      duration: '47 min',
      thumbnail: 'https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg',
      viewCount: '11.3K',
      likeCount: '1.4K',
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
    },
    {
      id: '6',
      title: 'Scaling Service-Based Businesses',
      description: 'Insights and strategies for growing service-based businesses in today\'s competitive market.',
      publishedAt: '2023-12-16T10:00:00Z',
      duration: '44 min',
      thumbnail: 'https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg',
      viewCount: '13.8K',
      likeCount: '1.6K',
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
    }
  ];
} 