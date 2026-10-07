"use client";

import { useEffect, useRef, useState } from "react";

const pattern = /^([^0-9]*)(\d+(?:\.\d+)?)(.*)$/;

export function CountFigure({ value }: { value: string }) {
  const ref = useRef<HTMLElement>(null);
  const [text, setText] = useState(value);

  useEffect(() => {
    const node = ref.current;
    const match = pattern.exec(value);
    if (!node || !match) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;

    const prefix = match[1] ?? "";
    const target = Number(match[2]);
    const suffix = match[3] ?? "";
    const decimals = match[2]?.includes(".") ? match[2].split(".")[1]?.length ?? 0 : 0;
    if (!Number.isFinite(target)) return;

    let frame = 0;
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (!entry?.isIntersecting) return;
        observer.disconnect();

        const start = performance.now();
        const duration = 800;

        const tick = (now: number) => {
          const progress = Math.min(1, (now - start) / duration);
          const eased = 1 - (1 - progress) ** 3;
          setText(`${prefix}${(target * eased).toFixed(decimals)}${suffix}`);
          if (progress < 1) frame = window.requestAnimationFrame(tick);
        };

        frame = window.requestAnimationFrame(tick);
      },
      { threshold: 0 },
    );

    observer.observe(node);
    return () => {
      observer.disconnect();
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, [value]);

  return <strong ref={ref}>{text}</strong>;
}
