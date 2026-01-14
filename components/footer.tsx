"use client"

import Image from "next/image"
import { Mail, MapPin, Github, Facebook, Youtube } from "lucide-react"
import { useLanguage } from "./language-provider"

export function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="py-16 px-6 border-t border-border relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent pointer-events-none" />

      <div className="max-w-6xl mx-auto relative">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Profile */}
          <div className="flex items-center gap-4">
            <div className="relative">
              <div className="w-14 h-14 rounded-2xl overflow-hidden border-2 border-primary/30 shadow-lg transform -rotate-3 hover:rotate-0 transition-transform">
                <Image
                  src="/images/profile.png"
                  alt="Anoj Lama"
                  width={56}
                  height={56}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div>
              <h3 className="text-lg font-bold text-foreground">Anoj Lama</h3>
              <p className="text-sm text-muted-foreground">{t("footer.title")}</p>
            </div>
          </div>

          {/* Center message */}
          <div className="text-center">
            <p className="text-sm text-muted-foreground">{t("footer.thanks")}</p>
            <p className="text-xs text-muted-foreground mt-1">{t("footer.connect")}</p>
          </div>

          {/* Contact */}
          <div className="flex flex-col items-center md:items-end gap-3">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <MapPin size={14} className="text-primary" />
              <span>{t("hero.location")}</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Mail size={14} className="text-accent" />
              <span>{t("hero.contact")}</span>
            </div>
            <div className="flex items-center gap-2 pt-2">
              <a
                href="https://github.com/al25304045-coder"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-secondary/80 hover:bg-foreground hover:text-background transition-all duration-300 hover:-translate-y-0.5"
                aria-label="GitHub"
              >
                <Github size={16} />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61562428784312"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-secondary/80 hover:bg-[#1877F2] hover:text-white transition-all duration-300 hover:-translate-y-0.5"
                aria-label="Facebook"
              >
                <Facebook size={16} />
              </a>
              <a
                href="https://www.youtube.com/@ANOJLAMA-j8e"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-secondary/80 hover:bg-[#FF0000] hover:text-white transition-all duration-300 hover:-translate-y-0.5"
                aria-label="YouTube"
              >
                <Youtube size={16} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">{t("hero.graduating")}</p>
          <p className="text-xs text-muted-foreground">{t("footer.bye")}</p>
        </div>
      </div>
    </footer>
  )
}
