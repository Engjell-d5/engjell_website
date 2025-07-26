import type { Metadata } from 'next'
import './globals.css'

// Import Google Fonts
import { Montserrat, Bebas_Neue } from 'next/font/google'

const montserrat = Montserrat({ 
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap',
})

const bebasNeue = Bebas_Neue({ 
  weight: '400',
  subsets: ['latin'],
  variable: '--font-bebas',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'v0 App',
  description: 'Created with v0',
  generator: 'v0.dev',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${montserrat.variable} ${bebasNeue.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <style>{`
          html {
            font-family: 'Montserrat', sans-serif;
            --font-bebas: 'Bebas Neue', sans-serif;
            --font-montserrat: 'Montserrat', sans-serif;
          }
          
          .font-bebas {
            font-weight: 300 !important;
            letter-spacing: 0.05em;
          }
        `}</style>
      </head>
      <body className="font-montserrat">{children}</body>
    </html>
  )
}
