"use client"

import { useState } from "react"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { Textarea } from "./ui/textarea"
import { useToast } from "./ui/use-toast"
import { Mail, Phone, MapPin } from "lucide-react"

const ContactForm = () => {
  const { toast } = useToast()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "We'll get back to you as soon as possible.",
      })
      setFormData({ name: "", email: "", message: "" })
      setIsSubmitting(false)
    }, 1500)
  }

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Have a question or ready to start your next project? Reach out to us today.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 max-w-5xl mx-auto">
          <div>
            <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
            <div className="space-y-4 sm:space-y-6">
              <div className="flex items-start">
                <div className="mr-4 bg-primary/10 p-3 rounded-full text-primary">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-medium mb-1">Email Us</h4>
                  <p className="text-muted-foreground">info@dmagency.com</p>
                  <p className="text-muted-foreground">support@dmagency.com</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="mr-4 bg-primary/10 p-3 rounded-full text-primary">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-medium mb-1">Call Us</h4>
                  <p className="text-muted-foreground">+1 (555) 123-4567</p>
                  <p className="text-muted-foreground">+1 (555) 765-4321</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="mr-4 bg-primary/10 p-3 rounded-full text-primary">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-medium mb-1">Visit Us</h4>
                  <p className="text-muted-foreground">123 Marketing Street</p>
                  <p className="text-muted-foreground">San Francisco, CA 94103</p>
                </div>
              </div>
            </div>

            <div className="mt-12">
              <h3 className="text-xl font-bold mb-4">Business Hours</h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Monday - Friday:</span>
                  <span>9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Saturday:</span>
                  <span>10:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Sunday:</span>
                  <span>Closed</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-muted/30 p-6 sm:p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-6">Send Us a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Your Name
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Your Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Your Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="How can we help you?"
                  rows={5}
                  required
                />
              </div>

              <Button type="submit" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactForm
