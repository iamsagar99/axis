"use client"

import { useState, useEffect } from "react"
import { Menu, X, Moon, Sun } from "lucide-react"
import { Button } from "../ui/button"
import { useTheme } from "./theme-provider"

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)
  const toggleTheme = () => setTheme(theme === "dark" ? "light" : "dark")

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-200 ${isScrolled ? "bg-background/95 backdrop-blur-sm shadow-sm" : "bg-transparent"}`}
    >
      <div className="container mx-auto px-4 py-3 sm:py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <a href="/" className="text-xl sm:text-2xl font-bold">
              DM<span className="text-primary">Agency</span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-sm font-medium hover:text-primary transition-colors">
              Services
            </a>
            <a href="#portfolio" className="text-sm font-medium hover:text-primary transition-colors">
              Portfolio
            </a>
            <a href="#testimonials" className="text-sm font-medium hover:text-primary transition-colors">
              Testimonials
            </a>
            <a href="#blog" className="text-sm font-medium hover:text-primary transition-colors">
              Blog
            </a>
            <a href="#contact" className="text-sm font-medium hover:text-primary transition-colors">
              Contact
            </a>
            <Button onClick={toggleTheme} variant="ghost" size="icon">
              {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
            <Button>Get Started</Button>
          </nav>

          {/* Mobile Navigation Toggle */}
          <div className="flex items-center md:hidden space-x-2">
            <Button onClick={toggleTheme} variant="ghost" size="icon">
              {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
            <Button onClick={toggleMenu} variant="ghost" size="icon">
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden pt-2 pb-2 px-1">
            <nav className="flex flex-col space-y-3">
              <a
                href="#services"
                className="text-sm font-medium hover:text-primary transition-colors py-2 px-1"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </a>
              <a
                href="#portfolio"
                className="text-sm font-medium hover:text-primary transition-colors py-2 px-1"
                onClick={() => setIsMenuOpen(false)}
              >
                Portfolio
              </a>
              <a
                href="#testimonials"
                className="text-sm font-medium hover:text-primary transition-colors py-2 px-1"
                onClick={() => setIsMenuOpen(false)}
              >
                Testimonials
              </a>
              <a
                href="#blog"
                className="text-sm font-medium hover:text-primary transition-colors py-2 px-1"
                onClick={() => setIsMenuOpen(false)}
              >
                Blog
              </a>
              <a
                href="#contact"
                className="text-sm font-medium hover:text-primary transition-colors py-2 px-1"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </a>
              <Button className="w-full mt-2">Get Started</Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

export default Navbar
