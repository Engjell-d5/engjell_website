import { Metadata } from "next"
import { notFound } from "next/navigation"
import { getPostBySlug } from "@/lib/blogger"
import BlogPostClient from "@/components/blog-post-client"

interface BlogPostPageProps {
  params: {
    slug: string
  }
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const post = await getPostBySlug(params.slug)

  if (!post) {
    return {
      title: "Post Not Found - Engjell Rraklli",
      description: "The requested blog post could not be found."
    }
  }

  return {
    title: `${post.title} - Engjell Rraklli`,
    description: post.excerpt,
    keywords: [...post.labels, "blog", "entrepreneurship", "business scaling", "3D visualization"],
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      url: `https://engjellrraklli.com/blog/${post.slug}`,
      images: post.images?.[0] ? [
        {
          url: post.images[0].url,
          width: "100vw",
          height: post.images[0].height,
          alt: post.title
        }
      ] : [
        {
          url: "/DSC0048-1.jpg",
          width: 1200,
          height: 630,
          alt: post.title
        }
      ],
      publishedTime: post.published,
      modifiedTime: post.updated,
      authors: [post.author.displayName]
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: post.images?.[0]?.url || "/DSC0048-1.jpg"
    },
    alternates: {
      canonical: `https://engjellrraklli.com/blog/${post.slug}`
    }
  }
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const post = await getPostBySlug(params.slug)

  if (!post) {
    notFound()
  }

  return <BlogPostClient post={post} />
}
