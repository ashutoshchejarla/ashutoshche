export function HeroSection() {
  return (
    <section className="flex items-center justify-center min-h-screen px-4 relative z-20">
      <div className="text-center max-w-4xl mx-auto">
        {/* Profile Image */}
        <div className="mb-8 relative">
          <div className="w-48 h-48 mx-auto rounded-full overflow-hidden border-4 border-primary/20 shadow-2xl">
            <img src="/professional-headshot.png" alt="Profile" className="w-full h-full object-cover" />
          </div>
          <div className="absolute inset-0 w-48 h-48 mx-auto rounded-full bg-gradient-to-tr from-primary/20 to-transparent animate-pulse"></div>
        </div>

        {/* Hero Content */}
        <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 font-sans">
          Hello, I'm{" "}
          <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Ashutosh Chejarla</span>
        </h1>

        <p className="text-xl md:text-2xl text-secondary mb-8 font-light max-w-2xl mx-auto leading-relaxed">
          A passionate developer crafting beautiful digital experiences with modern technologies such as AI
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button className="px-8 py-4 bg-primary text-primary-foreground rounded-2xl font-medium hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl">
            View My Work
          </button>
          <button className="px-8 py-4 glassmorphism text-foreground rounded-2xl font-medium hover:scale-105 transition-all duration-200" href="instagram.com/notreallyashutosh">
            Get In Touch
          </button>
        </div>
      </div>
    </section>
  )
}
