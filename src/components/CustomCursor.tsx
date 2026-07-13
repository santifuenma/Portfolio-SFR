"use client";

import { useEffect, useRef } from "react";

const INTERACTIVE_SELECTOR = "a, button, input, textarea, [role='button']";
const LIGHT_SELECTOR = "[data-cursor-light]";

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringPosRef = useRef<HTMLDivElement>(null);
  const ringScaleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const isFinePointer = window.matchMedia("(pointer: fine)").matches;
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (!isFinePointer || prefersReducedMotion) return;

    document.documentElement.classList.add("custom-cursor-active");

    const mouse = { x: -100, y: -100 };
    const ring = { x: -100, y: -100 };
    let hovering = false;
    let wasHovering = false;
    let light = false;
    let wasLight = false;
    let rafId: number;

    function handleMove(e: PointerEvent) {
      mouse.x = e.clientX;
      mouse.y = e.clientY;

      const target = e.target as Element | null;
      hovering = !!target?.closest(INTERACTIVE_SELECTOR);
      light = !!target?.closest(LIGHT_SELECTOR);
    }

    function tick() {
      ring.x += (mouse.x - ring.x) * 0.18;
      ring.y += (mouse.y - ring.y) * 0.18;

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mouse.x}px, ${mouse.y}px, 0) translate(-50%, -50%)`;
      }
      if (ringPosRef.current) {
        ringPosRef.current.style.transform = `translate3d(${ring.x}px, ${ring.y}px, 0) translate(-50%, -50%)`;
      }
      if (ringScaleRef.current && hovering !== wasHovering) {
        ringScaleRef.current.style.transform = `scale(${hovering ? 1.8 : 1})`;
        wasHovering = hovering;
      }
      if (light !== wasLight) {
        dotRef.current?.classList.toggle("cursor-light", light);
        ringScaleRef.current?.classList.toggle("cursor-light", light);
        wasLight = light;
      }

      rafId = requestAnimationFrame(tick);
    }

    window.addEventListener("pointermove", handleMove, { passive: true });
    rafId = requestAnimationFrame(tick);

    return () => {
      document.documentElement.classList.remove("custom-cursor-active");
      window.removeEventListener("pointermove", handleMove);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-[100] hidden sm:block">
      <div
        ref={dotRef}
        className="custom-cursor-dot fixed left-0 top-0 h-1.5 w-1.5 rounded-full transition-colors duration-200"
      />
      <div ref={ringPosRef} className="fixed left-0 top-0">
        <div
          ref={ringScaleRef}
          className="custom-cursor-ring h-8 w-8 rounded-full border transition-[transform,border-color] duration-300 ease-out"
        />
      </div>
    </div>
  );
}
