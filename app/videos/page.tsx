import Link from "next/link"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function VideosPage() {
  const videos = [
    {
      id: 1,
      title: "Video Title 1",
      youtubeId: "dQw4w9WgXcQ",
      date: "June 2024",
    },
    {
      id: 2,
      title: "Video Title 2",
      youtubeId: "dQw4w9WgXcQ",
      date: "May 2024",
    },
    {
      id: 3,
      title: "Video Title 3",
      youtubeId: "dQw4w9WgXcQ",
      date: "April 2024",
    },
    {
      id: 4,
      title: "Video Title 4",
      youtubeId: "dQw4w9WgXcQ",
      date: "March 2024",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <main className="max-w-3xl mx-auto px-4 py-8 md:py-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 md:mb-12">Find me Singing here</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {videos.map((video) => (
            <div key={video.id} className="space-y-3">
              <div className="relative w-full pt-[56.25%] bg-gray-100 rounded-lg overflow-hidden">
                <iframe
                  className="absolute inset-0 w-full h-full"
                  src={`https://www.youtube.com/embed/${video.youtubeId}`}
                  title={video.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen={true}
                />
              </div>

              <div>
                <h3 className="text-lg md:text-xl font-bold text-gray-900">{video.title}</h3>
                <p className="text-xs md:text-sm text-gray-500">{video.date}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 md:mt-16 text-center text-gray-700">
          <p className="text-sm md:text-base">
            More on{" "}
            <Link
              href="https://www.youtube.com/@kritikaparmarr/videos"
              target="_blank"
              rel="noopener noreferrer"
              className="text-pink-600 hover:text-pink-700 font-medium"
            >
              my YouTube channel
            </Link>
          </p>
        </div>
      </main>

      <Footer />
    </div>
  )
}
