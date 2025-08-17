"use client"

import type React from "react"
import { useState } from "react"

export function FloatingNav() {
  const [isHovered, setIsHovered] = useState(false)

  const smoothScrollTo = (elementId: string) => {
    const element = document.getElementById(elementId)
    if (element) {
      const startPosition = window.pageYOffset
      const targetPosition = element.offsetTop - 100 // Offset for fixed nav
      const distance = targetPosition - startPosition
      const duration = 800 // Duration for 120fps feel
      let start: number | null = null

      const animation = (currentTime: number) => {
        if (start === null) start = currentTime
        const timeElapsed = currentTime - start
        const progress = Math.min(timeElapsed / duration, 1)

        const easeInOutQuart =
          progress < 0.5 ? 8 * progress * progress * progress * progress : 1 - Math.pow(-2 * progress + 2, 4) / 2

        window.scrollTo(0, startPosition + distance * easeInOutQuart)

        if (timeElapsed < duration) {
          requestAnimationFrame(animation)
        }
      }

      requestAnimationFrame(animation)
    }
  }

  const handleSectionClick = (e: React.MouseEvent, sectionId: string) => {
    e.preventDefault()
    smoothScrollTo(sectionId)
  }

  return (
    <nav
      className={`fixed top-6 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-500 ease-out will-change-transform ${
        isHovered ? "scale-105" : "scale-100"
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        backfaceVisibility: "hidden",
        perspective: "1000px",
        transform3d: "translate3d(0, 0, 0)",
      }}
    >
      <div
        className="glassmorphism px-8 py-4 rounded-3xl transition-all duration-500 ease-out will-change-transform"
        style={{
          transform: "translateZ(0)",
          willChange: "transform, opacity, box-shadow",
        }}
      >
        <div className="flex items-center gap-6">
          <button
            onClick={(e) => handleSectionClick(e, "about")}
            className="text-foreground hover:text-primary transition-all duration-300 ease-out font-medium transform hover:scale-105 cursor-pointer"
          >
            About me
          </button>
          <button
            onClick={(e) => handleSectionClick(e, "testimonials")}
            className="text-foreground hover:text-primary transition-all duration-300 ease-out font-medium transform hover:scale-105 cursor-pointer"
          >
            Testimonials
          </button>
          <button
            onClick={(e) => handleSectionClick(e, "experience")}
            className="text-foreground hover:text-primary transition-all duration-300 ease-out font-medium transform hover:scale-105 cursor-pointer"
          >
            Experience
          </button>
          <button
            onClick={(e) => handleSectionClick(e, "projects")}
            className="text-foreground hover:text-primary transition-all duration-300 ease-out font-medium transform hover:scale-105 cursor-pointer"
          >
            Projects
          </button>
        </div>
      </div>
    </nav>
  )
}
