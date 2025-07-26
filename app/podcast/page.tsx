import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Instagram, Linkedin, Twitter, ArrowLeft, Play, Calendar, Clock } from "lucide-react"

const podcastEpisodes = [
  {
    id: 1,
    title: "The Future of Entrepreneurship in the Digital Age",
    description:
      "A deep dive into how technology is reshaping entrepreneurship and what it means for the next generation of business leaders.",
    date: "2024-01-20",
    duration: "45 min",
    guest: "Sarah Chen, Tech Investor",
    spotifyUrl: "#",
    appleUrl: "#",
    youtubeUrl: "#",
  },
  {
    id: 2,
    title: "Building 3D Experiences That Matter",
    description: "Exploring the intersection of 3D technology and user experience design with industry experts.",
    date: "2024-01-13",
    duration: "38 min",
    guest: "Marcus Rodriguez, UX Designer",
    spotifyUrl: "#",
    appleUrl: "#",
    youtubeUrl: "#",
  },
  {
    id: 3,
    title: "From Startup to Scale: Lessons in Growth",
    description: "Real stories from entrepreneurs who successfully scaled their startups from idea to IPO.",
    date: "2024-01-06",
    duration: "52 min",
    guest: "Jennifer Kim, Serial Entrepreneur",
    spotifyUrl: "#",
    appleUrl: "#",
    youtubeUrl: "#",
  },
  {
    id: 4,
    title: "The Psychology of Innovation",
    description: "Understanding the mental frameworks and cognitive patterns that drive breakthrough innovations.",
    date: "2023-12-30",
    duration: "41 min",
    guest: "Dr. Michael Thompson, Behavioral Psychologist",
    spotifyUrl: "#",
    appleUrl: "#",
    youtubeUrl: "#",
  },
  {
    id: 5,
    title: "Virtual Reality: Beyond Gaming",
    description: "Exploring the practical applications of VR in business, education, and healthcare.",
    date: "2023-12-23",
    duration: "47 min",
    guest: "Lisa Park, VR Developer",
    spotifyUrl: "#",
    appleUrl: "#",
    youtubeUrl: "#",
  },
]

export default function PodcastPage() {
  return (
    <div className="min-h-screen flex">
      {/* Sidebar */}
      <div className="w-80 bg-emerald-400 flex flex-col">
        <div className="p-8">
          <Link href="/">
            <div className="w-24 h-24 rounded-full border-2 border-white flex items-center justify-center">
              <span className="text-white text-2xl font-light italic">ER</span>
            </div>
          </Link>
        </div>

        <nav className="flex-1 px-8">
          <div className="space-y-1">
            <div className="bg-black text-white px-4 py-2 text-sm font-bold uppercase tracking-wider">
              ENGJELL RRAKLLI
            </div>
            <Link
              href="/entrepreneur"
              className="block text-white py-3 text-lg font-medium hover:opacity-80 transition-opacity"
            >
              ENTREPRENEUR
            </Link>
            <Link
              href="/the-3d-guy"
              className="block text-white py-3 text-lg font-medium hover:opacity-80 transition-opacity"
            >
              THE 3D GUY
            </Link>
            <Link
              href="/blog"
              className="block text-white py-3 text-lg font-medium hover:opacity-80 transition-opacity"
            >
              BLOG
            </Link>
            <Link href="/podcast" className="block text-white py-3 text-lg font-medium bg-white/20 px-4 rounded">
              PODCAST
            </Link>
            <Link
              href="/contact"
              className="block text-white py-3 text-lg font-medium hover:opacity-80 transition-opacity"
            >
              CONTACT
            </Link>
          </div>
        </nav>

        <div className="p-8">
          <div className="flex space-x-4">
            <Link href="#" className="text-white hover:opacity-80 transition-opacity">
              <Instagram size={24} />
            </Link>
            <Link href="#" className="text-white hover:opacity-80 transition-opacity">
              <Linkedin size={24} />
            </Link>
            <Link href="#" className="text-white hover:opacity-80 transition-opacity">
              <Twitter size={24} />
            </Link>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 bg-slate-800 p-16">
        <div className="max-w-6xl">
          <Link href="/" className="inline-flex items-center text-white mb-8 hover:opacity-80">
            <ArrowLeft className="mr-2" size={20} />
            Back to Home
          </Link>

          <h1 className="text-white text-6xl font-bold mb-4">PODCAST</h1>
          <p className="text-gray-300 text-xl mb-8">
            Conversations with entrepreneurs, innovators, and thought leaders shaping the future of technology and
            business.
          </p>

          <div className="bg-emerald-400/10 border border-emerald-400/20 rounded-lg p-8 mb-12">
            <h2 className="text-white text-2xl font-bold mb-4">Subscribe & Listen</h2>
            <p className="text-gray-300 mb-6">
              Get notified when new episodes are released. Available on all major podcast platforms.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button className="bg-emerald-400 hover:bg-emerald-500 text-black font-bold">Spotify</Button>
              <Button
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-black bg-transparent"
              >
                Apple Podcasts
              </Button>
              <Button
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-black bg-transparent"
              >
                YouTube
              </Button>
              <Button
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-black bg-transparent"
              >
                RSS Feed
              </Button>
            </div>
          </div>

          <div className="space-y-6">
            {podcastEpisodes.map((episode) => (
              <Card
                key={episode.id}
                className="bg-slate-700/50 border-slate-600 hover:bg-slate-700/70 transition-colors"
              >
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <CardTitle className="text-white text-xl mb-2">{episode.title}</CardTitle>
                      <CardDescription className="text-gray-300 mb-3">{episode.description}</CardDescription>
                      <div className="flex items-center text-gray-400 text-sm space-x-4">
                        <div className="flex items-center">
                          <Calendar size={14} className="mr-1" />
                          {new Date(episode.date).toLocaleDateString()}
                        </div>
                        <div className="flex items-center">
                          <Clock size={14} className="mr-1" />
                          {episode.duration}
                        </div>
                        <span>Guest: {episode.guest}</span>
                      </div>
                    </div>
                    <Button size="sm" className="bg-orange-400 hover:bg-orange-500 text-black ml-4">
                      <Play size={16} className="mr-2" />
                      Play
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center space-x-4">
                    <span className="text-gray-400 text-sm">Listen on:</span>
                    <Link href={episode.spotifyUrl} className="text-emerald-400 hover:text-emerald-300 text-sm">
                      Spotify
                    </Link>
                    <Link href={episode.appleUrl} className="text-emerald-400 hover:text-emerald-300 text-sm">
                      Apple
                    </Link>
                    <Link href={episode.youtubeUrl} className="text-emerald-400 hover:text-emerald-300 text-sm">
                      YouTube
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-black bg-transparent"
            >
              Load More Episodes
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
