import { Facebook, Twitter, Instagram, Linkedin, Youtube, ArrowRight } from "lucide-react"
import { Input } from "./ui/input"
import { Button } from "./ui/button"
import { Link } from "react-router-dom"

const Footer = ({ companyName }) => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-muted/50 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-8 sm:mb-12">
          <div>
            <h3 className="text-2xl font-bold mb-4">
              <span className="text-primary">{companyName}</span>
            </h3>
            <p className="text-muted-foreground mb-6">
              Empowering businesses through innovative technology solutions in AI, cloud, data engineering, digital
              marketing, and web development.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Youtube className="h-5 w-5" />
                <span className="sr-only">YouTube</span>
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2 sm:space-y-3">
              <li>
                <Link to="/" className="text-muted-foreground hover:text-primary transition-colors inline-block py-1">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-muted-foreground hover:text-primary transition-colors inline-block py-1"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/success-stories"
                  className="text-muted-foreground hover:text-primary transition-colors inline-block py-1"
                >
                  Success Stories
                </Link>
              </li>
              <li>
                <Link
                  to="/blogs"
                  className="text-muted-foreground hover:text-primary transition-colors inline-block py-1"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-muted-foreground hover:text-primary transition-colors inline-block py-1"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Services</h4>
            <ul className="space-y-2 sm:space-y-3">
              <li>
                <Link
                  to="/services/ai-solutions"
                  className="text-muted-foreground hover:text-primary transition-colors inline-block py-1"
                >
                  AI Solutions
                </Link>
              </li>
              <li>
                <Link
                  to="/services/cloud-services"
                  className="text-muted-foreground hover:text-primary transition-colors inline-block py-1"
                >
                  Cloud Services
                </Link>
              </li>
              <li>
                <Link
                  to="/services/data-engineering"
                  className="text-muted-foreground hover:text-primary transition-colors inline-block py-1"
                >
                  Data Engineering
                </Link>
              </li>
              <li>
                <Link
                  to="/services/digital-marketing"
                  className="text-muted-foreground hover:text-primary transition-colors inline-block py-1"
                >
                  Digital Marketing
                </Link>
              </li>
              <li>
                <Link
                  to="/services/web-development"
                  className="text-muted-foreground hover:text-primary transition-colors inline-block py-1"
                >
                  Web Development
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Subscribe</h4>
            <p className="text-muted-foreground mb-4">
              Subscribe to our newsletter to receive the latest updates and insights.
            </p>
            <div className="flex flex-col sm:flex-row gap-2 mt-2">
              <Input placeholder="Your email" className="w-full sm:max-w-[220px]" />
              <Button size="icon" className="w-full sm:w-auto">
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t pt-6 sm:pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-muted-foreground">
              &copy; {currentYear} {companyName}. All rights reserved.
            </p>
            <div className="flex gap-4 mt-4 md:mt-0">
              <Link to="/privacy-policy" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Terms of Service
              </Link>
              <Link to="/cookies" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
