"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { navItems } from "@/lib/data"

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()
  const isHome = pathname === "/"

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    handleScroll()
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const closeMobileMenu = () => {
    setMobileMenuOpen(false)
  }

  const scrollToTop = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (isHome) {
      e.preventDefault()
      window.scrollTo({ top: 0, behavior: "smooth" })
    }
  }

  const solid = scrolled || mobileMenuOpen || !isHome

  return (
    <header
      className={cn(
        "fixed z-50 transition-all duration-500 my-0 py-0 rounded-none",
        solid
          ? "bg-primary backdrop-blur-md py-4 top-4 left-4 right-4 rounded-2xl"
          : "bg-transparent py-4 top-0 left-0 right-0",
      )}
    >
      <nav className="container mx-auto px-6 flex items-center justify-between md:px-[24]">
        <Link href="/" className="flex items-center gap-3 group" onClick={scrollToTop}>
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true" className="shrink-0">
            <rect x="1.5" y="10" width="5.5" height="12.5" fill="#FFC981" />
            <rect x="9.25" y="2" width="5.5" height="20.5" fill="#FFC981" />
            <rect x="17" y="7" width="5.5" height="15.5" fill="#FFC981" />
          </svg>
          <span className="text-[#FFC981] text-xs sm:text-sm tracking-[0.18em] sm:tracking-[0.28em] font-medium whitespace-nowrap">
            DGA YÖNETİM
          </span>
        </Link>

        <ul className="hidden lg:flex items-center gap-8 text-sm tracking-wide">
          {navItems.map((item) => (
            <li key={item.label}>
              <Link
                href={isHome ? item.homeHref : item.href}
                className="hover:text-[rgb(251,146,60)] transition-colors duration-300 relative after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 hover:after:w-full after:bg-[rgb(251,146,60)] after:transition-all after:duration-300 text-white"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <Link
          href={isHome ? "#contact" : "/#contact"}
          className="hidden md:inline-flex items-center gap-2 text-sm px-5 py-2.5 transition-all duration-300 bg-white text-foreground border border-foreground/20 hover:bg-foreground hover:text-white"
        >
          İletişime Geç
        </Link>

        <button
          className="lg:hidden z-50 transition-colors duration-300 text-white"
          aria-label={mobileMenuOpen ? "Menüyü kapat" : "Menüyü aç"}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          ) : (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <line x1="4" y1="8" x2="20" y2="8" />
              <line x1="4" y1="16" x2="20" y2="16" />
            </svg>
          )}
        </button>
      </nav>

      <div
        className={cn(
          "lg:hidden overflow-hidden transition-all duration-300 ease-in-out",
          mobileMenuOpen ? "max-h-[600px] opacity-100 mt-8" : "max-h-0 opacity-0",
        )}
      >
        <div className="container mx-auto px-6">
          <ul className="flex flex-col gap-6 mb-8">
            {navItems.map((item) => (
              <li key={item.label}>
                <Link
                  href={isHome ? item.homeHref : item.href}
                  className="hover:text-[rgb(251,146,60)] transition-colors duration-300 text-white text-3xl md:text-4xl font-light block"
                  onClick={closeMobileMenu}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          <Link
            href={isHome ? "#contact" : "/#contact"}
            className="inline-flex items-center justify-center gap-2 text-sm px-5 py-2.5 bg-white text-foreground border border-foreground/20 hover:bg-foreground hover:text-white transition-all duration-300 mb-4"
            onClick={closeMobileMenu}
          >
            İletişime Geç
          </Link>
        </div>
      </div>
    </header>
  )
}
