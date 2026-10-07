export function SiteFooter({
  name,
  links,
}: {
  name: string;
  links: readonly { href: string; label: string }[];
}) {
  return (
    <footer className="site-footer">
      <div className="wrap footer-inner">
        <p className="footer-name">{name}</p>
        <nav aria-label="Footer">
          <ul className="footer-links">
            {links.map((link) => (
              <li key={link.href}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </nav>
        <p className="copyright">© Atharva Gite 2026</p>
      </div>
    </footer>
  );
}
