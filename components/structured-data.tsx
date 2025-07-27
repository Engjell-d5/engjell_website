export default function StructuredData() {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Engjell Rraklli",
    "url": "https://engjellrraklli.com",
    "image": "https://engjellrraklli.com/DSC0048-1.jpg",
    "description": "Entrepreneur, 3D visualization expert, and host of 'Scaling the Unscalable' podcast",
    "jobTitle": "Entrepreneur & 3D Visualization Expert",
    "worksFor": {
      "@type": "Organization",
      "name": "Division5"
    },
    "sameAs": [
      "https://threads.net/@engjellrraklli",
      "https://linkedin.com/in/engjell-rraklli-a8b20a68",
      "https://instagram.com/engjellrraklli",
      "https://www.youtube.com/@engjellrraklli",
      "https://division5.co",
      "https://division3d.co"
    ],
    "knowsAbout": [
      "Entrepreneurship",
      "3D Visualization",
      "Business Scaling",
      "Technology",
      "Innovation"
    ]
  }

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Engjell Rraklli",
    "url": "https://engjellrraklli.com",
    "description": "Entrepreneur, 3D visualization expert, and host of 'Scaling the Unscalable' podcast",
    "author": {
      "@type": "Person",
      "name": "Engjell Rraklli"
    },
    "publisher": {
      "@type": "Person",
      "name": "Engjell Rraklli"
    }
  }

  const podcastSchema = {
    "@context": "https://schema.org",
    "@type": "PodcastSeries",
    "name": "Scaling the Unscalable",
    "description": "Deep conversations with entrepreneurs, innovators, and thought leaders shaping the future of technology and business.",
    "url": "https://engjellrraklli.com/podcast",
    "author": {
      "@type": "Person",
      "name": "Engjell Rraklli"
    },
    "publisher": {
      "@type": "Person",
      "name": "Engjell Rraklli"
    }
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(personSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(podcastSchema),
        }}
      />
    </>
  )
} 