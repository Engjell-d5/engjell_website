import { Metadata } from 'next'
import { DynamicPodcastApplicationForm } from '@/components/dynamic-imports'

export const metadata: Metadata = {
  title: "Apply to be a Guest | Scaling the Unscalable Podcast",
  description: "Apply to be a guest on the Scaling the Unscalable podcast. Share your business journey, successes, and insights with our audience. Open to entrepreneurs, business leaders, and innovators.",
  keywords: ["podcast guest", "business podcast", "entrepreneur interview", "scaling business", "podcast application", "guest speaker", "business leader", "innovation podcast"],
  openGraph: {
    title: "Apply to be a Guest | Scaling the Unscalable Podcast",
    description: "Apply to be a guest on the Scaling the Unscalable podcast. Share your business journey, successes, and insights with our audience.",
    type: "website",
    url: "https://engjellrraklli.com/podcast/apply",
    images: [
      {
        url: "/DSC0048-1.jpg",
        width: 1200,
        height: 630,
        alt: "Apply to be a Guest - Scaling the Unscalable Podcast"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Apply to be a Guest | Scaling the Unscalable Podcast",
    description: "Apply to be a guest on the Scaling the Unscalable podcast. Share your business journey and insights.",
    images: ["/DSC0048-1.jpg"]
  },
  alternates: {
    canonical: "https://engjellrraklli.com/podcast/apply"
  }
}

export default function PodcastApplyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/20 to-blue-900/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bebas text-white mb-6">
              Apply to be a Guest
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 font-montserrat max-w-3xl mx-auto mb-8">
              Share your business journey on <span className="text-emerald-400 font-semibold">Scaling the Unscalable</span> podcast
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center text-sm text-gray-400 font-montserrat">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                <span>Business Leaders</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                <span>Entrepreneurs</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                <span>Innovators</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        {/* About the Podcast */}
        <div className="bg-slate-800/50 rounded-2xl p-8 mb-12 border border-slate-700">
          <h2 className="text-3xl font-bebas text-white mb-6">About the Podcast</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bebas text-emerald-400 mb-4">What We Cover</h3>
              <ul className="space-y-3 text-gray-300 font-montserrat">
                <li className="flex items-start gap-3 justify-start">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Business scaling strategies and challenges</span>
                </li>
                <li className="flex items-start gap-3 justify-start">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Entrepreneurial journeys and lessons learned</span>
                </li>
                <li className="flex items-start gap-3 justify-start">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Innovation in business and technology</span>
                </li>
                <li className="flex items-start gap-3 justify-start">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Leadership and team building insights</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bebas text-emerald-400 mb-4">What We're Looking For</h3>
              <ul className="space-y-3 text-gray-300 font-montserrat">
                <li className="flex items-start gap-3 justify-start">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Businesses with unique scaling stories</span>
                </li>
                <li className="flex items-start gap-3 justify-start">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Entrepreneurs with valuable insights to share</span>
                </li>
                <li className="flex items-start gap-3 justify-start">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Innovators disrupting their industries</span>
                </li>
                <li className="flex items-start gap-3 justify-start">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Leaders with compelling business journeys</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

                 {/* Application Form */}
         <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700">
           <h2 className="text-3xl font-bebas text-white mb-8 text-center">Guest Application</h2>
           <DynamicPodcastApplicationForm />
         </div>

        {/* What to Expect */}
        <div className="bg-slate-800/50 rounded-2xl p-8 mt-12 border border-slate-700">
          <h2 className="text-3xl font-bebas text-white mb-6">What to Expect</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-400/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bebas text-emerald-400">1</span>
              </div>
              <h3 className="text-lg font-bebas text-white mb-2">Application Review</h3>
              <p className="text-gray-300 font-montserrat text-sm">
                We'll review your application and get back to you within 1-2 weeks
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-400/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bebas text-emerald-400">2</span>
              </div>
              <h3 className="text-lg font-bebas text-white mb-2">Pre-Interview Call</h3>
              <p className="text-gray-300 font-montserrat text-sm">
                A brief call to discuss your story and prepare for the interview
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-400/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bebas text-emerald-400">3</span>
              </div>
              <h3 className="text-lg font-bebas text-white mb-2">Podcast Recording</h3>
              <p className="text-gray-300 font-montserrat text-sm">
                A relaxed conversation about your business journey and insights
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 