import { ExternalLink } from "@/components/ExternalLink";
import { BrandIcon } from "@/components/Icons";
import { Magnetic } from "@/components/Magnetic";

export function HeroName({
  name,
  links,
}: {
  name: string;
  links: readonly { label: string; href: string }[];
}) {
  return (
    <div className="name-lockup">
      <h1>
        <span className="visually-hidden">{name}</span>
        <span className="name-text" aria-hidden="true">
          {Array.from(name).map((glyph, index) =>
            glyph === " " ? (
              <span key={index} className="name-space">
                {" "}
              </span>
            ) : (
              <span
                key={index}
                className="name-char"
                style={{ ["--i" as string]: index }}
              >
                <span>{glyph}</span>
              </span>
            ),
          )}
        </span>
      </h1>
      <div className="name-socials">
        {links.map((link) => (
          <Magnetic key={link.href}>
            <ExternalLink href={link.href} className="icon-link" label={link.label}>
              <BrandIcon href={link.href} />
            </ExternalLink>
          </Magnetic>
        ))}
      </div>
    </div>
  );
}
