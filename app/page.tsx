"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Heart, Sparkles, Coffee, Code, BookOpen, Mail, Github, Twitter, Linkedin, Menu, X } from "lucide-react"

export default function Home() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-purple-50">
      {/* Navigation */}
      <nav className="w-full py-6 px-4 relative">
        <div className="max-w-4xl mx-auto">
          {/* Desktop Navigation */}
          <div className="hidden md:flex justify-center">
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

          {/* Mobile Navigation */}
          <div className="md:hidden flex justify-between items-center">
            <Link href="/" className="text-xl font-bold text-gray-800 hover:text-pink-500 transition-colors">
              Kritika Parmar ✨
            </Link>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-full bg-pink-100 hover:bg-pink-200 transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="h-5 w-5 text-pink-600" /> : <Menu className="h-5 w-5 text-pink-600" />}
            </button>
          </div>

          {/* Mobile Menu Overlay */}
          {isMobileMenuOpen && (
            <div className="md:hidden absolute top-full left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-t border-pink-100 shadow-lg">
              <div className="px-4 py-6 space-y-4">
                <Link
                  href="/blog"
                  className="block text-gray-700 hover:text-pink-500 transition-colors py-2 text-center hover:bg-pink-50 rounded-lg"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Blog 📝
                </Link>
                <Link
                  href="/projects"
                  className="block text-gray-700 hover:text-pink-500 transition-colors py-2 text-center hover:bg-pink-50 rounded-lg"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Projects 🚀
                </Link>
                <Link
                  href="/about"
                  className="block text-gray-700 hover:text-pink-500 transition-colors py-2 text-center hover:bg-pink-50 rounded-lg"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  About 💖
                </Link>
                <Link
                  href="/resources"
                  className="block text-gray-700 hover:text-pink-500 transition-colors py-2 text-center hover:bg-pink-50 rounded-lg"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Resources 📚
                </Link>
                <Link
                  href="/contact"
                  className="block text-gray-700 hover:text-pink-500 transition-colors py-2 text-center hover:bg-pink-50 rounded-lg"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Contact 📧
                </Link>
              </div>
            </div>
          )}
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
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 tracking-tight">Kritika Parmar</h1>
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
                  "Heyaa! I'm Kritika, a Machine Learning Engineer and singer. I grew up fascinated by how computers could learn and think, and now I get to build AI systems that make a difference!"
                }
              </p>

              <p className="text-gray-700 leading-relaxed mb-4">
                {
                  "My focus is on computer vision and NLP systems in production. I'm currently exploring creative applications of AI in automobile and fashion industry."
                }
              </p>

              <p className="text-gray-700 leading-relaxed mb-4">
                {"I'm currently working at Cars24 where I work on implementing AI in automobile damage detection problems. Previously, I worked at startups which include FilterPixel, Akridata and Prodigal AI and contributed to ML, majorly in Computer Vision space."
                }
              </p>
          

              <p className="text-gray-700 leading-relaxed mb-4">
                
                {"I frequently speak at conferences/events and occasionally host "}
                <Link
                  href="https://www.linkedin.com/in/kritika-parmar-10244a193/"
                  className="text-pink-500 hover:text-pink-600 font-medium underline decoration-pink-200 hover:decoration-pink-400 transition-colors"
                >
                  events
                </Link>
                {"."}
              </p>

                <p className="text-gray-700 leading-relaxed mb-4">
                
                {"I also post "}
                <Link
                  href="https://www.youtube.com/@kritikaparmarr"
                  className="text-pink-500 hover:text-pink-600 font-medium underline decoration-pink-200 hover:decoration-pink-400 transition-colors"
                >
                  singing
                </Link>
                {" covers in my part time. "}
              </p>

              <p className="text-gray-700 leading-relaxed">
                {"I enjoy tackling fun technical challenges and collaborating with amazing teams. "}
                <Link
                  href="/contact"
                  className="text-pink-500 hover:text-pink-600 font-medium underline decoration-pink-200 hover:decoration-pink-400 transition-colors"
                >
                  Reach out
                </Link>
                {" if you want to build something cool together!"}
              </p>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex justify-center md:justify-start">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-pink-200 to-purple-200 rounded-full blur-lg opacity-50 animate-pulse"></div>
              <div className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-white shadow-2xl bg-gradient-to-br from-pink-100 to-purple-100">
                <Image
                  src="/images/IMG_6402.jpg?height=256&width=256&text=KP"
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
        {/*<div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
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
        </div>*/}
      </main>

      {/* Footer */}
      <footer className="max-w-4xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Social Links */}
          <div>
            <div className="flex flex-col space-y-3">
              <Link
                href="mailto:kritikaparmar07@gmail.com"
                className="flex items-center text-gray-600 hover:text-pink-500 transition-colors group"
              >
                <Mail className="h-4 w-4 mr-3 group-hover:animate-bounce" />
                <span className="group-hover:underline">kritikaparmar07@gmail.com</span>
              </Link>
              <Link href="https://github.com/kritikaparmar-programmer" className="flex items-center text-gray-600 hover:text-pink-500 transition-colors group">
                <Github className="h-4 w-4 mr-3 group-hover:animate-bounce" />
                <span className="group-hover:underline">kritikaparmar-programmer</span>
              </Link>
              <Link href="https://x.com/KritikaParmar5" className="flex items-center text-gray-600 hover:text-pink-500 transition-colors group">
                <Twitter className="h-4 w-4 mr-3 group-hover:animate-bounce" />
                <span className="group-hover:underline">@KritikaParmar5</span>
              </Link>
              <Link href="https://www.linkedin.com/in/kritika-parmar-10244a193/" className="flex items-center text-gray-600 hover:text-pink-500 transition-colors group">
                <Linkedin className="h-4 w-4 mr-3 group-hover:animate-bounce" />
                <span className="group-hover:underline">kritika-parmar</span>
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
            {"Made with"} <Heart className="h-4 w-4 text-pink-500 animate-pulse" /> {"and lots of procrastiation"}
          </p>
        </div>
      </footer>
    </div>
  )
}
