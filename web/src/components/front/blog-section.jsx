import { Card, CardContent, CardFooter } from "../ui/card"
import { Button } from "../ui/button"
import { ArrowRight } from "lucide-react"

const BlogSection = ({ blogs }) => {
  // Format date to readable format
  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" }
    return new Date(dateString).toLocaleDateString(undefined, options)
  }

  return (
    <section id="blog" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Latest Insights</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Stay updated with the latest trends and strategies in digital marketing.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <Card key={blog.id} className="overflow-hidden group">
              <div className="relative overflow-hidden h-48">
                <img
                  src={blog.image_url || `/placeholder.svg?height=192&width=384&text=${blog.title.charAt(0)}`}
                  alt={blog.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <CardContent className="pt-6">
                <div className="text-sm text-muted-foreground mb-2">{formatDate(blog.published_at)}</div>
                <h3 className="font-bold text-xl mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                  {blog.title}
                </h3>
                <p className="text-sm text-muted-foreground line-clamp-3">{blog.content.substring(0, 150)}...</p>
              </CardContent>
              <CardFooter>
                <Button variant="ghost" className="p-0 h-auto group-hover:text-primary">
                  Read more <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button variant="outline" size="lg">
            View All Articles
          </Button>
        </div>
      </div>
    </section>
  )
}

export default BlogSection
