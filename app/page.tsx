import Link from "next/link"
import Image from "next/image"
import { Cat } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-purple-50">
      <Navbar />

      <main className="max-w-3xl mx-auto px-4 py-8 md:py-12">
        {/* Bio Section */}
        <div className="space-y-8 mb-16">
          {/* Profile Image */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-pink-200 to-purple-200 rounded-full blur-lg opacity-50 animate-pulse"></div>
              <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-white shadow-2xl bg-gradient-to-br from-pink-100 to-purple-100">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_2102.png-SEoqnoc5U26eUJmprDVAwqhJ95Hb6y.jpeg"
                  alt="Profile"
                  className="object-cover hover:scale-110 transition-transform duration-500"
                  fill
                  priority
                />
              </div>
              <div className="absolute -bottom-2 -right-2 bg-pink-500 text-white p-2 rounded-full shadow-lg">
                <Cat className="h-4 w-4" />
              </div>
            </div>
          </div>

          {/* Text Content */}
          <div className="space-y-4 md:space-y-6">
            <p className="text-base md:text-lg text-gray-700 leading-relaxed">
              Hi there. I'm a deep learning engineer who loves turning complex algorithms into real-world solutions. I'm
              passionate about building AI systems that make a meaningful impact.
            </p>

            <p className="text-base md:text-lg text-gray-700 leading-relaxed">
              My focus is on computer vision and NLP systems in production. I'm currently exploring creative
              applications of AI in healthcare and education.
            </p>

            <p className="text-base md:text-lg text-gray-700 leading-relaxed">
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

            <p className="text-base md:text-lg text-gray-700 leading-relaxed">
              I graduated from university studying Computer Science with a focus on AI. My thesis on neural architecture
              search became the foundation for several research papers.
            </p>

            <p className="text-base md:text-lg text-gray-700 leading-relaxed">
              {"I enjoy tackling technical challenges and collaborating with amazing teams. "}
              <Link href="/contact" className="text-pink-600 hover:text-pink-700 font-medium underline">
                Reach out
              </Link>
              {" if you want to build something meaningful together."}
            </p>
          </div>
        </div>
        <Footer />
      </main>
    </div>
  )
}
