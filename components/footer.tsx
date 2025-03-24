import Link from "next/link"
import { Instagram, Linkedin, Mail } from "lucide-react"

export default function Footer() {
  return (
    <footer className="border-t bg-primary/10 py-8">
      <div className="container px-4">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <h3 className="mb-4 text-lg font-bold text-primary">Ana Popescu</h3>
            <p className="text-muted-foreground">
              First-year architecture student passionate about sustainable design and traditional craftsmanship.
            </p>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-bold text-primary">Quick Links</h3>
            <nav className="flex flex-col space-y-2">
              <Link href="/" className="text-muted-foreground hover:text-primary">
                Home
              </Link>
              <Link href="/about" className="text-muted-foreground hover:text-primary">
                About
              </Link>
              <Link href="/projects" className="text-muted-foreground hover:text-primary">
                Projects
              </Link>
              <Link href="/contact" className="text-muted-foreground hover:text-primary">
                Contact
              </Link>
            </nav>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-bold text-primary">Connect</h3>
            <div className="flex space-x-4">
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link href="mailto:ana.popescu@example.com" className="text-muted-foreground hover:text-primary">
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </Link>
            </div>
            <p className="mt-4 text-sm text-muted-foreground">Email: ana.popescu@example.com</p>
          </div>
        </div>
        <div className="mt-8 border-t border-primary/20 pt-4 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Ana Popescu. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

