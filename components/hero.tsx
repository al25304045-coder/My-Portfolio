"use client"

import Image from "next/image"
import { Mail, MapPin, Sparkles, ArrowDown, Coffee, Code, Music, Github, Facebook, Youtube } from "lucide-react"
import { useEffect, useState } from "react"
import { useLanguage } from "./language-provider"

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
      <div className="max-w-6xl mx-auto w-full">
        <div className="grid lg:grid-cols-[1.2fr,1fr] gap-12 lg:gap-16 items-center">
          {/* Left Column - Introduction */}
          <div
            className={`space-y-8 transition-all duration-1000 ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              <span className="text-foreground">{t("hero.status")}</span>
            </div>

            {/* Name with personality */}
            <div>
              <p className="text-muted-foreground mb-2 text-lg">{t("hero.greeting")}</p>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4 tracking-tight">
                <span className="text-foreground">Anoj</span> <span className="gradient-text">Lama</span>
              </h1>
              {/* Rotating words */}
              <div className="h-8 overflow-hidden">
                <p className="text-xl text-muted-foreground">
                  {t("hero.taglinePrefix")}{" "}
                  <span key={currentWord} className="inline-block text-primary font-medium animate-slide-up">
                    {words[currentWord]}
                  </span>
                </p>
              </div>
            </div>

            {/* Personal intro */}
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p className="text-lg">
                {t("hero.intro1")} <span className="text-foreground font-medium">{t("hero.intro1.date")}</span>
                {t("hero.intro1.suffix")}
              </p>
              <p>{t("hero.intro2")}</p>
            </div>

            {/* Quick facts */}
            <div className="flex flex-wrap gap-3">
              {facts.map((item, i) => (
                <div
                  key={item.text}
                  className="flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/80 text-sm text-foreground transition-all hover:bg-secondary hover:-translate-y-1"
                  style={{ transitionDelay: `${i * 50}ms` }}
                >
                  <item.icon size={14} className="text-primary" />
                  <span>{item.text}</span>
                </div>
              ))}
            </div>

            {/* Languages */}
            <div className="flex items-center gap-4 pt-4">
              <span className="text-sm text-muted-foreground">{t("hero.languages")}</span>
              <div className="flex gap-2">
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
          </div>

          {/* Right Column - Profile Card */}
          <div
            className={`relative transition-all duration-1000 delay-300 ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            {/* Organic shape background */}
            <div className="absolute inset-0 -z-10">
              <div className="absolute top-10 right-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-blob" />
              <div
                className="absolute bottom-10 left-10 w-64 h-64 bg-accent/20 rounded-full blur-3xl animate-blob"
                style={{ animationDelay: "2s" }}
              />
            </div>

            {/* Profile card with tilt */}
            <div className="glass rounded-3xl p-8 transform lg:rotate-2 hover:rotate-0 transition-transform duration-500">
              {/* Image */}
              <div className="relative mb-6 mx-auto w-fit">
                <div className="w-48 h-48 md:w-56 md:h-56 rounded-2xl overflow-hidden border-4 border-background shadow-2xl transform -rotate-3 hover:rotate-0 transition-transform">
                  <Image
                    src="/images/profile.png"
                    alt="Anoj Lama"
                    width={224}
                    height={224}
                    className="w-full h-full object-cover"
                    priority
                  />
                </div>
                {/* Decorative elements */}
                <div
                  className="absolute -top-3 -right-3 w-6 h-6 bg-primary rounded-full animate-bounce"
                  style={{ animationDelay: "0.5s" }}
                />
                <div
                  className="absolute -bottom-2 -left-2 w-4 h-4 bg-accent rounded-full animate-bounce"
                  style={{ animationDelay: "1s" }}
                />
              </div>

              {/* Info */}
              <div className="text-center space-y-3">
                <h2 className="text-2xl font-bold text-foreground">Anoj Lama</h2>
                <p className="text-primary font-medium">{t("hero.title")}</p>

                <div className="flex flex-col gap-2 pt-4">
                  <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                    <MapPin size={14} className="text-primary" />
                    <span>{t("hero.location")}</span>
                  </div>
                  <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                    <Mail size={14} className="text-accent" />
                    <span>{t("hero.contact")}</span>
                  </div>
                </div>

                <div className="flex items-center justify-center gap-3 pt-4">
                  <a
                    href="https://github.com/al25304045-coder"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative p-3 rounded-xl bg-secondary/80 hover:bg-foreground hover:text-background transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                    aria-label="GitHub"
                  >
                    <Github size={20} />
                    <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                      GitHub
                    </span>
                  </a>
                  <a
                    href="https://www.facebook.com/profile.php?id=61562428784312"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative p-3 rounded-xl bg-secondary/80 hover:bg-[#1877F2] hover:text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                    aria-label="Facebook"
                  >
                    <Facebook size={20} />
                    <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                      Facebook
                    </span>
                  </a>
                  <a
                    href="https://www.youtube.com/@ANOJLAMA-j8e"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative p-3 rounded-xl bg-secondary/80 hover:bg-[#FF0000] hover:text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                    aria-label="YouTube"
                  >
                    <Youtube size={20} />
                    <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                      YouTube
                    </span>
                  </a>
                </div>

                <div className="pt-4">
                  <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
                    <Sparkles size={14} />
                    {t("hero.graduating")}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div
          className={`absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 transition-all duration-1000 delay-700 ${
            mounted ? "opacity-100" : "opacity-0"
          }`}
        >
          <span className="text-xs text-muted-foreground uppercase tracking-widest">{t("hero.scroll")}</span>
          <ArrowDown size={20} className="text-primary animate-bounce" />
        </div>
      </div>
    </section>
  )
}
