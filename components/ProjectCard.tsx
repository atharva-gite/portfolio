import Link from "next/link";
import type { Project } from "@/lib/content";

export function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  return (
    <article className="project-card">
      <p className="kicker">{String(index).padStart(2, "0")}</p>
      <h3>
        <Link href={`/projects/${project.slug}`} className="card-title">
          {project.name}
          <span className="visually-hidden">, view project</span>
          <span className="card-stretch" aria-hidden="true" />
        </Link>
      </h3>
      <p className="card-label">{project.label}</p>
      <p>{project.summary}</p>
      <p>{project.engineeringSummary}</p>
      <h4 className="card-subhead">Stack</h4>
      <ul className="chips" aria-label={`${project.name} stack`}>
        {project.stack.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <h4 className="card-subhead">Engineering</h4>
      <ul className="concept-list">
        {project.concepts.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <p className="card-action">View project</p>
    </article>
  );
}
