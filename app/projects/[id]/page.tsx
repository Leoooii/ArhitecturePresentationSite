import Image from "next/image"
import Link from "next/link"
import { ChevronLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

// This would typically come from a database or CMS
const getProjectData = (id: number) => {
  const projects = {
    1: {
      title: "Sustainable Cabin Retreat",
      description:
        "A minimalist wooden cabin designed with sustainable materials and passive heating/cooling strategies. This project explores the relationship between built form and natural surroundings, emphasizing the use of local materials and traditional construction techniques with modern applications.",
      category: "Residential",
      date: "October 2023",
      images: [
        "/placeholder.svg?height=600&width=800",
        "/placeholder.svg?height=600&width=800",
        "/placeholder.svg?height=600&width=800",
        "/placeholder.svg?height=600&width=800",
        "/placeholder.svg?height=600&width=800",
        "/placeholder.svg?height=600&width=800",
      ],
      details: [
        "Sustainable material selection",
        "Passive solar design",
        "Rainwater harvesting system",
        "Natural ventilation strategies",
        "Minimal site impact",
        "Local wood sourcing",
      ],
      process:
        "This project began with extensive site analysis and environmental studies to understand the natural context. The design evolved through multiple iterations, focusing on optimizing orientation, material efficiency, and spatial quality while minimizing ecological footprint.",
    },
    2: {
      title: "Urban Micro-Housing",
      description:
        "Compact living spaces that maximize functionality while maintaining comfort and aesthetic appeal. This project addresses urban density challenges through innovative spatial organization and multifunctional elements.",
      category: "Residential",
      date: "December 2023",
      images: [
        "/placeholder.svg?height=600&width=800",
        "/placeholder.svg?height=600&width=800",
        "/placeholder.svg?height=600&width=800",
        "/placeholder.svg?height=600&width=800",
      ],
      details: [
        "Space-saving furniture solutions",
        "Modular construction system",
        "Adaptable floor plans",
        "Integrated storage solutions",
        "Natural lighting optimization",
        "Community-focused amenities",
      ],
      process:
        "The design process involved extensive research on minimal living spaces and user behavior patterns. Multiple scale models were created to test spatial configurations and furniture arrangements.",
    },
    3: {
      title: "Community Garden Pavilion",
      description:
        "A public structure that serves as both shelter and gathering space for a community garden. The pavilion incorporates reclaimed materials and features a green roof that contributes to the garden ecosystem.",
      category: "Public",
      date: "January 2024",
      images: [
        "/placeholder.svg?height=600&width=800",
        "/placeholder.svg?height=600&width=800",
        "/placeholder.svg?height=600&width=800",
        "/placeholder.svg?height=600&width=800",
        "/placeholder.svg?height=600&width=800",
      ],
      details: [
        "Reclaimed timber structure",
        "Living green roof",
        "Rainwater collection system",
        "Flexible gathering space",
        "Integrated seating elements",
        "Natural material palette",
      ],
      process:
        "This project was developed through community workshops and collaborative design sessions. The final design reflects both functional requirements and symbolic elements important to the community.",
    },
    4: {
      title: "Adaptive Reuse Study",
      description:
        "Conceptual transformation of an abandoned warehouse into a mixed-use cultural center. This study explores preservation strategies alongside contemporary interventions.",
      category: "Commercial",
      date: "February 2024",
      images: [
        "/placeholder.svg?height=600&width=800",
        "/placeholder.svg?height=600&width=800",
        "/placeholder.svg?height=600&width=800",
      ],
      details: [
        "Historic preservation techniques",
        "Adaptive spatial programming",
        "Energy retrofit strategies",
        "Material contrast exploration",
        "Circulation enhancement",
        "Daylight optimization",
      ],
      process:
        "The project began with thorough documentation of the existing structure, followed by historical research and structural analysis. The design approach balances preservation with necessary interventions for new functions.",
    },
    5: {
      title: "Modular Housing System",
      description:
        "Exploring flexible living arrangements through modular construction techniques. This system allows for expansion, contraction, and reconfiguration based on changing user needs.",
      category: "Residential",
      date: "March 2024",
      images: [
        "/placeholder.svg?height=600&width=800",
        "/placeholder.svg?height=600&width=800",
        "/placeholder.svg?height=600&width=800",
        "/placeholder.svg?height=600&width=800",
      ],
      details: [
        "Standardized construction elements",
        "Flexible configuration options",
        "Prefabrication potential",
        "Minimal waste design",
        "Adaptable to various sites",
        "Scalable living solutions",
      ],
      process:
        "This project involved extensive prototyping and system development. Multiple module configurations were tested through physical and digital models to verify flexibility and constructability.",
    },
    6: {
      title: "Rural School Design",
      description:
        "Educational facility designed to harmonize with its rural context while providing modern learning spaces. The design incorporates local building traditions with contemporary educational requirements.",
      category: "Educational",
      date: "April 2024",
      images: [
        "/placeholder.svg?height=600&width=800",
        "/placeholder.svg?height=600&width=800",
        "/placeholder.svg?height=600&width=800",
        "/placeholder.svg?height=600&width=800",
      ],
      details: [
        "Contextual design approach",
        "Flexible learning environments",
        "Indoor-outdoor connections",
        "Natural ventilation and lighting",
        "Local material application",
        "Community engagement spaces",
      ],
      process:
        "The design process included extensive site analysis and community consultation. Traditional building techniques were studied and reinterpreted to meet contemporary educational needs.",
    },
  }

  return projects[id as keyof typeof projects] || null
}

export default function ProjectPage({ params }: { params: { id: string } }) {
  const projectId = Number.parseInt(params.id)
  const project = getProjectData(projectId)

  if (!project) {
    return (
      <div className="flex min-h-screen flex-col">
        <Navbar />
        <main className="container flex-1 px-4 py-16">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6 text-3xl font-bold">Project Not Found</h1>
            <p className="mb-8 text-lg text-muted-foreground">
              The project you're looking for doesn't exist or has been removed.
            </p>
            <Button asChild className="bg-primary hover:bg-primary/90">
              <Link href="/projects">
                <ChevronLeft className="mr-2 h-4 w-4" /> Back to Projects
              </Link>
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    )
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      <main className="flex-1">
        {/* Project Hero */}
        <section className="relative h-[50vh] overflow-hidden wood-texture">
          <Image
            src={project.images[0] || "/placeholder.svg"}
            alt={project.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50"></div>
          <div className="container relative z-10 flex h-full flex-col items-center justify-center px-4 text-center text-white">
            <div className="mb-4 inline-block rounded-full bg-primary px-4 py-1 text-sm font-medium text-primary-foreground">
              {project.category}
            </div>
            <h1 className="mb-4 text-4xl font-bold md:text-5xl">{project.title}</h1>
            <p className="max-w-2xl text-lg md:text-xl">{project.date}</p>
          </div>
        </section>

        {/* Project Navigation */}
        <div className="border-b bg-background">
          <div className="container px-4 py-4">
            <Button asChild variant="outline" size="sm" className="border-primary text-primary hover:bg-primary/10">
              <Link href="/projects">
                <ChevronLeft className="mr-2 h-4 w-4" /> Back to Projects
              </Link>
            </Button>
          </div>
        </div>

        {/* Project Description */}
        <section className="py-12 bg-secondary/20">
          <div className="container px-4">
            <div className="mx-auto max-w-3xl">
              <h2 className="mb-6 text-3xl font-bold text-primary">Project Overview</h2>
              <p className="mb-8 text-lg leading-relaxed">{project.description}</p>

              <div className="mb-8 grid gap-6 md:grid-cols-2">
                <div className="rounded-lg bg-card p-6 shadow-md border border-primary/10">
                  <h3 className="mb-4 text-xl font-bold text-primary">Key Features</h3>
                  <ul className="space-y-2">
                    {project.details.map((detail, index) => (
                      <li key={index} className="flex items-start">
                        <span className="mr-2 mt-1 block h-2 w-2 rounded-full bg-primary"></span>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="rounded-lg bg-card p-6 shadow-md border border-primary/10">
                  <h3 className="mb-4 text-xl font-bold text-primary">Design Process</h3>
                  <p className="leading-relaxed">{project.process}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Project Gallery */}
        <section className="bg-muted py-12">
          <div className="container px-4">
            <div className="mx-auto max-w-5xl">
              <h2 className="mb-8 text-3xl font-bold text-primary">Project Gallery</h2>
              <div className="image-gallery">
                {project.images.map((image, index) => (
                  <div key={index} className="image-gallery-item">
                    <Image
                      src={image || "/placeholder.svg"}
                      alt={`${project.title} - Image ${index + 1}`}
                      width={800}
                      height={600}
                      className="h-full w-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Next/Previous Projects */}
        <section className="py-12 bg-secondary/20">
          <div className="container px-4">
            <div className="mx-auto max-w-5xl">
              <h2 className="mb-8 text-3xl font-bold text-primary">Explore More Projects</h2>
              <div className="grid gap-8 md:grid-cols-2">
                {projectId > 1 && (
                  <Link
                    href={`/projects/${projectId - 1}`}
                    className="group overflow-hidden rounded-lg bg-card shadow-md transition-all hover:shadow-xl border border-primary/10"
                  >
                    <div className="aspect-[4/3] w-full overflow-hidden">
                      <Image
                        src="/placeholder.svg?height=400&width=600"
                        alt="Previous Project"
                        width={600}
                        height={400}
                        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-6">
                      <p className="mb-2 text-sm text-muted-foreground">Previous Project</p>
                      <h3 className="text-xl font-bold text-primary">
                        {getProjectData(projectId - 1)?.title || "Previous Project"}
                      </h3>
                    </div>
                  </Link>
                )}

                {projectId < 6 && (
                  <Link
                    href={`/projects/${projectId + 1}`}
                    className="group overflow-hidden rounded-lg bg-card shadow-md transition-all hover:shadow-xl border border-primary/10"
                  >
                    <div className="aspect-[4/3] w-full overflow-hidden">
                      <Image
                        src="/placeholder.svg?height=400&width=600"
                        alt="Next Project"
                        width={600}
                        height={400}
                        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-6">
                      <p className="mb-2 text-sm text-muted-foreground">Next Project</p>
                      <h3 className="text-xl font-bold text-primary">
                        {getProjectData(projectId + 1)?.title || "Next Project"}
                      </h3>
                    </div>
                  </Link>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

