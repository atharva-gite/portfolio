"use client";

import { useEffect, useRef, type ReactNode } from "react";

export function AnimatedDetails({
  id,
  className,
  summary,
  children,
}: {
  id?: string;
  className?: string;
  summary: ReactNode;
  children: ReactNode;
}) {
  const ref = useRef<HTMLDetailsElement>(null);

  useEffect(() => {
    const details = ref.current;
    if (!details) return;

    const summaryEl = details.querySelector("summary");
    const panel = details.querySelector<HTMLElement>(".disclosure-panel");
    const inner = details.querySelector<HTMLElement>(".disclosure-inner");
    if (!summaryEl || !panel || !inner) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    let generation = 0;
    let closing = false;

    const resetPanel = () => {
      panel.style.transition = "";
      panel.style.gridTemplateRows = "";
      panel.style.opacity = "";
      inner.style.overflow = "";
    };

    const onClick = (event: Event) => {
      event.preventDefault();
      const generationId = ++generation;

      if (closing) {
        closing = false;
        panel.style.transition =
          "grid-template-rows 280ms ease, opacity 220ms ease";
        panel.style.gridTemplateRows = "1fr";
        panel.style.opacity = "1";
        window.setTimeout(() => {
          if (generationId !== generation || !details.open) return;
          inner.style.overflow = "visible";
        }, 320);
        return;
      }

      if (details.open) {
        closing = true;
        inner.style.overflow = "hidden";
        panel.style.transition =
          "grid-template-rows 280ms ease, opacity 220ms ease";
        panel.style.gridTemplateRows = "0fr";
        panel.style.opacity = "0";

        const finish = () => {
          if (generationId !== generation || !closing) return;
          closing = false;
          details.open = false;
          resetPanel();
        };

        panel.addEventListener("transitionend", finish, { once: true });
        window.setTimeout(finish, 340);
        return;
      }

      details.open = true;
      inner.style.overflow = "hidden";
      panel.style.transition = "none";
      panel.style.gridTemplateRows = "0fr";
      panel.style.opacity = "0";
      panel.getBoundingClientRect();
      if (generationId !== generation) return;
      panel.style.transition =
        "grid-template-rows 280ms ease, opacity 220ms ease";
      panel.style.gridTemplateRows = "1fr";
      panel.style.opacity = "1";

      window.setTimeout(() => {
        if (generationId !== generation || !details.open) return;
        inner.style.overflow = "visible";
      }, 320);
    };

    summaryEl.addEventListener("click", onClick);
    return () => summaryEl.removeEventListener("click", onClick);
  }, []);

  return (
    <details ref={ref} className={className}>
      <summary aria-controls={id}>{summary}</summary>
      <div className="disclosure-panel">
        <div className="disclosure-inner" id={id}>
          {children}
        </div>
      </div>
    </details>
  );
}
