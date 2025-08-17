"use client"

import { useState, useEffect } from "react"
import { ChevronUp } from "lucide-react"

export function ScrollBackButton() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > window.innerHeight * 0.8) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener("scroll", toggleVisibility)
    return () => window.removeEventListener("scroll", toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <button
      onClick={scrollToTop}
      className={`fixed top-6 left-6 z-50 glassmorphism p-3 rounded-full transition-all duration-500 ease-out transform hover:scale-110 hover:shadow-lg ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"
      }`}
      style={{
        backfaceVisibility: "hidden",
        transform3d: "translate3d(0, 0, 0)",
      }}
    >
      <ChevronUp className="w-5 h-5 text-foreground" />
    </button>
  )
}
