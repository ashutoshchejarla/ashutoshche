"use client"

import { ArrowLeft } from "lucide-react"
import Link from "next/link"

export function BackButton() {
  return (
    <Link
      href="/"
      className="fixed top-6 left-6 z-50 glassmorphism rounded-full p-3 ios-button hover:scale-110 transition-all duration-300"
      aria-label="Back to home"
    >
      <ArrowLeft className="w-5 h-5 text-foreground" />
    </Link>
  )
}
