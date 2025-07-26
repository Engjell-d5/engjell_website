import { NextResponse } from 'next/server';
import { getPlaylistVideos, searchPlaylists, getChannelVideos } from '@/lib/youtube';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const action = searchParams.get('action');
  const playlistId = searchParams.get('playlistId');
  const page = parseInt(searchParams.get('page') || '1');
  const limit = parseInt(searchParams.get('limit') || '6');

  try {
    if (action === 'search-playlists') {
      const playlists = await searchPlaylists("Scaling the Unscalable engjellrraklli", 5);
      return NextResponse.json({ playlists });
    }

    if (action === 'get-playlist-videos' && playlistId) {
      const offset = (page - 1) * limit;
      const videos = await getPlaylistVideos(playlistId, limit + offset);
      // Get only the new episodes (skip the ones we already have)
      const newVideos = videos.slice(offset);
      return NextResponse.json({ 
        videos: newVideos, 
        hasMore: newVideos.length === limit,
        total: videos.length 
      });
    }

    if (action === 'get-channel-videos') {
      const offset = (page - 1) * limit;
      const videos = await getChannelVideos(limit + offset);
      // Get only the new episodes (skip the ones we already have)
      const newVideos = videos.slice(offset);
      return NextResponse.json({ 
        videos: newVideos, 
        hasMore: newVideos.length === limit,
        total: videos.length 
      });
    }

    return NextResponse.json({ error: 'Invalid action' }, { status: 400 });

  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json({ error: 'Failed to fetch data' }, { status: 500 });
  }
} 