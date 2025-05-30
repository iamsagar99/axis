import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card"
import { Button } from "./ui/button"
import { ArrowRight } from "lucide-react"
import { Link } from "react-router-dom"

const Services = ({ services, showAll = true }) => {
  // If not showing all, limit to 4 services
  const displayServices = showAll ? services : services.slice(0, 4)

  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We offer a comprehensive range of technology services to help your business innovate and succeed in the
            digital era.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {displayServices.map((service) => (
            <Card key={service.id} className="group hover:shadow-lg transition-all duration-300">
              <CardHeader className="p-4 sm:p-6">
                <div className="w-12 h-12 mb-4 flex items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <img
                    src={service.icon_url || `/placeholder.svg?height=48&width=48&text=${service.title.charAt(0)}`}
                    alt={service.title}
                    className="w-6 h-6"
                  />
                </div>
                <CardTitle>{service.title}</CardTitle>
                <CardDescription className="line-clamp-2 mt-1 text-sm sm:text-base">
                  {service.short_description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{service.description}</p>
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

        {!showAll && (
          <div className="mt-12 text-center">
            <Link to="/services">
              <Button variant="outline" size="lg">
                View All Services
              </Button>
            </Link>
          </div>
        )}
      </div>
    </section>
  )
}

export default Services
