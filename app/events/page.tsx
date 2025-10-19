import Link from "next/link"
import Navbar from "@/components/navbar"
import { Calendar, MapPin, Users } from "lucide-react"

export default function EventsPage() {
  const events = [
    {
      id: 1,
      slug: "ai-summit-2025",
      title: "Deep Learning in Production",
      conference: "AI Summit 2025",
      location: "San Francisco, CA",
      date: "June 15, 2025",
      attendees: "500+",
      topics: ["PyTorch", "ML Engineering", "Scalability"],
    },
    {
      id: 2,
      slug: "tech-women-conference",
      title: "Building Responsible AI Systems",
      conference: "Tech Women Conference",
      location: "New York, NY",
      date: "May 20, 2025",
      attendees: "300+",
      topics: ["Ethics in AI", "Women in Tech", "Responsible AI"],
    },
    {
      id: 3,
      slug: "medtech-expo",
      title: "Computer Vision for Healthcare",
      conference: "MedTech Expo",
      location: "Boston, MA",
      date: "May 10, 2025",
      attendees: "200+",
      topics: ["Medical Imaging", "Computer Vision", "Healthcare AI"],
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <main className="max-w-3xl mx-auto px-4 py-12">
        <h1 className="text-5xl font-bold text-gray-900 mb-4">Speaking Events</h1>
        <p className="text-lg text-gray-700 mb-12">Join me at various conferences and events</p>

        <div className="space-y-12">
          {events.map((event) => (
            <Link href={`/events/${event.slug}`} key={event.id}>
              <div className="pb-12 border-b border-gray-200 last:border-b-0 cursor-pointer group">
                <h3 className="text-2xl font-bold text-gray-900 group-hover:text-pink-600 transition-colors mb-2">
                  {event.title}
                </h3>
                <p className="text-pink-600 font-medium mb-4">{event.conference}</p>

                <div className="space-y-2 text-gray-700 mb-4">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-gray-500" />
                    {event.date}
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-gray-500" />
                    {event.location}
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4 text-gray-500" />
                    {event.attendees} attendees
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {event.topics.map((topic, i) => (
                    <span key={i} className="text-xs bg-pink-100 text-pink-800 px-2 py-1 rounded">
                      {topic}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </main>

      <footer className="max-w-3xl mx-auto px-4 py-12 border-t border-gray-200 mt-12">
        <p className="text-center text-gray-600">Made with care</p>
      </footer>
    </div>
  )
}
