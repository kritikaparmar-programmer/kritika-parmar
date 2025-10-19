import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import Navbar from "@/components/navbar"

export default function EventPage({ params }: { params: { slug: string } }) {
  const events: Record<string, any> = {
    "ai-summit-2025": {
      title: "Deep Learning in Production",
      conference: "AI Summit 2025",
      location: "San Francisco, CA",
      date: "June 15, 2025",
      attendees: "500+",
      content: `
Join us at the AI Summit 2025 for an in-depth exploration of deploying deep learning models in production environments.

About the Event

This conference brings together industry experts, researchers, and practitioners to discuss the latest advancements and challenges in production machine learning.

Topics Covered

- Scaling deep learning pipelines
- Model monitoring and debugging
- Infrastructure and DevOps for ML
- Real-world case studies
- Best practices and lessons learned

Who Should Attend

This event is ideal for machine learning engineers, data scientists, software engineers, and anyone interested in production ML systems.

Schedule

June 15, 2025 - All Day
Multiple tracks covering different aspects of production ML
Networking sessions and workshops
      `,
    },
    "tech-women-conference": {
      title: "Building Responsible AI Systems",
      conference: "Tech Women Conference",
      location: "New York, NY",
      date: "May 20, 2025",
      attendees: "300+",
      content: `
Join us for an important discussion on building ethical and responsible AI systems in the workplace.

About the Event

This conference focuses on the intersection of technology, ethics, and women in tech. Learn about building AI systems that are fair, transparent, and accountable.

Key Topics

- Bias detection and mitigation
- Ethical AI frameworks
- Women leadership in AI
- Industry perspectives on responsibility
- Career development in tech

Speaker Highlights

Industry leaders and researchers will share their experiences and insights on building responsible AI systems.

Who Should Attend

Women in tech, AI practitioners, business leaders, and anyone passionate about ethical AI development.
      `,
    },
    "medtech-expo": {
      title: "Computer Vision for Healthcare",
      conference: "MedTech Expo",
      location: "Boston, MA",
      date: "May 10, 2025",
      attendees: "200+",
      content: `
Explore the cutting-edge applications of computer vision technology in healthcare and medical imaging.

About the Event

This expo brings together healthcare professionals, AI researchers, and medical technology companies to showcase innovations in computer vision for healthcare.

Topics Covered

- Medical image analysis
- Diagnostic imaging with AI
- Real-time patient monitoring
- Challenges and opportunities
- Regulatory considerations

Applications

- Cancer detection and diagnosis
- Surgical assistance
- Patient monitoring systems
- Telemedicine solutions

Who Should Attend

Healthcare professionals, medical researchers, AI engineers, and healthcare IT professionals interested in computer vision applications.
      `,
    },
  }

  const event = events[params.slug]

  if (!event) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-purple-50">
        <Navbar />
        <div className="max-w-3xl mx-auto px-4 py-12">
          <p className="text-gray-600">Event not found</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-purple-50">
      <Navbar />

      <div className="max-w-3xl mx-auto px-4 py-12">
        <Link href="/events" className="flex items-center gap-2 text-pink-600 hover:text-pink-700 mb-8 font-medium">
          <ArrowLeft className="h-4 w-4" />
          Back to Events
        </Link>

        <article>
          <header className="mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">{event.title}</h1>
            <div className="space-y-2 text-gray-600 mb-6">
              <p className="font-semibold">{event.conference}</p>
              <p>
                {event.date} | {event.location} | {event.attendees} attendees
              </p>
            </div>
          </header>

          <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 border border-pink-100 mb-12 shadow-lg whitespace-pre-wrap text-gray-700 leading-relaxed">
            {event.content}
          </div>

          <div className="bg-gradient-to-r from-pink-100 to-purple-100 rounded-2xl p-8 text-center border border-pink-200 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-800 mb-2">Ready to attend?</h3>
            <p className="text-gray-600 mb-6">Register now to secure your spot at this amazing event</p>
            <button className="bg-pink-500 hover:bg-pink-600 text-white font-medium px-8 py-2 rounded-full transition-colors">
              Register Now
            </button>
          </div>
        </article>
      </div>
    </div>
  )
}
