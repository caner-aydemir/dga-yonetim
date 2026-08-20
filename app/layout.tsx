import type React from "react"
import type { Metadata } from "next"
import { Geist_Mono, Instrument_Serif } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geistMono = Geist_Mono({ subsets: ["latin"] })

const instrumentSerif = Instrument_Serif({
  subsets: ["latin", "latin-ext"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-instrument-serif",
  display: "swap",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://dgayonetim.com.tr"),
  title: {
    default: "DGA Yönetim — Kusursuz Yönetim, Sessiz Operasyon",
    template: "%s · DGA Yönetim",
  },
  description:
    "Biz sadece tesis yönetmiyoruz; bir yaşam sahnesi kurguluyoruz. Ofis, konut, villa ve AVM projelerinde kuruluştan işletmeye yüksek standartlı tesis yönetimi.",
  generator: "v0.app",
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: "https://dgayonetim.com.tr",
    siteName: "DGA Yönetim",
    title: "DGA Yönetim — Kusursuz Yönetim, Sessiz Operasyon",
    description:
      "Biz sadece tesis yönetmiyoruz; bir yaşam sahnesi kurguluyoruz. Ofis, konut, villa ve AVM projelerinde kuruluştan işletmeye yüksek standartlı tesis yönetimi.",
  },
  twitter: {
    card: "summary_large_image",
    title: "DGA Yönetim — Kusursuz Yönetim, Sessiz Operasyon",
    description:
      "Biz sadece tesis yönetmiyoruz; bir yaşam sahnesi kurguluyoruz. Ofis, konut, villa ve AVM projelerinde kuruluştan işletmeye yüksek standartlı tesis yönetimi.",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="tr" className={instrumentSerif.variable}>
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
