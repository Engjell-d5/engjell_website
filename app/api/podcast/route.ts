import { NextResponse } from 'next/server';
import { getPlaylistVideos, searchPlaylists, getChannelVideos } from '@/lib/youtube';
import { loadStoredPodcasts, getStoredPodcastsPaginated } from '@/lib/podcast-storage';

// In-memory cache
const cache: Record<string, { data: any, lastFetched: number }> = {};
const ONE_DAY = 24 * 60 * 60 * 1000;

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const action = searchParams.get('action');
  const playlistId = searchParams.get('playlistId');
  const page = parseInt(searchParams.get('page') || '1');
  const limit = parseInt(searchParams.get('limit') || '6');
  const forceRefresh = searchParams.get('forceRefresh') === 'true';

  // Cache key (only cache first page for each action/playlist)
  let cacheKey = '';
  if (action === 'search-playlists') cacheKey = 'search-playlists';
  if (action === 'get-playlist-videos' && playlistId && page === 1) cacheKey = `playlist-${playlistId}`;
  if (action === 'get-channel-videos' && page === 1) cacheKey = 'channel-videos';

  try {
    // Serve from cache if available and fresh (unless force refresh is requested)
    if (!forceRefresh && cacheKey && cache[cacheKey] && (Date.now() - cache[cacheKey].lastFetched < ONE_DAY)) {
      return NextResponse.json(cache[cacheKey].data);
    }

    if (action === 'search-playlists') {
      const playlists = await searchPlaylists("Scaling the Unscalable engjellrraklli", 5);
      const response = { playlists };
      if (cacheKey) cache[cacheKey] = { data: response, lastFetched: Date.now() };
      return NextResponse.json(response);
    }

    if (action === 'get-playlist-videos' && playlistId) {
      // Try to serve from stored data first (unless force refresh is requested)
      console.log('🔍 Checking stored data for playlist videos...')
      const storedData = loadStoredPodcasts()
      console.log('📊 Stored data:', { 
        hasData: !!storedData, 
        lastUpdated: storedData.lastUpdated, 
        podcastCount: storedData.podcasts?.length || 0 
      })
      
      // Check if we need to refresh based on last fetch time (24 hours)
      // Also check if we have any stored podcasts
      const needsRefresh = forceRefresh || 
        !storedData.lastUpdated || 
        storedData.podcasts.length === 0 ||
        (Date.now() - new Date(storedData.lastUpdated).getTime()) > (24 * 60 * 60 * 1000)
      
      console.log('🔄 Needs refresh:', needsRefresh, 'Force refresh:', forceRefresh)
      
      if (!needsRefresh && storedData.podcasts.length > 0) {
        console.log('📦 Serving playlist podcasts from storage (last updated:', storedData.lastUpdated, ')')
        
        // Use stored data with pagination
        const paginatedData = getStoredPodcastsPaginated(page, limit)
        
        // Convert StoredPodcast format back to YouTubeVideo format for compatibility
        const videos = paginatedData.podcasts.map(podcast => ({
          id: podcast.id,
          title: podcast.title,
          description: podcast.description,
          publishedAt: podcast.publishedAt,
          duration: podcast.duration,
          thumbnail: podcast.thumbnails.high.url,
          viewCount: podcast.viewCount,
          likeCount: '0', // Not stored in podcast data
          url: podcast.url
        }))

        const response = {
          videos,
          hasMore: paginatedData.hasNext,
          total: paginatedData.total,
          fromStorage: true,
          lastUpdated: storedData.lastUpdated
        }
        
        if (cacheKey) cache[cacheKey] = { data: response, lastFetched: Date.now() };
        return NextResponse.json(response);
      }

      // Fallback to fetching from YouTube API
      console.log('🔄 Fetching fresh playlist podcasts from YouTube API (needs refresh or no stored data)')
      
      const offset = (page - 1) * limit;
      
      // For initial fetch or when no stored data, fetch more videos to populate storage
      const fetchLimit = (storedData.podcasts.length === 0) ? 50 : (limit + offset);
      const videos = await getPlaylistVideos(playlistId, fetchLimit);
      const newVideos = videos.slice(offset, offset + limit);
      const response = {
        videos: newVideos,
        hasMore: newVideos.length === limit,
        total: videos.length,
        fromStorage: false,
        refreshed: true
      };
      if (cacheKey) cache[cacheKey] = { data: response, lastFetched: Date.now() };
      return NextResponse.json(response);
    }

    if (action === 'get-channel-videos') {
      // Try to serve from stored data first (unless force refresh is requested)
      const storedData = loadStoredPodcasts()
      
      // Check if we need to refresh based on last fetch time (24 hours)
      // Also check if we have any stored podcasts
      const needsRefresh = forceRefresh || 
        !storedData.lastUpdated || 
        storedData.podcasts.length === 0 ||
        (Date.now() - new Date(storedData.lastUpdated).getTime()) > (24 * 60 * 60 * 1000)
      
      if (!needsRefresh && storedData.podcasts.length > 0) {
        console.log('📦 Serving podcasts from storage (last updated:', storedData.lastUpdated, ')')
        
        // Use stored data with pagination
        const paginatedData = getStoredPodcastsPaginated(page, limit)
        
        // Convert StoredPodcast format back to YouTubeVideo format for compatibility
        const videos = paginatedData.podcasts.map(podcast => ({
          id: podcast.id,
          title: podcast.title,
          description: podcast.description,
          publishedAt: podcast.publishedAt,
          duration: podcast.duration,
          thumbnail: podcast.thumbnails.high.url,
          viewCount: podcast.viewCount,
          likeCount: '0', // Not stored in podcast data
          url: podcast.url
        }))

        const response = {
          videos,
          hasMore: paginatedData.hasNext,
          total: paginatedData.total,
          fromStorage: true,
          lastUpdated: storedData.lastUpdated
        }
        
        if (cacheKey) cache[cacheKey] = { data: response, lastFetched: Date.now() };
        return NextResponse.json(response);
      }

      // Fallback to fetching from YouTube API
      console.log('🔄 Fetching fresh podcasts from YouTube API (needs refresh or no stored data)')
      
      const offset = (page - 1) * limit;
      
      // For initial fetch or when no stored data, fetch more videos to populate storage
      const fetchLimit = (storedData.podcasts.length === 0) ? 50 : (limit + offset);
      const videos = await getPlaylistVideos('PLEC984WH3vNi_ffiXfqLVFgPedub_xxUO', fetchLimit);
      
      // For pagination, slice the results
      const newVideos = videos.slice(offset, offset + limit);
      
      const response = {
        videos: newVideos,
        hasMore: newVideos.length === limit,
        total: videos.length,
        fromStorage: false,
        refreshed: true
      };
      if (cacheKey) cache[cacheKey] = { data: response, lastFetched: Date.now() };
      return NextResponse.json(response);
    }

    return NextResponse.json({ error: 'Invalid action' }, { status: 400 });

  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json({ error: 'Failed to fetch data' }, { status: 500 });
  }
} 