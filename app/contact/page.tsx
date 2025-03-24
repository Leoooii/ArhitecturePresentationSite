"use client"

import type React from "react"

import { useState } from "react"
import { Mail, MapPin, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function ContactPage() {
  const { toast } = useToast()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))

    toast({
      title: "Message sent!",
      description: "Thank you for your message. I'll get back to you soon.",
    })

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    })
    setIsSubmitting(false)
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      <main className="flex-1">
        {/* Contact Hero */}
        <section className="relative h-[40vh] wood-texture">
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="container relative z-10 flex h-full flex-col items-center justify-center px-4 text-center text-white">
            <h1 className="mb-4 text-4xl font-bold md:text-5xl">Contact Me</h1>
            <p className="max-w-2xl text-lg md:text-xl">
              Get in touch to discuss projects, collaborations, or just to say hello.
            </p>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-16 bg-secondary/20">
          <div className="container px-4">
            <div className="mx-auto max-w-5xl">
              <div className="grid gap-12 md:grid-cols-2">
                {/* Contact Form */}
                <div>
                  <h2 className="mb-6 text-3xl font-bold text-primary">Send a Message</h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="block text-sm font-medium">
                        Name
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your name"
                        required
                        className="border-primary/20 focus-visible:ring-primary"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="block text-sm font-medium">
                        Email
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Your email address"
                        required
                        className="border-primary/20 focus-visible:ring-primary"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="subject" className="block text-sm font-medium">
                        Subject
                      </label>
                      <Input
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="Message subject"
                        required
                        className="border-primary/20 focus-visible:ring-primary"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="message" className="block text-sm font-medium">
                        Message
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Your message"
                        rows={6}
                        required
                        className="border-primary/20 focus-visible:ring-primary"
                      />
                    </div>
                    <Button type="submit" className="w-full bg-primary hover:bg-primary/90" disabled={isSubmitting}>
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </Button>
                  </form>
                </div>

                {/* Contact Information */}
                <div>
                  <h2 className="mb-6 text-3xl font-bold text-primary">Contact Information</h2>
                  <div className="mb-8 space-y-6">
                    <div className="flex items-start">
                      <div className="mr-4 flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground">
                        <Mail className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold">Email</h3>
                        <p className="text-muted-foreground">ana.popescu@example.com</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="mr-4 flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground">
                        <Phone className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold">Phone</h3>
                        <p className="text-muted-foreground">+40 123 456 789</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="mr-4 flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground">
                        <MapPin className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold">Location</h3>
                        <p className="text-muted-foreground">Bucharest, Romania</p>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-lg bg-card p-6 shadow-md border border-primary/10">
                    <h3 className="mb-4 text-xl font-bold text-primary">Office Hours</h3>
                    <ul className="space-y-2">
                      <li className="flex justify-between">
                        <span>Monday - Friday</span>
                        <span>9:00 AM - 6:00 PM</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Saturday</span>
                        <span>10:00 AM - 4:00 PM</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Sunday</span>
                        <span>Closed</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

