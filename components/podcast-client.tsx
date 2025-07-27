'use client'

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Play, Calendar, Clock, Youtube, ExternalLink } from "lucide-react"
import Footer from "@/components/footer"
import SubscribeSection from "@/components/subscribe-section"
import { YouTubeVideo } from "@/lib/youtube"
import { useState, useEffect } from "react"

export default function PodcastClient() {
  const [podcastEpisodes, setPodcastEpisodes] = useState<YouTubeVideo[]>([]);
  const [loading, setLoading] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [playlistId, setPlaylistId] = useState<string | null>(null);
  const episodesPerPage = 6;

  // Fetch initial episodes
  useEffect(() => {
    async function fetchInitialEpisodes() {
      try {
        // First, search for the playlist
        const playlistResponse = await fetch('/api/podcast?action=search-playlists');
        const playlistData = await playlistResponse.json();
        
        if (playlistData.playlists && playlistData.playlists.length > 0) {
          // Use the first playlist found
          const foundPlaylistId = playlistData.playlists[0].id.playlistId;
          console.log(`Found playlist: ${playlistData.playlists[0].snippet.title} (ID: ${foundPlaylistId})`);
          setPlaylistId(foundPlaylistId);
          
          const videosResponse = await fetch(`/api/podcast?action=get-playlist-videos&playlistId=${foundPlaylistId}&page=1&limit=${episodesPerPage}`);
          const videosData = await videosResponse.json();
          
          setPodcastEpisodes(videosData.videos);
          setHasMore(videosData.hasMore);
        } else {
          // Fallback to channel videos if no playlist found
          console.log('No "Scaling the Unscalable" playlist found, using channel videos');
          
          const videosResponse = await fetch(`/api/podcast?action=get-channel-videos&page=1&limit=${episodesPerPage}`);
          const videosData = await videosResponse.json();
          
          setPodcastEpisodes(videosData.videos);
          setHasMore(videosData.hasMore);
        }
      } catch (error) {
        console.error('Error fetching podcast episodes:', error);
        // Fallback to channel videos
        try {
          const videosResponse = await fetch(`/api/podcast?action=get-channel-videos&page=1&limit=${episodesPerPage}`);
          const videosData = await videosResponse.json();
          
          setPodcastEpisodes(videosData.videos);
          setHasMore(videosData.hasMore);
        } catch (fallbackError) {
          console.error('Fallback error:', fallbackError);
        }
      } finally {
        setLoading(false);
      }
    }

    fetchInitialEpisodes();
  }, []);

  // Load more episodes
  const loadMoreEpisodes = async () => {
    if (loadingMore || !hasMore) return;
    
    setLoadingMore(true);
    try {
      const nextPage = currentPage + 1;
      
      let response;
      if (playlistId) {
        response = await fetch(`/api/podcast?action=get-playlist-videos&playlistId=${playlistId}&page=${nextPage}&limit=${episodesPerPage}`);
      } else {
        response = await fetch(`/api/podcast?action=get-channel-videos&page=${nextPage}&limit=${episodesPerPage}`);
      }
      
      const data = await response.json();
      
      if (data.videos && data.videos.length > 0) {
        setPodcastEpisodes(prev => [...prev, ...data.videos]);
        setCurrentPage(nextPage);
        setHasMore(data.hasMore);
      } else {
        setHasMore(false);
      }
    } catch (error) {
      console.error('Error loading more episodes:', error);
    } finally {
      setLoadingMore(false);
    }
  };

  // Subscribe to YouTube channel
  const subscribeToYouTube = () => {
    window.open('https://www.youtube.com/@engjellrraklli?sub_confirmation=1', '_blank');
  };

  // Get latest episode URL
  const getLatestEpisodeUrl = () => {
    return podcastEpisodes.length > 0 ? podcastEpisodes[0].url : '#';
  };

  if (loading) {
    return (
      <div className="flex-1 bg-gradient-to-br from-slate-800 via-slate-900 to-teal-900 relative overflow-hidden ml-0 transition-all duration-300">
        {/* Scrollable Content */}
        <div className="relative z-10 overflow-y-auto h-full">
          {/* Page Title */}
          <div className="p-16 text-center">
            <h1 className="text-white text-4xl sm:text-5xl md:text-8xl font-bold mb-16 font-bebas uppercase tracking-wide text-center break-words">PODCAST</h1>
          </div>

          {/* Hero Section */}
          <div className="px-16 pb-16">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-white text-3xl sm:text-4xl md:text-4xl font-bold mb-6 font-bebas uppercase tracking-wide text-center break-words">CONVERSATIONS THAT MATTER</h2>
                <p className="text-white text-xl mb-8 font-montserrat">
                  Deep conversations with entrepreneurs, innovators, and thought leaders shaping the future of technology and business.
                </p>
                <div className="flex justify-center space-x-4">
                  <Button 
                    onClick={subscribeToYouTube}
                    className="bg-red-600 hover:bg-red-700 text-white font-bold px-8 py-3 rounded-lg font-bebas"
                  >
                    <Youtube size={20} className="mr-2" />
                    SUBSCRIBE ON YOUTUBE
                  </Button>
                  <Button 
                    asChild
                    className="bg-emerald-400 hover:bg-emerald-500 text-black font-bold px-8 py-3 rounded-lg font-bebas"
                  >
                    <Link href={getLatestEpisodeUrl()} target="_blank">
                      <Play size={20} className="mr-2" />
                      LATEST EPISODE
                    </Link>
                  </Button>
                </div>
              </div>

              {/* Loading State for Podcast Episodes */}
              <div className="flex items-center justify-center py-20">
                <div className="text-white text-xl">Loading podcast episodes...</div>
              </div>
            </div>
          </div>

          {/* Subscribe Section */}
          <SubscribeSection 
            heading="SCALING THE UNSCALABLE"
            title="I write about scaling service-based businesses in my newsletter. Subscribe below."
            placeholder="Mail"
            buttonText="SUBSCRIBE"
          />

          {/* Footer */}
          <Footer />
        </div>
      </div>
    );
  }

  return (
    <div className="flex-1 bg-gradient-to-br from-slate-800 via-slate-900 to-teal-900 relative overflow-hidden ml-0 transition-all duration-300">
      {/* Scrollable Content */}
      <div className="relative z-10 overflow-y-auto h-full">
        {/* Page Title */}
        <div className="p-16 text-center">
          <h1 className="text-white text-4xl sm:text-5xl md:text-8xl font-bold mb-16 font-bebas uppercase tracking-wide text-center break-words">PODCAST</h1>
        </div>

        {/* Hero Section */}
        <div className="px-16 pb-16">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-white text-3xl sm:text-4xl md:text-4xl font-bold mb-6 font-bebas uppercase tracking-wide text-center break-words">CONVERSATIONS THAT MATTER</h2>
              <p className="text-white text-xl mb-8 font-montserrat">
                Deep conversations with entrepreneurs, innovators, and thought leaders shaping the future of technology and business.
              </p>
              <div className="flex justify-center space-x-4">
                <Button 
                  onClick={subscribeToYouTube}
                  className="bg-red-600 hover:bg-red-700 text-white font-bold px-8 py-3 rounded-lg font-bebas"
                >
                  <Youtube size={20} className="mr-2" />
                  SUBSCRIBE ON YOUTUBE
                </Button>
                <Button 
                  asChild
                  className="bg-emerald-400 hover:bg-emerald-500 text-black font-bold px-8 py-3 rounded-lg font-bebas"
                >
                  <Link href={getLatestEpisodeUrl()} target="_blank">
                    <Play size={20} className="mr-2" />
                    LATEST EPISODE
                  </Link>
                </Button>
              </div>
            </div>

            {/* Podcast Episodes Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {podcastEpisodes.map((episode) => (
                <Card key={episode.id} className="bg-slate-700/50 border-slate-600 hover:bg-slate-700/70 transition-all duration-300 hover:scale-105 overflow-hidden">
                  {/* Thumbnail with Play Button Overlay */}
                  <div className="relative group">
                    <img 
                      src={episode.thumbnail} 
                      alt={episode.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <Button 
                        size="lg" 
                        className="bg-red-600 hover:bg-red-700 text-white rounded-full w-16 h-16"
                        asChild
                      >
                        <Link href={episode.url} target="_blank">
                          <Play size={24} className="ml-1" />
                        </Link>
                      </Button>
                    </div>
                    <div className="absolute top-3 right-3 bg-black bg-opacity-75 text-white text-sm px-2 py-1 rounded">
                      {episode.duration}
                    </div>
                  </div>

                  <CardHeader className="p-6">
                    <CardTitle className="text-white text-lg font-bold mb-3 line-clamp-2">
                      {episode.title}
                    </CardTitle>
                    <CardDescription className="text-gray-300 text-sm mb-4 line-clamp-3">
                      {episode.description}
                    </CardDescription>
                    
                    <div className="flex items-center justify-between text-gray-400 text-sm mb-4">
                      <div className="flex items-center">
                        <Calendar size={14} className="mr-1" />
                        {new Date(episode.publishedAt).toLocaleDateString()}
                      </div>
                      <div className="flex items-center">
                        <Clock size={14} className="mr-1" />
                        {episode.duration}
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="text-gray-400 text-sm">
                        <div className="flex items-center space-x-4">
                          <span>{episode.viewCount} views</span>
                          <span>{episode.likeCount} likes</span>
                        </div>
                      </div>
                      <Button 
                        size="sm" 
                        className="bg-red-600 hover:bg-red-700 text-white"
                        asChild
                      >
                        <Link href={episode.url} target="_blank">
                          <ExternalLink size={14} className="mr-1" />
                          Watch
                        </Link>
                      </Button>
                    </div>
                  </CardHeader>
                </Card>
              ))}
            </div>

            {/* Load More Button */}
            {hasMore && (
              <div className="text-center mt-12">
                <Button 
                  onClick={loadMoreEpisodes}
                  disabled={loadingMore}
                  className="bg-emerald-400 hover:bg-emerald-500 text-black font-bold px-8 py-3 rounded-lg font-bebas disabled:opacity-50"
                >
                  {loadingMore ? 'LOADING...' : 'LOAD MORE EPISODES'}
                </Button>
              </div>
            )}
          </div>
        </div>

        {/* Subscribe Section */}
        <SubscribeSection 
          heading="SCALING THE UNSCALABLE"
          title="I write about scaling service-based businesses in my newsletter. Subscribe below."
          placeholder="Mail"
          buttonText="SUBSCRIBE"
        />

        {/* Footer */}
        <Footer />
      </div>
    </div>
  )
} 