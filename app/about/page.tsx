import { FloatingNav } from "@/components/floating-nav"
import { AboutSection } from "@/components/about-section"
import { ExperienceSection } from "@/components/experience-section"
import { ProjectsSection } from "@/components/projects-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { ThemeToggle } from "@/components/theme-toggle"
import { BackButton } from "@/components/back-button"

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-background via-muted/30 to-background">
      <FloatingNav isAboutPage={true} />
      <BackButton />
      <ThemeToggle />

      <div className="pt-24">
        <AboutSection />
        <TestimonialsSection />
        <ExperienceSection />
        <ProjectsSection />
      </div>
    </main>
  )
}
