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
  let activePage: 'home' | 'entrepreneur' | '3d-guy' | 'blog' | 'podcast' | 'contact' = 'home'
  if (pathname.startsWith('/entrepreneur')) activePage = 'entrepreneur'
  else if (pathname.startsWith('/the-3d-guy')) activePage = '3d-guy'
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
    <>
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
            md:w-64 md:h-screen md:bg-emerald-400 md:translate-x-0
            w-full h-full bg-emerald-400 flex flex-col
            ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}
          style={{
            boxShadow: sidebarOpen ? '0 0 0 9999px rgba(0,0,0,0.7)' : undefined
          }}
        >
          <div className="w-full h-full flex flex-col items-center justify-center md:block md:items-stretch md:justify-start">
            <NavigationMenu activePage={activePage} onNavigate={handleNavigate} />
          </div>
          {/* Social Icons */}
          <div className="px-8 pb-12 mt-auto">
            <div className="flex space-x-6">
              <Link 
                href="https://threads.net/@engjellrraklli" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white hover:opacity-80 transition-opacity"
                aria-label="Threads"
              >
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12.186 24h-.007c-3.581-.024-6.334-1.205-8.184-3.509C2.35 18.44 1.5 15.586 1.5 12.022V0h3.82v12.022c0 2.776.484 4.95 1.451 6.494 1.54 2.524 4.08 3.787 7.615 3.787 3.581 0 6.334-1.205 8.184-3.509C24.65 18.44 25.5 15.586 25.5 12.022V0h3.82v12.022c0 2.776-.484 4.95-1.451 6.494-1.54 2.524-4.08 3.787-7.615 3.787-3.581 0-6.334 1.205-8.184-3.509C24.65 18.44 25.5 15.586 25.5 12.022V0h3.82v12.022c0 2.776-.484 4.95-1.451 6.494-1.54 2.524-4.08 3.787-7.615 3.787-3.581 0-6.334 1.205-8.184-3.509C24.65 18.44 25.5 15.586 25.5 12.022V0h3.82v12.022c0 2.776-.484 4.95-1.451 6.494-1.54 2.524-4.08 3.787-7.615 3.787-3.581 0-6.334 1.205-8.184-3.509C24.65 18.44 25.5 15.586 25.5 12.022V0h3.82v12.022c0 2.776-.484 4.95-1.451 6.494-1.54 2.524-4.08 3.787-7.615 3.787-3.581 0-6.334 1.205-8.184-3.509C24.65 18.44 25.5 15.586 25.5 12.022V0h3.82v12.022c0 2.776-.484 4.95-1.451 6.494-1.54 2.524-4.08 3.787-7.615 3.787-3.581 0-6.334 1.205-8.184-3.509C24.65 18.44 25.5 15.586 25.5 12.022V0h3.82v12.022c0 2.776-.484 4.95-1.451 6.494-1.54 2.524-4.08 3.787-7.615 3.787-3.581 0-6.334 1.205-8.184-3.509C24.65 18.44 25.5 15.586 25.5 12.022V0h3.82v12.022c0 2.776-.484 4.95-1.451 6.494-1.54 2.524-4.08 3.787-7.615 3.787-3.581 0-6.334 1.205-8.184-3.509C24.65 18.44 25.5 15.586 25.5 12.022V0h3.82v12.022c0 2.776-.484 4.95-1.451 6.494-1.54 2.524-4.08 3.787-7.615 3.787z"/>
                </svg>
              </Link>
              <Link 
                href="https://linkedin.com/in/engjell-rraklli-a8b20a68" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white hover:opacity-80 transition-opacity"
                aria-label="LinkedIn"
              >
                <Linkedin size={24} />
              </Link>
              <Link 
                href="https://instagram.com/engjellrraklli" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white hover:opacity-80 transition-opacity"
                aria-label="Instagram"
              >
                <Instagram size={24} />
              </Link>
            </div>
          </div>
        </div>
      )}
      
      {/* Main Content */}
      <div className={`flex-1 relative overflow-hidden transition-all duration-300 ${isBioPage ? 'ml-0' : 'md:ml-64 ml-0'}`}>
        {children}
      </div>
    </>
  )
} 