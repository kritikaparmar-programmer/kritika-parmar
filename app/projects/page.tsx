import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Github, ExternalLink } from "lucide-react"

export default function ProjectsPage() {
  // Sample projects data
  const projects = [
    {
      id: 1,
      title: "Neural Style Transfer App",
      description: "A web application that applies artistic styles to images using deep learning techniques.",
      image: "/placeholder.svg?height=300&width=600&text=Neural+Style+Transfer",
      tags: ["PyTorch", "React", "TensorFlow.js", "Computer Vision"],
      github: "#",
      demo: "#",
    },
    {
      id: 2,
      title: "NLP Sentiment Analyzer",
      description: "An advanced sentiment analysis tool that uses transformer models to analyze text emotions.",
      image: "/placeholder.svg?height=300&width=600&text=Sentiment+Analyzer",
      tags: ["BERT", "Hugging Face", "Python", "NLP"],
      github: "#",
      demo: "#",
    },
    {
      id: 3,
      title: "Medical Image Segmentation",
      description: "Deep learning models for accurate segmentation of medical images to assist in diagnostics.",
      image: "/placeholder.svg?height=300&width=600&text=Medical+Segmentation",
      tags: ["U-Net", "PyTorch", "Healthcare", "Computer Vision"],
      github: "#",
      demo: "#",
    },
    {
      id: 4,
      title: "Reinforcement Learning Game AI",
      description: "An AI agent trained using reinforcement learning to play strategic games at expert level.",
      image: "/placeholder.svg?height=300&width=600&text=RL+Game+AI",
      tags: ["Reinforcement Learning", "PyTorch", "OpenAI Gym", "Game AI"],
      github: "#",
      demo: "#",
    },
    {
      id: 5,
      title: "Time Series Forecasting Tool",
      description: "Advanced deep learning models for accurate prediction of time series data in various domains.",
      image: "/placeholder.svg?height=300&width=600&text=Time+Series",
      tags: ["LSTM", "Prophet", "TensorFlow", "Time Series"],
      github: "#",
      demo: "#",
    },
    {
      id: 6,
      title: "Voice Emotion Recognition",
      description: "A system that detects emotions from voice recordings using convolutional neural networks.",
      image: "/placeholder.svg?height=300&width=600&text=Voice+Emotion",
      tags: ["Audio Processing", "CNN", "Keras", "Speech Recognition"],
      github: "#",
      demo: "#",
    },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header Banner */}
      <div className="w-full bg-gradient-to-r from-pink-500 to-purple-600 py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter text-white sm:text-5xl">My Projects</h1>
              <p className="max-w-[700px] text-white/90 md:text-xl/relaxed">
                Exploring the frontiers of deep learning and artificial intelligence
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="flex-1 w-full py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <Card key={project.id} className="overflow-hidden border border-pink-100 dark:border-pink-900/50">
                <div className="relative h-48">
                  <Image src={project.image || "/placeholder.svg"} alt={project.title} className="object-cover" fill />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, i) => (
                      <Badge
                        key={i}
                        variant="secondary"
                        className="bg-pink-100 text-pink-800 dark:bg-pink-900/30 dark:text-pink-300"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" className="gap-1">
                      <Github className="h-4 w-4" />
                      Code
                    </Button>
                    <Button size="sm" className="gap-1 bg-pink-500 hover:bg-pink-600">
                      <ExternalLink className="h-4 w-4" />
                      Demo
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="w-full py-12 bg-pink-50 dark:bg-pink-950/10">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-2xl font-bold">Interested in collaborating?</h2>
              <p className="max-w-[500px] text-gray-500 dark:text-gray-400">
                I'm always open to new projects and research opportunities in deep learning
              </p>
            </div>
            <Button className="bg-pink-500 hover:bg-pink-600">Get in Touch</Button>
          </div>
        </div>
      </div>
    </div>
  )
}
