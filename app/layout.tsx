import type React from "react"
import { Georgia, Inter } from "next/font/google"
import "@/app/globals.css"

const georgia = Georgia({ subsets: ["latin"], variable: "--font-serif", weight: ["400", "700"] })
const inter = Inter({ subsets: ["latin"], variable: "--font-sans" })

export const metadata = {
  title: "Kritika Parmar - Machine Learning Engineer",
  description: "Personal portfolio and blog showcasing ML projects and insights",
  generator: "v0.dev",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${georgia.variable} ${inter.variable}`}>
      <body className="font-serif">
        {children}
      </body>
    </html>
  )
}
