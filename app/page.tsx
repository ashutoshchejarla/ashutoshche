import { FloatingNav } from "@/components/floating-nav"
import { FloatingIcons } from "@/components/floating-icons"
import { HeroSection } from "@/components/hero-section"
import { ThemeToggle } from "@/components/theme-toggle"
import { ScrollBackButton } from "@/components/scroll-back-button"
import { AboutSection } from "@/components/about-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { ExperienceSection } from "@/components/experience-section"
import { ProjectsSection } from "@/components/projects-section"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-background via-muted/30 to-background overflow-hidden relative">
      <FloatingNav />
      <FloatingIcons />
      <HeroSection />
      <ThemeToggle />
      <ScrollBackButton />

      <AboutSection />
      <TestimonialsSection />
      <ExperienceSection />
      <ProjectsSection />
    </main>
  )
}
