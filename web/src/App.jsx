"use client"

import { useState, useEffect } from "react"
import { ThemeProvider } from "./components/front/theme-provider"
import Navbar from "./components/front/navbar"
import Hero from "./components/front/hero"
import Services from "./components/front/services"
import Testimonials from "./components/front/testimonials"
import Portfolio from "./components/front/portfolio"
import BlogSection from "./components/front/blog-section"
import ContactForm from "./components/front/contact-form"
import Footer from "./components/front/footer"
import { Toaster } from "./components/ui/toaster"

function App() {
  const [services, setServices] = useState([])
  const [testimonials, setTestimonials] = useState([])
  const [portfolios, setPortfolios] = useState([])
  const [blogs, setBlogs] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Add viewport meta tag for better mobile responsiveness
    const meta = document.createElement("meta")
    meta.name = "viewport"
    meta.content = "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
    document.getElementsByTagName("head")[0].appendChild(meta)
    
    const fetchData = async () => {
      try {
        // Simulate API calls
        const servicesData = await mockFetchServices()
        const testimonialsData = await mockFetchTestimonials()
        const portfoliosData = await mockFetchPortfolios()
        const blogsData = await mockFetchBlogs()

        setServices(servicesData)
        setTestimonials(testimonialsData)
        setPortfolios(portfoliosData)
        setBlogs(blogsData)
        setLoading(false)
      } catch (error) {
        console.error("Error fetching data:", error)
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  // Mock data fetching functions
  const mockFetchServices = () => {
    return Promise.resolve([
      {
        id: 1,
        title: "SEO Optimization",
        slug: "seo-optimization",
        description: "Boost your website ranking with our advanced SEO strategies tailored for your business.",
        icon_url: "/icons/seo.svg",
        is_featured: true,
      },
      {
        id: 2,
        title: "Content Marketing",
        slug: "content-marketing",
        description: "Create engaging content that resonates with your audience and drives conversions.",
        icon_url: "/icons/content.svg",
        is_featured: true,
      },
      {
        id: 3,
        title: "Social Media Management",
        slug: "social-media",
        description: "Grow your brand presence across all major social platforms with our expert management.",
        icon_url: "/icons/social.svg",
        is_featured: true,
      },
      {
        id: 4,
        title: "PPC Advertising",
        slug: "ppc-advertising",
        description: "Maximize ROI with targeted pay-per-click campaigns that deliver results.",
        icon_url: "/icons/ppc.svg",
        is_featured: true,
      },
    ])
  }

  const mockFetchTestimonials = () => {
    return Promise.resolve([
      {
        id: 1,
        name: "Sarah Johnson",
        company: "TechStart Inc.",
        quote:
          "Working with this team transformed our online presence. Our organic traffic increased by 200% in just 3 months!",
        image_url: "/testimonials/sarah.jpg",
        is_featured: true,
      },
      {
        id: 2,
        name: "Michael Chen",
        company: "GrowFast Solutions",
        quote:
          "Their strategic approach to content marketing helped us establish authority in our industry. Highly recommended!",
        image_url: "/testimonials/michael.jpg",
        is_featured: true,
      },
      {
        id: 3,
        name: "Jessica Williams",
        company: "Retail Innovations",
        quote:
          "The ROI on our PPC campaigns improved dramatically after working with this talented team. They truly understand digital marketing.",
        image_url: "/testimonials/jessica.jpg",
        is_featured: true,
      },
    ])
  }

  const mockFetchPortfolios = () => {
    return Promise.resolve([
      {
        id: 1,
        title: "E-commerce Revenue Growth",
        description: "Complete digital strategy overhaul for a fashion retailer.",
        image_url: "/portfolio/ecommerce.jpg",
        before_stats: "Monthly revenue: $50,000, Conversion rate: 1.2%",
        after_stats: "Monthly revenue: $150,000, Conversion rate: 3.5%",
        client_name: "Fashion Forward",
        client_logo: "/clients/fashion-forward.svg",
        is_featured: true,
      },
      {
        id: 2,
        title: "B2B Lead Generation",
        description: "Content marketing and SEO campaign for a SaaS company.",
        image_url: "/portfolio/b2b.jpg",
        before_stats: "Monthly leads: 45, Cost per lead: $120",
        after_stats: "Monthly leads: 200, Cost per lead: $35",
        client_name: "CloudSoft Solutions",
        client_logo: "/clients/cloudsoft.svg",
        is_featured: true,
      },
      {
        id: 3,
        title: "Local Business Visibility",
        description: "Local SEO and Google Business optimization for a restaurant chain.",
        image_url: "/portfolio/local.jpg",
        before_stats: "Monthly foot traffic: 1,200, Online orders: 300",
        after_stats: "Monthly foot traffic: 2,800, Online orders: 950",
        client_name: "Taste of Italy",
        client_logo: "/clients/taste-italy.svg",
        is_featured: true,
      },
    ])
  }

  const mockFetchBlogs = () => {
    return Promise.resolve([
      {
        id: 1,
        title: "10 SEO Trends You Can't Ignore in 2023",
        slug: "seo-trends-2023",
        content: "Lorem ipsum dolor sit amet...",
        image_url: "/blog/seo-trends.jpg",
        published_at: "2023-05-15",
        author_id: 1,
        status: "published",
        is_featured: true,
      },
      {
        id: 2,
        title: "How to Create a Content Strategy That Converts",
        slug: "content-strategy-converts",
        content: "Lorem ipsum dolor sit amet...",
        image_url: "/blog/content-strategy.jpg",
        published_at: "2023-06-02",
        author_id: 2,
        status: "published",
        is_featured: true,
      },
      {
        id: 3,
        title: "Social Media Algorithms: What Changed in 2023",
        slug: "social-media-algorithms-2023",
        content: "Lorem ipsum dolor sit amet...",
        image_url: "/blog/social-algorithms.jpg",
        published_at: "2023-06-20",
        author_id: 1,
        status: "published",
        is_featured: true,
      },
    ])
  }

  return (
    <ThemeProvider defaultTheme="light" storageKey="dm-theme">
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Hero />
          {!loading && (
            <>
              <Services services={services} />
              <Portfolio portfolios={portfolios} />
              <Testimonials testimonials={testimonials} />
              <BlogSection blogs={blogs} />
              <ContactForm />
            </>
          )}
        </main>
        <Footer />
        <Toaster />
      </div>
    </ThemeProvider>
  )
}

export default App
