'use client'

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Mail, CheckCircle, AlertCircle, Loader2 } from "lucide-react"

interface SubscribeSectionProps {
  heading?: string
  title?: string
  placeholder?: string
  buttonText?: string
}

export default function SubscribeSection({ 
  heading = "SCALING THE UNSCALABLE",
  title = "I write about scaling service-based businesses in my newsletter. Subscribe below.",
  placeholder = "Enter your email address",
  buttonText = "Subscribe"
}: SubscribeSectionProps) {
  const [email, setEmail] = useState("")
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [message, setMessage] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!email) {
      setStatus('error')
      setMessage('Please enter your email address')
      return
    }

    setStatus('loading')
    setMessage("")

    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email })
      })

      const data = await response.json()

      if (response.ok) {
        setStatus('success')
        setMessage(data.message)
        setEmail("")
      } else {
        setStatus('error')
        setMessage(data.error || 'Failed to subscribe. Please try again.')
      }
    } catch (error) {
      setStatus('error')
      setMessage('Failed to subscribe. Please try again.')
    }
  }

  return (
    <div className="px-8 md:px-16 lg:px-24 xl:px-32 2xl:px-40 py-16 md:py-24">
      <div className="max-w-5xl mx-auto text-center">
        <Card className="bg-slate-700/50 border-slate-600 max-w-3xl mx-auto">
          <CardHeader>
            <CardTitle className="text-white font-bold text-3xl md:text-4xl lg:text-5xl font-bebas uppercase tracking-wide">{heading}</CardTitle>
            <CardDescription className="text-body text-lg md:text-xl font-montserrat">
              {title}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="flex flex-col sm:flex-row gap-4">
                <Input
                  type="email"
                  placeholder={placeholder}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={status === 'loading'}
                  className="bg-slate-600 border-slate-500 text-white placeholder:text-gray-400 flex-1"
                />
                <Button 
                  type="submit"
                  disabled={status === 'loading'}
                  className="bg-emerald-400 hover:bg-emerald-500 text-black font-bold px-8 py-2 font-bebas disabled:opacity-50"
                >
                  {status === 'loading' ? (
                    <>
                      <Loader2 size={16} className="mr-2 animate-spin" />
                      Subscribing...
                    </>
                  ) : (
                    <>
                      <Mail size={16} className="mr-2" />
                      {buttonText}
                    </>
                  )}
                </Button>
              </div>
              
              {/* Status Message */}
              {message && (
                <div className={`flex items-center justify-center space-x-2 text-sm ${
                  status === 'success' ? 'text-emerald-400' : 'text-red-400'
                }`}>
                  {status === 'success' ? (
                    <CheckCircle size={16} />
                  ) : (
                    <AlertCircle size={16} />
                  )}
                  <span>{message}</span>
                </div>
              )}
              
              <p className="text-body text-sm font-montserrat">
                No spam, unsubscribe at any time. Your privacy is important to us.
              </p>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  )
} 