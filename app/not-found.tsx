import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      <section className="flex-1 flex items-center justify-center px-6 pt-32 pb-20">
        <div className="text-center max-w-xl">
          <p className="text-muted-foreground text-sm tracking-[0.3em] uppercase mb-6">404</p>
          <h1 className="text-4xl md:text-6xl font-medium tracking-tight mb-6">Sayfa bulunamadı</h1>
          <p className="text-muted-foreground leading-relaxed mb-10">
            Aradığınız sahne burada değil. Anasayfaya veya projelere dönebilirsiniz.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/"
              className="inline-flex items-center justify-center px-6 py-3 bg-foreground text-primary-foreground text-sm hover:bg-foreground/90 transition-colors"
            >
              Anasayfa
            </Link>
            <Link
              href="/projeler"
              className="inline-flex items-center justify-center px-6 py-3 border border-border text-sm hover:bg-secondary transition-colors"
            >
              Projeler
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}
