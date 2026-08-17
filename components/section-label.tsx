import type { ReactNode } from "react"
import { cn } from "@/lib/utils"

type SectionLabelProps = {
  children: ReactNode
  className?: string
  align?: "left" | "center"
  onDark?: boolean
}

export function SectionLabel({
  children,
  className,
  align = "left",
  onDark = false,
}: SectionLabelProps) {
  const line = cn("h-px w-8 shrink-0", onDark ? "bg-[#FFC981]/70" : "bg-orange-400/70")

  return (
    <p
      className={cn(
        "font-serif italic text-2xl md:text-3xl tracking-[0.06em] mb-6 flex items-center gap-3.5",
        onDark ? "text-[#FFC981]" : "text-orange-500",
        align === "center" && "justify-center",
        className,
      )}
    >
      <span className={line} aria-hidden="true" />
      <span className="leading-none">{children}</span>
      {align === "center" && <span className={line} aria-hidden="true" />}
    </p>
  )
}
