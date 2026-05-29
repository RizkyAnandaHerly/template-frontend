import DynamicIsland from "@/components/navbar/DynamicIsland";
import HeroSection from "@/components/hero/HeroSection";
import AboutSection from "@/components/about/AboutSection";
import ApproachSection from "@/components/approach/ApproachSection";
import FeaturedSection from "@/components/projects/FeaturedSection";
import ExperienceTimeline from "@/components/experience/ExperienceTimeline";
import TestimonialsSection from "@/components/testimonials/TestimonialsSection";
import Footer from "@/components/footer/Footer";

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
      <ApproachSection />

      {/* Section 4 — Featured Projects (LIGHT) */}
      <FeaturedSection />

      {/* Section 5 — Experience (DARK) */}
      <ExperienceTimeline />

      {/* Section 6 — Testimonials (LIGHT) */}
      {/* Section 6 — Testimonials (LIGHT) */}
      <TestimonialsSection />

      {/* Section 7 — Footer (DARK) */}
      {/* Section 7 — Footer (DARK) */}
      <Footer />
    </main>
  );
}
