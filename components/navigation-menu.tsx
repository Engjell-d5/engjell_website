import Link from "next/link"
import { useState } from "react"
import { usePathname } from "next/navigation"

interface NavigationMenuProps {
  activePage: 'home' | 'entrepreneur' | 'blog' | 'podcast' | 'contact',
  activeSubpage?: string | null,
  onNavigate?: () => void
}

export default function NavigationMenu({ activePage, activeSubpage, onNavigate }: NavigationMenuProps) {
  // Only one category should be expanded at a time
  const [entrepreneurExpanded, setEntrepreneurExpanded] = useState(activeSubpage !== null && activePage === 'entrepreneur')
  const [engjellRraklliExpanded, setEngjellRraklliExpanded] = useState(activeSubpage !== null && (activeSubpage === 'biography' || activeSubpage === 'speaker'))
  
  // State to track immediately clicked items for instant visual feedback
  const [clickedItem, setClickedItem] = useState<string | null>(null)
  const pathname = usePathname()

  // Close submenu when navigating to a different page
  const handleNavigate = (itemPath: string) => {
    setClickedItem(itemPath)
    // Don't close the current category when navigating to its subpages
    onNavigate?.()
  }

  // Handle navigation to non-entrepreneur pages
  const handleNonEntrepreneurNavigate = (itemPath: string) => {
    setClickedItem(itemPath)
    setEntrepreneurExpanded(false)
    setEngjellRraklliExpanded(false)
    onNavigate?.()
  }

  // Handle category expansion - close other categories when one opens
  const handleEngjellRraklliToggle = () => {
    setEngjellRraklliExpanded(!engjellRraklliExpanded)
    setEntrepreneurExpanded(false) // Close entrepreneur category
  }

  const handleEntrepreneurToggle = () => {
    setEntrepreneurExpanded(!entrepreneurExpanded)
    setEngjellRraklliExpanded(false) // Close engjell-rraklli category
  }

  return (
    <>
      {/* Logo */}
      <div className="p-8 pt-12 flex items-center justify-center">
        <Link href="/" onClick={onNavigate}>
          <div className="w-28 h-28 flex items-center justify-center">
            <img src="/logo.svg" alt="ER Logo" className="w-28 h-28" />
          </div>
        </Link>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-8 pt-8 w-full">
        <div className="space-y-1 flex flex-col w-full">

          
                     {/* Engjell Rraklli with submenu */}
           <div className="relative">
             <button
               onClick={handleEngjellRraklliToggle}
               className={`block w-full sm:w-auto text-left text-white py-2 px-3 text-lg font-bold uppercase tracking-wider font-bebas transition-all duration-300 rounded-lg ${
                 engjellRraklliExpanded 
                   ? 'bg-black/40 backdrop-blur-sm border border-white/30' 
                   : 'hover:bg-black/40 hover:backdrop-blur-sm border border-transparent hover:border-white/30'
               }`}
             >
               ENGJELL RRAKLLI
             </button>
            
            <div className={`overflow-hidden transition-all duration-300 ease-in-out ${
              engjellRraklliExpanded ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
            }`}>
              <div className="mt-2 space-y-1 pl-4">
                <Link
                  href="/biography"
                  className={`block w-full sm:w-auto text-left text-white py-1 px-3 text-sm font-medium uppercase tracking-wider font-bebas transition-all duration-300 rounded-md ${
                    activeSubpage === 'biography' || clickedItem === '/biography'
                      ? 'bg-emerald-600/60 backdrop-blur-sm border border-emerald-400/40 shadow-lg' 
                      : 'hover:bg-emerald-600/40 hover:backdrop-blur-sm border border-transparent hover:border-emerald-400/30'
                  }`}
                  onClick={() => handleNavigate('/biography')}
                >
                  BIOGRAPHY
                </Link>
                <Link
                  href="/entrepreneur"
                  className={`block w-full sm:w-auto text-left text-white py-1 px-3 text-sm font-medium uppercase tracking-wider font-bebas transition-all duration-300 rounded-md ${
                    activeSubpage === 'entrepreneur' || clickedItem === '/entrepreneur'
                      ? 'bg-emerald-600/60 backdrop-blur-sm border border-emerald-400/40 shadow-lg' 
                      : 'hover:bg-emerald-600/40 hover:backdrop-blur-sm border border-transparent hover:border-emerald-400/30'
                  }`}
                  onClick={() => handleNavigate('/entrepreneur')}
                >
                  ENTREPRENEUR
                </Link>
                                    <Link
                      href="/speaker"
                      className={`block w-full sm:w-auto text-left text-white py-1 px-3 text-sm font-medium uppercase tracking-wider font-bebas transition-all duration-300 rounded-md ${
                        activeSubpage === 'speaker' || clickedItem === '/speaker'
                          ? 'bg-emerald-600/60 backdrop-blur-sm border border-emerald-400/40 shadow-lg'
                          : 'hover:bg-emerald-600/40 hover:backdrop-blur-sm border border-transparent hover:border-emerald-400/30'
                      }`}
                      onClick={() => handleNavigate('/speaker')}
                    >
                      THE SPEAKER
                    </Link>
              </div>
            </div>
          </div>
          
          {/* Entrepreneur with submenu */}
          <div className="relative">
            <button
              onClick={handleEntrepreneurToggle}
              className={`block w-full sm:w-auto text-left text-white py-2 px-3 text-lg font-bold uppercase tracking-wider font-bebas transition-all duration-300 rounded-lg ${
                activePage === 'entrepreneur' || entrepreneurExpanded 
                  ? 'bg-black/40 backdrop-blur-sm border border-white/30' 
                  : 'hover:bg-black/40 hover:backdrop-blur-sm border border-transparent hover:border-white/30'
              }`}
            >
              ENTREPRENEUR
            </button>
            
            <div className={`overflow-hidden transition-all duration-300 ease-in-out ${
              entrepreneurExpanded ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
            }`}>
              <div className="mt-2 space-y-1 pl-4">
                <Link
                  href="/entrepreneur/division5"
                  className={`block w-full sm:w-auto text-left text-white py-1 px-3 text-sm font-medium uppercase tracking-wider font-bebas transition-all duration-300 rounded-md ${
                    activeSubpage === 'division5' || clickedItem === '/entrepreneur/division5'
                      ? 'bg-emerald-600/60 backdrop-blur-sm border border-emerald-400/40 shadow-lg' 
                      : 'hover:bg-emerald-600/40 hover:backdrop-blur-sm border border-transparent hover:border-emerald-400/30'
                  }`}
                  onClick={() => handleNavigate('/entrepreneur/division5')}
                >
                  DIVISION5
                </Link>
                <Link
                  href="/entrepreneur/division3d"
                  className={`block w-full sm:w-auto text-left text-white py-1 px-3 text-sm font-medium uppercase tracking-wider font-bebas transition-all duration-300 rounded-md ${
                    activeSubpage === 'division3d' || clickedItem === '/entrepreneur/division3d'
                      ? 'bg-emerald-600/60 backdrop-blur-sm border border-emerald-400/40 shadow-lg' 
                      : 'hover:bg-emerald-600/40 hover:backdrop-blur-sm border border-transparent hover:border-emerald-400/30'
                  }`}
                  onClick={() => handleNavigate('/entrepreneur/division3d')}
                >
                  DIVISION3D
                </Link>
                <Link
                  href="/entrepreneur/divisionai"
                  className={`block w-full sm:w-auto text-left text-white py-1 px-3 text-sm font-medium uppercase tracking-wider font-bebas transition-all duration-300 rounded-md ${
                    activeSubpage === 'divisionai' || clickedItem === '/entrepreneur/divisionai'
                      ? 'bg-emerald-600/60 backdrop-blur-sm border border-emerald-400/40 shadow-lg' 
                      : 'hover:bg-emerald-600/40 hover:backdrop-blur-sm border border-transparent hover:border-emerald-400/30'
                  }`}
                  onClick={() => handleNavigate('/entrepreneur/divisionai')}
                >
                  DIVISIONAI
                </Link>
                <Link
                  href="/entrepreneur/divisiongrowth"
                  className={`block w-full sm:w-auto text-left text-white py-1 px-3 text-sm font-medium uppercase tracking-wider font-bebas transition-all duration-300 rounded-md ${
                    activeSubpage === 'divisiongrowth' || clickedItem === '/entrepreneur/divisiongrowth'
                      ? 'bg-emerald-600/60 backdrop-blur-sm border border-emerald-400/40 shadow-lg' 
                      : 'hover:bg-emerald-600/40 hover:backdrop-blur-sm border border-transparent hover:border-emerald-400/30'
                  }`}
                  onClick={() => handleNavigate('/entrepreneur/divisiongrowth')}
                >
                  DIVISIONGROWTH
                </Link>
                <Link
                  href="/entrepreneur/divisiondesign"
                  className={`block w-full sm:w-auto text-left text-white py-1 px-3 text-sm font-medium uppercase tracking-wider font-bebas transition-all duration-300 rounded-md ${
                    activeSubpage === 'divisiondesign' || clickedItem === '/entrepreneur/divisiondesign'
                      ? 'bg-emerald-600/60 backdrop-blur-sm border border-emerald-400/40 shadow-lg' 
                      : 'hover:bg-emerald-600/40 hover:backdrop-blur-sm border border-transparent hover:border-emerald-400/30'
                  }`}
                  onClick={() => handleNavigate('/entrepreneur/divisiondesign')}
                >
                  DIVISIONDESIGN
                </Link>
              </div>
            </div>
          </div>
          

          <Link
            href="/blog"
            className={`block w-full sm:w-auto text-left text-white py-2 px-3 text-lg font-bold uppercase tracking-wider font-bebas transition-all duration-300 rounded-lg ${
              activePage === 'blog' || clickedItem === '/blog'
                ? 'bg-black/40 backdrop-blur-sm border border-white/30' 
                : 'hover:bg-black/40 hover:backdrop-blur-sm border border-transparent hover:border-white/30'
            }`}
            onClick={() => handleNonEntrepreneurNavigate('/blog')}
          >
            BLOG
          </Link>
          <Link
            href="/podcast"
            className={`block w-full sm:w-auto text-left text-white py-2 px-3 text-lg font-bold uppercase tracking-wider font-bebas transition-all duration-300 rounded-lg ${
              activePage === 'podcast' || clickedItem === '/podcast'
                ? 'bg-black/40 backdrop-blur-sm border border-white/30' 
                : 'hover:bg-black/40 hover:backdrop-blur-sm border border-transparent hover:border-white/30'
            }`}
            onClick={() => handleNonEntrepreneurNavigate('/podcast')}
          >
            PODCAST
          </Link>
          <Link
            href="/contact"
            className={`block w-full sm:w-auto text-left text-white py-2 px-3 text-lg font-bold uppercase tracking-wider font-bebas transition-all duration-300 rounded-lg ${
              activePage === 'contact' || clickedItem === '/contact'
                ? 'bg-black/40 backdrop-blur-sm border border-white/30' 
                : 'hover:bg-black/40 hover:backdrop-blur-sm border border-transparent hover:border-white/30'
            }`}
            onClick={() => handleNonEntrepreneurNavigate('/contact')}
          >
            CONTACT
          </Link>
        </div>
        {/* Social Icons (centered on mobile) */}
        <div className="flex justify-center space-x-6 mt-8">
          <Link href="https://threads.net/@engjellrraklli" target="_blank" rel="noopener noreferrer" aria-label="Threads" className="text-white hover:opacity-80 transition-opacity">
            <svg className="w-6 h-6" viewBox="0 0 192 192" fill="currentColor">
              <path d="M141.537 88.9883C140.71 88.5919 139.87 88.2104 139.019 87.8451C137.537 60.5382 122.616 44.905 97.5619 44.745C97.4484 44.7443 97.3355 44.7443 97.222 44.7443C82.2364 44.7443 69.7731 51.1409 62.102 62.7807L75.881 72.2328C81.6116 63.5383 90.6052 61.6848 97.2286 61.6848C97.3051 61.6848 97.3819 61.6848 97.4576 61.6855C105.707 61.7381 111.932 64.1366 115.961 68.814C118.893 72.2193 120.854 76.925 121.825 82.8638C114.511 81.6207 106.601 81.2385 98.145 81.7233C74.3247 83.0954 59.0111 96.9879 60.0396 116.292C60.5615 126.084 65.4397 134.508 73.775 140.011C80.8224 144.663 89.899 146.938 99.3323 146.423C111.79 145.74 121.563 140.987 128.381 132.296C133.559 125.696 136.834 117.143 138.28 106.366C144.217 109.949 148.617 114.664 151.047 120.332C155.179 129.967 155.42 145.8 142.501 158.708C131.182 170.016 117.576 174.908 97.0135 175.059C74.2042 174.89 56.9538 167.575 45.7381 153.317C35.2355 139.966 29.8077 120.682 29.6052 96C29.8077 71.3178 35.2355 52.0336 45.7381 38.6827C56.9538 24.4249 74.2039 17.11 97.0132 16.9405C119.988 17.1113 137.539 24.4614 149.184 38.788C154.894 45.8136 159.199 54.6488 162.037 64.9503L178.184 60.6422C174.744 47.9622 169.331 37.0357 161.965 27.974C147.036 9.60668 125.202 0.195148 97.0695 0H96.9569C68.8816 0.19447 47.2921 9.6418 32.7883 28.0793C19.8819 44.4864 13.2244 67.3157 13.0007 95.9325L13 96L13.0007 96.0675C13.2244 124.684 19.8819 147.514 32.7883 163.921C47.2921 182.358 68.8816 191.806 96.9569 192H97.0695C122.03 191.827 139.624 185.292 154.118 170.811C173.081 151.866 172.51 128.119 166.26 113.541C161.776 103.087 153.227 94.5962 141.537 88.9883ZM98.4405 129.507C88.0005 130.095 77.1544 125.409 76.6196 115.372C76.2232 107.93 81.9158 99.626 99.0812 98.6368C101.047 98.5234 102.976 98.468 104.871 98.468C111.106 98.468 116.939 99.0737 122.242 100.233C120.264 124.935 108.662 128.946 98.4405 129.507Z"/>
            </svg>
          </Link>
          <Link href="https://linkedin.com/in/engjell-rraklli-a8b20a68" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-white hover:opacity-80 transition-opacity">
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
              <rect x="2" y="9" width="4" height="12"/>
              <circle cx="4" cy="4" r="2"/>
            </svg>
          </Link>
          <Link href="https://instagram.com/engjellrraklli" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-white hover:opacity-80 transition-opacity">
            <svg className="w-6 h-6" viewBox="0 0 54 54" fill="currentColor">
              <path d="M48.1,26.3c0,4.3,0,7.2-0.1,8.8c-0.2,3.9-1.3,6.9-3.5,9s-5.1,3.3-9,3.5c-1.6,0.1-4.6,0.1-8.8,0.1c-4.3,0-7.2,0-8.8-0.1c-3.9-0.2-6.9-1.3-9-3.5c-2.1-2.1-3.3-5.1-3.5-9c-0.1-1.6-0.1-4.6-0.1-8.8s0-7.2,0.1-8.8c0.2-3.9,1.3-6.9,3.5-9c2.1-2.1,5.1-3.3,9-3.5c1.6-0.1,4.6-0.1,8.8-0.1c4.3,0,7.2,0,8.8,0.1c3.9,0.2,6.9,1.3,9,3.5s3.3,5.1,3.5,9C48,19.1,48.1,22,48.1,26.3z M28.8,8.7c-1.3,0-2,0-2.1,0c-0.1,0-0.8,0-2.1,0c-1.3,0-2.3,0-2.9,0c-0.7,0-1.6,0-2.7,0.1c-1.1,0-2.1,0.1-2.9,0.3c-0.8,0.1-1.5,0.3-2,0.5c-0.9,0.4-1.7,0.9-2.5,1.6c-0.7,0.7-1.2,1.5-1.6,2.5c-0.2,0.5-0.4,1.2-0.5,2s-0.2,1.7-0.3,2.9c0,1.1-0.1,2-0.1,2.7c0,0.7,0,1.7,0,2.9c0,1.3,0,2,0,2.1s0,0.8,0,2.1c0,1.3,0,2.3,0,2.9c0,0.7,0,1.6,0.1,2.7c0,1.1,0.1,2.1,0.3,2.9s0.3,1.5,0.5,2c0.4,0.9,0.9,1.7,1.6,2.5c0.7,0.7,1.5,1.2,2.5,1.6c0.5,0.2,1.2,0.4,2,0.5c0.8,0.1,1.7,0.2,2.9,0.3s2,0.1,2.7,0.1c0.7,0,1.7,0,2.9,0c1.3,0,2,0,2.1,0c0.1,0,0.8,0,2.1,0c1.3,0,2.3,0,2.9,0c0.7,0,1.6,0,2.7-0.1c1.1,0,2.1-0.1,2.9-0.3c0.8-0.1,1.5-0.3,2-0.5c0.9-0.4,1.7-0.9,2.5-1.6c0.7-0.7,1.2-1.5,1.6-2.5c0.2-0.5,0.4-1.2,0.5-2c0.1-0.8,0.2-1.7,0.3-2.9c0-1.1,0.1-2,0.1-2.7c0-0.7,0-1.7,0-2.9c0-1.3,0-2,0-2.1s0-0.8,0-2.1c0-1.3,0-2.3,0-2.9c0-0.7,0-1.6-0.1-2.7c0-1.1-0.1-2.1-0.3-2.9c-0.1-0.8-0.3-1.5-0.5-2c-0.4-0.9-0.9-1.7-1.6-2.5c-0.7-0.7-1.5-1.2-2.5-1.6c-0.5-0.2-1.2-0.4-2-0.5c-0.8-0.1-1.7-0.2-2.9-0.3c-1.1,0-2-0.1-2.7-0.1C31.1,8.7,30.1,8.7,28.8,8.7z M34.4,18.5c2.1,2.1,3.2,4.7,3.2,7.8s-1.1,5.6-3.2,7.8c-2.1,2.1-4.7,3.2-7.8,3.2c-3.1,0-5.6-1.1-7.8-3.2c-2.1-2.1-3.2-4.7-3.2-7.8s1.1-5.6,3.2-7.8c2.1-2.1,4.7-3.2,7.8-3.2C29.7,15.3,32.3,16.3,34.4,18.5z M31.7,31.3c1.4-1.4,2.1-3.1,2.1-5s-0.7-3.7-2.1-5.1c-1.4-1.4-3.1-2.1-5.1-2.1c-2,0-3.7,0.7-5.1,2.1s-2.1,3.1-2.1,5.1s0.7,3.7,2.1,5c1.4,1.4,3.1,2.1,5.1,2.1C28.6,33.4,30.3,32.7,31.7,31.3z M39.9,13c0.5,0.5,0.8,1.1,0.8,1.8c0,0.7-0.3,1.3-0.8,1.8c-0.5,0.5-1.1,0.8-1.8,0.8s-1.3-0.3-1.8-0.8c-0.5-0.5-0.8-1.1-0.8-1.8c0-0.7,0.3-1.3,0.8-1.8c0.5-0.5,1.1-0.8,1.8-0.8S39.4,12.5,39.9,13z"/>
            </svg>
          </Link>
        </div>
      </nav>
    </>
  )
} 