# Atharva Gite — portfolio

Personal software engineering portfolio for Atharva Gite. It is a static Next.js site with a homepage, a Folio project page, and a StudyForge project page.

Copy lives in `lib/content.ts`. Statements about Atharva are limited to the portfolio specification used to build this site. The repository does not include a resume, project audit, course list, or contact file, so experience, a personal skills list, and contact links are omitted.

## Run locally

```bash
npm install
npm run dev
```

The dev server prints a local URL. To use a specific port:

```bash
npx next dev --hostname 0.0.0.0 --port 3847
```

## Checks

```bash
npm run lint
npm run typecheck
npm run build
```
