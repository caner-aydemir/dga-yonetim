"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { featuredProjects, stats } from "@/lib/data"

export function Projects() {
  const [hoveredId, setHoveredId] = useState<string | null>(null)
  const [revealedImages, setRevealedImages] = useState<Set<string>>(new Set())
  const [visible, setVisible] = useState(false)
  const imageRefs = useRef<(HTMLDivElement | null)[]>([])
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const sectionObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true)
      },
      { threshold: 0.12 },
    )
    if (sectionRef.current) sectionObserver.observe(sectionRef.current)

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = imageRefs.current.indexOf(entry.target as HTMLDivElement)
            if (index !== -1) {
              setRevealedImages((prev) => new Set(prev).add(featuredProjects[index].slug))
            }
          }
        })
      },
      { threshold: 0.2 },
    )

    imageRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    return () => {
      sectionObserver.disconnect()
      observer.disconnect()
    }
  }, [])

  return (
    <section id="projects" ref={sectionRef} className="py-32 md:py-29 bg-secondary/50">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div className="max-w-3xl">
            <p className="text-muted-foreground text-sm tracking-[0.3em] uppercase mb-6">Projeler</p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium leading-[1.15] tracking-tight mb-6 text-balance">
              Prestijli projelerde
              <br />
              kurulmuş düzen
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl">
              İnşaat mühendisliği temelli 15 yılı aşkın deneyimle büyük ölçekli ofis, konut, AVM ve karma yaşam
              projelerinde kuruluştan işletmeye uzmanlaştık. Akkom Ofis Park başta olmak üzere Pruva 34, Karat 34,
              Platform Merter, Doğa Cadde AVM, Limonlu Bahçe Konakları ve Big Country gibi prestijli yapılarda tesis
              yönetimi organizasyonunu kurduk; yönetim planlarını hazırladık ve operasyonu devreye aldık.
            </p>
          </div>
          <Link
            href="/projeler"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors group shrink-0"
          >
            Tüm projeleri gör
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-16 pb-16 border-b border-border">
          {stats.map((item, index) => (
            <div
              key={item.label}
              className={`transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
              style={{ transitionDelay: `${index * 120}ms` }}
            >
              <p className="text-4xl md:text-5xl font-medium tracking-tight mb-3">{item.value}</p>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.label}</p>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {featuredProjects.map((project, index) => (
            <article
              key={project.slug}
              className="group"
              onMouseEnter={() => setHoveredId(project.slug)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <Link href={`/projeler/${project.slug}`}>
                <div
                  ref={(el) => {
                    imageRefs.current[index] = el
                  }}
                  className="relative overflow-hidden aspect-[4/3] mb-6"
                >
                  <img
                    src={project.cover || "/placeholder.svg"}
                    alt={project.title}
                    className={`w-full h-full object-cover transition-transform duration-700 ${
                      hoveredId === project.slug ? "scale-105" : "scale-100"
                    }`}
                  />
                  <div
                    className="absolute inset-0 bg-primary origin-top"
                    style={{
                      transform: revealedImages.has(project.slug) ? "scaleY(0)" : "scaleY(1)",
                      transition: "transform 1.5s cubic-bezier(0.76, 0, 0.24, 1)",
                    }}
                  />
                </div>

                <div>
                  <h3 className="text-xl font-medium mb-2 group-hover:underline underline-offset-4">{project.title}</h3>
                  <p className="text-muted-foreground text-sm">
                    {project.category} · {project.location}
                  </p>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
