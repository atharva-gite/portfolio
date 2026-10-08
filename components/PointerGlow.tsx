"use client";

import { useEffect, useRef } from "react";

export function PointerGlow() {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const fine = window.matchMedia("(pointer: fine)").matches;
    if (reduce || !fine) {
      node.dataset.idle = "true";
      return;
    }

    let x = window.innerWidth * 0.22;
    let y = window.innerHeight * 0.16;
    let tx = x;
    let ty = y;
    let frame = 0;
    let running = true;

    const onMove = (event: PointerEvent) => {
      tx = event.clientX;
      ty = event.clientY;
    };

    const tick = () => {
      if (!running) return;
      const vx = (tx - x) * 0.075;
      const vy = (ty - y) * 0.075;
      x += vx;
      y += vy;
      const speed = Math.min(Math.hypot(vx, vy), 28);
      const angle = Math.atan2(vy, vx);
      const stretch = 1 + speed / 90;
      const squash = 1 - speed / 220;
      node.style.transform = `translate3d(${x}px, ${y}px, 0) rotate(${angle}rad) scale(${stretch}, ${squash})`;
      document.documentElement.style.setProperty("--pointer-x", `${x.toFixed(1)}px`);
      document.documentElement.style.setProperty("--pointer-y", `${y.toFixed(1)}px`);
      frame = window.requestAnimationFrame(tick);
    };

    const onVisibility = () => {
      if (document.hidden) {
        running = false;
        if (frame) window.cancelAnimationFrame(frame);
        return;
      }
      if (running) return;
      running = true;
      frame = window.requestAnimationFrame(tick);
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    document.addEventListener("visibilitychange", onVisibility);
    frame = window.requestAnimationFrame(tick);

    return () => {
      running = false;
      window.removeEventListener("pointermove", onMove);
      document.removeEventListener("visibilitychange", onVisibility);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  return <span ref={ref} className="pointer-glow" />;
}
