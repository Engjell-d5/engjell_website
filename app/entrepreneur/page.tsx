import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Mail, Phone, MapPin, Rocket, Users, Target, TrendingUp, Shield, Zap, Globe } from "lucide-react"
import Footer from "@/components/footer"
import SubscribeSection from "@/components/subscribe-section"
import NavigationMenu from "@/components/navigation-menu"
import Image from "next/image"

export default function EntrepreneurPage() {
  return (
    <div className="min-h-screen flex">
      {/* Sidebar */}
      <div className="w-80 bg-emerald-400 flex flex-col fixed h-screen">
        <NavigationMenu activePage="entrepreneur" />

        {/* Social Icons */}
        <div className="p-8 pb-12">
          <div className="flex space-x-6">
            <Link href="#" className="text-white hover:opacity-80 transition-opacity">
              <span className="text-xl font-bold">©</span>
            </Link>
            <Link href="#" className="text-white hover:opacity-80 transition-opacity">
              <span className="text-xl font-bold">in</span>
            </Link>
            <Link href="#" className="text-white hover:opacity-80 transition-opacity">
              <span className="text-xl font-bold">X</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 bg-gradient-to-br from-slate-800 via-slate-900 to-teal-900 relative overflow-hidden ml-80">
        {/* Flowing Wave Pattern Background */}
        <div className="absolute inset-0 opacity-30">
          <svg className="w-full h-full" viewBox="0 0 1200 800" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Top flowing lines */}
            <path d="M0 100C300 50 600 150 900 100C1050 75 1150 125 1200 100V0H0V100Z" fill="rgba(255,255,255,0.03)" />
            <path
              d="M0 150C250 100 500 200 750 150C900 125 1050 175 1200 150V50C1050 75 900 25 750 50C500 100 250 0 0 50V150Z"
              fill="rgba(255,255,255,0.02)"
            />

            {/* Middle flowing lines */}
            <path
              d="M0 300C200 250 400 350 600 300C800 250 1000 350 1200 300V200C1000 250 800 150 600 200C400 250 200 150 0 200V300Z"
              fill="rgba(255,255,255,0.02)"
            />
            <path
              d="M0 400C300 350 600 450 900 400C1050 375 1150 425 1200 400V300C1050 325 900 275 750 300C500 350 250 250 0 300V400Z"
              fill="rgba(255,255,255,0.01)"
            />

            {/* Bottom flowing lines */}
            <path
              d="M0 600C200 550 400 650 600 600C800 550 1000 650 1200 600V500C1000 550 800 450 600 500C400 550 200 450 0 500V600Z"
              fill="rgba(255,255,255,0.02)"
            />
            <path
              d="M0 750C250 700 500 800 750 750C900 725 1050 775 1200 750V650C1050 675 900 625 750 650C500 700 250 600 0 650V750Z"
              fill="rgba(255,255,255,0.01)"
            />
          </svg>
        </div>

        {/* Additional decorative elements */}
        <div className="absolute top-20 right-20 w-96 h-96 rounded-full bg-gradient-to-br from-teal-400/5 to-transparent blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 rounded-full bg-gradient-to-tr from-emerald-400/5 to-transparent blur-3xl"></div>

        {/* Scrollable Content */}
        <div className="relative z-10 overflow-y-auto h-full">
          {/* Hero Section */}
          <div className="p-16 min-h-screen flex flex-col justify-center">
            <div className="max-w-6xl">
              <div className="text-center mb-16">
                <h1 className="text-white text-8xl font-bold mb-8 font-bebas uppercase tracking-wide">ENTREPRENEUR</h1>
              </div>

          <div className="prose prose-invert prose-lg max-w-none">
                <h2 className="text-white text-2xl font-bold mb-4 font-bebas uppercase tracking-wide">ENGJELL RRAKLLI - ENTREPRENEUR</h2>
                <p className="text-white text-3xl font-bold leading-tight mb-8 font-montserrat">
                  Empowering companies through staff augmentation services.
                </p>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                  <div>
                    <p className="text-white text-lg leading-relaxed mb-6 font-montserrat">
                      I started entrepreneurship at a very young age. Just before graduating I quit University to build{" "}
                      <span className="text-emerald-400 font-semibold">division5</span>, a company providing staff augmentation services in the software industry.{" "}
                      <span className="text-emerald-400 font-semibold">division5</span> became very successful both in the domestic and international markets with customers all over the world and over 50 employees.
                    </p>
                    <p className="text-white text-lg leading-relaxed mb-8 font-montserrat">
                      My next goal is to expand on that experience, scale division5 up and build a framework for scaling service-based businesses beyond 7 figures. As a result, I write about my journey of{" "}
                      <span className="text-emerald-400 font-semibold">scaling the unscalable</span> where I share the details of my journey, my lessons, challenges and insights on how to grow service-based businesses to 7-figures and beyond.
                    </p>
                  </div>
                  <div className="relative">
                    <div className="w-full h-96 rounded-2xl overflow-hidden">
                      <Image
                        src="/DSC0019-scaled.jpg"
                        alt="Engjell Rraklli - Entrepreneur"
                        width={600}
                        height={400}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ABOUT DIVISION5 Section */}
          <div className="px-16 py-24">
            <div className="max-w-6xl">
              <h2 className="text-white text-5xl font-bold mb-8 font-bebas uppercase tracking-wide">ABOUT DIVISION5</h2>
              <h3 className="text-white text-3xl font-bold mb-8 font-bebas leading-tight">
                Augment your engineering team with world-class developers.
              </h3>
              
              <div className="space-y-6 text-gray-300 text-lg leading-relaxed font-montserrat">
                <p>
                  With over a decade of experience in the software development industry, division5 has established itself as a trusted partner for companies seeking to scale their engineering capabilities. Our approach is simple yet powerful: we provide you with exceptional developers who seamlessly integrate into your existing team.
                </p>
                <p>
                  We understand that every company has unique needs and challenges. That's why we take a personalized approach to staff augmentation, ensuring that the developers we provide not only have the technical skills you need but also align with your company culture and values.
                </p>
                <p>
                  Our commitment to quality, reliability, and transparency has made us the preferred choice for companies ranging from startups to Fortune 500 enterprises. When you choose division5, you're not just getting developers – you're getting partners in your success.
                </p>
              </div>

              <div className="mt-12">
                <Link href="https://division5.co" target="_blank" rel="noopener noreferrer">
                  <Button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-slate-800 font-bold px-8 py-4 text-lg transition-all duration-300 font-bebas">
                    LEARN MORE
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          {/* OUR STAFF AUGMENTATION MODEL Section */}
          <div className="px-16 py-24">
            <div className="max-w-6xl">
              <h2 className="text-white text-5xl font-bold mb-16 font-bebas uppercase tracking-wide">OUR STAFF AUGMENTATION MODEL</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-20">
                {/* Feature 1 */}
                <div className="text-center">
                  <div className="w-16 h-16 flex items-center justify-center mb-6 mx-auto">
                    <Zap className="text-white text-3xl" />
                  </div>
                  <h3 className="text-white text-xl font-bold mb-4 font-bebas uppercase tracking-wide">
                    Hire a full-time from 2-weeks to 2 months.
                  </h3>
                  <p className="text-gray-300 text-base leading-relaxed font-montserrat">
                    You can easily transition your existing team to division5 or extend your team with our exceptional developers.
                  </p>
                </div>

                {/* Feature 2 */}
                <div className="text-center">
                  <div className="w-16 h-16 flex items-center justify-center mb-6 mx-auto">
                    <Target className="text-white text-3xl" />
                  </div>
                  <h3 className="text-white text-xl font-bold mb-4 font-bebas uppercase tracking-wide">
                    Full transparency on every part of the process.
                  </h3>
                  <p className="text-gray-300 text-base leading-relaxed font-montserrat">
                    Starting from recruiting and moving on with every other process, you will always have full information on our process.
                  </p>
                </div>

                {/* Feature 3 */}
                <div className="text-center">
                  <div className="w-16 h-16 flex items-center justify-center mb-6 mx-auto">
                    <TrendingUp className="text-white text-3xl" />
                  </div>
                  <h3 className="text-white text-xl font-bold mb-4 font-bebas uppercase tracking-wide">
                    Scaling was never this flexible.
                  </h3>
                  <p className="text-gray-300 text-base leading-relaxed font-montserrat">
                    We understand how complicated it can be when you need to scale up quickly. We also understand that business is a rollercoaster so you might need to scale down. We got you covered in both cases.
                  </p>
                </div>

                {/* Feature 4 */}
                <div className="text-center">
                  <div className="w-16 h-16 flex items-center justify-center mb-6 mx-auto">
                    <Shield className="text-white text-3xl" />
                  </div>
                  <h3 className="text-white text-xl font-bold mb-4 font-bebas uppercase tracking-wide">
                    Leverage our 9+ years experience in building successful teams.
                  </h3>
                  <p className="text-gray-300 text-base leading-relaxed font-montserrat">
                    If you work with division5, you are not alone. We will guide and support you on your journey to building exceptional software teams.
                  </p>
                </div>

                {/* Feature 5 */}
                <div className="text-center">
                  <div className="w-16 h-16 flex items-center justify-center mb-6 mx-auto">
                    <Users className="text-white text-3xl" />
                  </div>
                  <h3 className="text-white text-xl font-bold mb-4 font-bebas uppercase tracking-wide">
                    The best Albanian talent at your fingertips.
                  </h3>
                  <p className="text-gray-300 text-base leading-relaxed font-montserrat">
                    Our people are our added value. Through our exception recruiting process we will have the best people available for your needs.
                  </p>
                </div>

                {/* Feature 6 */}
                <div className="text-center">
                  <div className="w-16 h-16 flex items-center justify-center mb-6 mx-auto">
                    <Globe className="text-white text-3xl" />
                  </div>
                  <h3 className="text-white text-xl font-bold mb-4 font-bebas uppercase tracking-wide">
                    If you're not happy, you pay nothing.
                  </h3>
                  <p className="text-gray-300 text-base leading-relaxed font-montserrat">
                    Unhappy with our service? You pay nothing. You have nothing to lose with{" "}
                    <span className="text-emerald-400 font-semibold">division5</span>, only to gain.
                  </p>
                </div>
              </div>

              <div className="text-center">
                <Link href="https://division5.co/services/staff-augmentation/" target="_blank" rel="noopener noreferrer">
                  <Button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-slate-800 font-bold px-12 py-6 text-lg rounded-full transition-all duration-300 font-bebas">
                    BUILD YOUR TEAM
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          {/* SCALING THE UNSCALABLE Section */}
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
    </div>
  )
}
