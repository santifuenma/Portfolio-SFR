"use client";

import { useEffect, useRef, type CSSProperties } from "react";
import gsap from "gsap";

type SubBlob = {
  radiusFactor: number;
  wobblePeriodX: number;
  wobblePeriodY: number;
  wobbleAmpX: number;
  wobbleAmpY: number;
  wobblePhase: number;
};

type SpotConfig = {
  radius: number;
  baseX: number;
  baseY: number;
  periodX: number;
  periodY: number;
  ampX: number;
  ampY: number;
  phase: number;
  light: string;
  base: string;
  subBlobs: SubBlob[];
};

const SUB_BLOBS: SubBlob[] = [
  { radiusFactor: 1, wobblePeriodX: 0, wobblePeriodY: 0, wobbleAmpX: 0, wobbleAmpY: 0, wobblePhase: 0 },
  { radiusFactor: 0.68, wobblePeriodX: 480, wobblePeriodY: 560, wobbleAmpX: 12, wobbleAmpY: 10, wobblePhase: 1.1 },
  { radiusFactor: 0.5, wobblePeriodX: 600, wobblePeriodY: 420, wobbleAmpX: 10, wobbleAmpY: 13, wobblePhase: 3.4 },
];

const SPOTS: SpotConfig[] = [
  { radius: 280, baseX: 15, baseY: 20, periodX: 700, periodY: 600, ampX: 40, ampY: 38, phase: 0, light: "#4d96c4", base: "#1f6c9f", subBlobs: SUB_BLOBS },
  { radius: 240, baseX: 85, baseY: 25, periodX: 620, periodY: 720, ampX: 36, ampY: 42, phase: 1.6, light: "#c2504d", base: "#9f2f2d", subBlobs: SUB_BLOBS },
  { radius: 300, baseX: 30, baseY: 80, periodX: 780, periodY: 560, ampX: 42, ampY: 34, phase: 3.1, light: "#c98f1f", base: "#956400", subBlobs: SUB_BLOBS },
  { radius: 220, baseX: 70, baseY: 15, periodX: 640, periodY: 760, ampX: 34, ampY: 40, phase: 4.7, light: "#5a8a5e", base: "#346538", subBlobs: SUB_BLOBS },
  { radius: 260, baseX: 50, baseY: 50, periodX: 700, periodY: 650, ampX: 38, ampY: 36, phase: 2.2, light: "#4d96c4", base: "#1f6c9f", subBlobs: SUB_BLOBS },
  { radius: 230, baseX: 10, baseY: 65, periodX: 680, periodY: 590, ampX: 35, ampY: 39, phase: 5.4, light: "#c2504d", base: "#9f2f2d", subBlobs: SUB_BLOBS },
  { radius: 250, baseX: 90, baseY: 70, periodX: 610, periodY: 730, ampX: 37, ampY: 33, phase: 0.8, light: "#c98f1f", base: "#956400", subBlobs: SUB_BLOBS },
  { radius: 210, baseX: 45, baseY: 8, periodX: 750, periodY: 610, ampX: 33, ampY: 41, phase: 3.9, light: "#5a8a5e", base: "#346538", subBlobs: SUB_BLOBS },
];

export default function DotGridReveal() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion || !containerRef.current) return;

    const layerEls = containerRef.current.querySelectorAll<HTMLElement>("[data-layer]");
    const setters = Array.from(layerEls).map((el) =>
      SUB_BLOBS.map((_, subIndex) => ({
        x: gsap.quickSetter(el, `--x${subIndex}`, "%"),
        y: gsap.quickSetter(el, `--y${subIndex}`, "%"),
      }))
    );

    function update() {
      const scrollY = window.scrollY;
      SPOTS.forEach((spot, i) => {
        const cx = spot.baseX + Math.sin(scrollY / spot.periodX + spot.phase) * spot.ampX;
        const cy = spot.baseY + Math.cos(scrollY / spot.periodY + spot.phase * 1.3) * spot.ampY;

        spot.subBlobs.forEach((sub, subIndex) => {
          const wobbleX =
            sub.wobbleAmpX === 0 ? 0 : Math.sin(scrollY / sub.wobblePeriodX + sub.wobblePhase) * sub.wobbleAmpX;
          const wobbleY =
            sub.wobbleAmpY === 0 ? 0 : Math.cos(scrollY / sub.wobblePeriodY + sub.wobblePhase) * sub.wobbleAmpY;
          setters[i][subIndex].x(cx + wobbleX);
          setters[i][subIndex].y(cy + wobbleY);
        });
      });
    }

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);

    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <div ref={containerRef} aria-hidden className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {SPOTS.map((spot, i) => {
        const maskImage = spot.subBlobs
          .map(
            (sub, subIndex) =>
              `radial-gradient(circle ${Math.round(spot.radius * sub.radiusFactor)}px at var(--x${subIndex}) var(--y${subIndex}), black, transparent 70%)`
          )
          .join(", ");

        const varStyle: Record<string, string> = {};
        spot.subBlobs.forEach((_, subIndex) => {
          varStyle[`--x${subIndex}`] = `${spot.baseX}%`;
          varStyle[`--y${subIndex}`] = `${spot.baseY}%`;
        });

        return (
          <div
            key={i}
            data-layer
            className="dot-grid-layer absolute inset-0"
            style={
              {
                ...varStyle,
                backgroundImage: `radial-gradient(circle 2.5px, ${spot.light} 0%, ${spot.base} 65%, transparent 100%)`,
                WebkitMaskImage: maskImage,
                maskImage,
              } as CSSProperties
            }
          />
        );
      })}
    </div>
  );
}
