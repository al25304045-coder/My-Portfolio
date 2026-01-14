"use client"

import Image from "next/image"
import { Mail, MapPin, Sparkles, ArrowDown, Coffee, Code, Music, Github, Facebook, Youtube, Star } from "lucide-react"
import { useEffect, useState } from "react"
import { useLanguage } from "./language-provider"

function FloatingParticles() {
  const [particles, setParticles] = useState<
    Array<{ id: number; x: number; y: number; size: number; delay: number; duration: number }>
  >([])

  useEffect(() => {
    const newParticles = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 2,
      delay: Math.random() * 5,
      duration: Math.random() * 3 + 4,
    }))
    setParticles(newParticles)
  }, [])

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute rounded-full bg-primary/30 dark:bg-primary/20 animate-float"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: particle.size,
            height: particle.size,
            animationDelay: `${particle.delay}s`,
            animationDuration: `${particle.duration}s`,
          }}
        />
      ))}
    </div>
  )
}

function SparkleEffect() {
  const sparkles = [
    { top: "10%", left: "20%", delay: "0s" },
    { top: "15%", right: "15%", delay: "0.5s" },
    { top: "80%", left: "15%", delay: "1s" },
    { top: "75%", right: "20%", delay: "1.5s" },
    { top: "50%", left: "5%", delay: "2s" },
    { top: "45%", right: "5%", delay: "2.5s" },
  ]

  return (
    <>
      {sparkles.map((pos, i) => (
        <Star
          key={i}
          size={12}
          className="absolute text-primary/60 animate-sparkle fill-primary/40"
          style={{ ...pos, animationDelay: pos.delay }}
        />
      ))}
    </>
  )
}

export function Hero() {
  const [mounted, setMounted] = useState(false)
  const [currentWord, setCurrentWord] = useState(0)
  const { t } = useLanguage()

  const words = [t("hero.tagline1"), t("hero.tagline2"), t("hero.tagline3")]

  useEffect(() => {
    setMounted(true)
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % 3)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  const facts = [
    { icon: Coffee, text: t("hero.fact1") },
    { icon: Code, text: t("hero.fact2") },
    { icon: Music, text: t("hero.fact3") },
  ]

  return (
    <section id="about" className="min-h-screen pt-24 pb-20 px-6 flex items-center relative overflow-hidden">
      <FloatingParticles />

      <div className="max-w-5xl mx-auto w-full">
        <div
          className={`flex flex-col items-center mb-12 transition-all duration-1000 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"}`}
        >
          {/* Magical profile container */}
          <div className="relative mb-8">
            {/* Animated background orbs */}
            <div className="absolute -inset-8 -z-10">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/30 via-accent/30 to-primary/30 rounded-full blur-3xl animate-morph opacity-60" />
            </div>

            {/* Orbiting rings */}
            <div className="absolute inset-[-30px] animate-spin-slow">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 bg-primary rounded-full shadow-lg shadow-primary/50" />
            </div>
            <div className="absolute inset-[-50px] animate-spin-reverse">
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2 h-2 bg-accent rounded-full shadow-lg shadow-accent/50" />
            </div>
            <div className="absolute inset-[-40px] animate-spin-slow" style={{ animationDuration: "25s" }}>
              <div className="absolute left-0 top-1/2 -translate-y-1/2 w-2.5 h-2.5 bg-chart-3 rounded-full shadow-lg shadow-chart-3/50" />
            </div>

            {/* Sparkle effects */}
            <SparkleEffect />

            {/* Main profile image with magic glow */}
            <div className="relative magic-glow">
              <div className="w-40 h-40 md:w-52 md:h-52 lg:w-60 lg:h-60 rounded-full overflow-hidden border-4 border-background shadow-2xl animate-float-slow relative z-10">
                <Image
                  src="/images/profile.png"
                  alt="Anoj Lama"
                  width={240}
                  height={240}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>

              {/* Inner glow ring */}
              <div className="absolute inset-0 rounded-full border-2 border-primary/30 animate-pulse" />

              {/* Ripple effect */}
              <div className="absolute inset-0 rounded-full border border-primary/20 animate-ripple" />
              <div
                className="absolute inset-0 rounded-full border border-accent/20 animate-ripple"
                style={{ animationDelay: "1s" }}
              />
            </div>

            {/* Decorative floating elements */}
            <div
              className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-full animate-bounce shadow-lg"
              style={{ animationDelay: "0.5s" }}
            />
            <div
              className="absolute -bottom-2 -left-6 w-6 h-6 bg-gradient-to-br from-accent to-chart-3 rounded-full animate-bounce shadow-lg"
              style={{ animationDelay: "1s" }}
            />
            <div
              className="absolute top-1/2 -right-8 w-4 h-4 bg-chart-4 rounded-full animate-bounce shadow-lg"
              style={{ animationDelay: "1.5s" }}
            />
          </div>

          {/* Name and title centered below profile */}
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-3 tracking-tight">
              <span className="text-foreground">Anoj</span> <span className="gradient-text">Lama</span>
            </h1>
            <p className="text-xl text-primary font-medium mb-2">{t("hero.title")}</p>

            {/* Rotating words */}
            <div className="h-8 overflow-hidden">
              <p className="text-lg text-muted-foreground">
                {t("hero.taglinePrefix")}{" "}
                <span key={currentWord} className="inline-block text-accent font-medium animate-slide-up">
                  {words[currentWord]}
                </span>
              </p>
            </div>
          </div>

          {/* Social links */}
          <div className="flex items-center gap-4 mt-6">
            <a
              href="https://github.com/al25304045-coder"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-3 rounded-full glass hover:bg-foreground hover:text-background transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/20"
              aria-label="GitHub"
            >
              <Github size={22} />
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=61562428784312"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-3 rounded-full glass hover:bg-[#1877F2] hover:text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#1877F2]/20"
              aria-label="Facebook"
            >
              <Facebook size={22} />
            </a>
            <a
              href="https://www.youtube.com/@ANOJLAMA-j8e"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-3 rounded-full glass hover:bg-[#FF0000] hover:text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#FF0000]/20"
              aria-label="YouTube"
            >
              <Youtube size={22} />
            </a>
          </div>

          {/* Status badge */}
          <div className="mt-4">
            <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 text-sm font-medium text-foreground">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              {t("hero.status")}
            </span>
          </div>
        </div>

        {/* Info cards below */}
        <div
          className={`grid md:grid-cols-2 gap-6 transition-all duration-1000 delay-300 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          {/* About card */}
          <div className="glass rounded-2xl p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <Sparkles size={18} className="text-primary" />
              {t("hero.aboutMe")}
            </h3>
            <div className="space-y-3 text-muted-foreground">
              <p>
                {t("hero.intro1")} <span className="text-foreground font-medium">{t("hero.intro1.date")}</span>
                {t("hero.intro1.suffix")}
              </p>
              <p className="text-sm">{t("hero.intro2")}</p>
            </div>

            {/* Quick facts */}
            <div className="flex flex-wrap gap-2 mt-4">
              {facts.map((item, i) => (
                <div
                  key={item.text}
                  className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary/80 text-xs text-foreground transition-all hover:bg-secondary hover:-translate-y-0.5"
                  style={{ transitionDelay: `${i * 50}ms` }}
                >
                  <item.icon size={12} className="text-primary" />
                  <span>{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Contact & Languages card */}
          <div className="glass rounded-2xl p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <Mail size={18} className="text-accent" />
              {t("hero.contactInfo")}
            </h3>

            <div className="space-y-3 mb-4">
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <MapPin size={16} className="text-primary" />
                <span>{t("hero.location")}</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <Mail size={16} className="text-accent" />
                <span>{t("hero.contact")}</span>
              </div>
            </div>

            {/* Languages */}
            <div className="pt-3 border-t border-border/50">
              <span className="text-xs text-muted-foreground uppercase tracking-wider">{t("hero.languages")}</span>
              <div className="flex flex-wrap gap-2 mt-2">
                {["English (TOEIC)", "日本語 (N3, N2 pending)", "Nepali"].map((lang) => (
                  <span
                    key={lang}
                    className="px-3 py-1.5 text-xs font-medium bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 text-foreground rounded-full"
                  >
                    {lang}
                  </span>
                ))}
              </div>
            </div>

            {/* Graduating badge */}
            <div className="mt-4">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium border border-accent/20">
                <Sparkles size={14} />
                {t("hero.graduating")}
              </span>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div
          className={`mt-16 flex flex-col items-center gap-2 transition-all duration-1000 delay-700 ${mounted ? "opacity-100" : "opacity-0"}`}
        >
          <span className="text-xs text-muted-foreground uppercase tracking-widest">{t("hero.scroll")}</span>
          <ArrowDown size={20} className="text-primary animate-bounce" />
        </div>
      </div>
    </section>
  )
}
