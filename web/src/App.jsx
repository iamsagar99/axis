"use client"

import { useState, useEffect } from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { ThemeProvider } from "./components/theme-provider"
import Navbar from "./components/navbar"
import HomePage from "./pages/home-page"
import ServicesPage from "./pages/services-page"
import ServiceDetail from "./pages/service-detail"
import BlogsPage from "./pages/blogs-page"
import BlogDetail from "./pages/blog-detail"
import SuccessStoriesPage from "./pages/success-stories-page"
import SuccessStoryDetail from "./pages/success-story-detail"
import ContactForm from "./components/contact-form"
import Footer from "./components/footer"
import { Toaster } from "./components/ui/toaster"

function App() {
  const [companyName, setCompanyName] = useState("AxisTech")

  useEffect(() => {
    // In a real app, this would be fetched from .env
    // For demo purposes, we'll use a hardcoded value
    const envCompanyName = "AxisTech"
    setCompanyName(envCompanyName)

    // Add viewport meta tag for better mobile responsiveness
    const meta = document.createElement("meta")
    meta.name = "viewport"
    meta.content = "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
    document.getElementsByTagName("head")[0].appendChild(meta)
  }, [])

  return (
    <ThemeProvider defaultTheme="light" storageKey="axistech-theme">
      <Router>
        <div className="min-h-screen flex flex-col">
          <Navbar companyName={companyName} />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<HomePage companyName={companyName} />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/services/:slug" element={<ServiceDetail />} />
              <Route path="/blogs" element={<BlogsPage />} />
              <Route path="/blogs/:slug" element={<BlogDetail />} />
              <Route path="/success-stories" element={<SuccessStoriesPage />} />
              <Route path="/success-stories/:slug" element={<SuccessStoryDetail />} />
              <Route path="/contact" element={<ContactForm />} />
            </Routes>
          </main>
          <Footer companyName={companyName} />
          <Toaster />
        </div>
      </Router>
    </ThemeProvider>
  )
}

export default App
