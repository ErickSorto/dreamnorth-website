"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

function makeBeamTexture() {
  const canvas = document.createElement("canvas");
  canvas.width = 256;
  canvas.height = 1024;

  const context = canvas.getContext("2d");
  if (!context) {
    return null;
  }

  const horizontal = context.createLinearGradient(0, 0, canvas.width, 0);
  horizontal.addColorStop(0, "rgba(255, 186, 92, 0)");
  horizontal.addColorStop(0.5, "rgba(255, 224, 152, 0.42)");
  horizontal.addColorStop(1, "rgba(255, 186, 92, 0)");

  context.fillStyle = horizontal;
  context.fillRect(0, 0, canvas.width, canvas.height);

  const vertical = context.createLinearGradient(0, 0, 0, canvas.height);
  vertical.addColorStop(0, "rgba(255, 244, 196, 0.95)");
  vertical.addColorStop(0.22, "rgba(255, 177, 92, 0.5)");
  vertical.addColorStop(1, "rgba(146, 77, 255, 0)");

  context.globalCompositeOperation = "destination-in";
  context.fillStyle = vertical;
  context.fillRect(0, 0, canvas.width, canvas.height);

  const texture = new THREE.CanvasTexture(canvas);
  texture.needsUpdate = true;
  return texture;
}

export default function DreamScene() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const containerNode = containerRef.current;
    if (!containerNode) {
      return;
    }
    const mountedContainer: HTMLDivElement = containerNode;

    if (/HeadlessChrome/i.test(window.navigator.userAgent)) {
      return;
    }

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(42, 1, 0.1, 100);
    camera.position.set(0, 0.25, 12);

    const probeCanvas = document.createElement("canvas");
    const hasWebGL =
      probeCanvas.getContext("webgl2") ||
      probeCanvas.getContext("webgl") ||
      probeCanvas.getContext("experimental-webgl");

    if (!hasWebGL) {
      return;
    }

    let renderer: THREE.WebGLRenderer;

    try {
      renderer = new THREE.WebGLRenderer({
        alpha: true,
        antialias: true,
        powerPreference: "high-performance",
      });
    } catch {
      return;
    }

    renderer.setClearColor(0x000000, 0);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.domElement.setAttribute("aria-hidden", "true");
    renderer.domElement.className = "dream-scene-canvas";
    mountedContainer.appendChild(renderer.domElement);

    const starCount = 1200;
    const positions = new Float32Array(starCount * 3);
    const colors = new Float32Array(starCount * 3);
    const color = new THREE.Color();

    for (let index = 0; index < starCount; index += 1) {
      const radius = 5 + Math.random() * 13;
      const theta = Math.random() * Math.PI * 2;
      const y = Math.random() * 9 - 1.5;
      const offset = index * 3;

      positions[offset] = Math.cos(theta) * radius;
      positions[offset + 1] = y;
      positions[offset + 2] = Math.sin(theta) * radius - 5;

      color.setHSL(0.72 + Math.random() * 0.08, 0.9, 0.72 + Math.random() * 0.2);
      if (Math.random() > 0.72) {
        color.setHSL(0.08, 1, 0.72 + Math.random() * 0.18);
      }

      colors[offset] = color.r;
      colors[offset + 1] = color.g;
      colors[offset + 2] = color.b;
    }

    const starGeometry = new THREE.BufferGeometry();
    starGeometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    starGeometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));

    const stars = new THREE.Points(
      starGeometry,
      new THREE.PointsMaterial({
        size: 0.028,
        vertexColors: true,
        transparent: true,
        opacity: 0.88,
        depthWrite: false,
        blending: THREE.AdditiveBlending,
      }),
    );
    scene.add(stars);

    const beamTexture = makeBeamTexture();
    const beamMaterial = new THREE.MeshBasicMaterial({
      map: beamTexture ?? undefined,
      color: 0xffc27a,
      transparent: true,
      opacity: 0.32,
      depthWrite: false,
      side: THREE.DoubleSide,
      blending: THREE.AdditiveBlending,
    });

    const beam = new THREE.Mesh(new THREE.PlaneGeometry(2.5, 9.5), beamMaterial);
    beam.position.set(1.08, -0.42, -1.6);
    beam.rotation.z = -0.33;
    beam.rotation.y = -0.18;
    scene.add(beam);

    const ribbonPoints = Array.from({ length: 84 }, (_, index) => {
      const progress = index / 83;
      return new THREE.Vector3(
        (progress - 0.5) * 8,
        Math.sin(progress * Math.PI * 2.2) * 0.3 - 1.75,
        Math.cos(progress * Math.PI * 2) * 0.18 - 1.8,
      );
    });
    const ribbonGeometry = new THREE.BufferGeometry().setFromPoints(ribbonPoints);
    const ribbon = new THREE.Line(
      ribbonGeometry,
      new THREE.LineBasicMaterial({
        color: 0xff7bf2,
        transparent: true,
        opacity: 0.42,
        blending: THREE.AdditiveBlending,
      }),
    );
    scene.add(ribbon);

    const pointer = { x: 0, y: 0 };
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    function resize() {
      const { width, height } = mountedContainer.getBoundingClientRect();
      renderer.setSize(width, height, false);
      camera.aspect = width / Math.max(height, 1);
      camera.updateProjectionMatrix();
    }

    function handlePointerMove(event: PointerEvent) {
      const rect = mountedContainer.getBoundingClientRect();
      pointer.x = ((event.clientX - rect.left) / rect.width - 0.5) * 2;
      pointer.y = ((event.clientY - rect.top) / rect.height - 0.5) * 2;
    }

    window.addEventListener("resize", resize);
    window.addEventListener("pointermove", handlePointerMove);
    resize();

    let animationFrame = 0;
    const startedAt = performance.now();

    function render() {
      const elapsed = (performance.now() - startedAt) / 1000;

      stars.rotation.y = elapsed * 0.014 + pointer.x * 0.028;
      stars.rotation.x = -pointer.y * 0.018;
      ribbon.rotation.z = Math.sin(elapsed * 0.55) * 0.018;
      ribbon.position.y = Math.sin(elapsed * 0.9) * 0.045;
      beam.rotation.z = -0.33 + Math.sin(elapsed * 0.5) * 0.075;
      beamMaterial.opacity = 0.24 + Math.sin(elapsed * 1.4) * 0.07;

      camera.position.x += pointer.x * 0.28 - camera.position.x * 0.045;
      camera.position.y += -pointer.y * 0.16 - (camera.position.y - 0.25) * 0.045;
      camera.lookAt(0, 0, 0);

      renderer.render(scene, camera);

      if (!reducedMotion) {
        animationFrame = window.requestAnimationFrame(render);
      }
    }

    render();

    return () => {
      window.cancelAnimationFrame(animationFrame);
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", handlePointerMove);
      mountedContainer.removeChild(renderer.domElement);
      starGeometry.dispose();
      beam.geometry.dispose();
      beamMaterial.dispose();
      beamTexture?.dispose();
      ribbonGeometry.dispose();
      (ribbon.material as THREE.Material).dispose();
      renderer.dispose();
    };
  }, []);

  return <div ref={containerRef} className="dream-scene" />;
}
