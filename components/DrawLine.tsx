"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

export function DrawLine({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const [drawn, setDrawn] = useState(false);
  const [armed, setArmed] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (!entry) return;
        if (!entry.isIntersecting) {
          setArmed(true);
          return;
        }
        observer.disconnect();
        setArmed(true);
        window.requestAnimationFrame(() => setDrawn(true));
      },
      { threshold: 0 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const className = ["roles", armed ? "can-draw" : "", drawn ? "is-drawn" : ""]
    .filter(Boolean)
    .join(" ");

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
