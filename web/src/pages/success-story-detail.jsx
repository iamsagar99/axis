"use client"

import { useState, useEffect } from "react"
import { useParams, Link } from "react-router-dom"
import { ArrowLeft, Building, BarChart } from "lucide-react"
import { Button } from "../components/ui/button"
import { fetchSuccessStoryBySlug } from "../lib/api"

const SuccessStoryDetail = () => {
  const { slug } = useParams()
  const [story, setStory] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const storyData = await fetchSuccessStoryBySlug(slug)
        setStory(storyData)
        setLoading(false)
      } catch (error) {
        console.error("Error fetching success story:", error)
        setLoading(false)
      }
    }

    fetchData()
    // Scroll to top when slug changes
    window.scrollTo(0, 0)
  }, [slug])

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64 py-20">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    )
  }

  if (!story) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <h1 className="text-3xl font-bold mb-4">Success Story Not Found</h1>
        <p className="mb-8">The success story you're looking for doesn't exist or has been moved.</p>
        <Link to="/success-stories">
          <Button>Back to Success Stories</Button>
        </Link>
      </div>
    )
  }

  return (
    <div className="py-20">
      <div className="container mx-auto px-4">
        <Link to="/success-stories" className="inline-flex items-center text-primary hover:underline mb-8">
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to Success Stories
        </Link>

        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">{story.title}</h1>

            <div className="flex flex-wrap items-center text-muted-foreground mb-8">
              <div className="flex items-center mr-6 mb-2">
                <Building className="h-4 w-4 mr-2" />
                <span>{story.client_name}</span>
              </div>
              <div className="flex items-center mb-2">
                <BarChart className="h-4 w-4 mr-2" />
                <span>{story.industry}</span>
              </div>
            </div>

            {story.image_url && (
              <div className="mb-8">
                <img
                  src={story.image_url || "/placeholder.svg"}
                  alt={story.title}
                  className="w-full h-auto rounded-lg object-cover max-h-[500px]"
                />
              </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-muted/30 p-6 rounded-lg">
                <h2 className="text-xl font-bold mb-3">Challenge</h2>
                <p>{story.challenge}</p>
              </div>
              <div className="bg-primary/10 p-6 rounded-lg">
                <h2 className="text-xl font-bold mb-3">Result</h2>
                <p>{story.result}</p>
              </div>
            </div>

            <div className="prose prose-lg dark:prose-invert max-w-none">
              {/* Render HTML content safely */}
              <div dangerouslySetInnerHTML={{ __html: story.content }} />
            </div>
          </div>

          {/* Key Metrics */}
          {story.metrics && story.metrics.length > 0 && (
            <div className="my-12 p-8 bg-muted/30 rounded-lg">
              <h2 className="text-2xl font-bold mb-6 text-center">Key Results</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {story.metrics.map((metric, index) => (
                  <div key={index} className="text-center">
                    <p className="text-3xl font-bold text-primary mb-2">{metric.value}</p>
                    <p className="text-sm text-muted-foreground">{metric.label}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Testimonial */}
          {story.testimonial && (
            <div className="my-12 p-8 bg-primary/5 rounded-lg border border-primary/20">
              <div className="flex flex-col items-center">
                <blockquote className="text-xl italic mb-6 text-center">"{story.testimonial.quote}"</blockquote>
                <div className="flex items-center">
                  {story.testimonial.avatar && (
                    <div className="w-12 h-12 rounded-full overflow-hidden mr-4 border-2 border-primary">
                      <img
                        src={story.testimonial.avatar || "/placeholder.svg"}
                        alt={story.testimonial.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}
                  <div>
                    <p className="font-semibold">{story.testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{story.testimonial.position}</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          <div className="mt-16">
            <h2 className="text-2xl font-bold mb-6">Ready to achieve similar results?</h2>
            <p className="text-lg mb-6">
              Contact us today to discuss how we can help your business succeed with our innovative technology
              solutions.
            </p>
            <Link to="/contact">
              <Button size="lg">Get in Touch</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SuccessStoryDetail
