"use client"

import { HighlightedText } from "./highlighted-text"

export function QuoteBanner() {
  return (
    <section className="relative py-24 md:py-36 overflow-hidden text-primary-foreground">
      <img
        src="/images/services/management.jpg"
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/72" />
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <p className="text-primary-foreground/50 text-sm tracking-[0.3em] uppercase mb-8 text-center">İlke</p>
        <blockquote className="max-w-4xl mx-auto text-center">
          <p className="text-3xl md:text-4xl lg:text-5xl font-medium leading-[1.2] tracking-tight text-balance">
            Herkes giriş yapar, <HighlightedText>biz fark yaratırız.</HighlightedText>
          </p>
          <p className="mt-8 text-primary-foreground/65 text-lg leading-relaxed max-w-2xl mx-auto">
            Sessiz yürütülen operasyonlar, yüksek ses getiren sonuçlar.
          </p>
        </blockquote>
      </div>
    </section>
  )
}
