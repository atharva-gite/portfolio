"use client";

import { useEffect, useRef, type PointerEvent, type ReactNode } from "react";

type SpotSurfaceProps = {
  as?: "div" | "article";
  className?: string;
  children: ReactNode;
  id?: string;
  tilt?: boolean;
  "data-theme"?: string;
};

export function SpotSurface({
  as = "div",
  className,
  children,
  id,
  tilt = false,
  "data-theme": dataTheme,
}: SpotSurfaceProps) {
  const frame = useRef(0);
  const point = useRef({ x: 0, y: 0 });
  const reduced = useRef(false);

  useEffect(() => {
    reduced.current = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    return () => {
      if (frame.current) window.cancelAnimationFrame(frame.current);
    };
  }, []);

  const onPointerMove = (event: PointerEvent<HTMLElement>) => {
    if (reduced.current) return;
    point.current.x = event.clientX;
    point.current.y = event.clientY;
    const target = event.currentTarget;
    if (frame.current) return;

    frame.current = window.requestAnimationFrame(() => {
      frame.current = 0;
      const box = target.getBoundingClientRect();
      const x = point.current.x;
      const y = point.current.y;
      target.style.setProperty("--spot-x", `${x - box.left}px`);
      target.style.setProperty("--spot-y", `${y - box.top}px`);
      if (!tilt) return;
      const px = (x - box.left) / box.width - 0.5;
      const py = (y - box.top) / box.height - 0.5;
      target.style.setProperty("--ry", `${(px * 7).toFixed(2)}deg`);
      target.style.setProperty("--rx", `${(-py * 6).toFixed(2)}deg`);
    });
  };

  const onPointerLeave = (event: PointerEvent<HTMLElement>) => {
    event.currentTarget.style.setProperty("--rx", "0deg");
    event.currentTarget.style.setProperty("--ry", "0deg");
  };

  const classes = ["has-spot", className].filter(Boolean).join(" ");
  const shared = {
    id,
    className: classes,
    "data-theme": dataTheme,
    onPointerMove,
    onPointerLeave,
  };

  if (as === "article") return <article {...shared}>{children}</article>;
  return <div {...shared}>{children}</div>;
}
