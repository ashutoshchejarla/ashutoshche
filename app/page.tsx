import { FloatingNav } from "@/components/floating-nav"
import { FloatingIcons } from "@/components/floating-icons"
import { HeroSection } from "@/components/hero-section"
import { ThemeToggle } from "@/components/theme-toggle"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-background via-muted/30 to-background overflow-hidden relative">
      <FloatingNav />
      <FloatingIcons />
      <HeroSection />
      <ThemeToggle />
    </main>
  )
}
