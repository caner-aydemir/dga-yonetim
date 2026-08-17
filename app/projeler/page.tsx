import type { Metadata } from "next"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CallToAction } from "@/components/call-to-action"
import { featuredProjects } from "@/lib/data"

export const metadata: Metadata = {
  title: "Projeler",
  description:
    "DGA Yönetim’in tesis yönetimi üstlendiği prestijli ofis, konut, villa ve AVM projeleri.",
}

export default function ProjectsPage() {
  return (
    <main className="min-h-screen">
      <Header />

      <section className="relative pt-36 pb-16 md:pt-44 md:pb-20 bg-foreground text-primary-foreground">
        <div className="container mx-auto px-6 md:px-12">
          <p className="text-primary-foreground/55 text-sm tracking-[0.3em] uppercase mb-6">Portföy</p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-medium tracking-tight leading-[1.1] max-w-4xl text-balance">
            Yönetimini üstlendiğimiz projeler
          </h1>
          <p className="mt-6 text-primary-foreground/70 text-lg leading-relaxed max-w-2xl">
            Kuruluş aşamasından işletme dönemine kadar; ofis kampüslerinden villa yaşamına, konut sitelerinden alışveriş
            merkezlerine uzanan bir sahne.
          </p>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid md:grid-cols-2 gap-8 md:gap-10">
            {featuredProjects.map((project) => (
              <article key={project.slug} className="group">
                <Link href={`/projeler/${project.slug}`}>
                  <div className="relative overflow-hidden aspect-[4/3] mb-6">
                    <img
                      src={project.cover}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h2 className="text-2xl font-medium mb-2 group-hover:underline underline-offset-4">
                        {project.title}
                      </h2>
                      <p className="text-muted-foreground text-sm mb-3">
                        {project.category} · {project.location}
                      </p>
                      <p className="text-muted-foreground leading-relaxed max-w-md">{project.excerpt}</p>
                    </div>
                    <ArrowUpRight className="w-5 h-5 text-muted-foreground shrink-0 mt-1 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CallToAction />
      <Footer />
    </main>
  )
}
