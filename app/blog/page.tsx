import { Metadata } from "next"
import BlogClient from "@/components/blog-client"

export const metadata: Metadata = {
  title: "Blog - Engjell Rraklli",
  description: "Read insights on entrepreneurship, business scaling, 3D visualization, and technology from Engjell Rraklli. Expert articles on scaling service-based businesses and innovation.",
  keywords: ["blog", "entrepreneurship articles", "business scaling", "3D visualization blog", "technology insights", "business growth", "innovation"],
  openGraph: {
    title: "Blog - Engjell Rraklli",
    description: "Read insights on entrepreneurship, business scaling, 3D visualization, and technology from Engjell Rraklli. Expert articles on scaling service-based businesses and innovation.",
    type: "website",
    url: "https://engjellrraklli.com/blog",
    images: [
      {
        url: "/DSC0048-1.jpg",
        width: 1200,
        height: 630,
        alt: "Blog - Engjell Rraklli"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog - Engjell Rraklli",
    description: "Read insights on entrepreneurship, business scaling, 3D visualization, and technology from Engjell Rraklli.",
    images: ["/DSC0048-1.jpg"]
  },
  alternates: {
    canonical: "https://engjellrraklli.com/blog"
  }
}

export default function BlogPage() {
  return <BlogClient />
}
