'use client'

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Play, Calendar, Clock, Youtube, ExternalLink } from "lucide-react"
import Footer from "@/components/footer"
import SubscribeSection from "@/components/subscribe-section"
import { YouTubeVideo } from "@/lib/youtube"
import { useState, useEffect } from "react"
import SharedBackground from "@/components/shared-background"

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
        // Check for force refresh parameter
        const urlParams = new URLSearchParams(window.location.search);
        const forceRefresh = urlParams.get('refresh') === 'true';
        
        // Fetch channel videos directly (most efficient - no playlist search needed)
        console.log('Fetching channel videos directly');
        const videosResponse = await fetch(`/api/podcast?action=get-channel-videos&page=1&limit=${episodesPerPage}${forceRefresh ? '&forceRefresh=true' : ''}`);
        const videosData = await videosResponse.json();
        
        setPodcastEpisodes(videosData.videos);
        setHasMore(videosData.hasMore);
      } catch (error) {
        console.error('Error fetching podcast episodes:', error);
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
      
      console.log(`Fetching data for page ${nextPage}`);
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
      <SharedBackground>
          {/* Hero Section with Background Image */}
          <div className="relative px-8 md:px-16 lg:px-24 xl:px-32 2xl:px-40 py-24 md:py-32 mb-8 md:mb-12">
            <div className="absolute inset-0 rounded-2xl overflow-hidden">
              <Image
                src="/IMG_0425-scaled.jpg"
                alt="Scaling the Unscalable Podcast"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20"></div>
            </div>
            <div className="relative z-10 max-w-6xl mx-auto text-center">
              <h1 className="text-white text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold font-bebas uppercase tracking-wide">PODCAST</h1>
            </div>
          </div>

          {/* Content Section */}
          <div className="px-8 md:px-16 lg:px-24 xl:px-32 2xl:px-40 py-8 md:py-12">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-white font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bebas uppercase tracking-wide text-center break-words">CONVERSATIONS THAT MATTER</h2>
                <p className="text-body text-lg md:text-xl mb-8 font-montserrat">
                  Deep conversations with entrepreneurs, innovators, and thought leaders shaping the future of technology and business.
                </p>
                <div className="flex justify-center space-x-4">
                  <Button 
                    onClick={subscribeToYouTube}
                    className="bg-red-600 hover:bg-red-700 text-white font-bold px-6 md:px-8 py-3 md:py-4 text-base md:text-lg rounded-lg font-bebas"
                  >
                    <Youtube size={20} className="mr-2" />
                    SUBSCRIBE ON YOUTUBE
                  </Button>
                  <Button 
                    asChild
                    className="bg-emerald-400 hover:bg-emerald-500 text-black font-bold px-6 md:px-8 py-3 md:py-4 text-base md:text-lg rounded-lg font-bebas"
                  >
                    <Link href={getLatestEpisodeUrl()} target="_blank">
                      <Play size={20} className="mr-2" />
                      LATEST EPISODE
                    </Link>
                  </Button>
                </div>
              </div>

              {/* Loading State for Podcast Episodes */}
              <div className="flex flex-col items-center justify-center py-20">
                {/* Animated Podcast Icon */}
                <div className="relative mb-8">
                  {/* Outer Ring */}
                  <div className="w-24 h-24 border-4 border-emerald-400/30 rounded-full animate-pulse"></div>
                  
                  {/* Inner Ring */}
                  <div className="absolute top-2 left-2 w-20 h-20 border-4 border-emerald-400/60 rounded-full animate-spin" style={{ animationDuration: '2s' }}></div>
                  
                  {/* Center Play Button */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <div className="w-8 h-8 bg-emerald-400 rounded-full flex items-center justify-center animate-pulse">
                      <Play size={16} className="text-black ml-0.5" />
                    </div>
                  </div>
                  
                  {/* Floating Sound Waves */}
                  <div className="absolute -top-4 -right-4 w-8 h-8 bg-emerald-400/20 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-emerald-400/30 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                  <div className="absolute top-1/2 -right-8 w-4 h-4 bg-emerald-400/40 rounded-full animate-bounce" style={{ animationDelay: '0.6s' }}></div>
                </div>
                
                {/* Loading Text */}
                <div className="text-center">
                  <h3 className="text-white font-bold text-2xl mb-4 font-bebas tracking-wider">LOADING EPISODES</h3>
                  <div className="flex items-center justify-center space-x-2">
                    <div className="w-2 h-2 bg-emerald-400 rounded-full animate-bounce" style={{ animationDelay: '0s' }}></div>
                    <div className="w-2 h-2 bg-emerald-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                    <div className="w-2 h-2 bg-emerald-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  </div>
                  <p className="text-gray-400 text-sm mt-4 font-montserrat">Fetching the latest conversations...</p>
                </div>
                
                {/* Decorative Elements */}
                <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-emerald-400/5 rounded-full blur-xl animate-pulse"></div>
                <div className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-emerald-400/5 rounded-full blur-xl animate-pulse" style={{ animationDelay: '1s' }}></div>
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
      </SharedBackground>
    );
  }

  return (
    <SharedBackground>
        {/* Hero Section with Background Image */}
        <div className="relative px-8 md:px-16 lg:px-24 xl:px-32 2xl:px-40 py-24 md:py-32 mb-8 md:mb-12">
          <div className="absolute inset-0 rounded-2xl overflow-hidden">
            <Image
              src="/IMG_0425-scaled.jpg"
              alt="Scaling the Unscalable Podcast"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20"></div>
          </div>
          <div className="relative z-10 max-w-6xl mx-auto text-center">
            <h1 className="text-white text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold font-bebas uppercase tracking-wide">PODCAST</h1>
          </div>
        </div>

        {/* Content Section */}
        <div className="px-8 md:px-16 lg:px-24 xl:px-32 2xl:px-40 py-8 md:py-12">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-white font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bebas uppercase tracking-wide text-center break-words">CONVERSATIONS THAT MATTER</h2>
              <p className="text-body text-lg md:text-xl mb-8 font-montserrat">
                Deep conversations with entrepreneurs, innovators, and thought leaders shaping the future of technology and business.
              </p>
              <div className="flex justify-center space-x-4">
                <Button 
                  onClick={subscribeToYouTube}
                  className="bg-red-600 hover:bg-red-700 text-white font-bold px-6 md:px-8 py-3 md:py-4 text-base md:text-lg rounded-lg font-bebas"
                >
                  <Youtube size={20} className="mr-2" />
                  SUBSCRIBE ON YOUTUBE
                </Button>
                <Button 
                  asChild
                  className="bg-emerald-400 hover:bg-emerald-500 text-black font-bold px-6 md:px-8 py-3 md:py-4 text-base md:text-lg rounded-lg font-bebas"
                >
                  <Link href={getLatestEpisodeUrl()} target="_blank">
                    <Play size={20} className="mr-2" />
                    LATEST EPISODE
                  </Link>
                </Button>
              </div>
            </div>

            {/* Podcast Episodes Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
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
                  className="bg-emerald-400 hover:bg-emerald-500 text-black font-bold px-8 md:px-12 py-3 md:py-4 text-base md:text-lg rounded-lg font-bebas disabled:opacity-50 relative overflow-hidden"
                >
                  {loadingMore ? (
                    <div className="flex items-center space-x-2">
                      {/* Animated Spinner */}
                      <div className="w-4 h-4 border-2 border-black/30 border-t-black rounded-full animate-spin"></div>
                      <span>LOADING EPISODES</span>
                    </div>
                  ) : (
                    'LOAD MORE EPISODES'
                  )}
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
    </SharedBackground>
  )
} 