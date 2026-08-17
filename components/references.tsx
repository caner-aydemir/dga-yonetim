"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { allReferences, stats } from "@/lib/data"

export function References() {
  const [visible, setVisible] = useState(false)
  const [revealed, setRevealed] = useState<Set<string>>(new Set())
  const sectionRef = useRef<HTMLElement>(null)
  const cardRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const sectionObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true)
      },
      { threshold: 0.15 },
    )

    if (sectionRef.current) sectionObserver.observe(sectionRef.current)

    const cardObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = cardRefs.current.indexOf(entry.target as HTMLDivElement)
            if (index !== -1) {
              setRevealed((prev) => new Set(prev).add(allReferences[index].slug))
            }
          }
        })
      },
      { threshold: 0.2 },
    )

    cardRefs.current.forEach((ref) => {
      if (ref) cardObserver.observe(ref)
    })

    return () => {
      sectionObserver.disconnect()
      cardObserver.disconnect()
    }
  }, [])

  return (
    <section id="references" ref={sectionRef} className="py-32 md:py-29">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-3xl mb-16">
          <p className="text-muted-foreground text-sm tracking-[0.3em] uppercase mb-6">Referanslarımız</p>
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

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-20 pb-16 border-b border-border">
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

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {allReferences.map((project, index) => {
            const card = (
              <div
                ref={(el) => {
                  cardRefs.current[index] = el
                }}
                className="group"
              >
                <div className="relative overflow-hidden aspect-[4/3] mb-4">
                  <img
                    src={project.cover}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div
                    className="absolute inset-0 bg-primary origin-top"
                    style={{
                      transform: revealed.has(project.slug) ? "scaleY(0)" : "scaleY(1)",
                      transition: "transform 1.2s cubic-bezier(0.76, 0, 0.24, 1)",
                    }}
                  />
                </div>
                <h3 className="text-base font-medium mb-1 group-hover:underline underline-offset-4">{project.title}</h3>
                <p className="text-muted-foreground text-sm">
                  {project.category} · {project.location}
                </p>
              </div>
            )

            if (!project.hasDetail) {
              return <article key={project.slug}>{card}</article>
            }

            return (
              <article key={project.slug}>
                <Link href={`/projeler/${project.slug}`}>{card}</Link>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
