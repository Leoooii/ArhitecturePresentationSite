import Link from "next/link"
import Image from "next/image"
import { ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative h-[80vh] wood-texture">
          <div className="absolute inset-0 bg-black/30"></div>
          <div className="container relative z-10 flex h-full flex-col items-center justify-center px-4 text-center text-white">
            <h1 className="mb-4 text-4xl font-bold md:text-6xl">Ilie Matilda-Gabriela</h1>
            <p className="mb-8 text-xl md:text-2xl">First-Year Architecture Student</p>
            <Button asChild className="bg-primary hover:bg-primary/90">
              <Link href="/projects">
                View My Projects <ChevronRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </section>

        {/* About Section */}
        <section className="py-16 bg-secondary/30">
          <div className="container px-4">
            <div className="mx-auto max-w-4xl">
              <h2 className="mb-8 text-center text-3xl font-bold md:text-4xl text-primary">About Me</h2>
              <div className="grid gap-8 md:grid-cols-2 md:gap-12">
                <div className="flex flex-col justify-center">
                  <p className="mb-4 text-lg">
                    I am a passionate first-year architecture student with a deep appreciation for sustainable design
                    and traditional craftsmanship. My work explores the intersection of modern architectural principles
                    and rustic aesthetics.
                  </p>
                  <p className="mb-4 text-lg">
                    Through my projects, I aim to create spaces that feel both timeless and contemporary, with a focus
                    on natural materials and environmental harmony.
                  </p>
                  <Button
                    asChild
                    variant="outline"
                    className="mt-4 w-fit border-primary text-primary hover:bg-primary/10"
                  >
                    <Link href="/about">
                      Learn More About Me <ChevronRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
                <div className="relative aspect-square overflow-hidden rounded-md border-8 border-secondary shadow-lg">
                  <Image src="/Mati.jpg?height=500&width=500" alt="Ana Popescu" fill className="object-cover" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Projects */}
        <section className="bg-muted py-16">
          <div className="container px-4">
            <h2 className="mb-8 text-center text-3xl font-bold md:text-4xl text-primary">Featured Projects</h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {[1, 2, 3].map((project) => (
                <Link
                  href={`/projects/${project}`}
                  key={project}
                  className="project-card group relative overflow-hidden rounded-lg bg-card shadow-md transition-all hover:shadow-xl"
                >
                  <div className="aspect-[4/3] w-full">
                    <Image
                      src={`/placeholder.svg?height=400&width=600`}
                      alt={`Project ${project}`}
                      width={600}
                      height={400}
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="project-overlay absolute inset-0 flex flex-col items-center justify-center bg-primary/80 p-4 opacity-0 transition-opacity">
                    <h3 className="mb-2 text-xl font-bold text-white">Project {project}</h3>
                    <p className="text-center text-white">Residential concept with sustainable materials</p>
                  </div>
                  <div className="p-4">
                    <h3 className="mb-2 text-xl font-bold text-primary">Project {project}</h3>
                    <p className="text-muted-foreground">Residential concept with sustainable materials</p>
                  </div>
                </Link>
              ))}
            </div>
            <div className="mt-12 flex justify-center">
              <Button asChild className="bg-primary hover:bg-primary/90">
                <Link href="/projects">
                  View All Projects <ChevronRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

