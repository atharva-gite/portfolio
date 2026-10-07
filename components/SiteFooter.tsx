import Link from "next/link";

export function SiteFooter({
  name,
  role,
}: {
  name: string;
  role: string;
}) {
  return (
    <footer className="site-footer">
      <div className="wrap footer-inner">
        <p className="footer-name">{name}</p>
        <p className="footer-role">{role}</p>
        <nav aria-label="Footer">
          <ul className="footer-links">
            <li>
              <Link href="/projects/folio">Folio</Link>
            </li>
            <li>
              <Link href="/projects/studyforge">StudyForge</Link>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}
