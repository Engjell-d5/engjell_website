import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Mail, Phone, MapPin } from "lucide-react"
import Footer from "@/components/footer"
import SubscribeSection from "@/components/subscribe-section"
import Image from "next/image"
import { Metadata } from "next"
import HomeClient from "@/components/home-client"

export const metadata: Metadata = {
  title: "Engjell Rraklli - Entrepreneur, 3D Expert & Podcast Host",
  description: "Engjell Rraklli is an entrepreneur, 3D visualization expert, and host of 'Scaling the Unscalable' podcast. Discover insights on business scaling, 3D technology, and innovation.",
  keywords: ["entrepreneur", "3D visualization", "podcast", "business scaling", "technology", "innovation", "engjell rraklli"],
  openGraph: {
    title: "Engjell Rraklli - Entrepreneur, 3D Expert & Podcast Host",
    description: "Entrepreneur, 3D visualization expert, and host of 'Scaling the Unscalable' podcast. Discover insights on business scaling, 3D technology, and innovation.",
    type: "website",
    url: "https://engjellrraklli.com",
    images: [
      {
        url: "/DSC0048-1.jpg",
        width: 1200,
        height: 630,
        alt: "Engjell Rraklli - Entrepreneur and 3D Expert"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Engjell Rraklli - Entrepreneur, 3D Expert & Podcast Host",
    description: "Entrepreneur, 3D visualization expert, and host of 'Scaling the Unscalable' podcast.",
    images: ["/DSC0048-1.jpg"]
  },
  alternates: {
    canonical: "https://engjellrraklli.com"
  }
}

export default function HomePage() {
  return <HomeClient />
}
