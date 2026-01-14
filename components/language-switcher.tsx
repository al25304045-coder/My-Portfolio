"use client"

import { useState } from "react"
import { Globe, ChevronDown, Check } from "lucide-react"
import { useLanguage } from "./language-provider"
import { type Language, languageNames } from "@/lib/translations"

const languages: { code: Language; flag: string }[] = [
  { code: "en", flag: "🇺🇸" },
  { code: "ja", flag: "🇯🇵" },
  { code: "ne", flag: "🇳🇵" },
  { code: "hi", flag: "🇮🇳" },
  { code: "ko", flag: "🇰🇷" },
  { code: "zh", flag: "🇨🇳" },
]

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage()
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 rounded-full glass hover:bg-secondary/80 transition-all"
        aria-label="Change language"
      >
        <Globe size={16} className="text-primary" />
        <span className="text-sm font-medium hidden sm:inline">{languageNames[language]}</span>
        <ChevronDown size={14} className={`transition-transform ${isOpen ? "rotate-180" : ""}`} />
      </button>

      {isOpen && (
        <>
          <div className="fixed inset-0 z-40" onClick={() => setIsOpen(false)} />
          <div className="absolute right-0 top-full mt-2 w-48 glass rounded-2xl overflow-hidden shadow-xl z-50 animate-slide-up">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => {
                  setLanguage(lang.code)
                  setIsOpen(false)
                }}
                className={`w-full flex items-center gap-3 px-4 py-3 text-left transition-colors ${
                  language === lang.code ? "bg-primary/10 text-primary" : "hover:bg-secondary/80 text-foreground"
                }`}
              >
                <span className="text-lg">{lang.flag}</span>
                <span className="flex-1 text-sm font-medium">{languageNames[lang.code]}</span>
                {language === lang.code && <Check size={16} className="text-primary" />}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  )
}
