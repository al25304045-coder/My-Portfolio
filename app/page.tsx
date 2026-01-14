import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Education } from "@/components/education"
import { Skills } from "@/components/skills"
import { Projects } from "@/components/projects"
import { Strengths } from "@/components/strengths"
import { Goals } from "@/components/goals"
import { Footer } from "@/components/footer"
import { AnimatedBackground } from "@/components/animated-background"

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-background">
      <AnimatedBackground />
      <Header />
      <main>
        <Hero />
        <Education />
        <Skills />
        <Projects />
        <Strengths />
        <Goals />
      </main>
      <Footer />
    </div>
  )
}
