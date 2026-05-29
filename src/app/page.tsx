import DynamicIsland from "@/components/navbar/DynamicIsland";
import HeroSection from "@/components/hero/HeroSection";
import AboutSection from "@/components/about/AboutSection";

export default function Home() {
  return (
    <main>
      {/* Floating navbar — fixed position, z-[9999] */}
      <DynamicIsland />

      {/* Section 1 — Hero (DARK) */}
      <HeroSection />

      {/* Section 2 — About (LIGHT) */}
      <AboutSection />

      {/* Section 3 — Approach (DARK) */}
      <section id="approach" className="section-dark">
        <div className="container-portfolio">
          <p className="text-[var(--color-text-muted)] font-medium text-sm uppercase tracking-widest">
            01.2 · My Approach
          </p>
        </div>
      </section>

      {/* Section 4 — Featured Projects (LIGHT) */}
      <section id="work" className="section-light">
        <div className="container-portfolio">
          <p className="text-[var(--color-text-dark-muted)] font-medium text-sm uppercase tracking-widest">
            02 · Featured Projects
          </p>
        </div>
      </section>

      {/* Section 5 — Experience (DARK) */}
      <section id="experience" className="section-dark">
        <div className="container-portfolio">
          <p className="text-[var(--color-text-muted)] font-medium text-sm uppercase tracking-widest">
            03 · Experience
          </p>
        </div>
      </section>

      {/* Section 6 — Testimonials (LIGHT) */}
      <section id="testimonials" className="section-light">
        <div className="container-portfolio">
          <p className="text-[var(--color-text-dark-muted)] font-medium text-sm uppercase tracking-widest">
            04 · Testimonials
          </p>
        </div>
      </section>

      {/* Section 7 — Footer (DARK) */}
      <footer id="contact" className="section-dark">
        <div className="container-portfolio">
          <p className="text-[var(--color-text-muted)] font-medium text-sm uppercase tracking-widest">
            Contact
          </p>
        </div>
      </footer>
    </main>
  );
}
