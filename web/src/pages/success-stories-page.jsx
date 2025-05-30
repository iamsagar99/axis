"use client"

import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { Card, CardContent, CardFooter } from "../components/ui/card"
import { Button } from "../components/ui/button"
import { ArrowRight } from "lucide-react"
import { fetchSuccessStories } from "../lib/api"

const SuccessStoriesPage = () => {
  const [stories, setStories] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const storiesData = await fetchSuccessStories()
        setStories(storiesData)
        setLoading(false)
      } catch (error) {
        console.error("Error fetching success stories:", error)
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  return (
    <div className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Success Stories</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover how we've helped businesses like yours achieve remarkable results through innovative technology
            solutions.
          </p>
        </div>

        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {stories.map((story) => (
              <Card key={story.id} className="overflow-hidden group h-full flex flex-col">
                <div className="relative overflow-hidden h-60 sm:h-64 md:h-72">
                  <img
                    src={story.image_url || `/placeholder.svg?height=288&width=512&text=${story.title.charAt(0)}`}
                    alt={story.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <div className="text-white">
                      <h3 className="font-bold text-lg">{story.title}</h3>
                      <p className="text-sm text-white/80">{story.client_name}</p>
                    </div>
                  </div>
                </div>
                <CardContent className="pt-6 flex-grow">
                  <div className="flex items-center mb-2">
                    <span className="text-sm font-medium px-2 py-1 rounded bg-primary/10 text-primary">
                      {story.industry}
                    </span>
                  </div>
                  <h3 className="font-bold text-xl mb-3">{story.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{story.excerpt}</p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                    <div>
                      <h4 className="text-xs uppercase text-muted-foreground font-semibold mb-1">Challenge</h4>
                      <p className="text-sm line-clamp-2">{story.challenge}</p>
                    </div>
                    <div>
                      <h4 className="text-xs uppercase text-muted-foreground font-semibold mb-1">Result</h4>
                      <p className="text-sm text-primary font-medium line-clamp-2">{story.result}</p>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Link to={`/success-stories/${story.slug}`}>
                    <Button variant="ghost" className="p-0 h-auto group-hover:text-primary">
                      Read full story{" "}
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
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

export default SuccessStoriesPage
