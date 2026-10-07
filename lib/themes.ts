export const siteThemes = [
  { id: "brass", label: "Brass", swatch: "#c6a36a" },
  { id: "folio", label: "Blue", swatch: "#8eb6ff" },
  { id: "study", label: "Teal", swatch: "#5ee0c3" },
  { id: "yield", label: "Gold", swatch: "#e0c36a" },
  { id: "pairs", label: "Rose", swatch: "#f0a0a0" },
  { id: "book", label: "Cyan", swatch: "#7fd4ea" },
] as const;

export type SiteThemeId = (typeof siteThemes)[number]["id"];

const storageKey = "site-theme";

export function isSiteTheme(value: string | null): value is SiteThemeId {
  return siteThemes.some((theme) => theme.id === value);
}

export function readSiteTheme(): SiteThemeId {
  try {
    const stored = localStorage.getItem(storageKey);
    return isSiteTheme(stored) ? stored : "brass";
  } catch {
    return "brass";
  }
}

export function applySiteTheme(id: SiteThemeId) {
  if (id === "brass") {
    delete document.documentElement.dataset.theme;
  } else {
    document.documentElement.dataset.theme = id;
  }

  try {
    localStorage.setItem(storageKey, id);
  } catch {
    // Preference simply will not persist.
  }

  window.dispatchEvent(new Event("site-theme"));
}

export const themeBootScript = `(function(){try{var allowed={folio:1,study:1,yield:1,pairs:1,book:1};var t=localStorage.getItem("${storageKey}");if(t&&allowed[t]){document.documentElement.setAttribute("data-theme",t);}}catch(e){}})();`;
