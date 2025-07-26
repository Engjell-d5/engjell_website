import Link from "next/link"

export default function Footer() {
  return (
    <footer className="px-16 py-12 border-t border-slate-700/50">
      <div className="max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <Link href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
              Privacy Policy
            </Link>
          </div>
          <div className="text-center mb-4 md:mb-0">
            <p className="text-gray-400 text-sm">© 2024 Engjell Rraklli. All rights reserved.</p>
          </div>
          <div className="text-center">
            <p className="text-gray-400 text-sm">
              Designed and built by{" "}
              <Link href="#" className="text-emerald-400 hover:text-emerald-300">
                division5
              </Link>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
} 