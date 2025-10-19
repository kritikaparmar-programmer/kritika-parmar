"use client"

import type React from "react"

import Navbar from "@/components/navbar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Mail, Github, Twitter, Linkedin } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [status, setStatus] = useState<{ type: "success" | "error"; message: string } | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Validate inputs
      if (!formData.name || !formData.email || !formData.subject || !formData.message) {
        setStatus({ type: "error", message: "All fields are required" })
        setIsSubmitting(false)
        return
      }

      // Log the message
      console.log("Contact message received:", formData)

      // Reset form
      setFormData({ name: "", email: "", subject: "", message: "" })
      setStatus({ type: "success", message: "Message sent successfully! I will get back to you soon." })

      // Clear success message after 5 seconds
      setTimeout(() => setStatus(null), 5000)
    } catch (error) {
      setStatus({ type: "error", message: "Failed to send message. Please try again." })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <div className="max-w-3xl mx-auto px-4 py-8 md:py-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-2 md:mb-4">Get in Touch</h1>
        <p className="text-base md:text-lg text-gray-600 mb-8 md:mb-12">
          I'd love to hear from you. Feel free to reach out for collaborations or just to say hello.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div>
            <h2 className="text-2xl md:text-2xl font-bold text-gray-800 mb-4 md:mb-6">Send a message</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs md:text-sm font-medium text-gray-700 mb-2">Name</label>
                <Input
                  type="text"
                  name="name"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="rounded-lg border-pink-200 focus:border-pink-400 focus:ring-pink-200 text-sm"
                />
              </div>
              <div>
                <label className="block text-xs md:text-sm font-medium text-gray-700 mb-2">Email</label>
                <Input
                  type="email"
                  name="email"
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="rounded-lg border-pink-200 focus:border-pink-400 focus:ring-pink-200 text-sm"
                />
              </div>
              <div>
                <label className="block text-xs md:text-sm font-medium text-gray-700 mb-2">Subject</label>
                <Input
                  type="text"
                  name="subject"
                  placeholder="What's this about?"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="rounded-lg border-pink-200 focus:border-pink-400 focus:ring-pink-200 text-sm"
                />
              </div>
              <div>
                <label className="block text-xs md:text-sm font-medium text-gray-700 mb-2">Message</label>
                <textarea
                  name="message"
                  placeholder="Your message here..."
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-lg border border-pink-200 focus:border-pink-400 focus:ring-2 focus:ring-pink-200 focus:outline-none text-sm"
                />
              </div>

              {status?.type === "success" && (
                <div className="p-3 md:p-4 bg-green-50 border border-green-200 text-green-800 rounded-lg text-sm">
                  {status.message}
                </div>
              )}

              {status?.type === "error" && (
                <div className="p-3 md:p-4 bg-red-50 border border-red-200 text-red-800 rounded-lg text-sm">
                  {status.message}
                </div>
              )}

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-pink-500 hover:bg-pink-600 rounded-full disabled:opacity-50 text-sm md:text-base"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-3 md:space-y-4">
            <Link
              href="mailto:hi@yourname.com"
              className="flex items-center gap-4 p-3 md:p-4 rounded-lg bg-white border border-pink-100 hover:bg-pink-50 transition-colors shadow-md"
            >
              <Mail className="h-5 w-5 md:h-6 md:w-6 text-pink-600 flex-shrink-0" />
              <div>
                <p className="font-semibold text-gray-800 text-sm md:text-base">Email</p>
                <p className="text-xs md:text-sm text-gray-600">hi@yourname.com</p>
              </div>
            </Link>

            <Link
              href="#"
              className="flex items-center gap-4 p-3 md:p-4 rounded-lg bg-white border border-pink-100 hover:bg-pink-50 transition-colors shadow-md"
            >
              <Github className="h-5 w-5 md:h-6 md:w-6 text-pink-600 flex-shrink-0" />
              <div>
                <p className="font-semibold text-gray-800 text-sm md:text-base">GitHub</p>
                <p className="text-xs md:text-sm text-gray-600">github.com/yourname</p>
              </div>
            </Link>

            <Link
              href="#"
              className="flex items-center gap-4 p-3 md:p-4 rounded-lg bg-white border border-pink-100 hover:bg-pink-50 transition-colors shadow-md"
            >
              <Twitter className="h-5 w-5 md:h-6 md:w-6 text-pink-600 flex-shrink-0" />
              <div>
                <p className="font-semibold text-gray-800 text-sm md:text-base">Twitter</p>
                <p className="text-xs md:text-sm text-gray-600">@yourname</p>
              </div>
            </Link>

            <Link
              href="#"
              className="flex items-center gap-4 p-3 md:p-4 rounded-lg bg-white border border-pink-100 hover:bg-pink-50 transition-colors shadow-md"
            >
              <Linkedin className="h-5 w-5 md:h-6 md:w-6 text-pink-600 flex-shrink-0" />
              <div>
                <p className="font-semibold text-gray-800 text-sm md:text-base">LinkedIn</p>
                <p className="text-xs md:text-sm text-gray-600">linkedin.com/in/yourname</p>
              </div>
            </Link>

            <div className="bg-gradient-to-r from-pink-100 to-purple-100 rounded-lg p-4 md:p-6 border border-pink-200 shadow-md">
              <h3 className="font-semibold text-gray-800 mb-2 text-sm md:text-base">Quick Response Time</h3>
              <p className="text-xs md:text-sm text-gray-700">
                I try to respond to all messages within 24 hours. Looking forward to connecting with you!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
