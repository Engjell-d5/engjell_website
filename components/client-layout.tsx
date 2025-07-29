"use client"

import NavigationMenu from '@/components/navigation-menu'
import Link from 'next/link'
import { Menu as MenuIcon, X as XIcon, Linkedin, Instagram } from 'lucide-react'
import { useState } from 'react'
import { usePathname } from 'next/navigation'

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const pathname = usePathname()
  let activePage: 'home' | 'entrepreneur' | 'blog' | 'podcast' | 'contact' = 'home'
  let activeSubpage: string | null = null
  
  if (pathname === '/biography') {
    activePage = 'home' // Changed from 'entrepreneur' to 'home'
    activeSubpage = 'biography'
  } else if (pathname === '/speaker') {
    activePage = 'home' // Changed from 'entrepreneur' to 'home'
    activeSubpage = 'speaker'
  } else if (pathname === '/entrepreneur') {
    // This is the entrepreneur submenu item under ENGJELL RRAKLLI
    activePage = 'home'
    activeSubpage = 'entrepreneur'
  } else if (pathname.startsWith('/entrepreneur/')) {
    // These are the actual entrepreneur category subpages
    activePage = 'entrepreneur'
    activeSubpage = pathname.split('/').pop() || null
  }
  else if (pathname.startsWith('/blog')) activePage = 'blog'
  else if (pathname.startsWith('/podcast')) activePage = 'podcast'
  else if (pathname.startsWith('/contact')) activePage = 'contact'
  else activePage = 'home'

  // Check if we're on the link-in-bio page
  const isBioPage = pathname === '/link-in-bio'

  function handleNavigate() {
    if (window.innerWidth < 768) setSidebarOpen(false)
  }

  return (
    <div className="min-h-screen w-full flex">
      {/* Mobile Burger Button - Hidden on bio page */}
      {!isBioPage && (
        <button
          className="fixed top-6 left-6 z-50 md:hidden bg-emerald-600 rounded-full p-2"
          onClick={() => setSidebarOpen((open) => !open)}
          aria-label={sidebarOpen ? 'Close menu' : 'Open menu'}
        >
          {sidebarOpen ? (
            <XIcon className="w-8 h-8 text-white" />
          ) : (
            <MenuIcon className="w-8 h-8 text-white" />
          )}
        </button>
      )}
      
      {/* Sidebar - Hidden on bio page */}
      {!isBioPage && (
        <div
          className={`fixed top-0 left-0 z-40 transition-transform duration-300
            md:w-64 md:h-screen md:translate-x-0
            w-full h-full flex flex-col
            ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}
          style={{
            background: 'linear-gradient(135deg, #34d399 0%, #10b981 100%)',
            boxShadow: sidebarOpen ? '0 0 0 9999px rgba(0,0,0,0.7)' : undefined
          }}
        >
          <div className="w-full h-full flex flex-col items-center justify-center md:block md:items-stretch md:justify-start">
            <NavigationMenu activePage={activePage} activeSubpage={activeSubpage} onNavigate={handleNavigate} />
          </div>
        </div>
      )}
      
      {/* Main Content */}
      <div className={`flex-1 relative overflow-hidden transition-all duration-300 w-full ${isBioPage ? 'ml-0' : 'md:ml-64 ml-0'}`}>
        {children}
      </div>
    </div>
  )
} 