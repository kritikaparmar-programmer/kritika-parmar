import Navbar from "@/components/navbar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Mail, Github, Twitter, Linkedin } from "lucide-react"
import Link from "next/link"
import { useActionState } from "react"
import { revalidatePath } from "next/cache"
;("use server")

export async function sendContactMessage(formData: FormData) {
  const name = formData.get("name")
  const email = formData.get("email")
  const subject = formData.get("subject")
  const message = formData.get("message")

  // Validate inputs
  if (!name || !email || !subject || !message) {
    return { success: false, error: "All fields are required" }
  }

  try {
    // Here you can add your email service integration
    // For now, we'll just log the data
    console.log("Contact message received:", { name, email, subject, message })

    // You can integrate with services like:
    // - SendGrid
    // - Resend
    // - Nodemailer
    // - Firebase
    // etc.

    revalidatePath("/contact")
    return { success: true, message: "Message sent successfully! I will get back to you soon." }
  } catch (error) {
    return { success: false, error: "Failed to send message. Please try again." }
  }
}

export default function ContactPage() {
  const [state, formAction, isPending] = useActionState(sendContactMessage, null)

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <div className="max-w-3xl mx-auto px-4 py-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Get in Touch</h1>
        <p className="text-gray-600 text-lg mb-12">
          I'd love to hear from you. Feel free to reach out for collaborations or just to say hello.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Send a message</h2>
            <form action={formAction} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                <Input
                  type="text"
                  name="name"
                  placeholder="Your name"
                  required
                  className="rounded-lg border-pink-200 focus:border-pink-400 focus:ring-pink-200"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <Input
                  type="email"
                  name="email"
                  placeholder="your@email.com"
                  required
                  className="rounded-lg border-pink-200 focus:border-pink-400 focus:ring-pink-200"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                <Input
                  type="text"
                  name="subject"
                  placeholder="What's this about?"
                  required
                  className="rounded-lg border-pink-200 focus:border-pink-400 focus:ring-pink-200"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                <textarea
                  name="message"
                  placeholder="Your message here..."
                  rows={5}
                  required
                  className="w-full px-4 py-2 rounded-lg border border-pink-200 focus:border-pink-400 focus:ring-2 focus:ring-pink-200 focus:outline-none"
                />
              </div>

              {state?.success && (
                <div className="p-4 bg-green-50 border border-green-200 text-green-800 rounded-lg">{state.message}</div>
              )}

              {state?.error && (
                <div className="p-4 bg-red-50 border border-red-200 text-red-800 rounded-lg">{state.error}</div>
              )}

              <Button
                type="submit"
                disabled={isPending}
                className="w-full bg-pink-500 hover:bg-pink-600 rounded-full disabled:opacity-50"
              >
                {isPending ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <Link
              href="mailto:hi@yourname.com"
              className="flex items-center gap-4 p-4 rounded-lg bg-white border border-pink-100 hover:bg-pink-50 transition-colors shadow-md"
            >
              <Mail className="h-6 w-6 text-pink-600" />
              <div>
                <p className="font-semibold text-gray-800">Email</p>
                <p className="text-sm text-gray-600">hi@yourname.com</p>
              </div>
            </Link>

            <Link
              href="#"
              className="flex items-center gap-4 p-4 rounded-lg bg-white border border-pink-100 hover:bg-pink-50 transition-colors shadow-md"
            >
              <Github className="h-6 w-6 text-pink-600" />
              <div>
                <p className="font-semibold text-gray-800">GitHub</p>
                <p className="text-sm text-gray-600">github.com/yourname</p>
              </div>
            </Link>

            <Link
              href="#"
              className="flex items-center gap-4 p-4 rounded-lg bg-white border border-pink-100 hover:bg-pink-50 transition-colors shadow-md"
            >
              <Twitter className="h-6 w-6 text-pink-600" />
              <div>
                <p className="font-semibold text-gray-800">Twitter</p>
                <p className="text-sm text-gray-600">@yourname</p>
              </div>
            </Link>

            <Link
              href="#"
              className="flex items-center gap-4 p-4 rounded-lg bg-white border border-pink-100 hover:bg-pink-50 transition-colors shadow-md"
            >
              <Linkedin className="h-6 w-6 text-pink-600" />
              <div>
                <p className="font-semibold text-gray-800">LinkedIn</p>
                <p className="text-sm text-gray-600">linkedin.com/in/yourname</p>
              </div>
            </Link>

            <div className="bg-gradient-to-r from-pink-100 to-purple-100 rounded-lg p-6 border border-pink-200 shadow-md">
              <h3 className="font-semibold text-gray-800 mb-2">Quick Response Time</h3>
              <p className="text-sm text-gray-700">
                I try to respond to all messages within 24 hours. Looking forward to connecting with you!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
