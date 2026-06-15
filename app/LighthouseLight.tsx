"use client";

import { useEffect, useRef } from "react";

export default function LighthouseLight() {
  const layerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const layerNode = layerRef.current;
    if (!layerNode) {
      return;
    }
    const lightLayer: HTMLDivElement = layerNode;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const origin = {
      x: window.innerWidth * 0.5,
      y: window.innerHeight * 0.22,
    };
    let frame = 0;
    let scrollProgress = 0;

    function updateOrigin() {
      const isMobile = window.innerWidth <= 640;
      origin.x = window.innerWidth * 0.5;
      origin.y = window.innerHeight * (isMobile ? 0.352 : 0.176);
      lightLayer.style.setProperty("--light-x", `${origin.x}px`);
      lightLayer.style.setProperty("--light-y", `${origin.y}px`);
    }

    function requestRender() {
      if (frame || reducedMotion) {
        return;
      }

      frame = window.requestAnimationFrame(() => {
        frame = 0;

        const halo = 0.34 + Math.sin(scrollProgress * Math.PI) * 0.04;

        lightLayer.style.setProperty("--halo-intensity", halo.toFixed(3));
      });
    }

    function handleScroll() {
      scrollProgress = Math.min(window.scrollY / Math.max(window.innerHeight, 1), 1.25);
      requestRender();
    }

    function handleResize() {
      updateOrigin();
      requestRender();
    }

    updateOrigin();
    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleResize);

    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div ref={layerRef} className="lighthouse-light" aria-hidden="true">
      <div className="lighthouse-glow" />
      <div className="lighthouse-spark" />
    </div>
  );
}
