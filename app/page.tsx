import { AnimatedDetails } from "@/components/AnimatedDetails";
import { DrawLine } from "@/components/DrawLine";
import { ExternalLink } from "@/components/ExternalLink";
import { HeroName } from "@/components/HeroName";
import { BrandIcon, MailIcon, PhoneIcon } from "@/components/Icons";
import { Magnetic } from "@/components/Magnetic";
import { ProjectArticle } from "@/components/ProjectArticle";
import { Reveal } from "@/components/Reveal";
import { SpotSurface } from "@/components/SpotSurface";
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
          <svg
            className="hero-trace"
            viewBox="0 0 1200 180"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <path
              pathLength="1"
              d="M0 132C96 132 168 124 248 108C348 88 410 66 512 56C630 44 724 34 860 28C1004 22 1104 20 1200 16"
            />
          </svg>
          <HeroName name={profile.name} links={socialLinks.slice(0, 2)} />
          <span className="name-rule" aria-hidden="true" />
          <p className="credential">{profile.credential}</p>
          <p className="lede">{profile.lede}</p>
        </header>

        <section id="work" className="section">
          <Reveal>
            <div className="section-heading">
              <h2>Work</h2>
              <p>{workIntro}</p>
            </div>
          </Reveal>
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
              <SpotSurface as="article" className="school">
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
              </SpotSurface>

              <SpotSurface as="article" className="school">
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
              </SpotSurface>
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
                    {group.courses.map((item, chipIndex) => (
                      <li
                        key={item}
                        className="chip"
                        style={{ ["--i" as string]: chipIndex }}
                      >
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
              <ul className="icon-row">
                <li style={{ ["--i" as string]: 0 }}>
                  <Magnetic>
                    <a
                      className="icon-link"
                      href={`mailto:${profile.email}`}
                      data-label="Email"
                    >
                      <MailIcon />
                      <span className="visually-hidden">Email {profile.email}</span>
                    </a>
                  </Magnetic>
                </li>
                <li style={{ ["--i" as string]: 1 }}>
                  <Magnetic>
                    <a className="icon-link" href={profile.phoneHref} data-label="Phone">
                      <PhoneIcon />
                      <span className="visually-hidden">Phone {profile.phone}</span>
                    </a>
                  </Magnetic>
                </li>
                {socialLinks.map((link, index) => (
                  <li key={link.href} style={{ ["--i" as string]: index + 2 }}>
                    <Magnetic>
                      <ExternalLink href={link.href} className="icon-link" label={link.label}>
                        <BrandIcon href={link.href} />
                      </ExternalLink>
                    </Magnetic>
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
