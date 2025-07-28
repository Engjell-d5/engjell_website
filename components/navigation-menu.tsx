import Link from "next/link"
import { useState } from "react"
import { usePathname } from "next/navigation"

interface NavigationMenuProps {
  activePage: 'home' | 'engjell-rraklli' | 'entrepreneur' | 'blog' | 'podcast' | 'contact',
  activeSubpage?: string | null,
  onNavigate?: () => void
}

export default function NavigationMenu({ activePage, activeSubpage, onNavigate }: NavigationMenuProps) {
  // Only one category should be expanded at a time
  const [entrepreneurExpanded, setEntrepreneurExpanded] = useState(activeSubpage !== null && activePage === 'entrepreneur')
  const [engjellRraklliExpanded, setEngjellRraklliExpanded] = useState(activeSubpage !== null && activePage === 'engjell-rraklli')
  const pathname = usePathname()

  // Close submenu when navigating to a different page
  const handleNavigate = () => {
    // Don't close the current category when navigating to its subpages
    onNavigate?.()
  }

  // Handle navigation to non-entrepreneur pages
  const handleNonEntrepreneurNavigate = () => {
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
                activePage === 'engjell-rraklli' || engjellRraklliExpanded 
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
                  href="/engjell-rraklli/my-story"
                  className={`block w-full sm:w-auto text-left text-white py-1 px-3 text-sm font-medium uppercase tracking-wider font-bebas transition-all duration-300 rounded-md ${
                    activeSubpage === 'my-story' 
                      ? 'bg-emerald-600/60 backdrop-blur-sm border border-emerald-400/40 shadow-lg' 
                      : 'hover:bg-emerald-600/40 hover:backdrop-blur-sm border border-transparent hover:border-emerald-400/30'
                  }`}
                  onClick={handleNavigate}
                >
                  MY STORY
                </Link>
                <Link
                  href="/engjell-rraklli/my-divisions"
                  className={`block w-full sm:w-auto text-left text-white py-1 px-3 text-sm font-medium uppercase tracking-wider font-bebas transition-all duration-300 rounded-md ${
                    activeSubpage === 'my-divisions' 
                      ? 'bg-emerald-600/60 backdrop-blur-sm border border-emerald-400/40 shadow-lg' 
                      : 'hover:bg-emerald-600/40 hover:backdrop-blur-sm border border-transparent hover:border-emerald-400/30'
                  }`}
                  onClick={handleNavigate}
                >
                  MY DIVISIONS
                </Link>
                                    <Link
                      href="/engjell-rraklli/my-speaker-profile"
                      className={`block w-full sm:w-auto text-left text-white py-1 px-3 text-sm font-medium uppercase tracking-wider font-bebas transition-all duration-300 rounded-md ${
                        activeSubpage === 'my-speaker-profile'
                          ? 'bg-emerald-600/60 backdrop-blur-sm border border-emerald-400/40 shadow-lg'
                          : 'hover:bg-emerald-600/40 hover:backdrop-blur-sm border border-transparent hover:border-emerald-400/30'
                      }`}
                      onClick={handleNavigate}
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
                    activeSubpage === 'division5' 
                      ? 'bg-emerald-600/60 backdrop-blur-sm border border-emerald-400/40 shadow-lg' 
                      : 'hover:bg-emerald-600/40 hover:backdrop-blur-sm border border-transparent hover:border-emerald-400/30'
                  }`}
                  onClick={handleNavigate}
                >
                  DIVISION5
                </Link>
                <Link
                  href="/entrepreneur/division3d"
                  className={`block w-full sm:w-auto text-left text-white py-1 px-3 text-sm font-medium uppercase tracking-wider font-bebas transition-all duration-300 rounded-md ${
                    activeSubpage === 'division3d' 
                      ? 'bg-emerald-600/60 backdrop-blur-sm border border-emerald-400/40 shadow-lg' 
                      : 'hover:bg-emerald-600/40 hover:backdrop-blur-sm border border-transparent hover:border-emerald-400/30'
                  }`}
                  onClick={handleNavigate}
                >
                  DIVISION3D
                </Link>
                <Link
                  href="/entrepreneur/divisionai"
                  className={`block w-full sm:w-auto text-left text-white py-1 px-3 text-sm font-medium uppercase tracking-wider font-bebas transition-all duration-300 rounded-md ${
                    activeSubpage === 'divisionai' 
                      ? 'bg-emerald-600/60 backdrop-blur-sm border border-emerald-400/40 shadow-lg' 
                      : 'hover:bg-emerald-600/40 hover:backdrop-blur-sm border border-transparent hover:border-emerald-400/30'
                  }`}
                  onClick={handleNavigate}
                >
                  DIVISIONAI
                </Link>
                <Link
                  href="/entrepreneur/divisiongrowth"
                  className={`block w-full sm:w-auto text-left text-white py-1 px-3 text-sm font-medium uppercase tracking-wider font-bebas transition-all duration-300 rounded-md ${
                    activeSubpage === 'divisiongrowth' 
                      ? 'bg-emerald-600/60 backdrop-blur-sm border border-emerald-400/40 shadow-lg' 
                      : 'hover:bg-emerald-600/40 hover:backdrop-blur-sm border border-transparent hover:border-emerald-400/30'
                  }`}
                  onClick={handleNavigate}
                >
                  DIVISIONGROWTH
                </Link>
                <Link
                  href="/entrepreneur/divisiondesign"
                  className={`block w-full sm:w-auto text-left text-white py-1 px-3 text-sm font-medium uppercase tracking-wider font-bebas transition-all duration-300 rounded-md ${
                    activeSubpage === 'divisiondesign' 
                      ? 'bg-emerald-600/60 backdrop-blur-sm border border-emerald-400/40 shadow-lg' 
                      : 'hover:bg-emerald-600/40 hover:backdrop-blur-sm border border-transparent hover:border-emerald-400/30'
                  }`}
                  onClick={handleNavigate}
                >
                  DIVISIONDESIGN
                </Link>
              </div>
            </div>
          </div>
          

          <Link
            href="/blog"
            className={`block w-full sm:w-auto text-left text-white py-2 px-3 text-lg font-bold uppercase tracking-wider font-bebas transition-all duration-300 rounded-lg ${
              activePage === 'blog' 
                ? 'bg-black/40 backdrop-blur-sm border border-white/30' 
                : 'hover:bg-black/40 hover:backdrop-blur-sm border border-transparent hover:border-white/30'
            }`}
            onClick={handleNonEntrepreneurNavigate}
          >
            BLOG
          </Link>
          <Link
            href="/podcast"
            className={`block w-full sm:w-auto text-left text-white py-2 px-3 text-lg font-bold uppercase tracking-wider font-bebas transition-all duration-300 rounded-lg ${
              activePage === 'podcast' 
                ? 'bg-black/40 backdrop-blur-sm border border-white/30' 
                : 'hover:bg-black/40 hover:backdrop-blur-sm border border-transparent hover:border-white/30'
            }`}
            onClick={handleNonEntrepreneurNavigate}
          >
            PODCAST
          </Link>
          <Link
            href="/contact"
            className={`block w-full sm:w-auto text-left text-white py-2 px-3 text-lg font-bold uppercase tracking-wider font-bebas transition-all duration-300 rounded-lg ${
              activePage === 'contact' 
                ? 'bg-black/40 backdrop-blur-sm border border-white/30' 
                : 'hover:bg-black/40 hover:backdrop-blur-sm border border-transparent hover:border-white/30'
            }`}
            onClick={handleNonEntrepreneurNavigate}
          >
            CONTACT
          </Link>
        </div>
        {/* Social Icons (centered on mobile) */}
        <div className="flex justify-center space-x-6 mt-8">
          <Link href="https://threads.net/@engjellrraklli" target="_blank" rel="noopener noreferrer" aria-label="Threads" className="text-white hover:opacity-80 transition-opacity">
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12.186 24h-.007c-3.581-.024-6.334-1.205-8.184-3.509C2.35 18.44 1.5 15.586 1.5 12.022V0h3.82v12.022c0 2.776.484 4.95 1.451 6.494 1.54 2.524 4.08 3.787 7.615 3.787 3.581 0 6.334-1.205 8.184-3.509C24.65 18.44 25.5 15.586 25.5 12.022V0h3.82v12.022c0 2.776-.484 4.95-1.451 6.494-1.54 2.524-4.08 3.787-7.615 3.787-3.581 0-6.334-1.205-8.184-3.509C24.65 18.44 25.5 15.586 25.5 12.022V0h3.82v12.022c0 2.776-.484 4.95-1.451 6.494-1.54 2.524-4.08 3.787-7.615 3.787-3.581 0-6.334 1.205-8.184-3.509C24.65 18.44 25.5 15.586 25.5 12.022V0h3.82v12.022c0 2.776-.484 4.95-1.451 6.494-1.54 2.524-4.08 3.787-7.615 3.787-3.581 0-6.334 1.205-8.184-3.509C24.65 18.44 25.5 15.586 25.5 12.022V0h3.82v12.022c0 2.776-.484 4.95-1.451 6.494-1.54 2.524-4.08 3.787-7.615 3.787-3.581 0-6.334 1.205-8.184-3.509C24.65 18.44 25.5 15.586 25.5 12.022V0h3.82v12.022c0 2.776-.484 4.95-1.451 6.494-1.54 2.524-4.08 3.787-7.615 3.787-3.581 0-6.334 1.205-8.184-3.509C24.65 18.44 25.5 15.586 25.5 12.022V0h3.82v12.022c0 2.776-.484 4.95-1.451 6.494-1.54 2.524-4.08 3.787-7.615 3.787-3.581 0-6.334 1.205-8.184-3.509C24.65 18.44 25.5 15.586 25.5 12.022V0h3.82v12.022c0 2.776-.484 4.95-1.451 6.494-1.54 2.524-4.08 3.787-7.615 3.787-3.581 0-6.334 1.205-8.184-3.509C24.65 18.44 25.5 15.586 25.5 12.022V0h3.82v12.022c0 2.776-.484 4.95-1.451 6.494-1.54 2.524-4.08 3.787-7.615 3.787-3.581 0-6.334 1.205-8.184-3.509C24.65 18.44 25.5 15.586 25.5 12.022V0h3.82v12.022c0 2.776-.484 4.95-1.451 6.494-1.54 2.524-4.08 3.787-7.615 3.787-3.581 0-6.334 1.205-8.184-3.509C24.65 18.44 25.5 15.586 25.5 12.022V0h3.82v12.022c0 2.776-.484 4.95-1.451 6.494-1.54 2.524-4.08 3.787-7.615 3.787-3.581 0-6.334 1.205-8.184-3.509C24.65 18.44 25.5 15.586 25.5 12.022V0h3.82v12.022c0 2.776-.484 4.95-1.451 6.494-1.54 2.524-4.08 3.787-7.615 3.787-3.581 0-6.334 1.205-8.184-3.509C24.65 18.44 25.5 15.586 25.5 12.022V0h3.82v12.022c0 2.776-.484 4.95-1.451 6.494-1.54 2.524-4.08 3.787-7.615 3.787-3.581 0-6.334 1.205-8.184-3.509C24.65 18.44 25.5 15.586 25.5 12.022V0h3.82v12.022c0 2.776-.484 4.95-1.451 6.494-1.54 2.524-4.08 3.787-7.615 3.787-3.581 0-6.334 1.205-8.184-3.509C24.65 18.44 25.5 15.586 25.5 12.022V0h3.82v12.022c0 2.776-.484 4.95-1.451 6.494-1.54 2.524-4.08 3.787-7.615 3.787z"/>
            </svg>
          </Link>
          <Link href="https://linkedin.com/in/engjell-rraklli-a8b20a68" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-white hover:opacity-80 transition-opacity">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.28c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.78 1.75 1.75-.78 1.75-1.75 1.75zm15.5 11.28h-3v-5.6c0-1.34-.03-3.07-1.87-3.07-1.87 0-2.16 1.46-2.16 2.97v5.7h-3v-10h2.89v1.36h.04c.4-.75 1.38-1.54 2.84-1.54 3.04 0 3.6 2 3.6 4.59v5.59z"/>
            </svg>
          </Link>
          <Link href="https://instagram.com/engjellrraklli" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-white hover:opacity-80 transition-opacity">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.308.974.974 1.246 2.242 1.308 3.608.058 1.266.069 1.646.069 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.308 3.608-.974.974-2.242 1.246-3.608 1.308-1.266.058-1.646.069-4.85.069s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.308-.974-.974-1.246-2.242-1.308-3.608-.058-1.266-.069-1.646-.069-4.85s.012-3.584.07-4.85c.062-1.366.334-2.633 1.308-3.608.974-.974 2.242-1.246 3.608-1.308 1.266-.058 1.646-.069 4.85-.069zm0-2.163c-3.259 0-3.667.012-4.947.07-1.276.058-2.687.334-3.678 1.325-.991.991-1.267 2.402-1.325 3.678-.058 1.28-.07 1.688-.07 4.947s.012 3.667.07 4.947c.058 1.276.334 2.687 1.325 3.678.991.991 2.402 1.267 3.678 1.325 1.28.058 1.688.07 4.947.07s3.667-.012 4.947-.07c1.276-.058 2.687-.334 3.678-1.325.991-.991 1.267-2.402 1.325-3.678.058-1.28.07-1.688.07-4.947s-.012-3.667-.07-4.947c-.058-1.276-.334-2.687-1.325-3.678-.991-.991-2.402-1.267-3.678-1.325-1.28-.058-1.688-.07-4.947-.07zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
            </svg>
          </Link>
        </div>
      </nav>
    </>
  )
} 