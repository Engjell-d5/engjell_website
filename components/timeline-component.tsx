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
      {/* Horizontal Timeline Line */}
      <div className="absolute top-1/2 left-0 right-0 transform -translate-y-px h-0.5 bg-gradient-to-r from-emerald-400 via-purple-400 to-cyan-400 opacity-30"></div>
      
      {/* Timeline Container */}
      <div className="relative w-full">
        <div className="flex justify-between items-center w-full px-8 md:px-16 lg:px-24 xl:px-32 2xl:px-40">
          {timelineData.map((item, index) => (
            <div
              key={index}
              data-index={index}
              className={`relative flex-1 mx-4 transition-all duration-1000 ${
                visibleItems.includes(index) 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-8'
              }`}
            >
              {/* Content Card */}
              <div className="mt-8">
                <div className={`p-6 rounded-xl border backdrop-blur-sm transition-all duration-500 hover:scale-105 ${getColorClasses(item.color)} bg-slate-900/50 text-center`}>
                  {/* Year Badge */}
                  <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 rounded-full bg-slate-800/50 border border-current/20">
                    <Calendar className="w-4 h-4" />
                    <span className="text-sm font-semibold">{item.year}</span>
                  </div>

                  {/* Icon */}
                  <div className={`inline-flex p-3 rounded-full ${getColorClasses(item.color)} bg-slate-800/50 mb-4`}>
                    {item.icon}
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
      </div>

      {/* Floating Elements */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-emerald-400/5 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-purple-400/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-20 w-24 h-24 bg-cyan-400/5 rounded-full blur-2xl animate-pulse delay-500"></div>
    </div>
  )
} 