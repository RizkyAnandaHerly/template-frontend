import DynamicIsland from "@/components/navbar/DynamicIsland";

export default function Home() {
  return (
    <main>
      {/* Floating navbar — fixed position, z-[9999] */}
      <DynamicIsland />
      {/* Section 1 — Hero (DARK) */}
      <section id="home" className="section-dark">
        <div className="container-portfolio">
          <p className="text-[var(--color-text-muted)] font-medium text-sm uppercase tracking-widest">
            Portfolio
          </p>
          <h1 className="font-clash font-bold mt-6" style={{ fontSize: "clamp(2.5rem, 8vw, 6rem)", lineHeight: 1.05, letterSpacing: "-0.02em" }}>
            Designing systems that solve<br />
            real operational problems.
          </h1>
        </div>
      </section>

      {/* Section 2 — About (LIGHT) */}
      <section id="about" className="section-light">
        <div className="container-portfolio">
          <p className="text-[var(--color-text-dark-muted)] font-medium text-sm uppercase tracking-widest">
            01 · About Me
          </p>
        </div>
      </section>

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
