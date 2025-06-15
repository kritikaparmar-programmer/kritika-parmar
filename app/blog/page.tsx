"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Code, Search, User, Heart, Calendar, Clock, Sparkles, Menu, X } from "lucide-react"

export default function BlogPage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const posts = [
    {
      id: 1,
      title: "Understanding Transformers: A Visual Guide 🤖",
      excerpt: "Let's dive into the magical world of attention mechanisms and see how transformers revolutionized NLP!",
      date: "June 2, 2025",
      readTime: "8 min read",
      category: "Tech",
      icon: <Code className="h-4 w-4" />,
      image: "/placeholder.svg?height=200&width=400&text=Transformers+✨",
      featured: true,
    },
    {
      id: 2,
      title: "My Journey as a Woman in AI 💪",
      excerpt:
        "Personal reflections on navigating the AI field, the challenges I've overcome, and the amazing community I've found.",
      date: "May 28, 2025",
      readTime: "6 min read",
      category: "Personal",
      icon: <User className="h-4 w-4" />,
      image: "/placeholder.svg?height=200&width=400&text=Journey+💖",
      featured: false,
    },
    {
      id: 3,
      title: "Computer Vision Magic: From Pixels to Insights 👁️",
      excerpt: "Exploring the latest breakthroughs in computer vision and how they're changing the world around us.",
      date: "May 20, 2025",
      readTime: "10 min read",
      category: "Tech",
      icon: <Code className="h-4 w-4" />,
      image: "/placeholder.svg?height=200&width=400&text=Computer+Vision+🔍",
      featured: false,
    },
    {
      id: 4,
      title: "Building My First Neural Network (and crying a little) 😅",
      excerpt:
        "A honest, step-by-step guide to creating your first neural network - including all the mistakes I made!",
      date: "May 15, 2025",
      readTime: "12 min read",
      category: "Tech",
      icon: <Code className="h-4 w-4" />,
      image: "/placeholder.svg?height=200&width=400&text=Neural+Network+🧠",
      featured: false,
    },
    {
      id: 5,
      title: "Work-Life Balance in Tech: It's Possible! 🌸",
      excerpt:
        "How I maintain sanity while pursuing my passion for deep learning and still having time for bubble tea.",
      date: "May 10, 2025",
      readTime: "5 min read",
      category: "Personal",
      icon: <User className="h-4 w-4" />,
      image: "/placeholder.svg?height=200&width=400&text=Balance+⚖️",
      featured: false,
    },
    {
      id: 6,
      title: "Ethics in AI: Building Responsible Systems 🤝",
      excerpt: "Why ethical considerations should be at the heart of every AI project we build.",
      date: "May 5, 2025",
      readTime: "9 min read",
      category: "Tech",
      icon: <Code className="h-4 w-4" />,
      image: "/placeholder.svg?height=200&width=400&text=Ethics+💝",
      featured: false,
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-purple-50">
      {/* Navigation */}
      <nav className="w-full py-6 px-4 relative">
        <div className="max-w-4xl mx-auto">
          {/* Desktop Navigation */}
          <div className="hidden md:flex justify-between items-center">
            <Link href="/" className="text-2xl font-bold text-gray-800 hover:text-pink-500 transition-colors">
              Your Name
            </Link>
            <div className="flex items-center space-x-8 text-sm font-medium">
              <Link href="/blog" className="text-pink-500 font-semibold">
                Blog
              </Link>
              <Link href="/projects" className="text-gray-700 hover:text-pink-500 transition-colors">
                Projects
              </Link>
              <Link href="/about" className="text-gray-700 hover:text-pink-500 transition-colors">
                About
              </Link>
              <Link href="/contact" className="text-gray-700 hover:text-pink-500 transition-colors">
                Contact
              </Link>
            </div>
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden flex justify-between items-center">
            <Link href="/" className="text-xl font-bold text-gray-800 hover:text-pink-500 transition-colors">
              Your Name ✨
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
                  className="block text-pink-500 font-semibold py-2 text-center hover:bg-pink-50 rounded-lg"
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

      {/* Header */}
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="text-center mb-12 relative">
          <div className="absolute -top-4 -left-4 text-pink-300 animate-bounce">
            <Sparkles className="h-8 w-8" />
          </div>
          <div className="absolute -top-2 -right-8 text-purple-300 animate-pulse">
            <Heart className="h-6 w-6" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">My Blog ✨</h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            {"Thoughts on deep learning, technology, and life - served with a side of pink and lots of enthusiasm! 💖"}
          </p>
        </div>

        {/* Search and Filter */}
        <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-6 shadow-lg border border-pink-100 mb-8">
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
            <div className="relative w-full max-w-md">
              <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <Input
                type="search"
                placeholder="Search for amazing content..."
                className="w-full pl-10 rounded-full border-pink-200 focus:border-pink-400 focus:ring-pink-200"
              />
            </div>
            <div className="flex gap-2">
              <Button variant="default" size="sm" className="bg-pink-500 hover:bg-pink-600 rounded-full">
                All Posts
              </Button>
              <Button variant="outline" size="sm" className="border-pink-200 rounded-full hover:bg-pink-50">
                Tech 🤖
              </Button>
              <Button variant="outline" size="sm" className="border-pink-200 rounded-full hover:bg-pink-50">
                Personal 💭
              </Button>
            </div>
          </div>
        </div>

        {/* Featured Post */}
        {posts
          .filter((post) => post.featured)
          .map((post) => (
            <Card
              key={post.id}
              className="overflow-hidden mb-8 bg-gradient-to-r from-pink-100 to-purple-100 border-2 border-pink-200 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-[1.02]"
            >
              <div className="grid md:grid-cols-2 gap-0">
                <div className="relative h-64 md:h-auto">
                  <Image src={post.image || "/placeholder.svg"} alt={post.title} className="object-cover" fill />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-pink-500 text-white font-semibold">⭐ Featured</Badge>
                  </div>
                </div>
                <CardContent className="p-8 flex flex-col justify-center">
                  <div className="flex items-center gap-4 mb-4">
                    <Badge variant="secondary" className="bg-pink-200 text-pink-800">
                      {post.icon}
                      <span className="ml-1">{post.category}</span>
                    </Badge>
                    <div className="flex items-center text-sm text-gray-500 gap-4">
                      <span className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        {post.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {post.readTime}
                      </span>
                    </div>
                  </div>
                  <h2 className="text-2xl font-bold mb-3 text-gray-800">{post.title}</h2>
                  <p className="text-gray-600 mb-4 leading-relaxed">{post.excerpt}</p>
                  <Button className="bg-pink-500 hover:bg-pink-600 rounded-full w-fit">Read More →</Button>
                </CardContent>
              </div>
            </Card>
          ))}

        {/* Regular Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {posts
            .filter((post) => !post.featured)
            .map((post) => (
              <Card
                key={post.id}
                className="overflow-hidden bg-white/70 backdrop-blur-sm border border-pink-100 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <div className="relative h-48">
                  <Image src={post.image || "/placeholder.svg"} alt={post.title} className="object-cover" fill />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <Badge variant="secondary" className="bg-pink-100 text-pink-800">
                      {post.icon}
                      <span className="ml-1">{post.category}</span>
                    </Badge>
                    <div className="flex items-center text-xs text-gray-500 gap-2">
                      <Calendar className="h-3 w-3" />
                      <span>{post.date}</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-gray-800">{post.title}</h3>
                  <p className="text-sm text-gray-600 mb-3 leading-relaxed">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <Button variant="link" className="p-0 text-pink-500 hover:text-pink-600 font-medium">
                      Read more →
                    </Button>
                    <span className="text-xs text-gray-400 flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {post.readTime}
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
        </div>

        {/* Newsletter */}
        <div className="bg-gradient-to-r from-pink-100 to-purple-100 rounded-3xl p-8 text-center shadow-lg border border-pink-200">
          <div className="max-w-md mx-auto">
            <h3 className="text-2xl font-bold text-gray-800 mb-2">{"Stay in the loop! 💌"}</h3>
            <p className="text-gray-600 mb-6">
              {"Get notified when I publish new articles and share exciting AI discoveries!"}
            </p>
            <div className="flex gap-2">
              <Input
                type="email"
                placeholder="your@email.com"
                className="flex-1 rounded-full border-pink-200 focus:border-pink-400 focus:ring-pink-200"
              />
              <Button className="bg-pink-500 hover:bg-pink-600 rounded-full px-6 hover:scale-105 transition-all duration-200">
                Subscribe ✨
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
