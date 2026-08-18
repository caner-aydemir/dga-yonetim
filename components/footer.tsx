import Link from "next/link"
import { company } from "@/lib/data"
import { WhatsAppIcon } from "./whatsapp-icon"
import { Logo } from "./logo"

export function Footer() {
  return (
    <footer className="py-16 md:py-24 border-t border-border">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2">
            <Link href="/" className="inline-flex items-center mb-6">
              <Logo className="h-12 w-auto text-foreground" />
            </Link>
            <p className="text-muted-foreground leading-relaxed max-w-sm mb-5">
              Biz tesis yönetmiyoruz; bir yaşam sahnesi kurguluyoruz. Ofis, konut, villa ve AVM projelerinde kuruluştan
              işletmeye sessiz, yüksek standartlı tesis yönetimi.
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-sm">
              <span className="text-foreground font-medium">{company.legalName}</span>
              <br />
              {company.address}
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
                  href={company.whatsapp}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 hover:text-foreground transition-colors"
                >
                  <WhatsAppIcon className="w-4 h-4" />
                  Whatsapp ile iletişim
                </a>
              </li>
              <li>
                <a
                  href={company.instagram}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-foreground transition-colors"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href={company.twitter}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-foreground transition-colors"
                >
                  X
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
