"use server"

import { revalidatePath } from "next/cache"

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
    // Log the message (you can integrate with email services here)
    console.log("Contact message received:", { name, email, subject, message })

    // Integration options:
    // 1. SendGrid - for professional email delivery
    // 2. Resend - NextJS native email service
    // 3. Nodemailer - self-hosted email
    // 4. Firebase - for storing messages
    // 5. Upstash - serverless data storage

    revalidatePath("/contact")
    return { success: true, message: "Message sent successfully! I will get back to you soon." }
  } catch (error) {
    return { success: false, error: "Failed to send message. Please try again." }
  }
}
