import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Link from "next/link"
import { ArrowLeft, ArrowUpRight } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CallToAction } from "@/components/call-to-action"
import { featuredProjects, getProjectBySlug } from "@/lib/data"

type PageProps = {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return featuredProjects.map((project) => ({ slug: project.slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const project = getProjectBySlug(slug)
  if (!project) return { title: "Proje" }
  return {
    title: project.title,
    description: project.excerpt,
  }
}

export default async function ProjectDetailPage({ params }: PageProps) {
  const { slug } = await params
  const project = getProjectBySlug(slug)

  if (!project) notFound()

  const others = featuredProjects.filter((item) => item.slug !== project.slug).slice(0, 2)

  return (
    <main className="min-h-screen">
      <Header />

      <section className="relative min-h-[70vh] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <img src={project.cover} alt={project.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-black/20" />
        </div>
        <div className="relative z-10 container mx-auto px-6 md:px-12 pb-16 md:pb-20 pt-40">
          <Link
            href="/projeler"
            className="inline-flex items-center gap-2 text-white/75 hover:text-white text-sm mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Tüm projeler
          </Link>
          <p className="text-white/70 text-sm tracking-[0.3em] uppercase mb-4">{project.category}</p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-medium text-white tracking-tight leading-[1.05] text-balance">
            {project.title}
          </h1>
          <p className="mt-4 text-white/80 text-lg">{project.location}</p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 pb-16 mb-16 border-b border-border">
            {project.stats.map((stat) => (
              <div key={stat.label}>
                <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-2">{stat.label}</p>
                <p className="text-lg font-medium leading-snug">{stat.value}</p>
              </div>
            ))}
          </div>

          <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
            <div className="lg:col-span-7 space-y-6">
              {project.description.map((paragraph) => (
                <p key={paragraph.slice(0, 24)} className="text-muted-foreground text-lg leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
            <div className="lg:col-span-5">
              <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-6">Sahadaki imzamız</p>
              <ul className="space-y-4">
                {project.highlights.map((item, index) => (
                  <li key={item} className="flex gap-4">
                    <span className="text-muted-foreground/50 text-sm font-medium">0{index + 1}</span>
                    <span className="text-foreground leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-20 md:pb-28">
        <div className="container mx-auto px-6 md:px-12">
          <p className="text-muted-foreground text-sm tracking-[0.3em] uppercase mb-8">Galeri</p>
          <div className="grid md:grid-cols-2 gap-4 md:gap-6">
            {project.gallery.map((image, index) => (
              <div
                key={image}
                className={`relative overflow-hidden ${index === 0 ? "md:col-span-2 aspect-[16/8]" : "aspect-[4/3]"}`}
              >
                <img src={image} alt={`${project.title} görsel ${index + 1}`} className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {others.length > 0 && (
        <section className="py-20 md:py-28 bg-secondary/50">
          <div className="container mx-auto px-6 md:px-12">
            <div className="flex items-end justify-between gap-6 mb-12">
              <div>
                <p className="text-muted-foreground text-sm tracking-[0.3em] uppercase mb-4">Diğer projeler</p>
                <h2 className="text-3xl md:text-4xl font-medium tracking-tight">Aynı standart, farklı sahneler</h2>
              </div>
              <Link
                href="/projeler"
                className="hidden sm:inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors group"
              >
                Tümünü gör
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {others.map((item) => (
                <article key={item.slug} className="group">
                  <Link href={`/projeler/${item.slug}`}>
                    <div className="relative overflow-hidden aspect-[4/3] mb-6">
                      <img
                        src={item.cover}
                        alt={item.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                    <h3 className="text-xl font-medium mb-2 group-hover:underline underline-offset-4">{item.title}</h3>
                    <p className="text-muted-foreground text-sm">
                      {item.category} · {item.location}
                    </p>
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      <CallToAction />
      <Footer />
    </main>
  )
}
