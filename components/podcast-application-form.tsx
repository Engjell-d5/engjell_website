"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { toast } from "@/components/ui/use-toast"
import { CheckCircle, XCircle, AlertCircle, Send, Building2, Users, TrendingUp, Award } from "lucide-react"

interface ApplicationData {
  // Personal Information
  name: string
  email: string
  phone: string
  linkedin: string
  website: string
  
  // Business Information
  companyName: string
  companyWebsite: string
  industry: string
  companySize: string
  revenue: string
  yearsInBusiness: string
  
  // Business Details
  businessDescription: string
  targetMarket: string
  uniqueValue: string
  
  // Success Metrics
  keyAchievements: string
  growthMetrics: string
  challengesOvercome: string
  
  // Podcast Topics
  topicsOfInterest: string
  storyHighlights: string
  audienceValue: string
  
  // Technical
  honeypot: string
  timestamp: string
}

type FormStatus = 'idle' | 'submitting' | 'success' | 'error'

export default function PodcastApplicationForm() {
  const [formData, setFormData] = useState<ApplicationData>({
    name: "",
    email: "",
    phone: "",
    linkedin: "",
    website: "",
    companyName: "",
    companyWebsite: "",
    industry: "",
    companySize: "",
    revenue: "",
    yearsInBusiness: "",
    businessDescription: "",
    targetMarket: "",
    uniqueValue: "",
    keyAchievements: "",
    growthMetrics: "",
    challengesOvercome: "",
    topicsOfInterest: "",
    storyHighlights: "",
    audienceValue: "",
    honeypot: "",
    timestamp: ""
  })
  
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [errors, setErrors] = useState<Partial<ApplicationData>>({})
  const [formStatus, setFormStatus] = useState<FormStatus>('idle')
  const [statusMessage, setStatusMessage] = useState("")

  // Set timestamp when component mounts
  useEffect(() => {
    setFormData(prev => ({ ...prev, timestamp: Date.now().toString() }))
  }, [])

  const validateForm = (): boolean => {
    const newErrors: Partial<ApplicationData> = {}

    // Required fields
    if (!formData.name.trim()) {
      newErrors.name = "Name is required"
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required"
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address"
    }

    if (!formData.companyName.trim()) {
      newErrors.companyName = "Company name is required"
    }

    if (!formData.industry.trim()) {
      newErrors.industry = "Industry is required"
    }

    if (!formData.businessDescription.trim()) {
      newErrors.businessDescription = "Business description is required"
    } else if (formData.businessDescription.trim().length < 50) {
      newErrors.businessDescription = "Business description must be at least 50 characters"
    }

    if (!formData.keyAchievements.trim()) {
      newErrors.keyAchievements = "Key achievements are required"
    } else if (formData.keyAchievements.trim().length < 50) {
      newErrors.keyAchievements = "Key achievements must be at least 50 characters"
    }

    if (!formData.topicsOfInterest.trim()) {
      newErrors.topicsOfInterest = "Topics of interest are required"
    }

    if (!formData.storyHighlights.trim()) {
      newErrors.storyHighlights = "Story highlights are required"
    } else if (formData.storyHighlights.trim().length < 100) {
      newErrors.storyHighlights = "Story highlights must be at least 100 characters"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleInputChange = (field: keyof ApplicationData, value: string) => {
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
    setStatusMessage("Submitting your application...")

    try {
      const response = await fetch('/api/podcast-apply', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setFormStatus('success')
        setStatusMessage("Application submitted successfully! We'll review and get back to you within 1-2 weeks.")
        
        toast({
          title: "Application submitted!",
          description: "Thank you for your interest. We'll review your application and contact you soon.",
          variant: "default",
        })
        
        // Reset form
        setFormData({
          name: "",
          email: "",
          phone: "",
          linkedin: "",
          website: "",
          companyName: "",
          companyWebsite: "",
          industry: "",
          companySize: "",
          revenue: "",
          yearsInBusiness: "",
          businessDescription: "",
          targetMarket: "",
          uniqueValue: "",
          keyAchievements: "",
          growthMetrics: "",
          challengesOvercome: "",
          topicsOfInterest: "",
          storyHighlights: "",
          audienceValue: "",
          honeypot: "",
          timestamp: Date.now().toString()
        })
        setErrors({})
        
        // Clear success message after 8 seconds
        setTimeout(() => {
          setFormStatus('idle')
          setStatusMessage("")
        }, 8000)
      } else {
        const errorData = await response.json()
        const errorMessage = errorData.message || 'Failed to submit application'
        setFormStatus('error')
        setStatusMessage(errorMessage)
        throw new Error(errorMessage)
      }
    } catch (error) {
      console.error('Podcast application error:', error)
      const errorMessage = error instanceof Error ? error.message : "Something went wrong. Please try again."
      setFormStatus('error')
      setStatusMessage(errorMessage)
      
      toast({
        title: "Error submitting application",
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
    <div className="space-y-8">
      {/* Status Message */}
      {formStatus !== 'idle' && (
        <div className={`p-4 rounded-lg border ${getStatusStyles()} flex items-center gap-3`}>
          {getStatusIcon()}
          <p className="font-montserrat text-sm font-medium">{statusMessage}</p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-8">
        {/* Personal Information */}
        <div className="space-y-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 bg-emerald-400/20 rounded-full flex items-center justify-center">
              <span className="text-emerald-400 font-bebas text-sm">1</span>
            </div>
            <h3 className="text-xl font-bebas text-white">Personal Information</h3>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <Input
                placeholder="Full Name *"
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
                placeholder="Email Address *"
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
              <Input
                type="tel"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={(e) => handleInputChange('phone', e.target.value)}
                className="bg-slate-700 border-slate-600 text-white placeholder:text-gray-400 rounded-lg text-lg py-4"
                disabled={isSubmitting}
              />
            </div>
            
            <div>
              <Input
                placeholder="LinkedIn Profile"
                value={formData.linkedin}
                onChange={(e) => handleInputChange('linkedin', e.target.value)}
                className="bg-slate-700 border-slate-600 text-white placeholder:text-gray-400 rounded-lg text-lg py-4"
                disabled={isSubmitting}
              />
            </div>
            
            <div className="md:col-span-2">
              <Input
                placeholder="Personal Website (optional)"
                value={formData.website}
                onChange={(e) => handleInputChange('website', e.target.value)}
                className="bg-slate-700 border-slate-600 text-white placeholder:text-gray-400 rounded-lg text-lg py-4"
                disabled={isSubmitting}
              />
            </div>
          </div>
        </div>

        {/* Business Information */}
        <div className="space-y-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 bg-emerald-400/20 rounded-full flex items-center justify-center">
              <Building2 className="w-4 h-4 text-emerald-400" />
            </div>
            <h3 className="text-xl font-bebas text-white">Business Information</h3>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <Input
                placeholder="Company Name *"
                value={formData.companyName}
                onChange={(e) => handleInputChange('companyName', e.target.value)}
                className={`bg-slate-700 border-slate-600 text-white placeholder:text-gray-400 rounded-lg text-lg py-4 ${
                  errors.companyName ? 'border-red-500' : ''
                }`}
                disabled={isSubmitting}
              />
              {errors.companyName && (
                <p className="text-red-400 text-sm mt-1 font-montserrat flex items-center gap-2">
                  <XCircle className="w-4 h-4" />
                  {errors.companyName}
                </p>
              )}
            </div>
            
            <div>
              <Input
                placeholder="Company Website"
                value={formData.companyWebsite}
                onChange={(e) => handleInputChange('companyWebsite', e.target.value)}
                className="bg-slate-700 border-slate-600 text-white placeholder:text-gray-400 rounded-lg text-lg py-4"
                disabled={isSubmitting}
              />
            </div>
            
            <div>
              <Input
                placeholder="Industry *"
                value={formData.industry}
                onChange={(e) => handleInputChange('industry', e.target.value)}
                className={`bg-slate-700 border-slate-600 text-white placeholder:text-gray-400 rounded-lg text-lg py-4 ${
                  errors.industry ? 'border-red-500' : ''
                }`}
                disabled={isSubmitting}
              />
              {errors.industry && (
                <p className="text-red-400 text-sm mt-1 font-montserrat flex items-center gap-2">
                  <XCircle className="w-4 h-4" />
                  {errors.industry}
                </p>
              )}
            </div>
            
            <div>
              <Select value={formData.companySize} onValueChange={(value) => handleInputChange('companySize', value)} disabled={isSubmitting}>
                <SelectTrigger className="bg-slate-700 border-slate-600 text-white rounded-lg text-lg py-4">
                  <SelectValue placeholder="Company Size" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1-10">1-10 employees</SelectItem>
                  <SelectItem value="11-50">11-50 employees</SelectItem>
                  <SelectItem value="51-200">51-200 employees</SelectItem>
                  <SelectItem value="201-1000">201-1000 employees</SelectItem>
                  <SelectItem value="1000+">1000+ employees</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div>
              <Select value={formData.revenue} onValueChange={(value) => handleInputChange('revenue', value)} disabled={isSubmitting}>
                <SelectTrigger className="bg-slate-700 border-slate-600 text-white rounded-lg text-lg py-4">
                  <SelectValue placeholder="Annual Revenue" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="<100k">Under $100k</SelectItem>
                  <SelectItem value="100k-500k">$100k - $500k</SelectItem>
                  <SelectItem value="500k-1m">$500k - $1M</SelectItem>
                  <SelectItem value="1m-10m">$1M - $10M</SelectItem>
                  <SelectItem value="10m-100m">$10M - $100M</SelectItem>
                  <SelectItem value="100m+">$100M+</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div>
              <Select value={formData.yearsInBusiness} onValueChange={(value) => handleInputChange('yearsInBusiness', value)} disabled={isSubmitting}>
                <SelectTrigger className="bg-slate-700 border-slate-600 text-white rounded-lg text-lg py-4">
                  <SelectValue placeholder="Years in Business" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="<1">Less than 1 year</SelectItem>
                  <SelectItem value="1-3">1-3 years</SelectItem>
                  <SelectItem value="3-5">3-5 years</SelectItem>
                  <SelectItem value="5-10">5-10 years</SelectItem>
                  <SelectItem value="10+">10+ years</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          
          <div>
            <Textarea
              placeholder="Describe your business and what you do *"
              rows={4}
              value={formData.businessDescription}
              onChange={(e) => handleInputChange('businessDescription', e.target.value)}
              className={`bg-slate-700 border-slate-600 text-white placeholder:text-gray-400 rounded-lg text-lg py-4 ${
                errors.businessDescription ? 'border-red-500' : ''
              }`}
              disabled={isSubmitting}
            />
            {errors.businessDescription && (
              <p className="text-red-400 text-sm mt-1 font-montserrat flex items-center gap-2">
                <XCircle className="w-4 h-4" />
                {errors.businessDescription}
              </p>
            )}
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <Input
                placeholder="Target Market"
                value={formData.targetMarket}
                onChange={(e) => handleInputChange('targetMarket', e.target.value)}
                className="bg-slate-700 border-slate-600 text-white placeholder:text-gray-400 rounded-lg text-lg py-4"
                disabled={isSubmitting}
              />
            </div>
            
            <div>
              <Input
                placeholder="Unique Value Proposition"
                value={formData.uniqueValue}
                onChange={(e) => handleInputChange('uniqueValue', e.target.value)}
                className="bg-slate-700 border-slate-600 text-white placeholder:text-gray-400 rounded-lg text-lg py-4"
                disabled={isSubmitting}
              />
            </div>
          </div>
        </div>

        {/* Success Metrics */}
        <div className="space-y-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 bg-emerald-400/20 rounded-full flex items-center justify-center">
              <TrendingUp className="w-4 h-4 text-emerald-400" />
            </div>
            <h3 className="text-xl font-bebas text-white">Success Metrics & Achievements</h3>
          </div>
          
          <div>
            <Textarea
              placeholder="What are your key achievements and successes? *"
              rows={4}
              value={formData.keyAchievements}
              onChange={(e) => handleInputChange('keyAchievements', e.target.value)}
              className={`bg-slate-700 border-slate-600 text-white placeholder:text-gray-400 rounded-lg text-lg py-4 ${
                errors.keyAchievements ? 'border-red-500' : ''
              }`}
              disabled={isSubmitting}
            />
            {errors.keyAchievements && (
              <p className="text-red-400 text-sm mt-1 font-montserrat flex items-center gap-2">
                <XCircle className="w-4 h-4" />
                {errors.keyAchievements}
              </p>
            )}
          </div>
          
          <div>
            <Textarea
              placeholder="What growth metrics or KPIs are you most proud of?"
              rows={3}
              value={formData.growthMetrics}
              onChange={(e) => handleInputChange('growthMetrics', e.target.value)}
              className="bg-slate-700 border-slate-600 text-white placeholder:text-gray-400 rounded-lg text-lg py-4"
              disabled={isSubmitting}
            />
          </div>
          
          <div>
            <Textarea
              placeholder="What major challenges have you overcome in your business journey?"
              rows={3}
              value={formData.challengesOvercome}
              onChange={(e) => handleInputChange('challengesOvercome', e.target.value)}
              className="bg-slate-700 border-slate-600 text-white placeholder:text-gray-400 rounded-lg text-lg py-4"
              disabled={isSubmitting}
            />
          </div>
        </div>

        {/* Podcast Topics */}
        <div className="space-y-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 bg-emerald-400/20 rounded-full flex items-center justify-center">
              <Award className="w-4 h-4 text-emerald-400" />
            </div>
            <h3 className="text-xl font-bebas text-white">Podcast Topics & Story</h3>
          </div>
          
          <div>
            <Textarea
              placeholder="What topics would you like to discuss on the podcast? *"
              rows={3}
              value={formData.topicsOfInterest}
              onChange={(e) => handleInputChange('topicsOfInterest', e.target.value)}
              className={`bg-slate-700 border-slate-600 text-white placeholder:text-gray-400 rounded-lg text-lg py-4 ${
                errors.topicsOfInterest ? 'border-red-500' : ''
              }`}
              disabled={isSubmitting}
            />
            {errors.topicsOfInterest && (
              <p className="text-red-400 text-sm mt-1 font-montserrat flex items-center gap-2">
                <XCircle className="w-4 h-4" />
                {errors.topicsOfInterest}
              </p>
            )}
          </div>
          
          <div>
            <Textarea
              placeholder="What are the most compelling highlights of your business story? *"
              rows={4}
              value={formData.storyHighlights}
              onChange={(e) => handleInputChange('storyHighlights', e.target.value)}
              className={`bg-slate-700 border-slate-600 text-white placeholder:text-gray-400 rounded-lg text-lg py-4 ${
                errors.storyHighlights ? 'border-red-500' : ''
              }`}
              disabled={isSubmitting}
            />
            {errors.storyHighlights && (
              <p className="text-red-400 text-sm mt-1 font-montserrat flex items-center gap-2">
                <XCircle className="w-4 h-4" />
                {errors.storyHighlights}
              </p>
            )}
          </div>
          
          <div>
            <Textarea
              placeholder="What value can you provide to our audience?"
              rows={3}
              value={formData.audienceValue}
              onChange={(e) => handleInputChange('audienceValue', e.target.value)}
              className="bg-slate-700 border-slate-600 text-white placeholder:text-gray-400 rounded-lg text-lg py-4"
              disabled={isSubmitting}
            />
          </div>
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
          className="w-full bg-emerald-400 hover:bg-emerald-500 disabled:bg-emerald-600 disabled:cursor-not-allowed text-white font-bold px-8 py-6 text-lg rounded-lg font-bebas transition-colors flex items-center justify-center gap-3"
        >
          {isSubmitting ? (
            <>
              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
              SUBMITTING APPLICATION...
            </>
          ) : (
            <>
              <Send className="w-5 h-5" />
              SUBMIT APPLICATION
            </>
          )}
        </Button>
      </form>
    </div>
  )
} 