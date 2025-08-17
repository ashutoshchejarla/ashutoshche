"use client"

import type React from "react"

import { useState } from "react"

export function ProjectsSection() {
  const [expandedProject, setExpandedProject] = useState<number | null>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  const projects = [
    {
      title: "Family Info",
      description: "A website which has all the information regarding oyur family including a family tree and family history in English, Hindi and Marathi.",
      technologies: ["HTML", "CSS"],
      demoGif: "/ecommerce-demo.gif",
      githubUrl: "https://github.com/ashutoshchejarla/familyinfo",
      liveUrl: "https://ashutoshchejarla.github.io/familyinfo",
    },
    {
      title: "Portfolio Website",
      description: "A portfolio website made using HTML and CSS",
      technologies: ["HTML", "CSS"],
      demoGif: "/taskapp-demo.gif",
      githubUrl: "https://github.com/ashutoshchejarla/ashutoshchejarlaa",
      liveUrl: "https://ashutoshchejarla.github.io/ashutoshchejarlaa",
    },
    {
      title: "Flappy Bird (PC)",
      description: "A Flappy Bird game made using Scratch Engine and the HTMLIFIED",
      technologies: ["Scratch", "HTMLIFIER"],
      demoGif: "/weather-demo.gif",
      githubUrl: "https://github.com/ashutoshchejarla/flappybird",
      liveUrl: "https://ashutoshchejarla.github.io/flappybird",
    },
  ]

  const handleMouseMove = (e: React.MouseEvent, index: number) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    setMousePosition({ x, y })
  }

  return (
    <section id="projects" className="min-h-screen flex items-center justify-center px-4 py-16">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-foreground font-sans mb-16">
          My <span className="text-primary">Projects</span>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`relative bg-card border border-border rounded-2xl overflow-hidden shadow-lg transition-all duration-300 cursor-pointer ${
                expandedProject === index ? "md:col-span-2 lg:col-span-3 scale-105" : "hover:scale-105 hover:shadow-xl"
              }`}
              onMouseMove={(e) => handleMouseMove(e, index)}
              onClick={() => setExpandedProject(expandedProject === index ? null : index)}
              style={{
                transform:
                  expandedProject !== index
                    ? `perspective(1000px) rotateX(${(mousePosition.y - 150) * 0.05}deg) rotateY(${(mousePosition.x - 150) * 0.05}deg)`
                    : "none",
              }}
            >
              {expandedProject === index ? (
                <div className="p-8">
                  <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div>
                      <h3 className="text-2xl font-bold text-card-foreground mb-4">{project.title}</h3>
                      <p className="text-secondary mb-6 leading-relaxed">{project.description}</p>

                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 bg-primary/10 text-primary rounded-lg text-sm font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      <div className="flex gap-4">
                        <a
                          href={project.githubUrl}
                          className="px-6 py-3 bg-primary text-primary-foreground rounded-xl font-medium hover:scale-105 transition-all duration-200"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          GitHub
                        </a>
                        <a
                          href={project.liveUrl}
                          className="px-6 py-3 glassmorphism text-foreground rounded-xl font-medium hover:scale-105 transition-all duration-200"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Live Demo
                        </a>
                      </div>
                    </div>

                    <div className="rounded-xl overflow-hidden">
                      <img
                        src={project.demoGif || "/placeholder.svg"}
                        alt={`${project.title} demo`}
                        className="w-full h-64 object-cover"
                      />
                    </div>
                  </div>
                </div>
              ) : (
                <div className="p-6">
                  <h3 className="text-xl font-bold text-card-foreground mb-2">{project.title}</h3>
                  <p className="text-secondary text-sm mb-4">{project.description}</p>

                  <div className="flex flex-wrap gap-1">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span key={tech} className="px-2 py-1 bg-primary/10 text-primary rounded text-xs font-medium">
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-2 py-1 bg-muted text-muted-foreground rounded text-xs">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
