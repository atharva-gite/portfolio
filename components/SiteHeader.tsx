"use client";

import Link from "next/link";
import { useEffect, useLayoutEffect, useRef, useState } from "react";

type NavLink = {
  href: string;
  label: string;
};

export function SiteHeader({
  name,
  email,
  links,
}: {
  name: string;
  email: string;
  links: readonly NavLink[];
}) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");
  const listRef = useRef<HTMLDivElement>(null);
  const [bar, setBar] = useState({ x: 0, width: 0, visible: false });

  useEffect(() => {
    let frame = 0;

    const update = () => {
      frame = 0;
      setScrolled(window.scrollY > 8);

      const offset = 96;
      let current = document.getElementById("work") ? (links[0]?.href ?? "") : "";
      for (const link of links) {
        const hash = link.href.slice(link.href.indexOf("#") + 1);
        const section = document.getElementById(hash);
        if (!section) continue;
        if (section.getBoundingClientRect().top <= offset) {
          current = link.href;
        }
      }
      setActive(current);
    };

    const onScroll = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, [links]);

  useLayoutEffect(() => {
    const list = listRef.current;
    if (!list) return;

    const measure = () => {
      const link = active
        ? list.querySelector<HTMLAnchorElement>(`a[href="${active}"]`)
        : null;
      const row = list.querySelector(".nav-list");
      const horizontal =
        row instanceof HTMLElement && getComputedStyle(row).flexDirection === "row";
      if (!link || !horizontal) {
        setBar((previous) =>
          previous.visible ? { x: 0, width: 0, visible: false } : previous,
        );
        return;
      }

      const listBox = list.getBoundingClientRect();
      const box = link.getBoundingClientRect();
      const next = {
        x: Math.round(box.left - listBox.left),
        width: Math.round(box.width),
        visible: box.width > 0,
      };
      setBar((previous) =>
        previous.x === next.x &&
        previous.width === next.width &&
        previous.visible === next.visible
          ? previous
          : next,
      );
    };

    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [active, open]);

  useEffect(() => {
    if (!open) return;

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className={scrolled ? "site-header is-scrolled" : "site-header"}>
      <div className="wrap header-inner">
        <Link href="/" className="brand">
          {name}
        </Link>
        <div className="header-actions">
          <a className="email-action" href={`mailto:${email}`}>
            Email
          </a>
          <button
            type="button"
            className="nav-toggle"
            aria-expanded={open}
            aria-controls="site-nav"
            onClick={() => setOpen((value) => !value)}
          >
            {open ? "Close" : "Menu"}
          </button>
        </div>
        <nav
          id="site-nav"
          className={open ? "is-open" : undefined}
          aria-label="Primary"
        >
          <div ref={listRef} className="nav-track">
            <span
              className="nav-indicator"
              aria-hidden="true"
              style={{
                width: bar.width,
                transform: `translateX(${bar.x}px)`,
                opacity: bar.visible ? 1 : 0,
              }}
            />
            <ul className="nav-list">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  aria-current={active === link.href ? "location" : undefined}
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
}
