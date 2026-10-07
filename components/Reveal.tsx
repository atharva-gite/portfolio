"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

type Phase = "idle" | "wait" | "show";

export function Reveal({
  children,
  delay = 0,
}: {
  children: ReactNode;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [phase, setPhase] = useState<Phase>("idle");

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    if (typeof IntersectionObserver === "undefined") {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (!entry) return;

        if (entry.isIntersecting) {
          setPhase("show");
          observer.disconnect();
          return;
        }

        setPhase((current) => (current === "idle" ? "wait" : current));
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const stateClass =
    phase === "wait" ? " is-waiting" : phase === "show" ? " is-visible" : "";

  return (
    <div
      ref={ref}
      className={`reveal${stateClass}`}
      style={delay ? { ["--reveal-delay" as string]: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  );
}
