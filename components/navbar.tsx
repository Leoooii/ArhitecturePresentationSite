"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur-md">
      <div className="container flex h-16 items-center justify-between px-4">
        <Link href="/" className="text-xl font-serif font-bold text-primary">
          Ilie Matilda Gabriela
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex md:items-center md:space-x-6">
          <Link href="/" className="text-foreground/80 transition-colors hover:text-primary">
            Home
          </Link>
          <Link href="/about" className="text-foreground/80 transition-colors hover:text-primary">
            About
          </Link>
          <Link href="/projects" className="text-foreground/80 transition-colors hover:text-primary">
            Projects
          </Link>
          <Link href="/contact" className="text-foreground/80 transition-colors hover:text-primary">
            Contact
          </Link>
          <ThemeToggle />
        </nav>

        {/* Mobile Navigation Toggle */}
        <div className="flex items-center md:hidden">
          <ThemeToggle />
          <Button variant="ghost" size="icon" onClick={toggleMenu} className="ml-2">
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="container border-t px-4 py-4 md:hidden">
          <nav className="flex flex-col space-y-4">
            <Link
              href="/"
              className="text-foreground/80 transition-colors hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-foreground/80 transition-colors hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="/projects"
              className="text-foreground/80 transition-colors hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              Projects
            </Link>
            <Link
              href="/contact"
              className="text-foreground/80 transition-colors hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}

