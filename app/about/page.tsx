import Image from "next/image"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export const metadata = {
  title: "About Me | Ana Popescu",
  description: "Learn about Ana Popescu, a first-year architecture student",
}

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      <main className="flex-1">
        {/* About Hero */}
        <section className="bg-muted py-16">
          <div className="container px-4">
            <div className="mx-auto max-w-4xl">
              <h1 className="mb-6 text-center text-4xl font-bold md:text-5xl">About Me</h1>
              <div className="flex justify-center">
                <div className="relative h-64 w-64 overflow-hidden rounded-full border-8 border-secondary shadow-lg md:h-80 md:w-80">
                  <Image src="/Mati.jpg?height=400&width=400" alt="Ana Popescu" fill className="object-cover" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Personal Introduction */}
        <section className="py-16">
          <div className="container px-4">
            <div className="mx-auto max-w-3xl">
              <h2 className="mb-6 text-3xl font-bold">Personal Introduction</h2>
              <div className="space-y-4 text-lg">
                <p>
                  Hello! I'm Ana Popescu, a first-year architecture student with a passion for sustainable design and
                  traditional craftsmanship. Born and raised in a small town surrounded by nature, I developed an early
                  appreciation for the harmony between built environments and natural landscapes.
                </p>
                <p>
                  My architectural vision is deeply influenced by rustic aesthetics and the honest expression of
                  materials. I believe that architecture should not only be visually appealing but also environmentally
                  responsible and culturally meaningful.
                </p>
                <p>
                  Through my studies and personal projects, I aim to develop a design language that honors traditional
                  building techniques while embracing contemporary innovations and sustainable practices.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Education */}
        <section className="bg-muted py-16">
          <div className="container px-4">
            <div className="mx-auto max-w-3xl">
              <h2 className="mb-6 text-3xl font-bold">Education</h2>
              <div className="space-y-8">
                <div className="rounded-lg bg-card p-6 shadow-md">
                  <h3 className="mb-2 text-xl font-bold">Bachelor of Architecture</h3>
                  <p className="mb-1 text-muted-foreground">University of Architecture and Urban Planning</p>
                  <p className="text-muted-foreground">2023 - Present</p>
                  <div className="mt-4 space-y-2">
                    <p>Currently pursuing a degree in Architecture with a focus on sustainable design practices.</p>
                    <p>Relevant coursework:</p>
                    <ul className="ml-6 list-disc space-y-1">
                      <li>Architectural Design Fundamentals</li>
                      <li>History of Architecture</li>
                      <li>Building Materials and Construction</li>
                      <li>Architectural Drawing and Representation</li>
                      <li>Environmental Design</li>
                    </ul>
                  </div>
                </div>

                <div className="rounded-lg bg-card p-6 shadow-md">
                  <h3 className="mb-2 text-xl font-bold">High School Diploma</h3>
                  <p className="mb-1 text-muted-foreground">Arts and Design High School</p>
                  <p className="text-muted-foreground">2019 - 2023</p>
                  <div className="mt-4">
                    <p>Graduated with honors, specializing in Visual Arts and Design.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Passions & Interests */}
        <section className="py-16">
          <div className="container px-4">
            <div className="mx-auto max-w-3xl">
              <h2 className="mb-6 text-3xl font-bold">Passions & Interests</h2>
              <div className="grid gap-6 md:grid-cols-2">
                <div className="rounded-lg bg-card p-6 shadow-md">
                  <h3 className="mb-4 text-xl font-bold">Sustainable Architecture</h3>
                  <p>
                    I'm deeply passionate about creating environmentally responsible designs that minimize ecological
                    footprint while maximizing comfort and functionality.
                  </p>
                </div>
                <div className="rounded-lg bg-card p-6 shadow-md">
                  <h3 className="mb-4 text-xl font-bold">Traditional Craftsmanship</h3>
                  <p>
                    I have a profound appreciation for traditional building techniques and craftsmanship, particularly
                    woodworking and natural material applications.
                  </p>
                </div>
                <div className="rounded-lg bg-card p-6 shadow-md">
                  <h3 className="mb-4 text-xl font-bold">Landscape Integration</h3>
                  <p>
                    I'm fascinated by designs that seamlessly integrate with their surrounding landscapes, creating
                    harmony between built and natural environments.
                  </p>
                </div>
                <div className="rounded-lg bg-card p-6 shadow-md">
                  <h3 className="mb-4 text-xl font-bold">Architectural Photography</h3>
                  <p>
                    I enjoy capturing architectural details and spaces through photography, exploring the interplay of
                    light, texture, and form.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills */}
        <section className="bg-muted py-16">
          <div className="container px-4">
            <div className="mx-auto max-w-3xl">
              <h2 className="mb-6 text-3xl font-bold">Skills</h2>
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <h3 className="mb-4 text-xl font-bold">Technical Skills</h3>
                  <ul className="space-y-2">
                    <li className="rounded-md bg-card p-3 shadow-sm">Architectural Drawing</li>
                    <li className="rounded-md bg-card p-3 shadow-sm">3D Modeling (SketchUp, Rhino)</li>
                    <li className="rounded-md bg-card p-3 shadow-sm">AutoCAD</li>
                    <li className="rounded-md bg-card p-3 shadow-sm">Adobe Creative Suite</li>
                    <li className="rounded-md bg-card p-3 shadow-sm">Model Making</li>
                  </ul>
                </div>
                <div>
                  <h3 className="mb-4 text-xl font-bold">Soft Skills</h3>
                  <ul className="space-y-2">
                    <li className="rounded-md bg-card p-3 shadow-sm">Creative Problem Solving</li>
                    <li className="rounded-md bg-card p-3 shadow-sm">Visual Communication</li>
                    <li className="rounded-md bg-card p-3 shadow-sm">Project Management</li>
                    <li className="rounded-md bg-card p-3 shadow-sm">Collaboration</li>
                    <li className="rounded-md bg-card p-3 shadow-sm">Research</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

