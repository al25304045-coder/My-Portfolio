"use client"

import { useEffect, useState } from "react"

export function AnimatedBackground() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Gradient orbs */}
      <div
        className="absolute w-[600px] h-[600px] rounded-full opacity-30 dark:opacity-20 animate-blob"
        style={{
          background: "linear-gradient(135deg, oklch(0.65 0.2 195 / 0.5), oklch(0.75 0.15 330 / 0.3))",
          top: "-200px",
          right: "-100px",
          filter: "blur(80px)",
        }}
      />
      <div
        className="absolute w-[500px] h-[500px] rounded-full opacity-20 dark:opacity-15 animate-blob"
        style={{
          background: "linear-gradient(135deg, oklch(0.75 0.15 330 / 0.4), oklch(0.7 0.18 150 / 0.3))",
          bottom: "10%",
          left: "-150px",
          filter: "blur(80px)",
          animationDelay: "-4s",
        }}
      />
      <div
        className="absolute w-[400px] h-[400px] rounded-full opacity-15 dark:opacity-10 animate-blob"
        style={{
          background: "linear-gradient(135deg, oklch(0.7 0.18 150 / 0.4), oklch(0.65 0.2 195 / 0.3))",
          top: "50%",
          right: "10%",
          filter: "blur(60px)",
          animationDelay: "-2s",
        }}
      />

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]"
        style={{
          backgroundImage: `
            linear-gradient(oklch(0.5 0.1 240) 1px, transparent 1px),
            linear-gradient(90deg, oklch(0.5 0.1 240) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />
    </div>
  )
}
