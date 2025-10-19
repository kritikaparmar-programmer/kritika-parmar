import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Github } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function ProjectsPage() {
  const projects = [
    {
      id: 1,
      title: "RAG Pipeline",
      description:
        "Retrieval-Augmented Generation pipeline for building intelligent question-answering systems with semantic search and LLM integration.",
      tags: ["RAG", "LLM", "Python", "Semantic Search"],
      github: "https://github.com/kritikaparmar-programmer/RAG-Pipeline",
    },
    {
      id: 2,
      title: "HealthCheck",
      description: "Health checking and monitoring system for tracking application health and performance metrics.",
      tags: ["Monitoring", "Python", "Health Check", "DevOps"],
      github: "https://github.com/kritikaparmar-programmer/HealthCheck",
    },
    {
      id: 3,
      title: "Product Name NER",
      description:
        "Named Entity Recognition model for extracting and classifying product names from text using NLP techniques.",
      tags: ["NLP", "NER", "Python", "Machine Learning"],
      github: "https://github.com/kritikaparmar-programmer/Product_Name_NER",
    },
    {
      id: 4,
      title: "WEblog",
      description: "A full-featured blogging platform with rich content management and user engagement features.",
      tags: ["Web", "Blog", "Full-Stack", "JavaScript"],
      github: "https://github.com/kritikaparmar-programmer/WEblog",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <main className="max-w-3xl mx-auto px-4 py-8 md:py-12">
        <div className="space-y-8 md:space-y-12">
          {projects.map((project) => (
            <div key={project.id} className="pb-8 md:pb-12 border-b border-gray-200 last:border-b-0">
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2 md:mb-3">{project.title}</h3>
              <p className="text-gray-700 mb-4 leading-relaxed text-sm md:text-base">{project.description}</p>

              <div className="flex flex-wrap gap-2 mb-4 md:mb-6">
                {project.tags.map((tag, i) => (
                  <Badge key={i} className="bg-pink-100 text-pink-800 text-xs md:text-sm">
                    {tag}
                  </Badge>
                ))}
              </div>

              <div className="flex gap-2 md:gap-3">
                <Link href={project.github} target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" size="sm" className="gap-2 bg-transparent text-xs md:text-sm">
                    <Github className="h-4 w-4" />
                    GitHub
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  )
}
