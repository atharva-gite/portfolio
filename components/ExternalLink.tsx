import type { ReactNode } from "react";

export function ExternalLink({
  href,
  children,
  className,
}: {
  href: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <a href={href} className={className} target="_blank" rel="noreferrer">
      {children}
      <span className="visually-hidden"> (opens in a new tab)</span>
    </a>
  );
}
