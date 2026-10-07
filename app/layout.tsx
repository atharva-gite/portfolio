import type { Metadata, Viewport } from "next";
import { IBM_Plex_Mono, IBM_Plex_Sans } from "next/font/google";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { navigation, profile } from "@/lib/content";
import { themeBootScript } from "@/lib/themes";
import "./globals.css";

const sans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
  variable: "--font-sans",
});

const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: {
    default: profile.name,
    template: `%s — ${profile.name}`,
  },
  description: profile.description,
};

export const viewport: Viewport = {
  themeColor: "#0c1219",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${sans.variable} ${mono.variable}`}
      data-scroll-behavior="smooth"
      suppressHydrationWarning
    >
      <body>
        <script dangerouslySetInnerHTML={{ __html: themeBootScript }} />
        <div className="atmosphere" aria-hidden="true">
          <span className="atmosphere-glow" />
          <span className="atmosphere-grid" />
        </div>
        <a className="skip" href="#main">
          Skip to content
        </a>
        <SiteHeader
          name={profile.name}
          email={profile.email}
          links={navigation}
        />
        {children}
        <SiteFooter name={profile.name} links={navigation} />
      </body>
    </html>
  );
}
