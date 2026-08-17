import Link from "next/link"
import { company } from "@/lib/data"

export function Footer() {
  return (
    <footer className="py-16 md:py-24 border-t border-border">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2">
            <Link href="/" className="inline-flex items-center gap-3 mb-6">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <rect x="1.5" y="10" width="5.5" height="12.5" fill="currentColor" />
                <rect x="9.25" y="2" width="5.5" height="20.5" fill="currentColor" />
                <rect x="17" y="7" width="5.5" height="15.5" fill="currentColor" />
              </svg>
              <span className="text-sm tracking-[0.28em] font-medium">DGA YÖNETİM</span>
            </Link>
            <p className="text-muted-foreground leading-relaxed max-w-sm">
              Biz tesis yönetmiyoruz; bir yaşam sahnesi kurguluyoruz. Ofis, konut, villa ve AVM projelerinde kuruluştan
              işletmeye sessiz, yüksek standartlı tesis yönetimi.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-medium mb-4">Şirket</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>
                <Link href="/#about" className="hover:text-foreground transition-colors">
                  Farkımız
                </Link>
              </li>
              <li>
                <Link href="/#services" className="hover:text-foreground transition-colors">
                  Hizmetler
                </Link>
              </li>
              <li>
                <Link href="/projeler" className="hover:text-foreground transition-colors">
                  Projeler
                </Link>
              </li>
              <li>
                <Link href="/#references" className="hover:text-foreground transition-colors">
                  Referanslar
                </Link>
              </li>
              <li>
                <Link href="/#contact" className="hover:text-foreground transition-colors">
                  İletişim
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-medium mb-4">Bağlantı</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>
                <a href={`mailto:${company.email}`} className="hover:text-foreground transition-colors">
                  {company.email}
                </a>
              </li>
              <li>
                <a
                  href={company.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-foreground transition-colors"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border flex flex-col md:flex-row md:items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} DGA Yönetim. Tüm hakları saklıdır.</p>
          <p className="text-muted-foreground/70">Kusursuz yönetim, sessiz operasyon.</p>
        </div>
      </div>
    </footer>
  )
}
