import Link from "next/link"
import Image from "next/image"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export const metadata = {
  title: "Projects | Ana Popescu",
  description: "Explore architecture projects by Ana Popescu",
}

// This would typically come from a database or CMS
const projects = [
  {
    id: 1,
    title: "Sustainable Cabin Retreat",
    description:
      "A minimalist wooden cabin designed with sustainable materials and passive heating/cooling strategies.",
    category: "Residential",
    thumbnail: "/placeholder.svg?height=400&width=600",
  },
  {
    id: 2,
    title: "Urban Micro-Housing",
    description: "Compact living spaces that maximize functionality while maintaining comfort and aesthetic appeal.",
    category: "Residential",
    thumbnail: "/placeholder.svg?height=400&width=600",
  },
  {
    id: 3,
    title: "Community Garden Pavilion",
    description: "A public structure that serves as both shelter and gathering space for a community garden.",
    category: "Public",
    thumbnail: "/placeholder.svg?height=400&width=600",
  },
  {
    id: 4,
    title: "Adaptive Reuse Study",
    description: "Conceptual transformation of an abandoned warehouse into a mixed-use cultural center.",
    category: "Commercial",
    thumbnail: "/placeholder.svg?height=400&width=600",
  },
  {
    id: 5,
    title: "Modular Housing System",
    description: "Exploring flexible living arrangements through modular construction techniques.",
    category: "Residential",
    thumbnail: "/placeholder.svg?height=400&width=600",
  },
  {
    id: 6,
    title: "Rural School Design",
    description:
      "Educational facility designed to harmonize with its rural context while providing modern learning spaces.",
    category: "Educational",
    thumbnail: "/placeholder.svg?height=400&width=600",
  },
]

export default function ProjectsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      <main className="flex-1">
        {/* Projects Hero */}
        <section className="relative h-[40vh] wood-texture">
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="container relative z-10 flex h-full flex-col items-center justify-center px-4 text-center text-white">
            <h1 className="mb-4 text-4xl font-bold md:text-5xl">My Projects</h1>
            <p className="max-w-2xl text-lg md:text-xl">
              Explore my architectural work, from conceptual designs to detailed models and renderings.
            </p>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="py-16 bg-secondary/20">
          <div className="container px-4">
            <div className="mb-12">
              <h2 className="mb-4 text-3xl font-bold text-primary">All Projects</h2>
              <p className="text-lg text-muted-foreground">
                Browse through my portfolio of architectural projects and design studies.
              </p>
            </div>

            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {projects.map((project) => (
                <Link
                  href={`/projects/${project.id}`}
                  key={project.id}
                  className="group overflow-hidden rounded-lg bg-card shadow-md transition-all hover:shadow-xl border border-primary/10"
                >
                  <div className="aspect-[4/3] w-full overflow-hidden">
                    <Image
                      src={project.thumbnail || "/placeholder.svg"}
                      alt={project.title}
                      width={600}
                      height={400}
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <div className="mb-2 inline-block rounded-full bg-primary/20 px-3 py-1 text-xs font-medium text-primary">
                      {project.category}
                    </div>
                    <h3 className="mb-2 text-xl font-bold text-primary">{project.title}</h3>
                    <p className="text-muted-foreground">{project.description}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

