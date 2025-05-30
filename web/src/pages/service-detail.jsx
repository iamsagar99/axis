"use client"

import { useState, useEffect } from "react"
import { useParams, Link } from "react-router-dom"
import { ArrowLeft } from "lucide-react"
import { Button } from "../components/ui/button"
import { fetchServiceBySlug } from "../lib/api"
import ContactForm from "../components/contact-form"

const ServiceDetail = () => {
  const { slug } = useParams()
  const [service, setService] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const serviceData = await fetchServiceBySlug(slug)
        setService(serviceData)
        setLoading(false)
      } catch (error) {
        console.error("Error fetching service:", error)
        setLoading(false)
      }
    }

    fetchData()
  }, [slug])

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64 py-20">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    )
  }

  if (!service) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <h1 className="text-3xl font-bold mb-4">Service Not Found</h1>
        <p className="mb-8">The service you're looking for doesn't exist or has been moved.</p>
        <Link to="/services">
          <Button>Back to Services</Button>
        </Link>
      </div>
    )
  }

  return (
    <div className="py-20">
      <div className="container mx-auto px-4">
        <Link to="/services" className="inline-flex items-center text-primary hover:underline mb-8">
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to Services
        </Link>

        <div className="mb-12">
          <div className="flex items-center mb-6">
            <div className="w-16 h-16 mr-6 flex items-center justify-center rounded-lg bg-primary/10 text-primary">
              <img
                src={service.icon_url || `/placeholder.svg?height=64&width=64&text=${service.title.charAt(0)}`}
                alt={service.title}
                className="w-8 h-8"
              />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold">{service.title}</h1>
          </div>

          <div className="prose prose-lg dark:prose-invert max-w-none">
            {/* Render HTML content safely */}
            <div dangerouslySetInnerHTML={{ __html: service.content }} />
          </div>
        </div>

        {service.features && service.features.length > 0 && (
          <div className="my-16">
            <h2 className="text-3xl font-bold mb-8">Key Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {service.features.map((feature, index) => (
                <div
                  key={index}
                  className="p-6 border rounded-lg bg-card hover:shadow-md transition-shadow duration-300"
                >
                  <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="my-16 bg-muted/30 p-8 rounded-lg">
          <h2 className="text-3xl font-bold mb-4">Ready to get started?</h2>
          <p className="text-lg mb-6">
            Contact us today to learn more about our {service.title} services and how we can help your business succeed.
          </p>
          <Link to="/contact">
            <Button size="lg">Get in Touch</Button>
          </Link>
        </div>

        <ContactForm />
      </div>
    </div>
  )
}

export default ServiceDetail
