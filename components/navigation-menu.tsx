import Link from "next/link"

interface NavigationMenuProps {
  activePage: 'home' | 'entrepreneur' | '3d-guy' | 'blog' | 'podcast' | 'contact',
  onNavigate?: () => void
}

export default function NavigationMenu({ activePage, onNavigate }: NavigationMenuProps) {
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
      <nav className="flex-1 px-8 pt-8">
        <div className="space-y-1 flex flex-col">
          <Link
            href="/"
            className={`block text-white py-2 px-3 text-lg font-bold uppercase tracking-wider font-bebas transition-colors ${
              activePage === 'home' ? 'bg-black' : 'hover:bg-black'
            }`}
            onClick={onNavigate}
          >
            ENGJELL RRAKLLI
          </Link>
          <Link
            href="/entrepreneur"
            className={`block text-white py-2 px-3 text-lg font-bold uppercase tracking-wider font-bebas transition-colors ${
              activePage === 'entrepreneur' ? 'bg-black' : 'hover:bg-black'
            }`}
            onClick={onNavigate}
          >
            ENTREPRENEUR
          </Link>
          <Link
            href="/the-3d-guy"
            className={`block text-white py-2 px-3 text-lg font-bold uppercase tracking-wider font-bebas transition-colors ${
              activePage === '3d-guy' ? 'bg-black' : 'hover:bg-black'
            }`}
            onClick={onNavigate}
          >
            THE 3D GUY
          </Link>
          <Link
            href="/blog"
            className={`block text-white py-2 px-3 text-lg font-bold uppercase tracking-wider font-bebas transition-colors ${
              activePage === 'blog' ? 'bg-black' : 'hover:bg-black'
            }`}
            onClick={onNavigate}
          >
            BLOG
          </Link>
          <Link
            href="/podcast"
            className={`block text-white py-2 px-3 text-lg font-bold uppercase tracking-wider font-bebas transition-colors ${
              activePage === 'podcast' ? 'bg-black' : 'hover:bg-black'
            }`}
            onClick={onNavigate}
          >
            PODCAST
          </Link>
          <Link
            href="/contact"
            className={`block text-white py-2 px-3 text-lg font-bold uppercase tracking-wider font-bebas transition-colors ${
              activePage === 'contact' ? 'bg-black' : 'hover:bg-black'
            }`}
            onClick={onNavigate}
          >
            CONTACT
          </Link>
        </div>
      </nav>
    </>
  )
} 