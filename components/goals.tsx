"use client"

import { Rocket, Target, Users, Award, ArrowRight } from "lucide-react"
import { useEffect, useRef, useState } from "react"
import { SectionHeader } from "./section-header"
import { useLanguage } from "./language-provider"

export function Goals() {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  const { t } = useLanguage()

  const timelineItems = [
    {
      period: t("goals.g1.period"),
      title: t("goals.g1.title"),
      description: t("goals.g1.desc"),
      icon: Target,
      items: [t("goals.g1.i1"), t("goals.g1.i2"), t("goals.g1.i3")],
    },
    {
      period: t("goals.g2.period"),
      title: t("goals.g2.title"),
      description: t("goals.g2.desc"),
      icon: Users,
      items: [t("goals.g2.i1"), t("goals.g2.i2"), t("goals.g2.i3")],
    },
    {
      period: t("goals.g3.period"),
      title: t("goals.g3.title"),
      description: t("goals.g3.desc"),
      icon: Award,
      items: [t("goals.g3.i1"), t("goals.g3.i2"), t("goals.g3.i3")],
    },
    {
      period: t("goals.g4.period"),
      title: t("goals.g4.title"),
      description: t("goals.g4.desc"),
      icon: Rocket,
      items: [t("goals.g4.i1"), t("goals.g4.i2"), t("goals.g4.i3")],
    },
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="goals" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeader label={t("goals.label")} title={t("goals.title")} description={t("goals.description")} />

        <div ref={ref} className="relative">
          {/* Timeline line */}
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-primary via-accent to-primary opacity-30" />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {timelineItems.map((item, index) => (
              <div
                key={item.period}
                className={`relative transition-all duration-700 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                {/* Timeline dot */}
                <div className="hidden lg:flex absolute top-[88px] left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background z-10" />

                {/* Arrow connector */}
                {index < timelineItems.length - 1 && (
                  <div className="hidden lg:block absolute top-[86px] left-[calc(50%+8px)] right-0">
                    <ArrowRight size={16} className="text-primary/50 absolute -right-4" />
                  </div>
                )}

                <div className="glass rounded-2xl p-6 h-full hover:-translate-y-2 transition-transform">
                  {/* Period badge */}
                  <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium mb-4">
                    {item.period}
                  </span>

                  {/* Icon */}
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-lg mb-4">
                    <item.icon size={24} className="text-primary-foreground" />
                  </div>

                  {/* Content */}
                  <h3 className="text-lg font-bold text-foreground mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{item.description}</p>

                  {/* Items */}
                  <ul className="space-y-2">
                    {item.items.map((listItem) => (
                      <li key={listItem} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                        {listItem}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom message */}
        <div
          className={`mt-16 glass rounded-2xl p-8 text-center transition-all duration-700 delay-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-lg text-foreground leading-relaxed max-w-2xl mx-auto">{t("goals.message")}</p>
        </div>
      </div>
    </section>
  )
}
