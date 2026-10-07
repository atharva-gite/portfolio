import Link from "next/link";
import { ProjectCard } from "@/components/ProjectCard";
import {
  about,
  coursework,
  engineering,
  profile,
  projects,
} from "@/lib/content";

export default function Home() {
  return (
    <main id="main">
      <div className="wrap">
        <header className="hero">
          <p className="kicker">{profile.role}</p>
          <h1>{profile.name}</h1>
          <p className="lede">{profile.focus}</p>
          <div className="actions">
            <Link className="button" href="#work">
              Selected work
            </Link>
            <Link className="button button-secondary" href="#coursework">
              Coursework
            </Link>
          </div>
        </header>

        <section id="about" className="section">
          <p className="section-index">01</p>
          <div>
            <h2>About</h2>
            {about.paragraphs.map((paragraph) => (
              <p key={paragraph} className="prose">
                {paragraph}
              </p>
            ))}
          </div>
        </section>

        <section id="work" className="section">
          <p className="section-index">02</p>
          <div>
            <h2>Selected work</h2>
            <div className="project-grid">
              {projects.map((project, index) => (
                <ProjectCard
                  key={project.slug}
                  project={project}
                  index={index + 1}
                />
              ))}
            </div>
          </div>
        </section>

        <section id="engineering" className="section">
          <p className="section-index">03</p>
          <div>
            <h2>Engineering</h2>
            <div className="engineering-grid">
              {engineering.map((item) => (
                <article key={item.name} className="engineering-card">
                  <h3>
                    <Link href={item.href}>{item.name}</Link>
                  </h3>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="coursework" className="section">
          <p className="section-index">04</p>
          <div>
            <h2>Coursework</h2>
            <p className="kicker">{coursework.sourceLabel}</p>
            <p className="prose">{coursework.intro}</p>
            <ul className="course-list">
              {coursework.areas.map((area, index) => (
                <li key={area}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  {area}
                </li>
              ))}
            </ul>
          </div>
        </section>
      </div>
    </main>
  );
}
