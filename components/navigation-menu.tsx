"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"

interface NavigationMenuProps {
  activePage: 'home' | 'entrepreneur' | '3d-guy' | 'blog' | 'podcast' | 'contact'
}

export default function NavigationMenu({ activePage }: NavigationMenuProps) {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      {/* Mobile Burger Menu Button */}
      <div className="lg:hidden fixed top-4 left-4 z-50">
        <button
          onClick={toggleMenu}
          className="p-2 bg-emerald-400 rounded-lg text-white hover:bg-emerald-500 transition-colors"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-40" onClick={toggleMenu}></div>
      )}

      {/* Navigation Menu */}
      <div className={`${isOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0 fixed lg:relative inset-y-0 left-0 w-64 bg-emerald-400 flex flex-col z-50 transition-transform duration-300 ease-in-out`}>
        {/* Logo */}
        <div className="p-8 pt-12 flex items-center justify-center">
          <Link href="/">
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
              onClick={() => setIsOpen(false)}
            >
              ENGJELL RRAKLLI
            </Link>
            <Link
              href="/entrepreneur"
              className={`block text-white py-2 px-3 text-lg font-bold uppercase tracking-wider font-bebas transition-colors ${
                activePage === 'entrepreneur' ? 'bg-black' : 'hover:bg-black'
              }`}
              onClick={() => setIsOpen(false)}
            >
              ENTREPRENEUR
            </Link>
            <Link
              href="/the-3d-guy"
              className={`block text-white py-2 px-3 text-lg font-bold uppercase tracking-wider font-bebas transition-colors ${
                activePage === '3d-guy' ? 'bg-black' : 'hover:bg-black'
              }`}
              onClick={() => setIsOpen(false)}
            >
              THE 3D GUY
            </Link>
            <Link
              href="/blog"
              className={`block text-white py-2 px-3 text-lg font-bold uppercase tracking-wider font-bebas transition-colors ${
                activePage === 'blog' ? 'bg-black' : 'hover:bg-black'
              }`}
              onClick={() => setIsOpen(false)}
            >
              BLOG
            </Link>
            <Link
              href="/podcast"
              className={`block text-white py-2 px-3 text-lg font-bold uppercase tracking-wider font-bebas transition-colors ${
                activePage === 'podcast' ? 'bg-black' : 'hover:bg-black'
              }`}
              onClick={() => setIsOpen(false)}
            >
              PODCAST
            </Link>
            <Link
              href="/contact"
              className={`block text-white py-2 px-3 text-lg font-bold uppercase tracking-wider font-bebas transition-colors ${
                activePage === 'contact' ? 'bg-black' : 'hover:bg-black'
              }`}
              onClick={() => setIsOpen(false)}
            >
              CONTACT
            </Link>
          </div>
        </nav>

        {/* Social Icons */}
        <div className="px-8 pb-12">
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
    </>
  )
} 