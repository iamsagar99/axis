"use client"

import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { Card, CardContent, CardFooter } from "../components/ui/card"
import { Button } from "../components/ui/button"
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react"
import { fetchBlogs } from "../lib/api"

const BlogsPage = () => {
  const [blogs, setBlogs] = useState([])
  const [loading, setLoading] = useState(true)
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)
  const blogsPerPage = 9

  useEffect(() => {
    const fetchData = async () => {
      try {
        const blogsData = await fetchBlogs()
        setBlogs(blogsData)
        setTotalPages(Math.ceil(blogsData.length / blogsPerPage))
        setLoading(false)
      } catch (error) {
        console.error("Error fetching blogs:", error)
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  // Format date to readable format
  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" }
    return new Date(dateString).toLocaleDateString(undefined, options)
  }

  // Get current blogs
  const indexOfLastBlog = currentPage * blogsPerPage
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage
  const currentBlogs = blogs.slice(indexOfFirstBlog, indexOfLastBlog)

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber)

  return (
    <div className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Blog</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Stay updated with the latest trends, insights, and news in technology and digital innovation.
          </p>
        </div>

        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {currentBlogs.map((blog) => (
                <Card key={blog.id} className="overflow-hidden group h-full flex flex-col">
                  <div className="relative overflow-hidden h-48 sm:h-52 md:h-60">
                    <img
                      src={blog.image_url || `/placeholder.svg?height=240&width=400&text=${blog.title.charAt(0)}`}
                      alt={blog.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <CardContent className="pt-6 flex-grow">
                    <div className="flex items-center text-sm text-muted-foreground mb-2">
                      <span>{formatDate(blog.published_at)}</span>
                      <span className="mx-2">•</span>
                      <span>{blog.category}</span>
                    </div>
                    <h3 className="font-bold text-xl mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                      {blog.title}
                    </h3>
                    <p className="text-sm text-muted-foreground line-clamp-3">{blog.excerpt}</p>
                  </CardContent>
                  <CardFooter>
                    <Link to={`/blogs/${blog.slug}`}>
                      <Button variant="ghost" className="p-0 h-auto group-hover:text-primary">
                        Read more <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>
              ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex justify-center mt-12">
                <div className="flex items-center space-x-2">
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => paginate(currentPage > 1 ? currentPage - 1 : 1)}
                    disabled={currentPage === 1}
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </Button>

                  {[...Array(totalPages)].map((_, index) => (
                    <Button
                      key={index}
                      variant={currentPage === index + 1 ? "default" : "outline"}
                      size="sm"
                      onClick={() => paginate(index + 1)}
                    >
                      {index + 1}
                    </Button>
                  ))}

                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => paginate(currentPage < totalPages ? currentPage + 1 : totalPages)}
                    disabled={currentPage === totalPages}
                  >
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  )
}

export default BlogsPage
