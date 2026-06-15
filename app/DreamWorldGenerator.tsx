"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function DreamWorldGenerator() {
  const [status, setStatus] = useState<"idle" | "loading" | "complete">("idle");

  useEffect(() => {
    if (status !== "loading") return;

    const revealTimer = window.setTimeout(() => {
      setStatus("complete");
    }, 3000);

    return () => {
      window.clearTimeout(revealTimer);
    };
  }, [status]);

  function generateWorld() {
    if (status !== "idle") return;
    setStatus("loading");
  }

  const isLoading = status === "loading";
  const isComplete = status === "complete";

  return (
    <section className="dream-section dream-generator" id="generator">
      <div className="dream-generator-copy scroll-reveal">
        <h2>Dreams become worlds.</h2>
      </div>

      <div className="dream-generator-stage scroll-reveal">
        <div className="dream-entry-panel">
          <p>I had a dream of a whale flying through space.</p>
          {status === "idle" ? (
            <button type="button" onClick={generateWorld}>
              Generate world
            </button>
          ) : null}
        </div>

        <div
          className={`dream-world-panel ${isLoading ? "is-loading" : ""} ${
            isComplete ? "is-awake" : ""
          }`}
        >
          {status === "idle" ? <div className="dream-world-empty" aria-hidden="true" /> : null}
          {isLoading ? (
            <div className="dream-world-loader" aria-live="polite" aria-label="Painting dream">
              <span />
            </div>
          ) : null}
          {isComplete ? (
            <Image
              src="/dreamnorth/whale-dream-world.png"
              alt="A luminous whale flying through a pink and violet dreamlike space environment."
              width={1254}
              height={1254}
              sizes="(max-width: 900px) 92vw, 44vw"
            />
          ) : null}
        </div>
      </div>
    </section>
  );
}
