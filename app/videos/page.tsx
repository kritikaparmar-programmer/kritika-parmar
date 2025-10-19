import Link from "next/link"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function VideosPage() {
  const videos = [
    {
      id: 1,
      title: "Acoustic Cover - Song Title",
      youtubeId: "dQw4w9WgXcQ",
      date: "June 2024",
      description: "An acoustic cover of one of my favorite songs.",
    },
    {
      id: 2,
      title: "Original Song - First Try",
      youtubeId: "dQw4w9WgXcQ",
      date: "May 2024",
      description: "My first original song, hope you enjoy it!",
    },
    {
      id: 3,
      title: "Singing Compilation",
      youtubeId: "dQw4w9WgXcQ",
      date: "April 2024",
      description: "A compilation of various songs I've been working on.",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <main className="max-w-3xl mx-auto px-4 py-12">
        <h1 className="text-5xl font-bold text-gray-900 mb-4">My Singing Videos</h1>
        <p className="text-lg text-gray-700 mb-12">
          In addition to my work in AI, I'm passionate about music and love sharing my singing videos. Here are some of
          my recent uploads.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {videos.map((video) => (
            <div key={video.id} className="space-y-4">
              {/* YouTube Embed */}
              <div className="relative w-full pt-[56.25%] bg-gray-100 rounded-lg overflow-hidden">
                <iframe
                  className="absolute inset-0 w-full h-full"
                  src={`https://www.youtube.com/embed/${video.youtubeId}`}
                  title={video.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{video.title}</h3>
                <p className="text-sm text-gray-500 mb-2">{video.date}</p>
                <p className="text-gray-700">{video.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center text-gray-700">
          <p className="mb-4">
            More videos on{" "}
            <Link
              href="https://www.youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-pink-600 hover:text-pink-700 font-medium"
            >
              my YouTube channel
            </Link>
          </p>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}
