'use client'

import { useState, useEffect, useRef } from 'react'
import { Calendar, Code, Building2, Rocket } from 'lucide-react'

interface TimelineItem {
  year: string
  title: string
  description: string
  icon: React.ReactNode
  color: string
}

const timelineData: TimelineItem[] = [
  {
    year: "2007",
    title: "Started Coding",
    description: "Began my journey in programming by creating my first game.",
    icon: <Code className="w-6 h-6" />,
    color: "emerald"
  },
  {
    year: "2015",
    title: "Founded First Company",
    description: "Launched my first business venture, marking the start of my entrepreneurial journey.",
    icon: <Building2 className="w-6 h-6" />,
    color: "purple"
  },
  {
    year: "2025",
    title: "Scaling to 5 Divisions",
    description: "Expanding into multiple specialized divisions to serve diverse client needs.",
    icon: <Rocket className="w-6 h-6" />,
    color: "cyan"
  }
]

export default function TimelineComponent() {
  const [visibleItems, setVisibleItems] = useState<number[]>([])
  const timelineRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0')
            setVisibleItems(prev => [...new Set([...prev, index])])
          }
        })
      },
      {
        threshold: 0.3,
        rootMargin: '0px 0px -100px 0px'
      }
    )

    const timelineItems = document.querySelectorAll('[data-index]')
    timelineItems.forEach(item => observer.observe(item))

    return () => observer.disconnect()
  }, [])

  const getColorClasses = (color: string) => {
    const colorMap: { [key: string]: string } = {
      emerald: 'border-emerald-400 bg-emerald-400/10 text-emerald-400',
      purple: 'border-purple-400 bg-purple-400/10 text-purple-400',
      cyan: 'border-cyan-400 bg-cyan-400/10 text-cyan-400'
    }
    return colorMap[color] || 'border-white bg-white/10 text-white'
  }

  return (
    <div className="relative w-full" ref={timelineRef}>
      {/* Horizontal Timeline Line - Hidden on mobile */}
      <div className="hidden lg:block absolute top-1/2 left-0 right-0 transform -translate-y-px h-0.5 bg-gradient-to-r from-emerald-400 via-purple-400 to-cyan-400 opacity-30"></div>
      
      {/* Vertical Timeline Line - Visible on mobile */}
      <div className="lg:hidden absolute left-1/2 top-0 bottom-0 transform -translate-x-px w-0.5 bg-gradient-to-b from-emerald-400 via-purple-400 to-cyan-400 opacity-30"></div>
      
      {/* Timeline Container */}
      <div className="relative w-full">
        {/* Desktop Layout - Horizontal */}
        <div className="hidden lg:flex justify-center items-center w-full px-8 md:px-16 lg:px-24 xl:px-32 2xl:px-40 gap-8">
          {timelineData.map((item, index) => (
            <div
              key={index}
              data-index={index}
              className={`relative w-80 transition-all duration-1000 ${
                visibleItems.includes(index) 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-8'
              }`}
            >
              {/* Content Card */}
              <div className="mt-8">
                <div className={`h-80 p-6 rounded-xl border backdrop-blur-sm transition-all duration-500 hover:scale-105 ${getColorClasses(item.color)} bg-slate-900/50 text-center flex flex-col justify-center`}>
                  {/* Year Badge with Icon */}
                  <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 rounded-full bg-slate-800/50 border border-current/20">
                    {item.icon}
                    <span className="text-sm font-semibold">{item.year}</span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold font-bebas uppercase tracking-wide mb-3">{item.title}</h3>

                  {/* Description */}
                  <p className="text-gray-300 text-sm leading-relaxed font-montserrat">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Layout - Vertical */}
        <div className="lg:hidden flex flex-col space-y-8 px-4 sm:px-6 md:px-8">
          {timelineData.map((item, index) => (
            <div
              key={index}
              data-index={index}
              className={`relative transition-all duration-1000 ${
                visibleItems.includes(index) 
                  ? 'opacity-100 translate-x-0' 
                  : 'opacity-0 translate-x-8'
              }`}
            >
              {/* Content Card */}
              <div className="flex items-start space-x-4">
                {/* Timeline Dot */}
                <div className={`flex-shrink-0 w-4 h-4 rounded-full border-2 ${getColorClasses(item.color)} bg-slate-900 mt-6`}></div>
                
                {/* Content */}
                <div className={`flex-1 p-4 sm:p-6 rounded-xl border backdrop-blur-sm transition-all duration-500 ${getColorClasses(item.color)} bg-slate-900/50`}>
                  {/* Year Badge */}
                  <div className="inline-flex items-center gap-2 mb-3 px-2 py-1 rounded-full bg-slate-800/50 border border-current/20">
                    <Calendar className="w-3 h-3" />
                    <span className="text-xs font-semibold">{item.year}</span>
                  </div>

                  {/* Icon and Title Row */}
                  <div className="flex items-center gap-3 mb-3">
                    <div className={`inline-flex p-2 rounded-full ${getColorClasses(item.color)} bg-slate-800/50`}>
                      {item.icon}
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold font-bebas uppercase tracking-wide">{item.title}</h3>
                  </div>

                  {/* Description */}
                  <p className="text-gray-300 text-sm leading-relaxed font-montserrat">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-emerald-400/5 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-purple-400/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-20 w-24 h-24 bg-cyan-400/5 rounded-full blur-2xl animate-pulse delay-500"></div>
    </div>
  )
} 