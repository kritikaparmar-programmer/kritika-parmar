import type React from "react"
import { Georgia, Inter } from "next/font/google"
import "@/app/globals.css"
import { ThemeProvider } from "@/components/theme-provider"

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
    <html lang="en" suppressHydrationWarning className={`${georgia.variable} ${inter.variable}`}>
      <head />
      <body className="font-serif">
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
