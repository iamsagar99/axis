import { ArrowRight } from "lucide-react"
import { Button } from "../ui/button"

const Hero = () => {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-background pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              Grow Your Business With Data-Driven Marketing
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto lg:mx-0">
              We help businesses like yours achieve measurable growth through strategic digital marketing solutions
              tailored to your specific goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" className="gap-2">
                Get Free Consultation <ArrowRight className="h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline">
                View Our Work
              </Button>
            </div>

            <div className="mt-12 flex flex-wrap justify-center lg:justify-start gap-8">
              <div className="text-center">
                <p className="text-3xl font-bold">500+</p>
                <p className="text-sm text-muted-foreground">Happy Clients</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold">95%</p>
                <p className="text-sm text-muted-foreground">Satisfaction Rate</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold">$10M+</p>
                <p className="text-sm text-muted-foreground">Revenue Generated</p>
              </div>
            </div>
          </div>

          <div className="flex-1 w-full max-w-md lg:max-w-none">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary to-primary/50 rounded-lg blur-lg opacity-75"></div>
              <div className="relative bg-background rounded-lg shadow-xl overflow-hidden">
                <img
                  src="/placeholder.svg?height=600&width=600"
                  alt="Digital Marketing Dashboard"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
