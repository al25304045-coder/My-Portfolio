"use client"

import { Brain, Target, Users, Sparkles, MessageCircle, TrendingUp } from "lucide-react"
import { useEffect, useRef, useState } from "react"
import { SectionHeader } from "./section-header"
import { useLanguage } from "./language-provider"

function StrengthCard({
  strength,
  index,
}: {
  strength: {
    title: string
    description: string
    icon: typeof Brain
    color: string
  }
  index: number
}) {
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

  const offsets = index % 3 === 1 ? "lg:translate-y-6" : ""

  return (
    <div
      ref={ref}
      className={`glass rounded-2xl p-6 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl group ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      } ${offsets}`}
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      <div
        className={`w-12 h-12 rounded-xl bg-gradient-to-br ${strength.color} flex items-center justify-center shadow-lg mb-4 transition-transform group-hover:scale-110 group-hover:-rotate-6`}
      >
        <strength.icon size={24} className="text-white" />
      </div>
      <h3 className="text-lg font-semibold text-foreground mb-2">{strength.title}</h3>
      <p className="text-sm text-muted-foreground leading-relaxed">{strength.description}</p>
    </div>
  )
}

export function Strengths() {
  const { t } = useLanguage()

  const strengths = [
    {
      title: t("strengths.s1.title"),
      description: t("strengths.s1.desc"),
      icon: Brain,
      color: "from-purple-500 to-pink-500",
    },
    {
      title: t("strengths.s2.title"),
      description: t("strengths.s2.desc"),
      icon: Target,
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: t("strengths.s3.title"),
      description: t("strengths.s3.desc"),
      icon: Sparkles,
      color: "from-orange-500 to-yellow-500",
    },
    {
      title: t("strengths.s4.title"),
      description: t("strengths.s4.desc"),
      icon: Users,
      color: "from-green-500 to-emerald-500",
    },
    {
      title: t("strengths.s5.title"),
      description: t("strengths.s5.desc"),
      icon: MessageCircle,
      color: "from-pink-500 to-rose-500",
    },
    {
      title: t("strengths.s6.title"),
      description: t("strengths.s6.desc"),
      icon: TrendingUp,
      color: "from-indigo-500 to-purple-500",
    },
  ]

  return (
    <section className="py-24 px-6 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          label={t("strengths.label")}
          title={t("strengths.title")}
          description={t("strengths.description")}
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {strengths.map((strength, index) => (
            <StrengthCard key={strength.title} strength={strength} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
