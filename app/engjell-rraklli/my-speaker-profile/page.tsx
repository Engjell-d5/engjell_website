import SharedBackground from "@/components/shared-background"
import Footer from "@/components/footer"
import { Metadata } from "next"
import Image from "next/image"

export const metadata: Metadata = {
  title: "The Speaker - Engjell Rraklli",
  description: "Discover Engjell Rraklli's speaking topics on AI productivity, scaling service businesses, and building lasting client relationships. Book him for your next event.",
  keywords: ["speaker", "public speaking", "AI productivity", "business scaling", "service business", "client relationships", "entrepreneurship", "engjell rraklli"],
  openGraph: {
    title: "The Speaker - Engjell Rraklli",
    description: "Discover Engjell Rraklli's speaking topics on AI productivity, scaling service businesses, and building lasting client relationships.",
    type: "website",
    url: "https://engjellrraklli.com/engjell-rraklli/my-speaker-profile",
    images: [
      {
        url: "/DSC0048-1.jpg",
        width: 1200,
        height: 630,
        alt: "Engjell Rraklli - Speaker Profile"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "The Speaker - Engjell Rraklli",
    description: "Discover Engjell Rraklli's speaking topics on AI productivity, scaling service businesses, and building lasting client relationships.",
    images: ["/DSC0048-1.jpg"]
  },
  alternates: {
    canonical: "https://engjellrraklli.com/engjell-rraklli/my-speaker-profile"
  }
}

export default function MySpeakerProfilePage() {
  return (
    <SharedBackground>
      {/* Hero Section with Background Image */}
      <div className="relative px-8 md:px-16 lg:px-24 xl:px-32 2xl:px-40 py-24 md:py-32 mb-16 md:mb-20">
        <div className="absolute inset-0 rounded-2xl overflow-hidden">
          <Image
            src="/DSC0055-scaled.jpg"
            alt="Engjell Rraklli speaking at an event"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20"></div>
        </div>
        <div className="relative z-10 max-w-6xl mx-auto text-center">
          <h1 className="text-white text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold font-bebas uppercase tracking-wide">THE SPEAKER</h1>
        </div>
      </div>

      {/* Content Sections */}
      <div className="px-8 md:px-16 lg:px-24 xl:px-32 2xl:px-40 pb-16 md:pb-24">
        <div className="max-w-7xl mx-auto">
          
          {/* Introduction */}
          <div className="text-center mb-16 md:mb-20">
            <h2 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold mb-6 font-bebas uppercase tracking-wide">
              TRANSFORMING BUSINESSES THROUGH STRATEGIC INSIGHTS
            </h2>
            <p className="text-gray-300 text-lg md:text-xl max-w-4xl mx-auto font-montserrat leading-relaxed">
              I specialize in helping entrepreneurs and business leaders leverage cutting-edge technology and proven strategies to achieve exponential growth. 
              My speaking engagements focus on practical, actionable insights that drive real results.
            </p>
          </div>

          {/* Speaking Topics Section */}
          <div className="mb-16 md:mb-20">
            <h2 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold mb-8 text-center font-bebas uppercase tracking-wide">
              TOPICS I LOVE TO TALK ABOUT
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            
            {/* Topic 1: AI Productivity */}
            <div className="bg-black/20 backdrop-blur-sm border border-white/20 rounded-2xl p-6 md:p-8 hover:bg-black/30 transition-all duration-300">
              <div className="text-center">
                <div className="w-12 h-12 bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="text-white text-xl md:text-2xl font-bold mb-3 font-bebas uppercase tracking-wide">
                  USING AI TO 10X YOUR PRODUCTIVITY
                </h3>
                <p className="text-gray-300 text-sm md:text-base font-montserrat leading-relaxed">
                  Discover how AI can revolutionize your workflow and unlock unprecedented efficiency. Learn practical tools and strategies for immediate productivity gains.
                </p>
              </div>
            </div>

            {/* Topic 2: Scaling Service Businesses */}
            <div className="bg-black/20 backdrop-blur-sm border border-white/20 rounded-2xl p-6 md:p-8 hover:bg-black/30 transition-all duration-300">
              <div className="text-center">
                <div className="w-12 h-12 bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <h3 className="text-white text-xl md:text-2xl font-bold mb-3 font-bebas uppercase tracking-wide">
                  HOW TO SCALE THE UNSCALABLE
                </h3>
                <p className="text-gray-300 text-sm md:text-base font-montserrat leading-relaxed">
                  Scaling service-based businesses to 7 figures and beyond. Learn proven strategies for building scalable systems and creating lasting value.
                </p>
              </div>
            </div>

            {/* Topic 3: Service as Brand */}
            <div className="bg-black/20 backdrop-blur-sm border border-white/20 rounded-2xl p-6 md:p-8 hover:bg-black/30 transition-all duration-300">
              <div className="text-center">
                <div className="w-12 h-12 bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-white text-xl md:text-2xl font-bold mb-3 font-bebas uppercase tracking-wide">
                  YOUR SERVICE IS YOUR BRAND
                </h3>
                <p className="text-gray-300 text-sm md:text-base font-montserrat leading-relaxed">
                  Building relationships that keep you in business for years. Transform your service delivery into a powerful brand that generates lasting client relationships.
                </p>
              </div>
            </div>
          </div>
        </div>

          {/* Why Choose Me Section */}
          <div className="bg-black/10 backdrop-blur-sm border border-white/10 rounded-2xl p-8 md:p-12 mb-16 md:mb-20">
            <div className="text-center">
              <h2 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold mb-8 font-bebas uppercase tracking-wide">
                WHY CHOOSE ME AS YOUR SPEAKER
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                <div className="text-center">
                  <div className="text-emerald-400 text-4xl font-bold mb-2">10+</div>
                  <div className="text-gray-300 font-montserrat">Years of Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-emerald-400 text-4xl font-bold mb-2">7+</div>
                  <div className="text-gray-300 font-montserrat">Figure Business Owner</div>
                </div>
                <div className="text-center">
                  <div className="text-emerald-400 text-4xl font-bold mb-2">95%</div>
                  <div className="text-gray-300 font-montserrat">Audience Satisfaction</div>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <h2 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold mb-6 font-bebas uppercase tracking-wide">
              READY TO TRANSFORM YOUR AUDIENCE?
            </h2>
            <p className="text-gray-300 text-lg md:text-xl mb-8 font-montserrat max-w-3xl mx-auto">
              Let's discuss how I can deliver value to your event and help your audience achieve breakthrough results in their businesses.
            </p>
            <a 
              href="/contact" 
              className="inline-block bg-emerald-500 hover:bg-emerald-600 text-white font-bold px-8 md:px-12 py-4 md:py-6 text-lg md:text-xl rounded-full transition-all duration-300 font-bebas uppercase tracking-wide"
            >
              BOOK ME FOR YOUR EVENT
            </a>
          </div>

        </div>
      </div>

      <Footer />
    </SharedBackground>
  )
} 