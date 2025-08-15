"use client"

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16 text-foreground">Testimonials</h2>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Testimonial 1 */}
          <div className="bg-card/80 backdrop-blur-md border border-border rounded-3xl p-8 hover:scale-105 transition-all duration-500 hover:shadow-2xl">
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary/20 to-primary/40 flex items-center justify-center mr-4 overflow-hidden">
                <img src="/daniel-lewis-headshot.png" alt="Daniel Lewis" className="w-full h-full object-cover" />
              </div>
              <div>
                <h3 className="font-semibold text-lg text-foreground">Daniel Lewis</h3>
                <p className="text-muted-foreground text-sm">CEO, TechCorp</p>
              </div>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              "Working with this developer was an exceptional experience. The attention to detail and innovative
              solutions provided exceeded our expectations. The project was delivered on time with outstanding quality."
            </p>
            <div className="flex mt-4">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
          </div>

          {/* Testimonial 2 */}
          <div className="bg-card/80 backdrop-blur-md border border-border rounded-3xl p-8 hover:scale-105 transition-all duration-500 hover:shadow-2xl">
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary/20 to-primary/40 flex items-center justify-center mr-4 overflow-hidden">
                <img src="/professional-headshot-jessica-miller.png" alt="Jessica Miller" className="w-full h-full object-cover" />
              </div>
              <div>
                <h3 className="font-semibold text-lg text-foreground">Jessica Miller</h3>
                <p className="text-muted-foreground text-sm">Product Manager, InnovateLab</p>
              </div>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              "The level of professionalism and technical expertise demonstrated was remarkable. Our web application not
              only looks stunning but performs flawlessly. Highly recommend for any complex development project."
            </p>
            <div className="flex mt-4">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
          </div>

          {/* Testimonial 3 */}
          <div className="bg-card/80 backdrop-blur-md border border-border rounded-3xl p-8 hover:scale-105 transition-all duration-500 hover:shadow-2xl">
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary/20 to-primary/40 flex items-center justify-center mr-4 overflow-hidden">
                <img src="/michael-chen-headshot.png" alt="Michael Chen" className="w-full h-full object-cover" />
              </div>
              <div>
                <h3 className="font-semibold text-lg text-foreground">Michael Chen</h3>
                <p className="text-muted-foreground text-sm">Founder, StartupVision</p>
              </div>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              "Incredible work ethic and problem-solving skills. The developer transformed our vision into a beautiful,
              functional website that perfectly represents our brand. Communication was excellent throughout."
            </p>
            <div className="flex mt-4">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
          </div>

          {/* Testimonial 4 */}
          <div className="bg-card/80 backdrop-blur-md border border-border rounded-3xl p-8 hover:scale-105 transition-all duration-500 hover:shadow-2xl">
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary/20 to-primary/40 flex items-center justify-center mr-4 overflow-hidden">
                <img src="/sarah-johnson-headshot.png" alt="Sarah Johnson" className="w-full h-full object-cover" />
              </div>
              <div>
                <h3 className="font-semibold text-lg text-foreground">Sarah Johnson</h3>
                <p className="text-muted-foreground text-sm">Creative Director, DesignStudio</p>
              </div>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              "Outstanding technical skills combined with great design sensibility. The final product exceeded our
              expectations and has received numerous compliments from our clients. A true professional."
            </p>
            <div className="flex mt-4">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
