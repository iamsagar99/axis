"use client"

import { useState, useEffect } from "react"
import Hero from "../components/hero"
import Services from "../components/services"
import Testimonials from "../components/testimonials"
import Portfolio from "../components/portfolio"
import BlogSection from "../components/blog-section"
import ContactForm from "../components/contact-form"
import { fetchServices, fetchTestimonials, fetchPortfolios, fetchBlogs } from "../lib/api"

const HomePage = ({ companyName }) => {
  const [services, setServices] = useState([])
  const [testimonials, setTestimonials] = useState([])
  const [portfolios, setPortfolios] = useState([])
  const [blogs, setBlogs] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const servicesData = await fetchServices()
        const testimonialsData = await fetchTestimonials()
        const portfoliosData = await fetchPortfolios()
        const blogsData = await fetchBlogs()

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

  return (
    <>
      <Hero companyName={companyName} />
      {!loading && (
        <>
          <Services services={services} showAll={false} />
          <Portfolio portfolios={portfolios} />
          <Testimonials testimonials={testimonials} />
          <BlogSection blogs={blogs} />
          <ContactForm />
        </>
      )}
    </>
  )
}

export default HomePage
