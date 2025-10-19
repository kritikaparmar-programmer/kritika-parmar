import Link from "next/link"
import Image from "next/image"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Heart, Mail, Github, Twitter, Linkedin } from "lucide-react"
import Navbar from "@/components/navbar"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-purple-50">
      <Navbar />

      <main className="max-w-4xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-16"></div>

        {/* Bio Section */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {/* Profile Image */}
          <div className="flex justify-center md:justify-start">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-pink-200 to-purple-200 rounded-full blur-lg opacity-50 animate-pulse"></div>
              <div className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-white shadow-2xl bg-gradient-to-br from-pink-100 to-purple-100">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_2102.png-SEoqnoc5U26eUJmprDVAwqhJ95Hb6y.jpeg"
                  alt="Profile"
                  className="object-cover hover:scale-110 transition-transform duration-500"
                  fill
                  priority
                />
              </div>
              <div className="absolute -bottom-2 -right-2 bg-pink-500 text-white p-2 rounded-full shadow-lg">
                <Heart className="h-4 w-4" />
              </div>
            </div>
          </div>

          {/* Text Content */}
          <div className="md:col-span-2 space-y-6">
            <p className="text-gray-700 leading-relaxed mb-4 text-lg">
              Hi there. I'm a deep learning engineer who loves turning complex algorithms into real-world solutions. I'm
              passionate about building AI systems that make a meaningful impact.
            </p>

            <p className="text-gray-700 leading-relaxed mb-4 text-lg">
              My focus is on computer vision and NLP systems in production. I'm currently exploring creative
              applications of AI in healthcare and education.
            </p>

            <p className="text-gray-700 leading-relaxed mb-4 text-lg">
              {"Previously, I worked on ML infrastructure at "}
              <Link href="#" className="text-pink-600 hover:text-pink-700 font-medium underline">
                TechCorp
              </Link>
              {", developed recommendation systems at "}
              <Link href="#" className="text-pink-600 hover:text-pink-700 font-medium underline">
                StartupXYZ
              </Link>
              {", and contributed to open-source ML tools. I also founded a small AI consultancy helping startups."}
            </p>

            <p className="text-gray-700 leading-relaxed mb-4 text-lg">
              I graduated from university studying Computer Science with a focus on AI. My thesis on neural architecture
              search became the foundation for several research papers.
            </p>

            <p className="text-gray-700 leading-relaxed">
              {"I enjoy tackling technical challenges and collaborating with amazing teams. "}
              <Link href="/contact" className="text-pink-600 hover:text-pink-700 font-medium underline">
                Reach out
              </Link>
              {" if you want to build something meaningful together."}
            </p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="max-w-4xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <div className="flex flex-col space-y-3">
              <Link
                href="mailto:hi@yourname.com"
                className="flex items-center text-gray-600 hover:text-pink-600 transition-colors group"
              >
                <Mail className="h-4 w-4 mr-3 group-hover:animate-bounce" />
                <span className="group-hover:underline">hi@yourname.com</span>
              </Link>
              <Link href="#" className="flex items-center text-gray-600 hover:text-pink-600 transition-colors group">
                <Github className="h-4 w-4 mr-3 group-hover:animate-bounce" />
                <span className="group-hover:underline">GitHub</span>
              </Link>
              <Link href="#" className="flex items-center text-gray-600 hover:text-pink-600 transition-colors group">
                <Twitter className="h-4 w-4 mr-3 group-hover:animate-bounce" />
                <span className="group-hover:underline">Twitter</span>
              </Link>
              <Link href="#" className="flex items-center text-gray-600 hover:text-pink-600 transition-colors group">
                <Linkedin className="h-4 w-4 mr-3 group-hover:animate-bounce" />
                <span className="group-hover:underline">LinkedIn</span>
              </Link>
            </div>
          </div>

          <div>
            <p className="text-gray-600 mb-4 text-sm">
              I help companies deploy machine learning into production. I write about AI applications and best
              practices.
            </p>
            <div className="flex gap-2">
              <Input
                type="email"
                placeholder="Your email address"
                className="flex-1 rounded-full border-pink-200 focus:border-pink-400 focus:ring-pink-200"
              />
              <Button className="bg-pink-500 hover:bg-pink-600 rounded-full px-6 hover:scale-105 transition-all duration-200">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-pink-100 text-center">
          <p className="text-gray-500 text-sm flex items-center justify-center gap-2">
            Made with <Heart className="h-4 w-4 text-pink-500 animate-pulse" /> and lots of coffee
          </p>
        </div>
      </footer>
    </div>
  )
}
