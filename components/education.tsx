"use client"

import { GraduationCap, Calendar, BookOpen, Award, MapPin } from "lucide-react"
import { useEffect, useRef, useState } from "react"
import { SectionHeader } from "./section-header"
import { useLanguage } from "./language-provider"

export function Education() {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  const { t } = useLanguage()

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
    <section id="education" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeader label={t("edu.label")} title={t("edu.title")} description={t("edu.description")} />

        <div
          ref={ref}
          className={`transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="glass rounded-3xl p-8 md:p-10 relative overflow-hidden">
            {/* Decorative corner */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/10 to-accent/10 rounded-bl-full" />

            <div className="relative flex flex-col md:flex-row gap-8">
              {/* Left side - Icon and status */}
              <div className="flex flex-col items-center md:items-start gap-4">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-xl transform -rotate-6 hover:rotate-0 transition-transform">
                  <GraduationCap size={40} className="text-primary-foreground" />
                </div>
                <span className="px-3 py-1.5 rounded-full bg-green-500/10 text-green-600 dark:text-green-400 text-xs font-medium border border-green-500/20">
                  {t("edu.status")}
                </span>
              </div>

              {/* Right side - Content */}
              <div className="flex-1 space-y-6">
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">{t("edu.school")}</h3>
                  <p className="text-muted-foreground">{t("edu.department")}</p>
                </div>

                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center gap-2 text-sm">
                    <Calendar size={16} className="text-primary" />
                    <span className="text-foreground">{t("edu.period")}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <MapPin size={16} className="text-accent" />
                    <span className="text-muted-foreground">{t("hero.location")}</span>
                  </div>
                </div>

                <p className="text-muted-foreground leading-relaxed">{t("edu.content")}</p>

                {/* Highlights */}
                <div className="grid sm:grid-cols-2 gap-4 pt-2">
                  {[
                    { icon: BookOpen, label: t("edu.focusLabel"), value: t("edu.focusValue") },
                    { icon: Award, label: t("edu.certLabel"), value: t("edu.certValue") },
                  ].map((item, i) => (
                    <div
                      key={item.label}
                      className={`flex items-center gap-3 p-4 rounded-2xl bg-secondary/50 transition-all hover:bg-secondary hover:-translate-y-1 ${
                        i === 1 ? "sm:translate-y-2" : ""
                      }`}
                    >
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                        <item.icon size={18} className="text-primary" />
                      </div>
                      <div>
                        <div className="text-xs text-muted-foreground">{item.label}</div>
                        <div className="text-sm font-medium text-foreground">{item.value}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
