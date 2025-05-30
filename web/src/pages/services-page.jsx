"use client"

import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../components/ui/card"
import { Button } from "../components/ui/button"
import { ArrowRight } from "lucide-react"
import { fetchServices } from "../lib/api"

const ServicesPage = () => {
  const [services, setServices] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const servicesData = await fetchServices()
        setServices(servicesData)
        setLoading(false)
      } catch (error) {
        console.error("Error fetching services:", error)
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  return (
    <div className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We offer a comprehensive range of technology services to help your business innovate and succeed in the
            digital era.
          </p>
        </div>

        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <Card key={service.id} className="group hover:shadow-lg transition-all duration-300 h-full flex flex-col">
                <CardHeader className="p-6">
                  <div className="w-12 h-12 mb-4 flex items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <img
                      src={service.icon_url || `/placeholder.svg?height=48&width=48&text=${service.title.charAt(0)}`}
                      alt={service.title}
                      className="w-6 h-6"
                    />
                  </div>
                  <CardTitle>{service.title}</CardTitle>
                  <CardDescription className="line-clamp-2 mt-1">{service.short_description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-sm text-muted-foreground line-clamp-3">{service.description}</p>
                </CardContent>
                <CardFooter>
                  <Link to={`/services/${service.slug}`}>
                    <Button variant="ghost" className="p-0 h-auto group-hover:text-primary">
                      Learn more <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default ServicesPage
