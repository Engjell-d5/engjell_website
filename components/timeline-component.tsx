'use client'

import { useState, useEffect, useRef } from 'react'
import { Calendar, Building2, Palette, Brain, TrendingUp, Rocket, Users } from 'lucide-react'

interface TimelineItem {
  year: string
  title: string
  description: string
  icon: React.ReactNode
  color: string
  division?: string
}

const timelineData: TimelineItem[] = [
  {
    year: "2015",
    title: "Founded Division5",
    description: "Started as a game development studio, then pivoted into software development.",
    icon: <Users className="w-6 h-6" />,
    color: "emerald",
    division: "Division5"
  },
  {
    year: "2019",
    title: "Global Partnership & Investment",
    description: "Signed a partnership and investment deal to scale Division5 globally. Changed company focus into staff augmentation.",
    icon: <Building2 className="w-6 h-6" />,
    color: "emerald",
    division: "Division5"
  },
  {
    year: "2020",
    title: "Founded Division3D",
    description: "Offering 3D expertise in the browser, working with customers such as Verizon, Bytro, and more.",
    icon: <Rocket className="w-6 h-6" />,
    color: "purple",
    division: "Division3D"
  },
  {
    year: "2024",
    title: "Co-founded DivisionDesign",
    description: "Partnered with a long-term collaborator to provide world-class UI/UX and graphic design services.",
    icon: <Palette className="w-6 h-6" />,
    color: "pink",
    division: "DivisionDesign"
  },
  {
    year: "February 2025",
    title: "Launched DivisionGrowth",
    description: "After 2 years of successful outbound B2B processes, offering it as a service under DivisionGrowth.",
    icon: <TrendingUp className="w-6 h-6" />,
    color: "blue",
    division: "DivisionGrowth"
  },
  {
    year: "July 2025",
    title: "Founded DivisionAI",
    description: "Providing AI-powered software development to disrupt the traditional software development market.",
    icon: <Brain className="w-6 h-6" />,
    color: "cyan",
    division: "DivisionAI"
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
      pink: 'border-pink-400 bg-pink-400/10 text-pink-400',
      blue: 'border-blue-400 bg-blue-400/10 text-blue-400',
      cyan: 'border-cyan-400 bg-cyan-400/10 text-cyan-400'
    }
    return colorMap[color] || 'border-white bg-white/10 text-white'
  }

  return (
    <div className="relative" ref={timelineRef}>
      {/* Central Timeline Line */}
      <div className="absolute left-1/2 transform -translate-x-px w-0.5 bg-gradient-to-b from-emerald-400 via-purple-400 via-pink-400 via-blue-400 to-cyan-400 h-full opacity-30"></div>
      
      <div className="space-y-8 md:space-y-12">
        {timelineData.map((item, index) => (
          <div
            key={index}
            data-index={index}
            className={`relative flex items-center ${
              index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
            } flex-col md:gap-8 gap-6 transition-all duration-1000 ${
              visibleItems.includes(index) 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-8'
            }`}
          >
            {/* Timeline Node */}
            <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
              <div className={`w-4 h-4 rounded-full border-2 ${getColorClasses(item.color)} bg-slate-900 shadow-lg`}></div>
              <div className={`absolute inset-0 w-4 h-4 rounded-full ${getColorClasses(item.color)} animate-ping opacity-20`}></div>
            </div>

            {/* Content Card */}
            <div className={`flex-1 max-w-sm ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'} text-center md:text-left`}>
              <div className={`p-4 rounded-xl border backdrop-blur-sm transition-all duration-500 hover:scale-105 ${getColorClasses(item.color)} bg-slate-900/50`}>
                {/* Year Badge */}
                <div className="inline-flex items-center gap-2 mb-3 px-2 py-1 rounded-full bg-slate-800/50 border border-current/20">
                  <Calendar className="w-3 h-3" />
                  <span className="text-xs font-semibold">{item.year}</span>
                </div>

                {/* Icon and Title */}
                <div className={`flex items-center gap-2 mb-2 ${index % 2 === 0 ? 'md:justify-end' : 'md:justify-start'} justify-center`}>
                  <div className={`p-1.5 rounded-md ${getColorClasses(item.color)} bg-slate-800/50`}>
                    {item.icon}
                  </div>
                  <h3 className="text-lg font-bold font-bebas uppercase tracking-wide">{item.title}</h3>
                </div>

                {/* Description */}
                <p className="text-gray-300 text-xs leading-relaxed font-montserrat mb-2">
                  {item.description}
                </p>

                {/* Division Badge */}
                {item.division && (
                  <div className={`inline-block px-2 py-0.5 rounded-full text-xs font-semibold uppercase tracking-wide ${getColorClasses(item.color)} bg-slate-800/50 border border-current/20`}>
                    {item.division}
                  </div>
                )}
              </div>
            </div>

            {/* Spacer for mobile */}
            <div className="md:hidden w-full h-4"></div>
          </div>
        ))}
      </div>

      {/* Floating Elements */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-emerald-400/5 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-purple-400/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-20 w-24 h-24 bg-pink-400/5 rounded-full blur-2xl animate-pulse delay-500"></div>
      <div className="absolute top-1/3 right-20 w-28 h-28 bg-blue-400/5 rounded-full blur-2xl animate-pulse delay-1500"></div>
    </div>
  )
} 