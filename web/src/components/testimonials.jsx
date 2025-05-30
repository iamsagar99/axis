"use client"

import { useState } from "react"
import { Card, CardContent } from "./ui/card"
import { Button } from "./ui/button"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"

const Testimonials = ({ testimonials }) => {
  const [currentIndex, setCurrentIndex] = useState(0)

  if (!testimonials || testimonials.length === 0) {
    return <div>No testimonials available.</div>
  }

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1))
  }

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1))
  }

  return (
    <section id="testimonials" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our clients have to say about working with us.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <Card className="border-none shadow-lg bg-primary/5 mx-4 sm:mx-auto">
            <CardContent className="pt-8 pb-8 sm:pt-10 sm:pb-10 px-4 sm:px-6">
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground p-3 rounded-full">
                <Quote className="h-6 w-6" />
              </div>

              <div className="text-center">
                <blockquote className="text-lg sm:text-xl md:text-2xl italic mb-6 sm:mb-8">
                  "{testimonials[currentIndex]?.testimonial || 'No testimonial available.'}"
                </blockquote>

                <div className="flex items-center justify-center mb-4">
                  <div className="w-16 h-16 rounded-full overflow-hidden mr-4 border-2 border-primary">
                    <img
                      src={
                        testimonials[currentIndex]?.avatar_url ||
                        `/placeholder.svg?height=64&width=64&text=${testimonials[currentIndex]?.name.charAt(0) || "/placeholder.svg"}`
                      }
                      alt={testimonials[currentIndex]?.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="text-left">
                    <p className="font-semibold">{testimonials[currentIndex]?.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonials[currentIndex]?.company}</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="flex justify-center mt-6 sm:mt-8 gap-2">
            <Button variant="outline" size="icon" onClick={prevTestimonial} className="rounded-full">
              <ChevronLeft className="h-4 w-4" />
            </Button>
            {testimonials.map((_, index) => (
              <Button
                key={index}
                variant={index === currentIndex ? "default" : "outline"}
                size="icon"
                className="w-2 h-2 rounded-full p-0 min-w-0"
                onClick={() => setCurrentIndex(index)}
              >
                <span className="sr-only">Go to testimonial {index + 1}</span>
              </Button>
            ))}
            <Button variant="outline" size="icon" onClick={nextTestimonial} className="rounded-full">
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
