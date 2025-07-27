"use client"

import type { Metadata } from 'next'
import './globals.css'
import { Montserrat, Bebas_Neue } from 'next/font/google'
import NavigationMenu from '@/components/navigation-menu'
import Link from 'next/link'
import { Menu as MenuIcon, X as XIcon } from 'lucide-react'
import { useState } from 'react'
import { usePathname } from 'next/navigation'

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const pathname = usePathname()
  let activePage: 'home' | 'entrepreneur' | '3d-guy' | 'blog' | 'podcast' | 'contact' = 'home'
  if (pathname.startsWith('/entrepreneur')) activePage = 'entrepreneur'
  else if (pathname.startsWith('/the-3d-guy')) activePage = '3d-guy'
  else if (pathname.startsWith('/blog')) activePage = 'blog'
  else if (pathname.startsWith('/podcast')) activePage = 'podcast'
  else if (pathname.startsWith('/contact')) activePage = 'contact'
  else activePage = 'home'

  function handleNavigate() {
    if (window.innerWidth < 768) setSidebarOpen(false)
  }

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
      <body className="font-montserrat">
        {/* Mobile Burger Button */}
        <button
          className="fixed top-6 left-6 z-50 md:hidden bg-black rounded-full p-2"
          onClick={() => setSidebarOpen((open) => !open)}
          aria-label={sidebarOpen ? 'Close menu' : 'Open menu'}
        >
          {sidebarOpen ? (
            <XIcon className="w-8 h-8 text-white" />
          ) : (
            <MenuIcon className="w-8 h-8 text-white" />
          )}
        </button>
        {/* Sidebar */}
        <div
          className={`fixed top-0 left-0 z-40 transition-transform duration-300
            md:w-64 md:h-screen md:bg-emerald-400 md:translate-x-0
            w-full h-full bg-emerald-400
            ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}
            md:items-stretch md:justify-start`}
          style={{
            boxShadow: sidebarOpen ? '0 0 0 9999px rgba(0,0,0,0.7)' : undefined
          }}
        >
          <div className="w-full h-full flex flex-col">
            <div className="flex-grow flex flex-col items-center justify-center md:block md:items-stretch md:justify-start">
              <NavigationMenu activePage={activePage} onNavigate={handleNavigate} />
            </div>
            {/* Social Icons */}
            <div className="px-8 pb-12 mt-auto">
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
        </div>
        {/* Main Content */}
        <div className="flex-1 relative overflow-hidden md:ml-64 ml-0 transition-all duration-300">
          {children}
        </div>
      </body>
    </html>
  )
}
