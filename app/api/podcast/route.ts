import { NextResponse } from 'next/server';
import { getPlaylistVideos, searchPlaylists, getChannelVideos } from '@/lib/youtube';

// In-memory cache
const cache: Record<string, { data: any, lastFetched: number }> = {};
const ONE_DAY = 24 * 60 * 60 * 1000;

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const action = searchParams.get('action');
  const playlistId = searchParams.get('playlistId');
  const page = parseInt(searchParams.get('page') || '1');
  const limit = parseInt(searchParams.get('limit') || '6');

  // Cache key (only cache first page for each action/playlist)
  let cacheKey = '';
  if (action === 'search-playlists') cacheKey = 'search-playlists';
  if (action === 'get-playlist-videos' && playlistId && page === 1) cacheKey = `playlist-${playlistId}`;
  if (action === 'get-channel-videos' && page === 1) cacheKey = 'channel-videos';

  try {
    // Serve from cache if available and fresh
    if (cacheKey && cache[cacheKey] && (Date.now() - cache[cacheKey].lastFetched < ONE_DAY)) {
      return NextResponse.json(cache[cacheKey].data);
    }

    if (action === 'search-playlists') {
      const playlists = await searchPlaylists("Scaling the Unscalable engjellrraklli", 5);
      const response = { playlists };
      if (cacheKey) cache[cacheKey] = { data: response, lastFetched: Date.now() };
      return NextResponse.json(response);
    }

    if (action === 'get-playlist-videos' && playlistId) {
      const offset = (page - 1) * limit;
      const videos = await getPlaylistVideos(playlistId, limit + offset);
      const newVideos = videos.slice(offset);
      const response = {
        videos: newVideos,
        hasMore: newVideos.length === limit,
        total: videos.length
      };
      if (cacheKey) cache[cacheKey] = { data: response, lastFetched: Date.now() };
      return NextResponse.json(response);
    }

    if (action === 'get-channel-videos') {
      const offset = (page - 1) * limit;
      const videos = await getChannelVideos(limit + offset);
      const newVideos = videos.slice(offset);
      const response = {
        videos: newVideos,
        hasMore: newVideos.length === limit,
        total: videos.length
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