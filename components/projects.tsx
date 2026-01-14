"use client"

import { Code, Database, Globe, ChevronRight, Lightbulb } from "lucide-react"
import { useEffect, useRef, useState } from "react"
import { SectionHeader } from "./section-header"
import { useLanguage } from "./language-provider"

function ProjectCard({
  project,
  index,
}: {
  project: {
    title: string
    type: string
    icon: typeof Code
    color: string
    description: string
    technologies: string[]
    challenge: string
    learned: string
  }
  index: number
}) {
  const [isVisible, setIsVisible] = useState(false)
  const [isExpanded, setIsExpanded] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  const { t } = useLanguage()

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
    <div
      ref={ref}
      className={`group transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
      }`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <div className="glass rounded-3xl overflow-hidden hover:shadow-2xl transition-all">
        {/* Colored accent bar */}
        <div className={`h-1.5 bg-gradient-to-r ${project.color}`} />

        <div className="p-8">
          {/* Header */}
          <div className="flex items-start gap-4 mb-6">
            <div
              className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${project.color} flex items-center justify-center shadow-lg transition-transform group-hover:scale-110 group-hover:-rotate-6`}
            >
              <project.icon size={28} className="text-white" />
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-bold text-foreground mb-1">{project.title}</h3>
              <p className="text-sm text-primary">{project.type}</p>
            </div>
          </div>

          <p className="text-muted-foreground mb-6 leading-relaxed">{project.description}</p>

          {/* Tech stack */}
          <div className="flex flex-wrap gap-2 mb-6">
            {project.technologies.map((tech) => (
              <span key={tech} className="px-3 py-1.5 text-xs font-medium rounded-full bg-secondary text-foreground">
                {tech}
              </span>
            ))}
          </div>

          {/* Expandable */}
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="flex items-center gap-2 text-sm font-medium text-primary hover:text-accent transition-colors"
          >
            <ChevronRight size={16} className={`transition-transform ${isExpanded ? "rotate-90" : ""}`} />
            {isExpanded ? t("projects.collapse") : t("projects.expand")}
          </button>

          <div
            className={`grid transition-all duration-500 ${
              isExpanded ? "grid-rows-[1fr] opacity-100 mt-6" : "grid-rows-[0fr] opacity-0"
            }`}
          >
            <div className="overflow-hidden">
              <div className="space-y-4 pt-4 border-t border-border">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-orange-500/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-orange-500 text-sm">?!</span>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground mb-1">{t("projects.challenge")}</p>
                    <p className="text-sm text-foreground">{project.challenge}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-green-500/10 flex items-center justify-center flex-shrink-0">
                    <Lightbulb size={16} className="text-green-500" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground mb-1">{t("projects.learned")}</p>
                    <p className="text-sm text-foreground">{project.learned}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export function Projects() {
  const { t } = useLanguage()

  const projects = [
    {
      title: t("projects.p1.title"),
      type: t("projects.p1.type"),
      icon: Code,
      color: "from-orange-500 to-red-500",
      description: t("projects.p1.desc"),
      technologies: ["Java", "OOP", "File I/O"],
      challenge: t("projects.p1.challenge"),
      learned: t("projects.p1.learned"),
    },
    {
      title: t("projects.p2.title"),
      type: t("projects.p2.type"),
      icon: Globe,
      color: "from-blue-500 to-cyan-500",
      description: t("projects.p2.desc"),
      technologies: ["HTML", "CSS", "JavaScript"],
      challenge: t("projects.p2.challenge"),
      learned: t("projects.p2.learned"),
    },
    {
      title: t("projects.p3.title"),
      type: t("projects.p3.type"),
      icon: Database,
      color: "from-green-500 to-emerald-500",
      description: t("projects.p3.desc"),
      technologies: ["SQL", "Database Design", "CRUD"],
      challenge: t("projects.p3.challenge"),
      learned: t("projects.p3.learned"),
    },
  ]

  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          label={t("projects.label")}
          title={t("projects.title")}
          description={t("projects.description")}
        />

        <div className="grid lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
