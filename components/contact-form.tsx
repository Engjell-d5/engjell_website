"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "@/components/ui/use-toast"
import { CheckCircle, XCircle, AlertCircle, Send } from "lucide-react"

interface FormData {
  name: string
  email: string
  message: string
  honeypot: string
  timestamp: string
}

type FormStatus = 'idle' | 'submitting' | 'success' | 'error'

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
    honeypot: "",
    timestamp: ""
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [errors, setErrors] = useState<Partial<FormData>>({})
  const [formStatus, setFormStatus] = useState<FormStatus>('idle')
  const [statusMessage, setStatusMessage] = useState("")

  // Set timestamp when component mounts
  useEffect(() => {
    setFormData(prev => ({ ...prev, timestamp: Date.now().toString() }))
  }, [])

  const validateForm = (): boolean => {
    const newErrors: Partial<FormData> = {}

    if (!formData.name.trim()) {
      newErrors.name = "Name is required"
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required"
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address"
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required"
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters long"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }))
    }
    // Clear status when user starts typing
    if (formStatus !== 'idle') {
      setFormStatus('idle')
      setStatusMessage("")
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateForm()) {
      setFormStatus('error')
      setStatusMessage("Please fix the errors above and try again.")
      return
    }

    setIsSubmitting(true)
    setFormStatus('submitting')
    setStatusMessage("Sending your message...")

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setFormStatus('success')
        setStatusMessage("Message sent successfully! I'll get back to you soon.")
        
        toast({
          title: "Message sent successfully!",
          description: "Thank you for reaching out. I'll get back to you within 24 hours.",
          variant: "default",
        })
        
        // Reset form
        setFormData({ 
          name: "", 
          email: "", 
          message: "", 
          honeypot: "",
          timestamp: Date.now().toString()
        })
        setErrors({})
        
        // Clear success message after 5 seconds
        setTimeout(() => {
          setFormStatus('idle')
          setStatusMessage("")
        }, 5000)
      } else {
        const errorData = await response.json()
        const errorMessage = errorData.message || 'Failed to send message'
        setFormStatus('error')
        setStatusMessage(errorMessage)
        throw new Error(errorMessage)
      }
    } catch (error) {
      console.error('Contact form error:', error)
      const errorMessage = error instanceof Error ? error.message : "Something went wrong. Please try again."
      setFormStatus('error')
      setStatusMessage(errorMessage)
      
      toast({
        title: "Error sending message",
        description: errorMessage,
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const getStatusIcon = () => {
    switch (formStatus) {
      case 'success':
        return <CheckCircle className="w-5 h-5 text-green-500" />
      case 'error':
        return <XCircle className="w-5 h-5 text-red-500" />
      case 'submitting':
        return <AlertCircle className="w-5 h-5 text-blue-500 animate-pulse" />
      default:
        return null
    }
  }

  const getStatusStyles = () => {
    switch (formStatus) {
      case 'success':
        return "bg-green-50 border-green-200 text-green-800"
      case 'error':
        return "bg-red-50 border-red-200 text-red-800"
      case 'submitting':
        return "bg-blue-50 border-blue-200 text-blue-800"
      default:
        return ""
    }
  }

  return (
    <div className="space-y-6">
      {/* Status Message */}
      {formStatus !== 'idle' && (
        <div className={`p-4 rounded-lg border ${getStatusStyles()} flex items-center gap-3`}>
          {getStatusIcon()}
          <p className="font-montserrat text-sm font-medium">{statusMessage}</p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <Input
            placeholder="Your Name"
            value={formData.name}
            onChange={(e) => handleInputChange('name', e.target.value)}
            className={`bg-slate-700 border-slate-600 text-white placeholder:text-gray-400 rounded-lg text-lg py-4 ${
              errors.name ? 'border-red-500' : ''
            }`}
            disabled={isSubmitting}
          />
          {errors.name && (
            <p className="text-red-400 text-sm mt-1 font-montserrat flex items-center gap-2">
              <XCircle className="w-4 h-4" />
              {errors.name}
            </p>
          )}
        </div>
        
        <div>
          <Input
            type="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={(e) => handleInputChange('email', e.target.value)}
            className={`bg-slate-700 border-slate-600 text-white placeholder:text-gray-400 rounded-lg text-lg py-4 ${
              errors.email ? 'border-red-500' : ''
            }`}
            disabled={isSubmitting}
          />
          {errors.email && (
            <p className="text-red-400 text-sm mt-1 font-montserrat flex items-center gap-2">
              <XCircle className="w-4 h-4" />
              {errors.email}
            </p>
          )}
        </div>
        
        <div>
          <Textarea
            placeholder="Your Message"
            rows={6}
            value={formData.message}
            onChange={(e) => handleInputChange('message', e.target.value)}
            className={`bg-slate-700 border-slate-600 text-white placeholder:text-gray-400 rounded-lg text-lg py-4 ${
              errors.message ? 'border-red-500' : ''
            }`}
            disabled={isSubmitting}
          />
          {errors.message && (
            <p className="text-red-400 text-sm mt-1 font-montserrat flex items-center gap-2">
              <XCircle className="w-4 h-4" />
              {errors.message}
            </p>
          )}
        </div>
        
        {/* Honeypot field - hidden from users but visible to bots */}
        <div style={{ position: 'absolute', left: '-9999px', opacity: 0 }}>
          <Input
            type="text"
            name="website"
            value={formData.honeypot}
            onChange={(e) => handleInputChange('honeypot', e.target.value)}
            tabIndex={-1}
            autoComplete="off"
          />
        </div>
        
        <Button 
          type="submit"
          disabled={isSubmitting}
          className="bg-emerald-400 hover:bg-emerald-500 disabled:bg-emerald-600 disabled:cursor-not-allowed text-white font-bold px-8 md:px-12 py-4 md:py-6 text-base md:text-lg rounded-lg font-bebas transition-colors flex items-center gap-2"
        >
          {isSubmitting ? (
            <>
              <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
              SENDING...
            </>
          ) : (
            <>
              <Send className="w-4 h-4" />
              SEND MESSAGE
            </>
          )}
        </Button>
      </form>
    </div>
  )
} 