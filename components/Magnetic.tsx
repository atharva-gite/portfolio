"use client";

import { useEffect, useRef, type PointerEvent, type ReactNode } from "react";

export function Magnetic({ children }: { children: ReactNode }) {
  const innerRef = useRef<HTMLSpanElement>(null);
  const enabled = useRef(false);

  useEffect(() => {
    enabled.current =
      !window.matchMedia("(prefers-reduced-motion: reduce)").matches &&
      window.matchMedia("(pointer: fine)").matches;
  }, []);

  const onPointerMove = (event: PointerEvent<HTMLSpanElement>) => {
    if (!enabled.current) return;
    const box = event.currentTarget.getBoundingClientRect();
    const dx = event.clientX - (box.left + box.width / 2);
    const dy = event.clientY - (box.top + box.height / 2);
    const inner = innerRef.current;
    if (!inner) return;
    inner.style.transform = `translate3d(${dx * 0.38}px, ${dy * 0.38}px, 0)`;
  };

  const onPointerLeave = () => {
    const inner = innerRef.current;
    if (inner) inner.style.transform = "";
  };

  return (
    <span className="magnetic" onPointerMove={onPointerMove} onPointerLeave={onPointerLeave}>
      <span ref={innerRef} className="magnetic-inner">
        {children}
      </span>
    </span>
  );
}
