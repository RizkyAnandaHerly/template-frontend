"use client";

import { useEffect, useRef, useCallback, useState } from "react";

/* ===================================================================
   CUSTOM CURSOR — Nazwa-style filled dot cursor
   - Filled dot (not outline ring) with smooth lerp interpolation
   - Adapts color based on data-theme section (white on dark, dark on light)
   - Grows on hover over interactive elements (a, button, [role=button])
   - Hidden on mobile/touch devices
   - Restores real cursor on text inputs
   =================================================================== */

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const mouse = useRef({ x: 0, y: 0 });
  const dotPos = useRef({ x: 0, y: 0 });
  const ringPos = useRef({ x: 0, y: 0 });
  const rafId = useRef<number>(0);
  const [isMobile, setIsMobile] = useState(true); // default true to avoid flash

  /* Lerp helper */
  const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

  /* Animation loop with lerp interpolation */
  const animate = useCallback(() => {
    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    // Dot follows faster (tight)
    dotPos.current.x = lerp(dotPos.current.x, mouse.current.x, 0.35);
    dotPos.current.y = lerp(dotPos.current.y, mouse.current.y, 0.35);

    // Ring follows slower (trailing)
    ringPos.current.x = lerp(ringPos.current.x, mouse.current.x, 0.15);
    ringPos.current.y = lerp(ringPos.current.y, mouse.current.y, 0.15);

    dot.style.transform = `translate3d(${dotPos.current.x}px, ${dotPos.current.y}px, 0) translate(-50%, -50%)`;
    ring.style.transform = `translate3d(${ringPos.current.x}px, ${ringPos.current.y}px, 0) translate(-50%, -50%)`;

    rafId.current = requestAnimationFrame(animate);
  }, []);

  useEffect(() => {
    // Check touch device
    const isTouch = window.matchMedia("(hover: none)").matches;
    setIsMobile(isTouch);
    if (isTouch) return;

    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    /* Track mouse position */
    const onMouseMove = (e: MouseEvent) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;

      // Detect section theme for color adaptation
      const el = document.elementFromPoint(e.clientX, e.clientY);
      const section = el?.closest("[data-theme]");
      const theme = section?.getAttribute("data-theme");
      const isLight = theme === "light";

      dot.style.backgroundColor = isLight ? "#09090A" : "#FFFFFF";
      ring.style.borderColor = isLight ? "rgba(9,9,10,0.15)" : "rgba(255,255,255,0.15)";
    };

    /* Hover detection for interactive elements */
    const isInteractive = (target: HTMLElement): boolean => {
      return !!(
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.closest("a") ||
        target.closest("button") ||
        target.closest("[role='button']") ||
        target.closest("[data-hoverable]") ||
        target.dataset.hoverable !== undefined
      );
    };

    const isTextInput = (target: HTMLElement): boolean => {
      return !!(
        target.tagName === "INPUT" ||
        target.tagName === "TEXTAREA" ||
        target.isContentEditable
      );
    };

    const onMouseOver = (e: Event) => {
      const target = e.target as HTMLElement;
      if (isTextInput(target)) {
        dot.style.opacity = "0";
        ring.style.opacity = "0";
        return;
      }
      if (isInteractive(target)) {
        dot.classList.add("cursor-dot--hover");
        ring.classList.add("cursor-ring--hover");
      }
    };

    const onMouseOut = (e: Event) => {
      const target = e.target as HTMLElement;
      if (isTextInput(target)) {
        dot.style.opacity = "1";
        ring.style.opacity = "1";
      }
      if (isInteractive(target)) {
        dot.classList.remove("cursor-dot--hover");
        ring.classList.remove("cursor-ring--hover");
      }
    };

    /* Mouse down/up for click feedback */
    const onMouseDown = () => dot.classList.add("cursor-dot--click");
    const onMouseUp = () => dot.classList.remove("cursor-dot--click");

    window.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseover", onMouseOver);
    document.addEventListener("mouseout", onMouseOut);
    window.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mouseup", onMouseUp);

    // Start animation loop
    rafId.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseover", onMouseOver);
      document.removeEventListener("mouseout", onMouseOut);
      window.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mouseup", onMouseUp);
      cancelAnimationFrame(rafId.current);
    };
  }, [animate, isMobile]);

  if (isMobile) return null;

  return (
    <>
      {/* Main dot — filled, small */}
      <div
        ref={dotRef}
        className="cursor-dot"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: 8,
          height: 8,
          borderRadius: "50%",
          backgroundColor: "#FFFFFF",
          pointerEvents: "none",
          zIndex: 99999,
          transition: "width 0.2s ease, height 0.2s ease, opacity 0.2s ease, background-color 0.15s ease",
          willChange: "transform",
        }}
      />
      {/* Trailing ring — outline, larger */}
      <div
        ref={ringRef}
        className="cursor-ring"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: 32,
          height: 32,
          borderRadius: "50%",
          border: "1.5px solid rgba(255,255,255,0.15)",
          pointerEvents: "none",
          zIndex: 99998,
          transition: "width 0.3s ease, height 0.3s ease, opacity 0.2s ease, border-color 0.15s ease",
          willChange: "transform",
        }}
      />
    </>
  );
}
