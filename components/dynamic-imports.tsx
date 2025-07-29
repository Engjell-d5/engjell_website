'use client'

import dynamic from 'next/dynamic'
import { Suspense } from 'react'

// Dynamic imports for heavy components
export const DynamicPodcastClient = dynamic(
  () => import('./podcast-client'),
  {
    loading: () => (
      <div className="flex flex-col items-center justify-center py-20">
        <div className="w-24 h-24 border-4 border-emerald-400/30 rounded-full animate-pulse"></div>
        <div className="text-center mt-8">
          <h3 className="text-white font-bold text-2xl mb-4 font-bebas tracking-wider">LOADING PODCAST</h3>
          <div className="flex items-center justify-center space-x-2">
            <div className="w-2 h-2 bg-emerald-400 rounded-full animate-bounce"></div>
            <div className="w-2 h-2 bg-emerald-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
            <div className="w-2 h-2 bg-emerald-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
          </div>
        </div>
      </div>
    ),
    ssr: false,
  }
)

export const DynamicBlogClient = dynamic(
  () => import('./blog-client'),
  {
    loading: () => (
      <div className="flex flex-col items-center justify-center py-20">
        <div className="w-24 h-24 border-4 border-emerald-400/30 rounded-full animate-pulse"></div>
        <div className="text-center mt-8">
          <h3 className="text-white font-bold text-2xl mb-4 font-bebas tracking-wider">LOADING BLOG</h3>
          <div className="flex items-center justify-center space-x-2">
            <div className="w-2 h-2 bg-emerald-400 rounded-full animate-bounce"></div>
            <div className="w-2 h-2 bg-emerald-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
            <div className="w-2 h-2 bg-emerald-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
          </div>
        </div>
      </div>
    ),
    ssr: false,
  }
)

export const DynamicPodcastApplicationForm = dynamic(
  () => import('./podcast-application-form'),
  {
    loading: () => (
      <div className="animate-pulse">
        <div className="h-8 bg-slate-700 rounded mb-4"></div>
        <div className="h-4 bg-slate-700 rounded mb-2"></div>
        <div className="h-4 bg-slate-700 rounded mb-2"></div>
        <div className="h-32 bg-slate-700 rounded mb-4"></div>
        <div className="h-12 bg-emerald-400/20 rounded"></div>
      </div>
    ),
    ssr: false,
  }
)

export const DynamicContactForm = dynamic(
  () => import('./contact-form'),
  {
    loading: () => (
      <div className="animate-pulse">
        <div className="h-8 bg-slate-700 rounded mb-4"></div>
        <div className="h-4 bg-slate-700 rounded mb-2"></div>
        <div className="h-4 bg-slate-700 rounded mb-2"></div>
        <div className="h-32 bg-slate-700 rounded mb-4"></div>
        <div className="h-12 bg-emerald-400/20 rounded"></div>
      </div>
    ),
    ssr: false,
  }
)

// Wrapper component for dynamic imports with error boundary
export function DynamicComponentWrapper({ 
  children, 
  fallback 
}: { 
  children: React.ReactNode
  fallback?: React.ReactNode 
}) {
  return (
    <Suspense fallback={fallback || (
      <div className="flex items-center justify-center py-8">
        <div className="w-8 h-8 border-2 border-emerald-400 border-t-transparent rounded-full animate-spin"></div>
      </div>
    )}>
      {children}
    </Suspense>
  )
} 