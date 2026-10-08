import Link from "next/link";
import { CountFigure } from "@/components/CountFigure";
import { ExternalLink } from "@/components/ExternalLink";
import { SpotSurface } from "@/components/SpotSurface";
import type { Project } from "@/lib/content";

export function ProjectArticle({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  return (
    <SpotSurface
      as="article"
      id={project.id}
      className="project"
      data-theme={project.theme}
      tilt
    >
      <p className="project-kicker">
        <span>{String(index).padStart(2, "0")}</span>
        {project.category}
      </p>
      <div className="project-body">
        <h3>
          <Link href={`/projects/${project.id}`}>{project.name}</Link>
        </h3>
        <p className="summary">{project.summary}</p>
        <ul className="points">
          {project.points.map((point, pointIndex) => (
            <li key={point} style={{ ["--i" as string]: pointIndex }}>
              {point}
            </li>
          ))}
        </ul>
        {project.figures ? (
          <ul className="figures">
            {project.figures.map((figure) => (
              <li key={figure.value}>
                <CountFigure value={figure.value} />
                <span>{figure.caption}</span>
              </li>
            ))}
          </ul>
        ) : null}
        <ul className="chips" aria-label="Technologies">
          {project.stack.map((item, chipIndex) => (
            <li
              key={item}
              className="chip"
              style={{ ["--i" as string]: chipIndex }}
            >
              {item}
            </li>
          ))}
        </ul>
        <div className="project-actions">
          {project.links.map((link) => (
            <ExternalLink key={link.href} href={link.href} className="action">
              {link.label}
            </ExternalLink>
          ))}
        </div>
      </div>
    </SpotSurface>
  );
}
