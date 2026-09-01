"use client";

import { useEffect, useRef } from "react";
import Lenis from "lenis";

/* ===================================================================
   SMOOTH SCROLL PROVIDER — Lenis
   Provides buttery smooth scroll with inertia across the entire app.
   Config from design-tokens.md → Animation System → Lenis Config
   
   Usage: Import and render <SmoothScrollProvider /> in layout.tsx
          wrapping {children}
   =================================================================== */

export default function SmoothScrollProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // easeOutExpo
      smoothWheel: true,
      touchMultiplier: 2,
    });

    lenisRef.current = lenis;

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    /* Respect prefers-reduced-motion */
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mediaQuery.matches) {
      lenis.destroy();
      lenisRef.current = null;
      return;
    }

    const handleChange = (e: MediaQueryListEvent) => {
      if (e.matches) {
        lenis.destroy();
        lenisRef.current = null;
      }
    };
    mediaQuery.addEventListener("change", handleChange);

    return () => {
      mediaQuery.removeEventListener("change", handleChange);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  return <>{children}</>;
}
