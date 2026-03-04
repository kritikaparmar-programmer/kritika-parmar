import Link from "next/link"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function EventsPage() {
  const talks = [
    {
      id: 1,
      title: "Building RAG Systems with Gemini Multimodal",
      event: "Redefine Possible - IWD 2025 Women Techmakers track",
      organization: "Rackspace Technologies & MongoDB",
      link: "https://www.linkedin.com/posts/kritika-parmar-10244a193_iwd2025-mongodbcommunity-delhincr-activity-7322324997853630464-En3k",
    },
    {
      id: 2,
      title: "Finetuning Models from HuggingFace",
      event: "DevFest Noida 2024",
      organization: "DevFest",
      link: "https://www.instagram.com/p/DDOsfQ7P95t/",
    },
    {
      id: 3,
      title: "FiftyOne - Clean, Explore, and Curate Datasets",
      event: "PyDelhi In Person Event",
      organization: "PyDelhi Community",
      link: "https://www.linkedin.com/posts/pydelhi-community_garbage-in-garbage-out-especially-in-activity-7329164587507834881-tWan",
    },
    {
      id: 4,
      title: "Putting Predictive and Generative AI to Work",
      event: "DevConf",
      organization: "RedHat",
      link: "https://www.linkedin.com/posts/kritika-parmar-10244a193_devconfin-devconf-ai-activity-7303845427169136640-l-gM",
    },
    {
      id: 5,
      title: "Kickstart AI/ML",
      event: "SheBuilds Community",
      organization: "SheBuilds",
      link: "https://www.linkedin.com/posts/shebuildshack_ai-machinelearning-techcareers-activity-7265021550217576448-JUnE",
    },
    {
      id: 6,
      title: "MLOps on Google Cloud",
      event: "GDG Cloud Community Day New Delhi",
      organization: "GDG Cloud",
      link: "https://www.linkedin.com/posts/kritika-parmar-10244a193_mlops-googlecloud-vertexai-activity-7241518310406643713-YcKb",
    },
    {
      id: 7,
      title: "Attention is All You Need",
      event: "Cloud Native Community Gurugram",
      organization: "Cloud Native Community",
      link: "https://www.youtube.com/watch?v=yQIYBlMN1Fg",
    },
    {
      id: 8,
      title: "ML in Real World - How Filterpixel Works",
      event: "GDG Siliguri",
      organization: "GDG Siliguri",
      link: "https://www.linkedin.com/posts/kritika-parmar-10244a193_machinelearning-python-techcommunity-activity-7233900115134988290-KYuO",
    },
    {
      id: 9,
      title: "Maths Behind Neural Networks",
      event: "TFUG Ghaziabad",
      organization: "TFUG",
      link: "https://www.linkedin.com/posts/kritika-parmar-10244a193_ml-math-clubs-day-4-mathematical-insights-activity-7218274220844154880-z0uv",
    },
    {
      id: 10,
      title: "Diffusion Models",
      event: "GDG Gurugram - IWD Track",
      organization: "GDG Gurugram",
      link: "https://www.linkedin.com/posts/kritika-parmar-10244a193_gdggurugram-iwd2024-networking-activity-7180236371880472577-7JT8",
    },
    {
      id: 11,
      title: "Creating an AI-Powered Diet Planner",
      event: "AI CAMP X Google for Developers",
      organization: "Google for Developers",
      link: "https://www.linkedin.com/posts/nishakeswani_𝐖𝐎𝐖-𝐖𝐡𝐚𝐭-𝐚𝐧-𝐢𝐧𝐜𝐫𝐞𝐝𝐢𝐛𝐥𝐞-ugcPost-7373024327681650688-LG29",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <main className="max-w-3xl mx-auto px-4 py-8 md:py-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2 md:mb-4">Talks given by me</h1>
        <p className="text-base md:text-lg text-gray-700 mb-8 md:mb-12">
          AI/ML/Computer Vision topics discussed at various conferences and communities
        </p>

        <div className="space-y-6 md:space-y-8">
          {talks.map((talk) => (
            <Link href={talk.link} target="_blank" rel="noopener noreferrer" key={talk.id}>
              <div className="pb-6 md:pb-8 border-b border-gray-200 last:border-b-0 cursor-pointer group hover:bg-gray-50 p-4 rounded-lg transition-colors">
                <h3 className="text-lg md:text-xl font-bold text-gray-900 group-hover:text-pink-600 transition-colors mb-2">
                  {talk.title}
                </h3>
                <p className="text-pink-600 font-medium text-sm md:text-base mb-1">{talk.event}</p>
                <p className="text-gray-500 text-sm md:text-base">{talk.organization}</p>
              </div>
            </Link>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  )
}
