'use client'

import { ReactNode } from 'react'

interface SharedBackgroundProps {
  children: ReactNode
  showWaves?: boolean
  showBlurElements?: boolean
  waveOpacity?: number
  blurIntensity?: 'subtle' | 'medium' | 'strong'
  className?: string
}

export default function SharedBackground({
  children,
  showWaves = true,
  showBlurElements = true,
  waveOpacity = 0.15,
  blurIntensity = 'subtle',
  className = ''
}: SharedBackgroundProps) {
  const blurClasses = {
    subtle: 'from-teal-400/5 to-transparent',
    medium: 'from-teal-400/10 to-transparent',
    strong: 'from-teal-400/15 to-transparent'
  }

  return (
    <div className={`flex-1 bg-gradient-to-br from-slate-800 via-slate-900 to-teal-900 relative overflow-hidden ml-0 transition-all duration-300 ${className}`}>
      {/* Flowing Wave Pattern Background */}
      {showWaves && (
        <div className="absolute inset-0" style={{ opacity: waveOpacity }}>
          <svg className="w-full h-full" viewBox="0 0 1200 1200" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
            {/* Top section waves */}
            <path d="M0 80C200 40 400 120 600 80C800 40 1000 120 1200 80V0H0V80Z" fill="rgba(255,255,255,0.08)" />
            <path d="M0 160C300 120 600 200 900 160C1050 140 1150 180 1200 160V80C1050 100 900 60 750 80C500 120 250 20 0 60V160Z" fill="rgba(255,255,255,0.06)" />
            
            {/* Upper middle section waves */}
            <path d="M0 320C200 280 400 380 600 320C800 260 1000 360 1200 320V240C1000 280 800 180 600 240C400 300 200 200 0 240V320Z" fill="rgba(255,255,255,0.05)" />
            <path d="M0 480C300 440 600 520 900 480C1050 460 1150 500 1200 480V400C1050 420 900 380 750 400C500 440 250 340 0 380V480Z" fill="rgba(255,255,255,0.04)" />
            
            {/* Lower middle section waves */}
            <path d="M0 640C200 600 400 700 600 640C800 580 1000 680 1200 640V560C1000 600 800 500 600 560C400 620 200 520 0 560V640Z" fill="rgba(255,255,255,0.05)" />
            <path d="M0 800C300 760 600 840 900 800C1050 780 1150 820 1200 800V720C1050 740 900 700 750 720C500 760 250 660 0 700V800Z" fill="rgba(255,255,255,0.04)" />
            
            {/* Bottom section waves */}
            <path d="M0 960C200 920 400 1020 600 960C800 900 1000 1000 1200 960V880C1000 920 800 820 600 880C400 940 200 840 0 880V960Z" fill="rgba(255,255,255,0.06)" />
            <path d="M0 1120C300 1080 600 1160 900 1120C1050 1100 1150 1140 1200 1120V1040C1050 1060 900 1020 750 1040C500 1080 250 980 0 1020V1120Z" fill="rgba(255,255,255,0.08)" />
          </svg>
        </div>
      )}

      {/* Additional decorative elements */}
      {showBlurElements && (
        <>
          <div className={`absolute top-20 right-20 w-96 h-96 rounded-full bg-gradient-to-br ${blurClasses[blurIntensity]} blur-3xl animate-pulse`}></div>
          <div className={`absolute bottom-20 left-20 w-80 h-80 rounded-full bg-gradient-to-tr from-emerald-400/5 to-transparent blur-3xl animate-pulse`} style={{ animationDelay: '1s' }}></div>
          <div className={`absolute top-1/2 left-1/4 w-64 h-64 rounded-full bg-gradient-to-br ${blurClasses[blurIntensity]} blur-2xl animate-pulse`} style={{ animationDelay: '2s' }}></div>
        </>
      )}

      {/* Content */}
      <div className="relative z-10 overflow-y-auto h-full">
        {children}
      </div>
    </div>
  )
} 