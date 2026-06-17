import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import type { CSSProperties } from "react";
import DreamScene from "./DreamScene";
import DreamWorldGenerator from "./DreamWorldGenerator";
import LighthouseLight from "./LighthouseLight";
import MobileDrawerDismiss from "./MobileDrawerDismiss";

export const metadata: Metadata = {
  title: "DreamNorth | AI Dream Journal App & AI Dream Tools",
  description:
    "DreamNorth is an AI dream journal app for recording dreams, interpreting symbols, tracking patterns, and visualizing dream worlds with AI tools.",
  alternates: {
    canonical: "/",
  },
};

const videoUrl =
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260314_131748_f2ca2a28-fed7-44c8-b9a9-bd9acdd5ec31.mp4";

const structuredData = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "DreamNorth",
  applicationCategory: "LifestyleApplication",
  operatingSystem: "iOS, Android",
  url: "https://dream-north.com",
  image: "https://dream-north.com/dreamnorth/social-preview.png",
  description:
    "DreamNorth is an AI dream journal app with dream interpretation, symbol tracking, voice notes, and AI image tools for visualizing dream worlds.",
  offers: {
    "@type": "Offer",
    availability: "https://schema.org/InStock",
    price: "0",
    priceCurrency: "USD",
  },
  featureList: [
    "Dream journal entries",
    "AI dream interpretation",
    "Dream symbol tracking",
    "Voice note transcription",
    "AI dream image generation",
    "Dream world visualization",
  ],
};

const navItems = [
  { label: "Home", href: "#home" },
  { label: "Journal", href: "#journal" },
  { label: "Worlds", href: "#worlds" },
  { label: "AI Tools", href: "#science" },
  { label: "Reach Us", href: "#reach-us" },
];

const dreamTools = [
  {
    title: "Remember",
    text: "Capture fragments before daylight edits them away.",
  },
  {
    title: "Understand",
    text: "Use AI dream interpretation to trace symbols, moods, people, and recurring threads.",
  },
  {
    title: "Visualize",
    text: "Turn entries into surreal dream worlds with AI image generation tools.",
  },
];

const storeButtons = [
  {
    platform: "apple",
    eyebrow: "Download on the",
    label: "App Store",
    href: "#reach-us",
  },
  {
    platform: "play",
    eyebrow: "Get it on",
    label: "Google Play",
    href: "https://play.google.com/store/apps/details?id=org.ballistic.dreamjournalai",
  },
] as const;

function AppleIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M16.2 12.5c0-2.2 1.8-3.3 1.9-3.4-1-1.5-2.6-1.7-3.2-1.7-1.4-.1-2.7.8-3.4.8s-1.8-.8-3-.8c-1.5 0-2.9.9-3.7 2.2-1.6 2.8-.4 6.9 1.1 9.2.8 1.1 1.7 2.4 2.9 2.3 1.2 0 1.6-.8 3-.8s1.8.8 3 .8c1.3 0 2.1-1.1 2.8-2.3.9-1.3 1.2-2.5 1.2-2.6 0-.1-2.6-1-2.6-3.7ZM14 5.9c.6-.8 1.1-1.8 1-2.9-1 .1-2.1.7-2.8 1.4-.6.7-1.1 1.7-1 2.7 1.1.1 2.2-.5 2.8-1.2Z"
        fill="currentColor"
      />
    </svg>
  );
}

function PlayStoreIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M4.6 3.4c-.3.3-.4.8-.4 1.4v14.4c0 .6.1 1.1.4 1.4l.1.1 8.1-8.1v-.2L4.7 3.3l-.1.1Z" fill="#34a853" />
      <path d="m15.5 15.3-2.7-2.7v-.2l2.7-2.7.1.1 3.2 1.8c.9.5.9 1.3 0 1.8l-3.2 1.8-.1.1Z" fill="#fbbc04" />
      <path d="m15.6 15.2-2.8-2.8-8.2 8.2c.5.5 1.2.5 2.1 0l8.9-5.4Z" fill="#ea4335" />
      <path d="M15.6 9.8 6.7 4.4c-.9-.5-1.6-.5-2.1-.1l8.2 8.2 2.8-2.7Z" fill="#4285f4" />
    </svg>
  );
}

function StoreButtons() {
  return (
    <div className="dream-store-buttons">
      {storeButtons.map((store) => (
        <a
          className={`dream-store-button is-${store.platform}`}
          href={store.href}
          aria-label={`${store.eyebrow} ${store.label}`}
          key={store.platform}
        >
          {store.platform === "apple" ? <AppleIcon /> : <PlayStoreIcon />}
          <span>
            <small>{store.eyebrow}</small>
            <strong>{store.label}</strong>
          </span>
        </a>
      ))}
    </div>
  );
}

export default function Home() {
  return (
    <main className="dream-page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <header className="dream-site-header">
        <MobileDrawerDismiss />
        <div className="dream-top-bar">
          <span>DreamNorth is live</span>
          <a href="#reach-us">
            Download the official app <span aria-hidden="true">-&gt;</span>
          </a>
          <span>AI dream tools</span>
        </div>

        <input
          className="dream-drawer-toggle"
          id="dream-mobile-drawer"
          type="checkbox"
          aria-hidden="true"
        />
        <div className="dream-nav" aria-label="Primary navigation">
          <a href="#home" className="dream-logo" aria-label="DreamNorth home">
            DreamNorth<sup>®</sup>
          </a>
          <nav className="dream-nav-links" aria-label="Section links">
            {navItems.map((item, index) => (
              <a href={item.href} className={index === 0 ? "is-active" : ""} key={item.href}>
                {item.label}
              </a>
            ))}
          </nav>
          <div className="dream-nav-actions">
            <label
              className="dream-menu-button"
              htmlFor="dream-mobile-drawer"
              aria-label="Open mobile menu"
            >
              <span />
              <span />
              <span />
            </label>
          </div>
        </div>

        <label className="dream-drawer-backdrop" htmlFor="dream-mobile-drawer" aria-hidden="true" />
        <aside className="dream-mobile-drawer" aria-label="Mobile menu">
          <div className="dream-drawer-top">
            <a href="#home" className="dream-logo" aria-label="DreamNorth home">
              DreamNorth<sup>®</sup>
            </a>
            <label htmlFor="dream-mobile-drawer" aria-label="Close mobile menu">
              <span />
              <span />
            </label>
          </div>
          <nav className="dream-drawer-links">
            {navItems.map((item) => (
              <a href={item.href} key={item.href}>
                {item.label}
              </a>
            ))}
          </nav>
          <div className="dream-drawer-card">
            <p>Tonight&apos;s mode</p>
            <strong>Lucid recall</strong>
            <span>Capture, decode, visualize.</span>
          </div>
          <StoreButtons />
        </aside>
      </header>

      <section className="dream-hero" id="home" aria-label="DreamNorth hero">
        <Image
          src="/dreamnorth/lighthouse-hero-wide.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="dream-hero-poster dream-hero-poster-wide"
        />
        <Image
          src="/dreamnorth/lighthouse-gradient.png"
          alt=""
          fill
          sizes="100vw"
          className="dream-hero-poster dream-hero-poster-mobile"
        />
        <video
          className="dream-hero-video"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          poster="/dreamnorth/lighthouse-gradient.png"
        >
          <source src={videoUrl} type="video/mp4" />
        </video>
        <LighthouseLight />
        <DreamScene />

        <div className="dream-hero-content">
          <p className="dream-kicker animate-fade-rise">AI Dream Journal</p>
          <h1 className="dream-title animate-fade-rise">
            <span className="dream-line">Remember your</span>
            <br />
            <span className="dream-line">
              <em>dreams</em>.
            </span>
            <br />
            <span className="dream-line">Paint the worlds</span>
            <br />
            <span className="dream-line">beneath them.</span>
          </h1>
          <p className="dream-subtitle animate-fade-rise-delay">
            DreamNorth is an AI dream journal app for recording dreams,
            interpreting symbols, tracking patterns, and visualizing the
            midnight stories your waking mind keeps trying to forget.
          </p>
          <div className="dream-actions animate-fade-rise-delay-2">
            <StoreButtons />
          </div>
        </div>

        <div className="dream-hero-footer" aria-hidden="true">
          <span>Lucid journaling</span>
          <span>Symbol memory</span>
          <span>AI world painting</span>
        </div>
      </section>

      <section className="dream-section dream-story" id="journey">
        <div className="dream-section-intro scroll-reveal">
          <p className="dream-kicker">The quiet ritual</p>
          <h2>Wake up with the dream still glowing.</h2>
          <p>
            The app is designed for the first fragile minute after sleep:
            fast dream capture, emotional tagging, AI interpretation, and a
            visual engine that turns memory into an artifact you can return to.
          </p>
        </div>

        <div className="dream-feature-row">
          <figure className="dream-image-stage scroll-reveal">
            <Image
              src="/dreamnorth/journal-lighthouse.png"
              alt="A dream journaler writing beneath a glowing lighthouse at sunset."
              width={941}
              height={1672}
              sizes="(max-width: 900px) 88vw, 38vw"
            />
            <figcaption className="dream-art-overlay">
              <span>Converting</span>
              <strong>World forming</strong>
              <div className="dream-art-states" aria-label="Dream entry conversion states">
                <span>Captured</span>
                <span>Symbols</span>
                <span>Ready</span>
              </div>
            </figcaption>
          </figure>
          <div className="dream-tools" id="journal">
            {dreamTools.map((tool, index) => (
              <article
                className="dream-tool scroll-reveal"
                style={{ "--tool-index": index } as CSSProperties}
                key={tool.title}
              >
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{tool.title}</h3>
                <p>{tool.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <DreamWorldGenerator />

      <section className="dream-section dream-worlds" id="worlds">
        <div className="dream-world-copy scroll-reveal">
          <p className="dream-kicker">Visualize dream worlds</p>
          <h2>From half-remembered scenes to cinematic inner maps.</h2>
          <p>
            DreamNorth uses your language as a compass, preserving tone and
            symbols while AI image tools give each dream journal entry a vivid
            visual form.
          </p>
          <a href="#reach-us" className="dream-inline-link">
            Download DreamNorth
          </a>
        </div>

        <div className="dream-phone-theater scroll-reveal">
          <Image
            src="/dreamnorth/visualize-dream-worlds.png"
            alt="DreamNorth app screens visualizing dream entries as surreal art."
            width={1024}
            height={1536}
            sizes="(max-width: 900px) 92vw, 48vw"
          />
        </div>
      </section>

      <section className="dream-section dream-signal" id="science">
        <Image
          src="/dreamnorth/feature-graphic.png"
          alt="DreamNorth AI Dream Journal feature graphic with a lighthouse over a starlit sea."
          width={1024}
          height={500}
          sizes="(max-width: 900px) 92vw, 70vw"
          className="dream-signal-image scroll-reveal"
        />
        <div className="dream-signal-copy scroll-reveal">
          <p className="dream-kicker">Built for recall</p>
          <h2>AI tools for dream recall, symbols, and visual worlds.</h2>
          <p>
            A focused dream journal app, symbol tracking, AI interpretation,
            voice notes, and dream visualization come together in one calm
            surface for people who take their inner life seriously.
          </p>
        </div>
      </section>

      <section className="dream-final" id="reach-us">
        <div className="dream-final-inner scroll-reveal">
          <p className="dream-kicker">Available now</p>
          <h2>Start building an atlas of your sleeping mind.</h2>
          <StoreButtons />
        </div>
      </section>

      <footer className="dream-site-footer" aria-label="Site footer">
        <div className="dream-footer-main">
          <div className="dream-footer-brand">
            <Link href="/" className="dream-logo" aria-label="DreamNorth home">
              DreamNorth<sup>®</sup>
            </Link>
            <p>
              An encrypted AI dream journal for remembering, understanding,
              and visualizing the worlds you wake from.
            </p>
          </div>

          <div className="dream-footer-columns">
            <nav className="dream-footer-column" aria-label="Product links">
              <h2>Product</h2>
              {navItems.map((item) => (
                <a href={item.href} key={item.href}>
                  {item.label}
                </a>
              ))}
            </nav>

            <nav className="dream-footer-column" aria-label="Legal links">
              <h2>Legal</h2>
              <Link href="/privacy">Privacy Policy</Link>
              <Link href="/terms">Terms of Use</Link>
              <Link href="/copyright">Copyright</Link>
              <Link href="/contact">Contact</Link>
            </nav>
          </div>
        </div>

        <div className="dream-footer-bottom">
          <span>© 2026 DreamNorth. Dreams stay yours.</span>
          <span>Encrypted dream journaling. AI features use third-party processors.</span>
        </div>
      </footer>
    </main>
  );
}
