import type { Metadata } from "next";
import Link from "next/link";
import { contactEmail } from "../legal-pages";

export const metadata: Metadata = {
  title: "Contact | DreamNorth",
  description:
    "Contact DreamNorth for app support, privacy questions, and data requests.",
};

const mailto = `mailto:${contactEmail}?subject=DreamNorth%20Support`;

export default function ContactPage() {
  return (
    <main className="dream-legal-page dream-contact-page">
      <nav className="dream-legal-nav" aria-label="Contact navigation">
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
          <p className="dream-kicker">Contact</p>
          <h1>We can help with DreamNorth.</h1>
          <p>
            For app support, privacy questions, account deletion, or data
            requests, email us directly. We read every message.
          </p>
        </header>

        <div className="dream-contact-panel">
          <div>
            <span>Email</span>
            <a href={mailto}>{contactEmail}</a>
          </div>
          <a className="dream-contact-button" href={mailto}>
            Send Email
          </a>
        </div>

        <div className="dream-legal-body dream-contact-body">
          <section className="dream-legal-section">
            <h2>Support</h2>
            <p>
              Include your device type, app version if you know it, and a short
              description of what happened. Please avoid sending sensitive dream
              content unless it is needed for support.
            </p>
          </section>

          <section className="dream-legal-section">
            <h2>Privacy requests</h2>
            <p>
              For account deletion, data deletion, access, correction, or other
              privacy rights, email us from the address connected to your
              DreamNorth account when possible.
            </p>
          </section>

          <section className="dream-legal-section">
            <h2>Response time</h2>
            <p>
              We aim to respond as soon as practical. Some privacy or account
              requests may require verification before we can make changes.
            </p>
          </section>
        </div>
      </article>
    </main>
  );
}
