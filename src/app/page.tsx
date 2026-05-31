import DynamicIsland from "@/components/navbar/DynamicIsland";
import HeroSection from "@/components/hero/HeroSection";
import AboutSection from "@/components/about/AboutSection";
import ApproachSection from "@/components/approach/ApproachSection";
import FeaturedSection from "@/components/projects/FeaturedSection";
import ExperienceTimeline from "@/components/experience/ExperienceTimeline";
import TestimonialsSection from "@/components/testimonials/TestimonialsSection";
import Footer from "@/components/footer/Footer";
import MascotWalk from "@/components/ui/MascotWalk";

export default function Home() {
  return (
    <main>
      {/* Floating interactive mascot */}
      <MascotWalk />

      {/* Floating navbar — fixed position, z-[9999] */}
      <DynamicIsland />

      {/* Section 1 — Hero (DARK) */}
      <section data-theme="dark" id="hero">
        <HeroSection />
      </section>

      {/* Section 2 — About (LIGHT) */}
      <section data-theme="light" id="about">
        <AboutSection />
      </section>

      {/* Section 3 — Approach (DARK) */}
      <section data-theme="dark" id="approach">
        <ApproachSection />
      </section>

      {/* Section 4 — Featured Projects (LIGHT) */}
      <section data-theme="light" id="projects">
        <FeaturedSection />
      </section>

      {/* Section 5 — Experience (DARK) */}
      <section data-theme="dark" id="experience">
        <ExperienceTimeline />
      </section>

      {/* Section 6 — Testimonials (LIGHT) */}
      <section data-theme="light" id="testimonials">
        <TestimonialsSection />
      </section>

      {/* Section 7 — Footer (DARK) */}
      <section data-theme="dark" id="footer">
        <Footer />
      </section>
    </main>
  );
}
