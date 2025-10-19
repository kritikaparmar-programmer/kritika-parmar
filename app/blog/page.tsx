import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function BlogPage() {
  const posts = [
    {
      id: 1,
      slug: "transformers-guide",
      title: "Understanding Transformers: A Visual Guide",
      excerpt: "Let's dive into the magical world of attention mechanisms and see how transformers revolutionized NLP.",
      date: "June 2, 2025",
      readTime: "8 min read",
      category: "Tech",
    },
    {
      id: 2,
      slug: "computer-vision",
      title: "Computer Vision Magic: From Pixels to Insights",
      excerpt: "Exploring the latest breakthroughs in computer vision and how they're changing the world around us.",
      date: "May 20, 2025",
      readTime: "10 min read",
      category: "Tech",
    },
    {
      id: 3,
      slug: "ai-ethics",
      title: "Ethics in AI: Building Responsible Systems",
      excerpt: "Why ethical considerations should be at the heart of every AI project we build.",
      date: "May 5, 2025",
      readTime: "9 min read",
      category: "Tech",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <main className="max-w-3xl mx-auto px-4 py-8 md:py-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2 md:mb-4">Blog</h1>
        <p className="text-base md:text-lg text-gray-700 mb-8 md:mb-12">
          Thoughts on deep learning, technology, and life
        </p>

        <div className="space-y-8 md:space-y-12">
          {posts.map((post) => (
            <Link href={`/blog/${post.slug}`} key={post.id} className="block group">
              <div className="pb-8 md:pb-12 border-b border-gray-200 last:border-b-0">
                <h2 className="text-xl md:text-2xl font-bold text-gray-900 group-hover:text-pink-600 transition-colors mb-2">
                  {post.title}
                </h2>

                <p className="text-gray-700 mb-4 leading-relaxed text-sm md:text-base">{post.excerpt}</p>

                <div className="flex flex-wrap items-center gap-3 md:gap-6 text-xs md:text-sm text-gray-500">
                  <span className="flex items-center gap-1 md:gap-2">
                    <Calendar className="h-4 w-4" />
                    {post.date}
                  </span>
                  <span className="flex items-center gap-1 md:gap-2">
                    <Clock className="h-4 w-4" />
                    {post.readTime}
                  </span>
                  <Badge variant="secondary" className="bg-pink-100 text-pink-800 text-xs">
                    {post.category}
                  </Badge>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  )
}
