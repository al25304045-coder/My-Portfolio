"use client"

import { useEffect, useRef, useState, type ReactNode } from "react"

interface SectionHeaderProps {
  label: string
  title?: string
  description?: string
  children?: ReactNode
}

export function SectionHeader({ label, title, description, children }: SectionHeaderProps) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={`mb-12 transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      <div className="flex items-center gap-4 mb-4">
        <div className="h-px w-12 bg-gradient-to-r from-primary to-accent" />
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">{label}</span>
        <div className="h-px flex-1 bg-gradient-to-r from-primary/50 to-transparent" />
      </div>
      {title && <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">{title}</h2>}
      {description && <p className="text-muted-foreground max-w-2xl leading-relaxed">{description}</p>}
      {children}
    </div>
  )
}
