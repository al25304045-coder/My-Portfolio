"use client"

import { Code, Database, Globe, FileSpreadsheet, FileText, Zap } from "lucide-react"
import { useEffect, useRef, useState } from "react"
import { SectionHeader } from "./section-header"
import { useLanguage } from "./language-provider"

function SkillCard({
  skill,
  index,
}: {
  skill: {
    name: string
    level: string
    description: string
    icon: typeof Code
    percentage: number
    color: string
  }
  index: number
}) {
  const [isVisible, setIsVisible] = useState(false)
  const [progress, setProgress] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const { t } = useLanguage()

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          setTimeout(
            () => {
              setProgress(skill.percentage)
            },
            index * 100 + 200,
          )
        }
      },
      { threshold: 0.2 },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [skill.percentage, index])

  const isOffset = index % 2 === 1

  return (
    <div
      ref={ref}
      className={`glass rounded-2xl p-6 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl group ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      } ${isOffset ? "lg:translate-y-4" : ""}`}
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      <div className="flex items-start gap-4 mb-4">
        <div
          className={`w-12 h-12 rounded-xl bg-gradient-to-br ${skill.color} flex items-center justify-center shadow-lg transition-transform group-hover:scale-110 group-hover:-rotate-6`}
        >
          <skill.icon size={24} className="text-white" />
        </div>
        <div className="flex-1">
          <div className="flex items-center justify-between mb-1">
            <h3 className="text-foreground font-semibold">{skill.name}</h3>
          </div>
          <span className="text-xs text-primary">{skill.level}</span>
        </div>
      </div>

      <p className="text-muted-foreground text-sm mb-4">{skill.description}</p>

      {/* Progress bar */}
      <div className="relative pt-1">
        <div className="h-2 bg-secondary rounded-full overflow-hidden">
          <div
            className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out relative`}
            style={{ width: `${progress}%` }}
          >
            <div className="absolute inset-0 bg-white/20 animate-shimmer" />
          </div>
        </div>
        <div className="flex justify-between mt-2">
          <span className="text-xs text-muted-foreground">{t("skills.progress")}</span>
          <span className="text-xs font-medium text-foreground">{progress}%</span>
        </div>
      </div>
    </div>
  )
}

export function Skills() {
  const { t } = useLanguage()

  const skills = [
    {
      name: "Java",
      level: t("skills.java.level"),
      description: t("skills.java.desc"),
      icon: Code,
      percentage: 45,
      color: "from-orange-500 to-red-500",
    },
    {
      name: "HTML / CSS",
      level: t("skills.html.level"),
      description: t("skills.html.desc"),
      icon: Globe,
      percentage: 60,
      color: "from-blue-500 to-cyan-500",
    },
    {
      name: "JavaScript",
      level: t("skills.js.level"),
      description: t("skills.js.desc"),
      icon: Zap,
      percentage: 30,
      color: "from-yellow-500 to-orange-500",
    },
    {
      name: "SQL",
      level: t("skills.sql.level"),
      description: t("skills.sql.desc"),
      icon: Database,
      percentage: 45,
      color: "from-green-500 to-emerald-500",
    },
    {
      name: "Excel",
      level: t("skills.excel.level"),
      description: t("skills.excel.desc"),
      icon: FileSpreadsheet,
      percentage: 55,
      color: "from-emerald-500 to-teal-500",
    },
    {
      name: "Word",
      level: t("skills.word.level"),
      description: t("skills.word.desc"),
      icon: FileText,
      percentage: 55,
      color: "from-blue-600 to-indigo-500",
    },
  ]

  return (
    <section id="skills" className="py-24 px-6 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <SectionHeader label={t("skills.label")} title={t("skills.title")} description={t("skills.description")} />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <SkillCard key={skill.name} skill={skill} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
