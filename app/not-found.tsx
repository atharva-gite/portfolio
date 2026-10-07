import Link from "next/link";

export default function NotFound() {
  return (
    <main id="main" className="wrap not-found">
      <p className="kicker">404</p>
      <h1>Page not found</h1>
      <p className="prose">This address is not part of the portfolio.</p>
      <p>
        <Link href="/">Back to the homepage</Link>
      </p>
    </main>
  );
}
