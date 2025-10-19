import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Github, ExternalLink } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function ProjectsPage() {
  const projects = [
    {
      id: 1,
      title: "Neural Style Transfer",
      description: "Deep learning model for applying artistic styles to images using PyTorch and VGG-19.",
      tags: ["PyTorch", "Computer Vision", "Deep Learning"],
      github: "https://github.com",
      demo: "https://example.com",
    },
    {
      id: 2,
      title: "NLP Sentiment Analyzer",
      description: "Transformer-based sentiment analysis tool using BERT and Hugging Face transformers.",
      tags: ["NLP", "BERT", "Python"],
      github: "https://github.com",
      demo: "https://example.com",
    },
    {
      id: 3,
      title: "Medical Image Segmentation",
      description: "U-Net implementation for medical image segmentation using PyTorch.",
      tags: ["Computer Vision", "Healthcare", "U-Net"],
      github: "https://github.com",
      demo: "https://example.com",
    },
    {
      id: 4,
      title: "Time Series Forecasting",
      description: "LSTM-based model for time series prediction and forecasting.",
      tags: ["LSTM", "TensorFlow", "Time Series"],
      github: "https://github.com",
      demo: "https://example.com",
    },
    {
      id: 5,
      title: "Voice Emotion Recognition",
      description: "CNN-based system to detect emotions from voice recordings.",
      tags: ["Audio", "CNN", "Speech Processing"],
      github: "https://github.com",
      demo: "https://example.com",
    },
    {
      id: 6,
      title: "Reinforcement Learning Game AI",
      description: "AI agent trained using DQN to play games at expert level.",
      tags: ["Reinforcement Learning", "PyTorch", "Game AI"],
      github: "https://github.com",
      demo: "https://example.com",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <main className="max-w-3xl mx-auto px-4 py-12">
        <h1 className="text-5xl font-bold text-gray-900 mb-4">Projects</h1>
        <p className="text-lg text-gray-700 mb-12">My GitHub projects and experiments</p>

        <div className="space-y-12">
          {projects.map((project) => (
            <div key={project.id} className="pb-12 border-b border-gray-200 last:border-b-0">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">{project.title}</h3>
              <p className="text-gray-700 mb-4 leading-relaxed">{project.description}</p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag, i) => (
                  <Badge key={i} className="bg-pink-100 text-pink-800">
                    {tag}
                  </Badge>
                ))}
              </div>

              <div className="flex gap-3">
                <Link href={project.github} target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" size="sm" className="gap-2 bg-transparent">
                    <Github className="h-4 w-4" />
                    GitHub
                  </Button>
                </Link>
                <Link href={project.demo} target="_blank" rel="noopener noreferrer">
                  <Button size="sm" className="gap-2 bg-pink-600 hover:bg-pink-700">
                    <ExternalLink className="h-4 w-4" />
                    Demo
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
