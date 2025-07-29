import type { Metadata } from 'next'
import './globals.css'
import { Montserrat, Bebas_Neue } from 'next/font/google'
import ClientLayout from '@/components/client-layout'
import StructuredData from '@/components/structured-data'
import PerformanceMonitor from '@/components/performance-monitor'
import { Toaster } from '@/components/ui/toaster'

const montserrat = Montserrat({ 
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap',
  preload: true,
})

const bebasNeue = Bebas_Neue({ 
  weight: '400',
  subsets: ['latin'],
  variable: '--font-bebas',
  display: 'swap',
  preload: true,
})

export const metadata: Metadata = {
  title: {
    default: "Engjell Rraklli - Entrepreneur, 3D Expert & Podcast Host",
    template: "%s | Engjell Rraklli"
  },
  description: "Engjell Rraklli is an entrepreneur, 3D visualization expert, and host of 'Scaling the Unscalable' podcast. Discover insights on business scaling, 3D technology, and innovation.",
  keywords: ["entrepreneur", "3D visualization", "podcast", "business scaling", "technology", "innovation", "engjell rraklli"],
  authors: [{ name: "Engjell Rraklli" }],
  creator: "Engjell Rraklli",
  publisher: "Engjell Rraklli",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://engjellrraklli.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://engjellrraklli.com',
    title: 'Engjell Rraklli - Entrepreneur, 3D Expert & Podcast Host',
    description: 'Entrepreneur, 3D visualization expert, and host of "Scaling the Unscalable" podcast. Discover insights on business scaling, 3D technology, and innovation.',
    siteName: 'Engjell Rraklli',
    images: [
      {
        url: '/DSC0048-1.jpg',
        width: 1200,
        height: 630,
        alt: 'Engjell Rraklli - Entrepreneur and 3D Expert',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Engjell Rraklli - Entrepreneur, 3D Expert & Podcast Host',
    description: 'Entrepreneur, 3D visualization expert, and host of "Scaling the Unscalable" podcast.',
    creator: '@engjellrraklli',
    images: ['/DSC0048-1.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // Add your Google Search Console verification code here when available
    // google: 'your-google-verification-code',
    // Example: google: 'abc123def456ghi789',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${montserrat.variable} ${bebasNeue.variable}`}>
      <head>
        {/* Preconnect to critical origins */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://i.ytimg.com" />
        <link rel="preconnect" href="https://blogger.googleusercontent.com" />
        
        {/* DNS prefetch for other origins */}
        <link rel="dns-prefetch" href="https://www.youtube.com" />
        <link rel="dns-prefetch" href="https://lh3.googleusercontent.com" />
        
        {/* Preload critical fonts */}
        <link 
          rel="preload" 
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&display=swap" 
          as="style" 
        />
        <link 
          rel="preload" 
          href="https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap" 
          as="style" 
        />
        
        {/* Fallback for fonts */}
        <noscript>
          <link 
            href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&display=swap" 
            rel="stylesheet" 
          />
          <link 
            href="https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap" 
            rel="stylesheet" 
          />
        </noscript>
        
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#10b981" />
        
        {/* Critical CSS inline */}
        <style dangerouslySetInnerHTML={{
          __html: `
            /* Critical CSS for above-the-fold content */
            html {
              font-family: 'Montserrat', sans-serif;
              --font-bebas: 'Bebas Neue', sans-serif;
              --font-montserrat: 'Montserrat', sans-serif;
              scroll-behavior: smooth;
            }
            
            body {
              margin: 0;
              padding: 0;
              overflow-x: hidden;
              min-height: 100vh;
              min-width: 100vw;
            }
            
            .font-bebas {
              font-weight: 300 !important;
              letter-spacing: 0.05em;
            }
            
            /* Prevent layout shift during font loading */
            .font-montserrat {
              font-family: 'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            }
            
            .font-bebas {
              font-family: 'Bebas Neue', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            }
            
            /* Critical loading states */
            .loading-skeleton {
              background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
              background-size: 200% 100%;
              animation: loading 1.5s infinite;
            }
            
            @keyframes loading {
              0% { background-position: 200% 0; }
              100% { background-position: -200% 0; }
            }
          `
        }} />
      </head>
      <body className="font-montserrat">
        <StructuredData />
        <PerformanceMonitor />
        <ClientLayout>
          {children}
        </ClientLayout>
        <Toaster />
      </body>
    </html>
  )
}
