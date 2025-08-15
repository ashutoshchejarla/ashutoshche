export function ExperienceSection() {
  const experiences = [
    {
      title: "Senior Full-Stack Developer",
      company: "Tech Innovation Co.",
      period: "2022 - Present",
      description:
        "Led development of scalable web applications using React, Next.js, and Node.js. Mentored junior developers and implemented best practices for code quality and performance.",
      technologies: ["React", "Next.js", "TypeScript", "AWS", "PostgreSQL"],
    },
    {
      title: "Frontend Developer",
      company: "Digital Solutions Ltd.",
      period: "2020 - 2022",
      description:
        "Developed responsive web applications and collaborated with design teams to create pixel-perfect user interfaces. Improved application performance by 40%.",
      technologies: ["React", "JavaScript", "SASS", "Redux", "Jest"],
    },
  ]

  return (
    <section id="experience" className="min-h-screen flex items-center justify-center px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-foreground font-sans mb-16">
          My <span className="text-primary">Experience</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-bold text-card-foreground">{exp.title}</h3>
                  <p className="text-primary font-medium">{exp.company}</p>
                  <p className="text-sm text-muted-foreground">{exp.period}</p>
                </div>

                <p className="text-secondary leading-relaxed">{exp.description}</p>

                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-primary/10 text-primary rounded-lg text-xs font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
