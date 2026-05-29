"use client";

import { Component, Suspense, lazy, type ReactNode } from "react";

/* ===================================================================
   ROBOT INTERACTIVE — 21st.dev Spline wrapper
   component-map.md: About section, sub-component 1
   Wrap with Suspense + ErrorBoundary per spec.
   Fallback = placeholder avatar if Spline fails or is loading.
   =================================================================== */

const Spline = lazy(() => import("@splinetool/react-spline"));

/* ---- Error Boundary to catch Spline runtime errors ---- */
interface ErrorBoundaryState {
  hasError: boolean;
}

class SplineErrorBoundary extends Component<
  { children: ReactNode; fallback: ReactNode },
  ErrorBoundaryState
> {
  constructor(props: { children: ReactNode; fallback: ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(): ErrorBoundaryState {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback;
    }
    return this.props.children;
  }
}

/* ---- Placeholder avatar for loading/fallback states ---- */
function RobotPlaceholder() {
  return (
    <div
      className="w-full h-full flex flex-col items-center justify-center gap-4 rounded-2xl"
      style={{
        background: "var(--color-surface-light)",
        border: "1px dashed var(--color-border-light)",
      }}
    >
      <div className="relative w-24 h-24">
        <div
          className="absolute inset-0 rounded-full animate-pulse"
          style={{ background: "var(--color-border-light)" }}
        />
        <div
          className="absolute inset-2 rounded-full flex items-center justify-center"
          style={{ background: "var(--color-bg-light-alt)" }}
        >
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="8" r="4" stroke="var(--color-accent-teal)" strokeWidth="1.5" />
            <path
              d="M4 20c0-4 3.6-7 8-7s8 3 8 7"
              stroke="var(--color-accent-teal)"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        </div>
      </div>
      <p
        className="font-satoshi font-medium text-xs uppercase tracking-widest"
        style={{ color: "var(--color-text-dark-muted)" }}
      >
        hi, i&apos;m rizky
      </p>
    </div>
  );
}

interface RobotInteractiveProps {
  className?: string;
}

export default function RobotInteractive({ className }: RobotInteractiveProps) {
  return (
    <div className={`relative w-full aspect-square max-w-sm mx-auto ${className ?? ""}`}>
      <SplineErrorBoundary fallback={<RobotPlaceholder />}>
        <Suspense fallback={<RobotPlaceholder />}>
          <Spline
            scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
            className="w-full h-full"
          />
        </Suspense>
      </SplineErrorBoundary>
    </div>
  );
}
