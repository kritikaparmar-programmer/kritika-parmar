import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { getAllPosts } from "@/lib/blog"

export default function BlogPage() {
  const posts = getAllPosts()

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <main className="max-w-2xl mx-auto px-6 md:px-8 py-8 md:py-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2 md:mb-4">Blog</h1>
        <p className="text-base md:text-lg text-gray-700 mb-8 md:mb-12">
          Thoughts on deep learning, technology, and life
        </p>

        <div className="space-y-8 md:space-y-12">
          {posts.map((post) => (
            <Link href={`/blog/${post.slug}`} key={post.slug} className="block group">
              <div className="pb-8 md:pb-12 border-b border-gray-200 last:border-b-0">
                <h2 className="text-xl md:text-2xl font-bold text-gray-900 group-hover:text-red-600 transition-colors mb-2">
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
                  <Badge variant="secondary" className="bg-red-100 text-red-800 text-xs">
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
