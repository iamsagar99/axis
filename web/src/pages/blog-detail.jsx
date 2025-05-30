"use client"

import { useState, useEffect } from "react"
import { useParams, Link } from "react-router-dom"
import { ArrowLeft, Calendar, User, Tag } from "lucide-react"
import { Button } from "../components/ui/button"
import { fetchBlogBySlug, fetchRelatedBlogs } from "../lib/api"

const BlogDetail = () => {
  const { slug } = useParams()
  const [blog, setBlog] = useState(null)
  const [relatedBlogs, setRelatedBlogs] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const blogData = await fetchBlogBySlug(slug)
        setBlog(blogData)

        if (blogData) {
          const relatedBlogsData = await fetchRelatedBlogs(blogData.id, blogData.category)
          setRelatedBlogs(relatedBlogsData)
        }

        setLoading(false)
      } catch (error) {
        console.error("Error fetching blog:", error)
        setLoading(false)
      }
    }

    fetchData()
    // Scroll to top when slug changes
    window.scrollTo(0, 0)
  }, [slug])

  // Format date to readable format
  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" }
    return new Date(dateString).toLocaleDateString(undefined, options)
  }

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64 py-20">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    )
  }

  if (!blog) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <h1 className="text-3xl font-bold mb-4">Blog Not Found</h1>
        <p className="mb-8">The blog post you're looking for doesn't exist or has been moved.</p>
        <Link to="/blogs">
          <Button>Back to Blogs</Button>
        </Link>
      </div>
    )
  }

  return (
    <div className="py-20">
      <div className="container mx-auto px-4">
        <Link to="/blogs" className="inline-flex items-center text-primary hover:underline mb-8">
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to Blogs
        </Link>

        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">{blog.title}</h1>

            <div className="flex flex-wrap items-center text-muted-foreground mb-8">
              <div className="flex items-center mr-6 mb-2">
                <Calendar className="h-4 w-4 mr-2" />
                <span>{formatDate(blog.published_at)}</span>
              </div>
              <div className="flex items-center mr-6 mb-2">
                <User className="h-4 w-4 mr-2" />
                <span>{blog.author}</span>
              </div>
              <div className="flex items-center mb-2">
                <Tag className="h-4 w-4 mr-2" />
                <span>{blog.category}</span>
              </div>
            </div>

            {blog.image_url && (
              <div className="mb-8">
                <img
                  src={blog.image_url || "/placeholder.svg"}
                  alt={blog.title}
                  className="w-full h-auto rounded-lg object-cover max-h-[500px]"
                />
              </div>
            )}

            <div className="prose prose-lg dark:prose-invert max-w-none">
              {/* Render HTML content safely */}
              <div dangerouslySetInnerHTML={{ __html: blog.content }} />
            </div>
          </div>

          {/* Tags */}
          {blog.tags && blog.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 my-8">
              {blog.tags.map((tag, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-muted text-muted-foreground rounded-full text-sm hover:bg-primary/10 transition-colors"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          {/* Related Blogs */}
          {relatedBlogs.length > 0 && (
            <div className="mt-16">
              <h2 className="text-2xl font-bold mb-6">Related Articles</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {relatedBlogs.map((relatedBlog) => (
                  <Link
                    key={relatedBlog.id}
                    to={`/blogs/${relatedBlog.slug}`}
                    className="group block bg-card border rounded-lg overflow-hidden hover:shadow-md transition-shadow"
                  >
                    <div className="h-40 overflow-hidden">
                      <img
                        src={
                          relatedBlog.image_url ||
                          `/placeholder.svg?height=160&width=320&text=${relatedBlog.title.charAt(0) || "/placeholder.svg"}`
                        }
                        alt={relatedBlog.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors line-clamp-2">
                        {relatedBlog.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">{formatDate(relatedBlog.published_at)}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default BlogDetail
