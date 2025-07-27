import { Metadata } from "next"
import SharedBackground from "@/components/shared-background"
import Footer from "@/components/footer"

export const metadata: Metadata = {
  title: "Privacy Policy - Engjell Rraklli",
  description: "Privacy Policy for Engjell Rraklli's website. Learn how we collect, use, and protect your personal information.",
  keywords: ["privacy policy", "data protection", "personal information", "cookies", "engjell rraklli"],
  openGraph: {
    title: "Privacy Policy - Engjell Rraklli",
    description: "Privacy Policy for Engjell Rraklli's website. Learn how we collect, use, and protect your personal information.",
    type: "website",
    url: "https://engjellrraklli.com/privacy",
    images: [
      {
        url: "/DSC0048-1.jpg",
        width: 1200,
        height: 630,
        alt: "Privacy Policy - Engjell Rraklli"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy - Engjell Rraklli",
    description: "Privacy Policy for Engjell Rraklli's website.",
    images: ["/DSC0048-1.jpg"]
  },
  alternates: {
    canonical: "https://engjellrraklli.com/privacy"
  }
}

export default function PrivacyPage() {
  return (
    <SharedBackground>
      {/* Page Title */}
      <div className="p-16 text-center">
        <h1 className="text-white text-4xl sm:text-5xl md:text-8xl font-bold mb-16 font-bebas uppercase tracking-wide text-center break-words">PRIVACY POLICY</h1>
      </div>

      {/* Content */}
      <div className="px-16 pb-16">
        <div className="max-w-4xl mx-auto">
          <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-8 mb-8">
            <p className="text-gray-300 text-lg mb-6 font-montserrat">
              <strong className="text-white">Last updated:</strong> {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
            
            <p className="text-gray-300 text-lg leading-relaxed mb-8 font-montserrat">
              This Privacy Policy describes how Engjell Rraklli ("we," "us," or "our") collects, uses, and protects your personal information when you visit our website at engjellrraklli.com (the "Service").
            </p>
          </div>

          {/* Information We Collect */}
          <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-8 mb-8">
            <h2 className="text-white text-3xl font-bold mb-6 font-bebas uppercase tracking-wide">INFORMATION WE COLLECT</h2>
            
            <div className="space-y-6 text-gray-300 leading-relaxed font-montserrat">
              <div>
                <h3 className="text-white text-xl font-semibold mb-3">Personal Information</h3>
                <p className="text-gray-300">
                  When you visit our website, we may collect personal information that you voluntarily provide, such as:
                </p>
                <ul className="list-disc list-inside mt-3 ml-4 space-y-2">
                  <li>Name and email address (when subscribing to our newsletter)</li>
                  <li>Contact information (when using our contact form)</li>
                  <li>Comments or feedback you provide</li>
                </ul>
              </div>

              <div>
                <h3 className="text-white text-xl font-semibold mb-3">Automatically Collected Information</h3>
                <p className="text-gray-300">
                  We automatically collect certain information when you visit our website:
                </p>
                <ul className="list-disc list-inside mt-3 ml-4 space-y-2">
                  <li>IP address and browser type</li>
                  <li>Pages visited and time spent on each page</li>
                  <li>Referring website</li>
                  <li>Device information and screen resolution</li>
                </ul>
              </div>
            </div>
          </div>

          {/* How We Use Your Information */}
          <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-8 mb-8">
            <h2 className="text-white text-3xl font-bold mb-6 font-bebas uppercase tracking-wide">HOW WE USE YOUR INFORMATION</h2>
            
            <div className="space-y-6 text-gray-300 leading-relaxed font-montserrat">
              <p>We use the collected information for the following purposes:</p>
              
              <ul className="list-disc list-inside space-y-3 ml-4">
                <li>To provide and maintain our website and services</li>
                <li>To send you newsletters and updates (with your consent)</li>
                <li>To respond to your inquiries and provide customer support</li>
                <li>To analyze website usage and improve user experience</li>
                <li>To detect and prevent fraud or abuse</li>
                <li>To comply with legal obligations</li>
              </ul>
            </div>
          </div>

          {/* Cookies and Tracking */}
          <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-8 mb-8">
            <h2 className="text-white text-3xl font-bold mb-6 font-bebas uppercase tracking-wide">COOKIES AND TRACKING</h2>
            
            <div className="space-y-6 text-gray-300 leading-relaxed font-montserrat">
              <p>
                We use cookies and similar tracking technologies to enhance your browsing experience:
              </p>
              
              <div>
                <h3 className="text-white text-xl font-semibold mb-3">Types of Cookies We Use</h3>
                <ul className="list-disc list-inside space-y-3 ml-4">
                  <li><strong>Essential Cookies:</strong> Required for basic website functionality</li>
                  <li><strong>Analytics Cookies:</strong> Help us understand how visitors use our website</li>
                  <li><strong>Preference Cookies:</strong> Remember your settings and preferences</li>
                </ul>
              </div>

              <p>
                You can control cookie settings through your browser preferences. However, disabling certain cookies may affect website functionality.
              </p>
            </div>
          </div>

          {/* Third-Party Services */}
          <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-8 mb-8">
            <h2 className="text-white text-3xl font-bold mb-6 font-bebas uppercase tracking-wide">THIRD-PARTY SERVICES</h2>
            
            <div className="space-y-6 text-gray-300 leading-relaxed font-montserrat">
              <p>Our website may integrate with third-party services:</p>
              
              <ul className="list-disc list-inside space-y-3 ml-4">
                <li><strong>YouTube API:</strong> For displaying podcast content and videos</li>
                <li><strong>Google Analytics:</strong> For website analytics and performance monitoring</li>
                <li><strong>Email Services:</strong> For newsletter delivery and communication</li>
              </ul>

              <p>
                These third-party services have their own privacy policies. We encourage you to review their policies to understand how they handle your information.
              </p>
            </div>
          </div>

          {/* Data Security */}
          <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-8 mb-8">
            <h2 className="text-white text-3xl font-bold mb-6 font-bebas uppercase tracking-wide">DATA SECURITY</h2>
            
            <div className="space-y-6 text-gray-300 leading-relaxed font-montserrat">
              <p>
                We implement appropriate security measures to protect your personal information:
              </p>
              
              <ul className="list-disc list-inside space-y-3 ml-4">
                <li>Encryption of data in transit and at rest</li>
                <li>Regular security assessments and updates</li>
                <li>Limited access to personal information</li>
                <li>Secure hosting and infrastructure</li>
              </ul>

              <p>
                However, no method of transmission over the internet is 100% secure. While we strive to protect your information, we cannot guarantee absolute security.
              </p>
            </div>
          </div>

          {/* Your Rights */}
          <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-8 mb-8">
            <h2 className="text-white text-3xl font-bold mb-6 font-bebas uppercase tracking-wide">YOUR RIGHTS</h2>
            
            <div className="space-y-6 text-gray-300 leading-relaxed font-montserrat">
              <p>You have the following rights regarding your personal information:</p>
              
              <ul className="list-disc list-inside space-y-3 ml-4">
                <li><strong>Access:</strong> Request a copy of your personal information</li>
                <li><strong>Correction:</strong> Request correction of inaccurate information</li>
                <li><strong>Deletion:</strong> Request deletion of your personal information</li>
                <li><strong>Portability:</strong> Request transfer of your data to another service</li>
                <li><strong>Objection:</strong> Object to processing of your personal information</li>
                <li><strong>Withdrawal:</strong> Withdraw consent for newsletter subscriptions</li>
              </ul>

              <p>
                To exercise these rights, please contact us using the information provided below.
              </p>
            </div>
          </div>

          {/* Children's Privacy */}
          <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-8 mb-8">
            <h2 className="text-white text-3xl font-bold mb-6 font-bebas uppercase tracking-wide">CHILDREN'S PRIVACY</h2>
            
            <div className="space-y-6 text-gray-300 leading-relaxed font-montserrat">
              <p>
                Our website is not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13. If you are a parent or guardian and believe your child has provided us with personal information, please contact us immediately.
              </p>
            </div>
          </div>

          {/* Changes to This Policy */}
          <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-8 mb-8">
            <h2 className="text-white text-3xl font-bold mb-6 font-bebas uppercase tracking-wide">CHANGES TO THIS POLICY</h2>
            
            <div className="space-y-6 text-gray-300 leading-relaxed font-montserrat">
              <p>
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.
              </p>
              
              <p>
                We encourage you to review this Privacy Policy periodically for any changes. Your continued use of our website after any changes constitutes acceptance of the updated policy.
              </p>
            </div>
          </div>

          {/* Contact Information */}
          <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-8">
            <h2 className="text-white text-3xl font-bold mb-6 font-bebas uppercase tracking-wide">CONTACT US</h2>
            
            <div className="space-y-6 text-gray-300 leading-relaxed font-montserrat">
              <p>If you have any questions about this Privacy Policy, please contact us:</p>
              
              <div className="space-y-3">
                <p><strong className="text-white">Email:</strong> info@engjellrraklli.com</p>
                <p><strong className="text-white">Website:</strong> engjellrraklli.com</p>
                <p><strong className="text-white">Address:</strong> Tirane, Albania 10299</p>
              </div>

              <p>
                We will respond to your inquiry within a reasonable timeframe.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </SharedBackground>
  )
} 