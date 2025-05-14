import React from "react";
import { Link } from "react-router-dom";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "../common/ThemeContext";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const serviceItems = [
  {
    title: "Web Development",
    description: "Custom websites using modern tech stacks",
    href: "/services/web-development",
  },
  {
    title: "Mobile App Development",
    description: "Cross-platform mobile applications",
    href: "/services/mobile-app-development",
  },
  {
    title: "AI/ML Solutions",
    description: "AI-powered software and tools",
    href: "/services/ai-ml",
  },
];

export function TopNavBar() {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="w-full border-b bg-background px-4 py-3 shadow-sm dark:bg-gray-900 dark:text-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-bold tracking-tight text-primary">
          Axis<span className="text-blue-500">Tech</span>
        </div>

        {/* Navigation Menu */}
        <div className="flex items-center space-x-6">
          {/* Home */}
          <Link
            to="/"
            className="text-sm font-medium transition-colors hover:text-blue-500"
          >
            Home
          </Link>

          {/* About */}
          <Link
            to="/about"
            className="text-sm font-medium transition-colors hover:text-blue-500"
          >
            About
          </Link>

          {/* Services Dropdown */}
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-sm font-medium">
                  Services
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[200px] gap-3 p-4 md:w-[300px] lg:w-[400px] lg:grid-cols-1">
                    {serviceItems.map((item) => (
                      <ListItem
                        key={item.title}
                        title={item.title}
                        href={item.href}
                      >
                        {item.description}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          {/* Blog */}
          <Link
            to="/blog"
            className="text-sm font-medium transition-colors hover:text-blue-500"
          >
            Blog
          </Link>

          {/* Contact */}
          <Link
            to="/contact"
            className="text-sm font-medium transition-colors hover:text-blue-500"
          >
            Contact
          </Link>

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="rounded p-2 transition hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            {theme === "dark" ? (
              <Sun className="h-5 w-5 text-yellow-400" />
            ) : (
              <Moon className="h-5 w-5 text-gray-800" />
            )}
          </button>
        </div>
      </div>
    </nav>
  );
}

// ListItem for dropdown
const ListItem = React.forwardRef(
  ({ className, title, children, href }, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <Link
            to={href}
            ref={ref}
            className={cn(
              "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
              className
            )}
          >
            <div className="text-sm font-semibold leading-none">{title}</div>
            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
              {children}
            </p>
          </Link>
        </NavigationMenuLink>
      </li>
    );
  }
);
ListItem.displayName = "ListItem";
