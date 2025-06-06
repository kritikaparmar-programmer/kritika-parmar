import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Heart, Sparkles, Coffee, Code, BookOpen, Mail, Github, Twitter, Linkedin } from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-purple-50">
      {/* Navigation */}
      <nav className="w-full py-6 px-4">
        <div className="max-w-4xl mx-auto flex justify-center">
          <div className="flex items-center space-x-8 text-sm font-medium">
            <Link
              href="/blog"
              className="text-gray-700 hover:text-pink-500 transition-colors duration-200 hover:scale-105 transform"
            >
              Blog
            </Link>
            <Link
              href="/projects"
              className="text-gray-700 hover:text-pink-500 transition-colors duration-200 hover:scale-105 transform"
            >
              Projects
            </Link>
            <Link
              href="/about"
              className="text-gray-700 hover:text-pink-500 transition-colors duration-200 hover:scale-105 transform"
            >
              About
            </Link>
            <Link
              href="/resources"
              className="text-gray-700 hover:text-pink-500 transition-colors duration-200 hover:scale-105 transform"
            >
              Resources
            </Link>
            <Link
              href="/contact"
              className="text-gray-700 hover:text-pink-500 transition-colors duration-200 hover:scale-105 transform"
            >
              Contact
            </Link>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 py-8">
        {/* Header with floating elements */}
        <div className="text-center mb-16 relative">
          <div className="absolute -top-4 -left-4 text-pink-300 animate-bounce">
            <Sparkles className="h-6 w-6" />
          </div>
          <div className="absolute -top-2 -right-8 text-purple-300 animate-pulse">
            <Heart className="h-5 w-5" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 tracking-tight">Your Name</h1>
          <div className="flex items-center justify-center gap-2 text-pink-500 font-medium">
            <Code className="h-4 w-4" />
            <span>Deep Learning Engineer</span>
            <Coffee className="h-4 w-4" />
          </div>
        </div>

        {/* Bio Section */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="md:col-span-2 space-y-6">
            <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-pink-100 hover:shadow-xl transition-all duration-300">
              <p className="text-gray-700 leading-relaxed mb-4">
                {
                  "Hi there! 👋 I'm a deep learning engineer who loves turning complex algorithms into real-world magic. ✨ I grew up fascinated by how computers could learn and think, and now I get to build AI systems that make a difference!"
                }
              </p>

              <p className="text-gray-700 leading-relaxed mb-4">
                {
                  "My focus is on computer vision and NLP systems in production. I'm currently exploring creative applications of AI in healthcare and education. 🏥📚"
                }
              </p>

              <p className="text-gray-700 leading-relaxed mb-4">
                {"Previously, I worked on ML infrastructure at "}
                <Link
                  href="#"
                  className="text-pink-500 hover:text-pink-600 font-medium underline decoration-pink-200 hover:decoration-pink-400 transition-colors"
                >
                  TechCorp
                </Link>
                {", developed recommendation systems at "}
                <Link
                  href="#"
                  className="text-pink-500 hover:text-pink-600 font-medium underline decoration-pink-200 hover:decoration-pink-400 transition-colors"
                >
                  StartupXYZ
                </Link>
                {
                  ", and contributed to open-source ML tools. I also founded a small AI consultancy helping startups integrate ML into their products. 🚀"
                }
              </p>

              <p className="text-gray-700 leading-relaxed mb-4">
                {
                  "Building in the AI space taught me that being a founder is incredibly challenging, so I try to support other founders whenever I can. Some projects I've mentored include healthcare AI startups and educational tech companies. 💪"
                }
              </p>

              <p className="text-gray-700 leading-relaxed mb-4">
                {"I graduated from University where I studied "}
                <Link
                  href="#"
                  className="text-pink-500 hover:text-pink-600 font-medium underline decoration-pink-200 hover:decoration-pink-400 transition-colors"
                >
                  Computer Science & AI
                </Link>
                {
                  ". My thesis on neural architecture search became the foundation for several research papers and open-source tools. 📄"
                }
              </p>

              <p className="text-gray-700 leading-relaxed mb-4">
                {"My latest project is a "}
                <span className="font-semibold text-pink-600">Deep Learning Handbook</span>
                {" (2025) which is currently trending on "}
                <Link
                  href="#"
                  className="text-pink-500 hover:text-pink-600 font-medium underline decoration-pink-200 hover:decoration-pink-400 transition-colors"
                >
                  GitHub
                </Link>
                {". It's also available on "}
                <Link
                  href="#"
                  className="text-pink-500 hover:text-pink-600 font-medium underline decoration-pink-200 hover:decoration-pink-400 transition-colors"
                >
                  Amazon
                </Link>
                {" and has been featured in several AI newsletters! 🎉"}
              </p>

              <p className="text-gray-700 leading-relaxed mb-4">
                {"I'm active on "}
                <Link
                  href="#"
                  className="text-pink-500 hover:text-pink-600 font-medium underline decoration-pink-200 hover:decoration-pink-400 transition-colors"
                >
                  GitHub
                </Link>
                {" and aspire to become a "}
                <Link
                  href="#"
                  className="text-pink-500 hover:text-pink-600 font-medium underline decoration-pink-200 hover:decoration-pink-400 transition-colors"
                >
                  Kaggle
                </Link>
                {" Grandmaster. You can also find me on "}
                <Link
                  href="#"
                  className="text-pink-500 hover:text-pink-600 font-medium underline decoration-pink-200 hover:decoration-pink-400 transition-colors"
                >
                  Twitter
                </Link>
                {". I frequently speak at conferences and occasionally host "}
                <Link
                  href="#"
                  className="text-pink-500 hover:text-pink-600 font-medium underline decoration-pink-200 hover:decoration-pink-400 transition-colors"
                >
                  workshops
                </Link>
                {". 🎤"}
              </p>

              <p className="text-gray-700 leading-relaxed">
                {"I enjoy tackling fun technical challenges and collaborating with amazing teams. "}
                <Link
                  href="/contact"
                  className="text-pink-500 hover:text-pink-600 font-medium underline decoration-pink-200 hover:decoration-pink-400 transition-colors"
                >
                  Reach out
                </Link>
                {" if you want to build something cool together! 🤝"}
              </p>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex justify-center md:justify-start">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-pink-200 to-purple-200 rounded-full blur-lg opacity-50 animate-pulse"></div>
              <div className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-white shadow-2xl bg-gradient-to-br from-pink-100 to-purple-100">
                <Image
                  src="/placeholder.svg?height=256&width=256&text=Your+Photo"
                  alt="Profile"
                  className="object-cover hover:scale-110 transition-transform duration-500"
                  fill
                  priority
                />
              </div>
              <div className="absolute -bottom-2 -right-2 bg-pink-500 text-white p-2 rounded-full shadow-lg animate-bounce">
                <Heart className="h-4 w-4" />
              </div>
            </div>
          </div>
        </div>

        {/* Fun Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {[
            { icon: <Code className="h-6 w-6" />, number: "50+", label: "Projects Built" },
            { icon: <BookOpen className="h-6 w-6" />, number: "100+", label: "Blog Posts" },
            { icon: <Coffee className="h-6 w-6" />, number: "∞", label: "Cups of Coffee" },
            { icon: <Sparkles className="h-6 w-6" />, number: "24/7", label: "Learning Mode" },
          ].map((stat, i) => (
            <div
              key={i}
              className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 text-center shadow-lg border border-pink-100 hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              <div className="text-pink-500 flex justify-center mb-2">{stat.icon}</div>
              <div className="text-2xl font-bold text-gray-800 mb-1">{stat.number}</div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="max-w-4xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Social Links */}
          <div>
            <div className="flex flex-col space-y-3">
              <Link
                href="mailto:hi@yourname.com"
                className="flex items-center text-gray-600 hover:text-pink-500 transition-colors group"
              >
                <Mail className="h-4 w-4 mr-3 group-hover:animate-bounce" />
                <span className="group-hover:underline">hi@yourname.com</span>
              </Link>
              <Link href="#" className="flex items-center text-gray-600 hover:text-pink-500 transition-colors group">
                <Github className="h-4 w-4 mr-3 group-hover:animate-bounce" />
                <span className="group-hover:underline">yourname</span>
              </Link>
              <Link href="#" className="flex items-center text-gray-600 hover:text-pink-500 transition-colors group">
                <Twitter className="h-4 w-4 mr-3 group-hover:animate-bounce" />
                <span className="group-hover:underline">@yourname</span>
              </Link>
              <Link href="#" className="flex items-center text-gray-600 hover:text-pink-500 transition-colors group">
                <Linkedin className="h-4 w-4 mr-3 group-hover:animate-bounce" />
                <span className="group-hover:underline">yourname</span>
              </Link>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <p className="text-gray-600 mb-4 text-sm">
              {
                "I help companies deploy machine learning into production. I write about AI applications, tooling, and best practices. ✨"
              }
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
            {"Made with"} <Heart className="h-4 w-4 text-pink-500 animate-pulse" /> {"and lots of coffee"}
          </p>
        </div>
      </footer>
    </div>
  )
}
