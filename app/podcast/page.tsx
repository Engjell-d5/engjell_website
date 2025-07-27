import { Metadata } from "next"
import PodcastClient from "@/components/podcast-client"

export const metadata: Metadata = {
  title: "Podcast - Scaling the Unscalable",
  description: "Listen to 'Scaling the Unscalable' podcast with Engjell Rraklli. Deep conversations with entrepreneurs, innovators, and thought leaders shaping the future of technology and business.",
  keywords: ["podcast", "scaling the unscalable", "entrepreneur podcast", "business podcast", "technology podcast", "innovation podcast", "entrepreneurship"],
  openGraph: {
    title: "Podcast - Scaling the Unscalable",
    description: "Listen to 'Scaling the Unscalable' podcast with Engjell Rraklli. Deep conversations with entrepreneurs, innovators, and thought leaders shaping the future of technology and business.",
    type: "website",
    url: "https://engjellrraklli.com/podcast",
    images: [
      {
        url: "/IMG_0425-scaled.jpg",
        width: 1200,
        height: 630,
        alt: "Scaling the Unscalable Podcast"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Podcast - Scaling the Unscalable",
    description: "Listen to 'Scaling the Unscalable' podcast with Engjell Rraklli.",
    images: ["/IMG_0425-scaled.jpg"]
  },
  alternates: {
    canonical: "https://engjellrraklli.com/podcast"
  }
}

export default function PodcastPage() {
  return <PodcastClient />
}
