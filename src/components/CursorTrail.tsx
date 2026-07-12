"use client";

import { useEffect, useRef } from "react";

const COLORS = [
  "var(--pastel-blue-fg)",
  "var(--pastel-red-fg)",
  "var(--pastel-yellow-fg)",
  "var(--pastel-green-fg)",
  "var(--pastel-blue-fg)",
  "var(--pastel-red-fg)",
];

const BLOB_SIZE = 220;
const LERP = 0.16;

export default function CursorTrail() {
  const blobRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const isFinePointer = window.matchMedia("(pointer: fine)").matches;
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (!isFinePointer || prefersReducedMotion) return;

    const positions = COLORS.map(() => ({ x: -9999, y: -9999 }));
    const mouse = { x: -9999, y: -9999 };
    let hasMoved = false;
    let rafId: number;

    function handleMove(e: PointerEvent) {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      hasMoved = true;
    }

    function tick() {
      if (hasMoved) {
        let targetX = mouse.x;
        let targetY = mouse.y;

        positions.forEach((pos, i) => {
          pos.x += (targetX - pos.x) * LERP;
          pos.y += (targetY - pos.y) * LERP;

          const el = blobRefs.current[i];
          if (el) {
            el.style.transform = `translate3d(${pos.x - BLOB_SIZE / 2}px, ${pos.y - BLOB_SIZE / 2}px, 0)`;
          }

          targetX = pos.x;
          targetY = pos.y;
        });
      }
      rafId = requestAnimationFrame(tick);
    }

    window.addEventListener("pointermove", handleMove, { passive: true });
    rafId = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("pointermove", handleMove);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-0 hidden sm:block"
      style={{ mixBlendMode: "multiply", opacity: 0.28 }}
    >
      <div style={{ filter: "blur(18px) contrast(26)", width: "100%", height: "100%" }}>
        {COLORS.map((color, i) => (
          <div
            key={i}
            ref={(el) => {
              blobRefs.current[i] = el;
            }}
            className="absolute rounded-full"
            style={{
              width: BLOB_SIZE,
              height: BLOB_SIZE,
              background: color,
              willChange: "transform",
            }}
          />
        ))}
      </div>
    </div>
  );
}
