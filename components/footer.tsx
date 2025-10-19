import Link from "next/link"
import { Mail, Github, Twitter, Linkedin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="w-full border-t border-gray-200 bg-white mt-12">
      <div className="max-w-3xl mx-auto px-4 py-8">
        <div className="flex items-center justify-between">
          <p className="text-gray-600 text-sm">Copyright © 2025, Kritika Parmar</p>

          <div className="flex items-center gap-6">
            <Link
              href="mailto:hi@yourname.com"
              className="text-gray-600 hover:text-pink-600 transition-colors"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </Link>
            <Link href="#" className="text-gray-600 hover:text-pink-600 transition-colors" aria-label="GitHub">
              <Github className="h-5 w-5" />
            </Link>
            <Link href="#" className="text-gray-600 hover:text-pink-600 transition-colors" aria-label="Twitter">
              <Twitter className="h-5 w-5" />
            </Link>
            <Link href="#" className="text-gray-600 hover:text-pink-600 transition-colors" aria-label="LinkedIn">
              <Linkedin className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
