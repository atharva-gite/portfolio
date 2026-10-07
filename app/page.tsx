import { AnimatedDetails } from "@/components/AnimatedDetails";
import { DrawLine } from "@/components/DrawLine";
import { ExternalLink } from "@/components/ExternalLink";
import { ProjectArticle } from "@/components/ProjectArticle";
import { Reveal } from "@/components/Reveal";
import { ThemeToggle } from "@/components/ThemeToggle";
import {
  about,
  education,
  kclCourses,
  practiceNote,
  profile,
  projects,
  roles,
  skillGroups,
  socialLinks,
  spitCoursework,
  workIntro,
} from "@/lib/content";

export default function Home() {
  return (
    <main id="main">
      <div className="wrap">
        <header id="top" className="intro">
          <p className="credential">{profile.credential}</p>
          <h1>
            {profile.name}
            <span className="name-rule" aria-hidden="true" />
          </h1>
          <p className="lede">{profile.lede}</p>
          <ul className="intro-links">
            <li>
              <a href={`mailto:${profile.email}`}>{profile.email}</a>
            </li>
            {socialLinks.slice(0, 2).map((link) => (
              <li key={link.href}>
                <ExternalLink href={link.href}>{link.label}</ExternalLink>
              </li>
            ))}
          </ul>
          <ThemeToggle />
        </header>

        <section id="work" className="section">
          <div className="section-heading">
            <h2>Work</h2>
            <p>{workIntro}</p>
          </div>
          <div className="projects">
            {projects.map((project, index) => (
              <Reveal key={project.id} delay={index * 70}>
                <ProjectArticle project={project} index={index + 1} />
              </Reveal>
            ))}
          </div>
        </section>

        <Reveal>
          <section id="experience" className="section">
            <div className="section-heading">
              <h2>Experience</h2>
            </div>
            <DrawLine>
              {roles.map((role) => (
                <article key={`${role.title}-${role.dates}`} className="role">
                  <span className="marker" aria-hidden="true" />
                  <div className="role-head">
                    <h3>{role.title}</h3>
                    <p className="dates">{role.dates}</p>
                    <p className="org">{role.org}</p>
                  </div>
                  <ul className="points">
                    {role.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </DrawLine>
          </section>
        </Reveal>

        <Reveal>
          <section id="education" className="section">
            <div className="section-heading">
              <h2>Education</h2>
            </div>
            <div className="schools">
              <article className="school">
                <div className="role-head">
                  <h3>{education[0].school}</h3>
                  <p className="dates">{education[0].dates}</p>
                  <p className="org">{education[0].credential}</p>
                </div>
                <p className="meta">{education[0].detail}</p>
                <AnimatedDetails className="disclosure course-fold" summary="MSc modules">
                  <p className="fold-note">{education[0].note}</p>
                  <ul className="course-list">
                    {kclCourses.map((course) => (
                      <li key={course}>{course}</li>
                    ))}
                  </ul>
                </AnimatedDetails>
              </article>

              <article className="school">
                <div className="role-head">
                  <h3>{education[1].school}</h3>
                  <p className="dates">{education[1].dates}</p>
                  <p className="org">{education[1].credential}</p>
                </div>
                <p className="meta">{education[1].detail}</p>
                <AnimatedDetails
                  className="disclosure course-fold"
                  summary="Undergraduate coursework"
                >
                  <p className="fold-note">{education[1].note}</p>
                  {spitCoursework.map((group) => (
                    <div key={group.title} className="course-group">
                      <h4>{group.title}</h4>
                      <ul className="course-list">
                        {group.courses.map((course) => (
                          <li key={course}>{course}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </AnimatedDetails>
              </article>
            </div>
          </section>
        </Reveal>

        <Reveal>
          <section id="skills" className="section">
            <div className="section-heading">
              <h2>Skills</h2>
            </div>
            <div className="skill-grid">
              {skillGroups.map((group) => (
                <section key={group.title} className="skill-group">
                  <h3>{group.title}</h3>
                  <ul className="chips">
                    {group.courses.map((item) => (
                      <li key={item} className="chip">
                        {item}
                      </li>
                    ))}
                  </ul>
                </section>
              ))}
            </div>
            <p className="practice">{practiceNote}</p>
          </section>
        </Reveal>

        <Reveal>
          <section id="about" className="section">
            <div className="section-heading">
              <h2>About</h2>
            </div>
            {about.paragraphs.map((paragraph) => (
              <p key={paragraph} className="prose">
                {paragraph}
              </p>
            ))}
            <div id="contact" className="contact">
              <h3>Contact</h3>
              <p className="contact-name">{profile.name}</p>
              <a className="email-action" href={`mailto:${profile.email}`}>
                {profile.email}
              </a>
              <ul className="contact-list">
                <li>
                  <a href={profile.phoneHref}>{profile.phone}</a>
                </li>
                {socialLinks.map((link) => (
                  <li key={link.href}>
                    <ExternalLink href={link.href}>{link.label}</ExternalLink>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        </Reveal>
      </div>
    </main>
  );
}
