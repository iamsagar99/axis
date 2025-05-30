"use client"

import { useState, useEffect } from "react"
import { Link, useLocation } from "react-router-dom"
import { Menu, X, Moon, Sun } from "lucide-react"
import { Button } from "./ui/button"
import { useTheme } from "./theme-provider"

const Navbar = ({ companyName }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const { theme, setTheme } = useTheme()
  const location = useLocation()

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

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false)
  }, [location])

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)
  const toggleTheme = () => setTheme(theme === "dark" ? "light" : "dark")

  const isActive = (path) => {
    return location.pathname === path ? "text-primary font-medium" : "text-foreground hover:text-primary"
  }

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-200 ${isScrolled ? "bg-background/95 backdrop-blur-sm shadow-sm" : "bg-transparent"}`}
    >
      <div className="container mx-auto px-4 py-3 sm:py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Link to="/" className="text-xl sm:text-2xl font-bold">
              <span className="text-primary">{companyName}</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className={`text-sm transition-colors ${isActive("/")}`}>
              Home
            </Link>
            <Link to="/services" className={`text-sm transition-colors ${isActive("/services")}`}>
              Services
            </Link>
            <Link to="/success-stories" className={`text-sm transition-colors ${isActive("/success-stories")}`}>
              Success Stories
            </Link>
            <Link to="/blogs" className={`text-sm transition-colors ${isActive("/blogs")}`}>
              Blog
            </Link>
            <Link to="/contact" className={`text-sm transition-colors ${isActive("/contact")}`}>
              Contact
            </Link>
            <Button onClick={toggleTheme} variant="ghost" size="icon">
              {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
            <Link to="/contact">
              <Button>Get Started</Button>
            </Link>
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
              <Link to="/" className={`text-sm transition-colors py-2 px-1 ${isActive("/")}`}>
                Home
              </Link>
              <Link to="/services" className={`text-sm transition-colors py-2 px-1 ${isActive("/services")}`}>
                Services
              </Link>
              <Link
                to="/success-stories"
                className={`text-sm transition-colors py-2 px-1 ${isActive("/success-stories")}`}
              >
                Success Stories
              </Link>
              <Link to="/blogs" className={`text-sm transition-colors py-2 px-1 ${isActive("/blogs")}`}>
                Blog
              </Link>
              <Link to="/contact" className={`text-sm transition-colors py-2 px-1 ${isActive("/contact")}`}>
                Contact
              </Link>
              <Link to="/contact">
                <Button className="w-full mt-2">Get Started</Button>
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

export default Navbar
