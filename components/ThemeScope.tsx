"use client";

import { useEffect } from "react";
import type { ProjectTheme } from "@/lib/content";
import { applySiteTheme, readSiteTheme } from "@/lib/themes";

export function ThemeScope({ theme }: { theme: ProjectTheme }) {
  useEffect(() => {
    if (readSiteTheme() !== "brass") return;

    document.documentElement.dataset.theme = theme;
    return () => {
      if (readSiteTheme() === "brass") {
        delete document.documentElement.dataset.theme;
      } else {
        applySiteTheme(readSiteTheme());
      }
    };
  }, [theme]);

  return null;
}
