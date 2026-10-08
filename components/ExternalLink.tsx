import type { ReactNode } from "react";

export function ExternalLink({
  href,
  children,
  className,
  label,
}: {
  href: string;
  children: ReactNode;
  className?: string;
  label?: string;
}) {
  return (
    <a
      href={href}
      className={className}
      target="_blank"
      rel="noreferrer"
      data-label={label}
    >
      {children}
      <span className="visually-hidden">
        {label ? `${label} ` : ""}(opens in a new tab)
      </span>
    </a>
  );
}
