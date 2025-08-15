"use client"

export function FloatingIcons() {
  const icons = [
    {
      src: "/html5-logo-orange.png",
      alt: "HTML5",
      className: "float-animation",
      style: { top: "20%", left: "15%", animationDelay: "0s" },
    },
    {
      src: "/css3-logo-blue.png",
      alt: "CSS3",
      className: "float-slow",
      style: { top: "60%", right: "20%", animationDelay: "2s" },
    },
    {
      src: "/javascript-logo-yellow.png",
      alt: "JavaScript",
      className: "float-animation",
      style: { top: "40%", left: "10%", animationDelay: "4s" },
    },
    {
      src: "/placeholder-dt7hj.png",
      alt: "React",
      className: "float-slow",
      style: { top: "25%", right: "15%", animationDelay: "1s" },
    },
    {
      src: "/typescript-logo-blue.png",
      alt: "TypeScript",
      className: "float-animation",
      style: { top: "70%", left: "20%", animationDelay: "3s" },
    },
  ]

  return (
    <div className="fixed inset-0 pointer-events-none z-10">
      {icons.map((icon, index) => (
        <img
          key={index}
          src={icon.src || "/placeholder.svg"}
          alt={icon.alt}
          className={`absolute w-16 h-16 opacity-20 hover:opacity-40 transition-opacity duration-300 ${icon.className}`}
          style={icon.style}
        />
      ))}
    </div>
  )
}
