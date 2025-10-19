import Link from "next/link"
import Image from "next/image"
import { ArrowLeft } from "lucide-react"
import CommentsSection from "@/components/comments-section"
import Navbar from "@/components/navbar"

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const posts: Record<string, any> = {
    "transformers-guide": {
      title: "Understanding Transformers: A Visual Guide",
      date: "June 2, 2025",
      readTime: "8 min read",
      image: "/placeholder.svg?height=400&width=800&text=Transformers",
      content: `
Transformers have revolutionized the field of artificial intelligence, particularly in natural language processing. In this post, we'll dive deep into understanding how these powerful architectures work and why they've become the foundation of modern AI systems like ChatGPT, BERT, and many others.

Why Transformers Changed Everything

1. Parallelization: Unlike RNNs, transformers can process all tokens simultaneously, making them much faster to train.

2. Long-range dependencies: They can capture relationships between distant words in a sequence.

3. Transfer learning: Pre-trained models like BERT and GPT work amazingly well for various downstream tasks.

The Architecture Breakdown

The transformer consists of an encoder and decoder stack. The encoder takes the input and transforms it into a continuous representation. The decoder then generates the output from this representation.

Key components include:
- Multi-Head Attention: Allows the model to focus on different parts of the input
- Feed-Forward Networks: Processes the attended information
- Residual Connections: Helps with training deep networks
- Layer Normalization: Stabilizes training

Real-World Applications

Transformers power ChatGPT, GPT models, Google Translate, GitHub Copilot, and DALL-E. They have become the foundation of modern AI systems.
      `,
    },
    "computer-vision": {
      title: "Computer Vision Magic: From Pixels to Insights",
      date: "May 20, 2025",
      readTime: "10 min read",
      image: "/placeholder.svg?height=400&width=800&text=Computer+Vision",
      content: `
Computer vision is a field of artificial intelligence that trains computers to interpret and understand the visual world using digital images and videos.

Fundamental Concepts

1. Image Processing: The process of manipulating images to enhance or extract information.

2. Feature Detection: Identifying important patterns and structures in images.

3. Object Recognition: Classifying and localizing objects within images.

4. Semantic Segmentation: Assigning labels to pixels in an image.

Deep Learning in Computer Vision

Convolutional Neural Networks (CNNs) have become the standard architecture for computer vision tasks. They automatically learn the features needed for detection or classification from raw images.

Applications

Computer vision is used in autonomous vehicles, medical imaging, facial recognition, augmented reality, and robotics. It continues to advance rapidly with new architectures and techniques emerging regularly.
      `,
    },
    "ai-ethics": {
      title: "Ethics in AI: Building Responsible Systems",
      date: "May 5, 2025",
      readTime: "9 min read",
      image: "/placeholder.svg?height=400&width=800&text=Ethics",
      content: `
As AI systems become more powerful and prevalent, ethical considerations have become crucial in their development and deployment.

Key Ethical Concerns

1. Bias: AI systems can perpetuate and amplify existing biases in training data.

2. Transparency: Black-box models can make it difficult to understand how decisions are made.

3. Privacy: AI systems often require large amounts of data, raising privacy concerns.

4. Accountability: Who is responsible when AI systems cause harm?

Building Responsible AI

We must prioritize fairness, transparency, and accountability in AI development. This includes diverse teams, regular audits, and considering the societal impact of our systems.

The Future

As AI becomes more integrated into society, establishing clear ethical guidelines and standards will be essential for ensuring that these powerful technologies are used responsibly and for the benefit of all.
      `,
    },
  }

  const post = posts[params.slug]

  if (!post) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-purple-50">
        <Navbar />
        <div className="max-w-3xl mx-auto px-4 py-12">
          <p className="text-gray-600">Post not found</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-purple-50">
      <Navbar />

      <div className="max-w-3xl mx-auto px-4 py-12">
        <Link href="/blog" className="flex items-center gap-2 text-pink-600 hover:text-pink-700 mb-8 font-medium">
          <ArrowLeft className="h-4 w-4" />
          Back to Blog
        </Link>

        <article>
          <header className="mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">{post.title}</h1>
            <p className="text-gray-500 mb-6">
              {post.date} • {post.readTime}
            </p>
            <div className="relative h-96 rounded-2xl overflow-hidden border-4 border-pink-100 shadow-lg">
              <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
            </div>
          </header>

          <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 border border-pink-100 mb-12 shadow-lg whitespace-pre-wrap text-gray-700 leading-relaxed">
            {post.content}
          </div>
        </article>

        <CommentsSection postTitle={post.title} />
      </div>
    </div>
  )
}
