export function AboutSection() {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center px-4 py-16">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className="flex justify-center">
          <div className="relative">
            <div className="w-80 h-96 rounded-3xl overflow-hidden border-4 border-primary/20 shadow-2xl">
              <img
                src="/full-body-professional.png"
                alt="Full body professional photo"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute inset-0 w-80 h-96 rounded-3xl bg-gradient-to-tr from-primary/10 to-transparent"></div>
          </div>
        </div>

        <div className="space-y-6">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground font-sans">
            About <span className="text-primary">Me</span>
          </h2>

          <div className="space-y-4 text-secondary leading-relaxed">
            <p className="text-lg">
              I'm a passionate full-stack developer with over 5 years of experience creating beautiful, functional web
              applications. My journey in tech started with a curiosity about how websites work, and it has evolved into
              a deep love for crafting digital experiences.
            </p>

            <p className="text-lg">
              I specialize in modern JavaScript frameworks, particularly React and Next.js, and have extensive
              experience with backend technologies including Node.js, Python, and various databases. I believe in
              writing clean, maintainable code and creating user-centered designs.
            </p>

            <p className="text-lg">
              When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or
              sharing knowledge with the developer community through blog posts and mentoring.
            </p>
          </div>

          <div className="flex flex-wrap gap-3 pt-4">
            {["React", "Next.js", "TypeScript", "Node.js", "Python", "AWS"].map((skill) => (
              <span key={skill} className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
