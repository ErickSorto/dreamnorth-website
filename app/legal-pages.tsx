import Link from "next/link";

type LegalSection = {
  title: string;
  body?: string[];
  bullets?: string[];
};

type LegalPageProps = {
  badge: string;
  title: string;
  intro: string;
  sections: LegalSection[];
};

export const effectiveDate = "June 13, 2026";
export const contactEmail = "sortoerick33@gmail.com";

export function LegalPage({ badge, title, intro, sections }: LegalPageProps) {
  return (
    <main className="dream-legal-page">
      <nav className="dream-legal-nav" aria-label="Legal navigation">
        <Link href="/" className="dream-logo" aria-label="DreamNorth home">
          DreamNorth<sup>®</sup>
        </Link>
        <div>
          <Link href="/privacy">Privacy</Link>
          <Link href="/terms">Terms</Link>
          <Link href="/contact">Contact</Link>
        </div>
      </nav>

      <article className="dream-legal-shell">
        <header className="dream-legal-header">
          <p className="dream-kicker">{badge}</p>
          <h1>{title}</h1>
          <p>{intro}</p>
          <span>Effective date: {effectiveDate}</span>
        </header>

        <div className="dream-legal-body">
          {sections.map((section) => (
            <section className="dream-legal-section" key={section.title}>
              <h2>{section.title}</h2>
              {section.body?.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
              {section.bullets ? (
                <ul>
                  {section.bullets.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              ) : null}
            </section>
          ))}
        </div>

        <footer className="dream-legal-contact">
          <p>
            Questions or data requests can be sent to{" "}
            <a href={`mailto:${contactEmail}`}>{contactEmail}</a>.
          </p>
        </footer>
      </article>
    </main>
  );
}
