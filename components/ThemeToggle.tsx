"use client";

import { useSyncExternalStore } from "react";
import {
  applySiteTheme,
  readSiteTheme,
  siteThemes,
  type SiteThemeId,
} from "@/lib/themes";

function subscribe(onStoreChange: () => void) {
  window.addEventListener("site-theme", onStoreChange);
  window.addEventListener("storage", onStoreChange);
  return () => {
    window.removeEventListener("site-theme", onStoreChange);
    window.removeEventListener("storage", onStoreChange);
  };
}

export function ThemeToggle({ compact = false }: { compact?: boolean }) {
  const current = useSyncExternalStore(
    subscribe,
    readSiteTheme,
    (): SiteThemeId => "brass",
  );

  return (
    <div
      className={compact ? "theme-switch is-compact" : "theme-switch"}
      role="radiogroup"
      aria-label="Color theme"
    >
      {siteThemes.map((theme) => {
        const selected = current === theme.id;
        return (
          <button
            key={theme.id}
            type="button"
            role="radio"
            aria-checked={selected}
            aria-label={theme.label}
            title={theme.label}
            className={selected ? "theme-option is-selected" : "theme-option"}
            onClick={() => applySiteTheme(theme.id)}
          >
            <span
              className="theme-swatch"
              style={{ background: theme.swatch }}
              aria-hidden="true"
            />
            {compact ? null : theme.label}
          </button>
        );
      })}
    </div>
  );
}
