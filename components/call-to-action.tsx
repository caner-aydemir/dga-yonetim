"use client"

import { ArrowRight } from "lucide-react"
import { HighlightedText } from "./highlighted-text"
import { WhatsAppIcon } from "./whatsapp-icon"
import { company } from "@/lib/data"

export function CallToAction() {
  return (
    <section id="contact" className="py-32 md:py-29 bg-foreground text-primary-foreground">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-primary-foreground/60 text-sm tracking-[0.3em] uppercase mb-8">İletişim</p>

          <h2 className="text-3xl md:text-4xl lg:text-6xl font-medium leading-[1.1] tracking-tight mb-8 text-balance">
            Projenizi DGA
            <br />
            imzasıyla <HighlightedText>taçlandıralım</HighlightedText>
          </h2>

          <p className="text-primary-foreground/70 text-lg md:text-xl leading-relaxed mb-12 max-w-2xl mx-auto">
            Sıradan bir yönetim değil; gayrimenkulünüze değer katan kusursuz bir ağırlama tecrübesi. Profesyonel yönetim
            çözümleri için bizimle konuşun.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <a
              href={`mailto:${company.email}`}
              className="inline-flex items-center justify-center gap-3 bg-primary-foreground text-foreground px-8 py-4 text-sm tracking-wide hover:bg-primary-foreground/90 transition-colors duration-300 group"
            >
              İletişime geçin
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href={company.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 border border-primary-foreground/30 px-8 py-4 text-sm tracking-wide hover:bg-primary-foreground/10 transition-colors duration-300"
            >
              <WhatsAppIcon className="w-4 h-4" />
              WhatsApp
            </a>
            <a
              href="/projeler"
              className="inline-flex items-center justify-center gap-2 border border-primary-foreground/30 px-8 py-4 text-sm tracking-wide hover:bg-primary-foreground/10 transition-colors duration-300"
            >
              Projeleri inceleyin
            </a>
          </div>

          <div className="max-w-xl mx-auto text-center space-y-3 text-primary-foreground/70 text-sm leading-relaxed">
            <p className="text-primary-foreground font-medium">{company.legalName}</p>
            <p>{company.address}</p>
            <p>
              <a href={company.phoneHref} className="hover:text-primary-foreground transition-colors">
                {company.phone}
              </a>
              <span className="mx-2 text-primary-foreground/30">·</span>
              <a href={`mailto:${company.email}`} className="hover:text-primary-foreground transition-colors">
                {company.email}
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
