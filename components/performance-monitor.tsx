'use client'

import { useEffect } from 'react'

export default function PerformanceMonitor() {
  useEffect(() => {
    // Performance monitoring function
    const monitorPerformance = () => {
      if (typeof window !== 'undefined' && 'PerformanceObserver' in window) {
        // LCP (Largest Contentful Paint)
        const lcpObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries()
          const lastEntry = entries[entries.length - 1]
          const lcp = lastEntry.startTime
          
          console.log('🚀 LCP (Largest Contentful Paint):', Math.round(lcp), 'ms')
          
          if (lcp > 2500) {
            console.warn('⚠️ LCP is too slow:', Math.round(lcp), 'ms (should be < 2500ms)')
          } else if (lcp > 4000) {
            console.error('❌ LCP is very slow:', Math.round(lcp), 'ms (should be < 2500ms)')
          } else {
            console.log('✅ LCP is good:', Math.round(lcp), 'ms')
          }
        })
        lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] })

        // FID (First Input Delay)
        const fidObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries()
          entries.forEach((entry: any) => {
            const fid = entry.processingStart - entry.startTime
            console.log('⚡ FID (First Input Delay):', Math.round(fid), 'ms')
            
            if (fid > 100) {
              console.warn('⚠️ FID is too slow:', Math.round(fid), 'ms (should be < 100ms)')
            } else if (fid > 300) {
              console.error('❌ FID is very slow:', Math.round(fid), 'ms (should be < 100ms)')
            } else {
              console.log('✅ FID is good:', Math.round(fid), 'ms')
            }
          })
        })
        fidObserver.observe({ entryTypes: ['first-input'] })

        // CLS (Cumulative Layout Shift)
        let clsValue = 0
        const clsObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries()
          entries.forEach((entry: any) => {
            if (!entry.hadRecentInput) {
              clsValue += entry.value
              console.log('📐 CLS (Cumulative Layout Shift):', clsValue.toFixed(3))
              
              if (clsValue > 0.1) {
                console.warn('⚠️ CLS is too high:', clsValue.toFixed(3), '(should be < 0.1)')
              } else if (clsValue > 0.25) {
                console.error('❌ CLS is very high:', clsValue.toFixed(3), '(should be < 0.1)')
              } else {
                console.log('✅ CLS is good:', clsValue.toFixed(3))
              }
            }
          })
        })
        clsObserver.observe({ entryTypes: ['layout-shift'] })

        // FCP (First Contentful Paint)
        const fcpObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries()
          entries.forEach((entry: any) => {
            const fcp = entry.startTime
            console.log('🎨 FCP (First Contentful Paint):', Math.round(fcp), 'ms')
            
            if (fcp > 1800) {
              console.warn('⚠️ FCP is too slow:', Math.round(fcp), 'ms (should be < 1800ms)')
            } else {
              console.log('✅ FCP is good:', Math.round(fcp), 'ms')
            }
          })
        })
        fcpObserver.observe({ entryTypes: ['first-contentful-paint'] })

        // TTFB (Time to First Byte)
        const navigationObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries()
          entries.forEach((entry: any) => {
            if (entry.entryType === 'navigation') {
              const ttfb = entry.responseStart - entry.requestStart
              console.log('🌐 TTFB (Time to First Byte):', Math.round(ttfb), 'ms')
              
              if (ttfb > 600) {
                console.warn('⚠️ TTFB is too slow:', Math.round(ttfb), 'ms (should be < 600ms)')
              } else {
                console.log('✅ TTFB is good:', Math.round(ttfb), 'ms')
              }
            }
          })
        })
        navigationObserver.observe({ entryTypes: ['navigation'] })

        // Bundle size analysis
        const analyzeBundleSize = () => {
          const resources = performance.getEntriesByType('resource')
          let totalSize = 0
          let jsSize = 0
          let cssSize = 0
          let imageSize = 0

          resources.forEach((resource: any) => {
            if (resource.transferSize) {
              totalSize += resource.transferSize
              
              if (resource.name.includes('.js')) {
                jsSize += resource.transferSize
              } else if (resource.name.includes('.css')) {
                cssSize += resource.transferSize
              } else if (resource.name.match(/\.(jpg|jpeg|png|gif|webp|svg)$/i)) {
                imageSize += resource.transferSize
              }
            }
          })

          console.log('📦 Bundle Analysis:')
          console.log('   Total Size:', Math.round(totalSize / 1024), 'KB')
          console.log('   JavaScript:', Math.round(jsSize / 1024), 'KB')
          console.log('   CSS:', Math.round(cssSize / 1024), 'KB')
          console.log('   Images:', Math.round(imageSize / 1024), 'KB')

          if (totalSize > 500 * 1024) { // 500KB
            console.warn('⚠️ Total bundle size is large:', Math.round(totalSize / 1024), 'KB')
          }
          if (jsSize > 300 * 1024) { // 300KB
            console.warn('⚠️ JavaScript bundle is large:', Math.round(jsSize / 1024), 'KB')
          }
        }

        // Run bundle analysis after page load
        if (document.readyState === 'complete') {
          analyzeBundleSize()
        } else {
          window.addEventListener('load', analyzeBundleSize)
        }

        // Memory usage monitoring
        if ('memory' in performance) {
          const memory = (performance as any).memory
          console.log('💾 Memory Usage:')
          console.log('   Used:', Math.round(memory.usedJSHeapSize / 1024 / 1024), 'MB')
          console.log('   Total:', Math.round(memory.totalJSHeapSize / 1024 / 1024), 'MB')
          console.log('   Limit:', Math.round(memory.jsHeapSizeLimit / 1024 / 1024), 'MB')
        }

        // Cleanup
        return () => {
          lcpObserver.disconnect()
          fidObserver.disconnect()
          clsObserver.disconnect()
          fcpObserver.disconnect()
          navigationObserver.disconnect()
        }
      }
    }

    // Run performance monitoring
    const cleanup = monitorPerformance()

    // Performance recommendations
    console.log('🔍 Performance Recommendations:')
    console.log('   1. Use Next.js Image component for all images')
    console.log('   2. Implement lazy loading for below-the-fold content')
    console.log('   3. Consider code splitting for large components')
    console.log('   4. Optimize third-party scripts loading')
    console.log('   5. Use WebP/AVIF image formats')
    console.log('   6. Implement proper caching strategies')
    console.log('   7. Minimize unused CSS and JavaScript')

    return cleanup
  }, [])

  return null
} 