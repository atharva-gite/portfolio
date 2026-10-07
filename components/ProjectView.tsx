import Link from "next/link";
import { FlowDiagram } from "@/components/FlowDiagram";
import { RichText } from "@/components/RichText";
import type { Project, Section } from "@/lib/content";

export function ProjectView({ project }: { project: Project }) {
  return (
    <article className="wrap project-page">
      <p className="back-link">
        <Link href="/#work">All projects</Link>
      </p>
      <header className="project-header">
        <p className="kicker">Project</p>
        <h1>{project.name}</h1>
        <p className="project-label">{project.label}</p>
        <p className="lede">{project.summary}</p>
        <p className="prose">{project.engineeringSummary}</p>
        <h2 className="card-subhead">Stack</h2>
        <ul className="chips" aria-label={`${project.name} stack`}>
          {project.stack.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <h2 className="card-subhead">Engineering concepts</h2>
        <ul className="concept-list">
          {project.concepts.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </header>
      <nav className="toc" aria-label="On this page">
        <p className="kicker">On this page</p>
        <ol>
          {project.sections.map((section) => (
            <li key={section.id}>
              <a href={`#${section.id}`}>{section.heading}</a>
            </li>
          ))}
        </ol>
      </nav>
      {project.sections.map((section) => (
        <section key={section.id} id={section.id} className="project-section">
          <h2>{section.heading}</h2>
          {section.intro ? (
            <p className="prose">
              <RichText text={section.intro} />
            </p>
          ) : null}
          <SectionBody section={section} />
        </section>
      ))}
    </article>
  );
}

function SectionBody({ section }: { section: Section }) {
  switch (section.kind) {
    case "prose":
      return section.paragraphs.map((paragraph) => (
        <p key={paragraph} className="prose">
          <RichText text={paragraph} />
        </p>
      ));
    case "items":
      return (
        <dl className="definition-list">
          {section.items.map((item) => (
            <div key={item.title}>
              <dt>{item.title}</dt>
              <dd>
                <RichText text={item.body} />
              </dd>
            </div>
          ))}
        </dl>
      );
    case "steps":
      return (
        <ol className="pipeline">
          {section.steps.map((step, index) => (
            <li key={step}>
              <span className="pipeline-index">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span>{step}</span>
            </li>
          ))}
        </ol>
      );
    case "diagram":
      return (
        <FlowDiagram
          caption={section.caption}
          stages={section.stages}
          parallel={section.parallel}
          parallelLabel={section.parallelLabel}
          aside={section.aside}
          asideLabel={section.asideLabel}
        />
      );
    case "limitations":
      return (
        <ul className="limit-list">
          {section.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      );
    default: {
      const unreachable: never = section;
      return unreachable;
    }
  }
}
