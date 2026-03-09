import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { getPostBySlug, getAllPosts } from "@/lib/blog"
import Markdown from "react-markdown"

export function generateStaticParams() {
  const posts = getAllPosts()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug)

  if (!post) {
    return (
      <div className="min-h-screen bg-white">
        <Navbar />
        <div className="max-w-2xl mx-auto px-6 md:px-8 py-12">
          <p className="text-gray-600">Post not found</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <main className="max-w-2xl mx-auto px-6 md:px-8 py-12 md:py-16">
        <Link href="/blog" className="flex items-center gap-2 text-amber-700 hover:text-amber-800 mb-8 font-medium text-sm">
          <ArrowLeft className="h-4 w-4" />
          Back to Blog
        </Link>

        <article>
          <header className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">{post.title}</h1>
            <p className="text-gray-500 text-sm md:text-base mb-8">
              {post.date} • {post.readTime}
            </p>
          </header>

          <div className="prose prose-lg max-w-none">
            <Markdown
              components={{
                h1: ({ node, ...props }) => <h1 className="text-3xl font-bold mt-8 mb-4 text-gray-900" {...props} />,
                h2: ({ node, ...props }) => <h2 className="text-2xl font-bold mt-6 mb-3 text-gray-900" {...props} />,
                h3: ({ node, ...props }) => <h3 className="text-xl font-bold mt-5 mb-2 text-gray-900" {...props} />,
                p: ({ node, ...props }) => <p className="text-gray-700 mb-4 leading-relaxed" {...props} />,
                li: ({ node, ...props }) => <li className="text-gray-700 mb-2 ml-4" {...props} />,
                ul: ({ node, ...props }) => <ul className="list-disc mb-4" {...props} />,
                ol: ({ node, ...props }) => <ol className="list-decimal mb-4" {...props} />,
                a: ({ node, ...props }) => <a className="text-orange-600 hover:text-orange-700 underline" {...props} />,
                code: ({ node, ...props }) => <code className="bg-gray-100 px-2 py-1 rounded text-sm" {...props} />,
                pre: ({ node, ...props }) => <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto mb-4" {...props} />,
              }}
            >
              {post.content}
            </Markdown>
          </div>
        </article>
      </main>

      <Footer />
    </div>
  )
}
