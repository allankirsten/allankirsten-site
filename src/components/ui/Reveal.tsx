"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

/**
 * Entrance-animation wrapper, adapted from the scroll-reveal pattern in the
 * nav POC. Finds .reveal-label / .reveal-word / .reveal-fade children and
 * plays a one-shot timeline on mount. Elements start at opacity:0 via CSS
 * (globals.css) so there's no flash before the timeline runs.
 */
export default function Reveal({
  children,
  className,
  style,
}: {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}) {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const label = root.querySelectorAll<HTMLElement>(".reveal-label");
    const words = root.querySelectorAll<HTMLElement>(".reveal-word");
    const fades = root.querySelectorAll<HTMLElement>(".reveal-fade");

    const wordsDuration = words.length ? words.length * 0.1521 + 1.2 : 0;

    const tl = gsap.timeline({ delay: 0.15 });

    if (label.length) {
      tl.fromTo(
        label,
        { opacity: 0, y: -20 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" },
        0
      );
    }
    if (words.length) {
      tl.fromTo(
        words,
        { opacity: 0, y: 32, scale: 0.96 },
        { opacity: 1, y: 0, scale: 1, stagger: 0.1521, duration: 1.2, ease: "power3.out" },
        0.1
      );
    }
    if (fades.length) {
      tl.fromTo(
        fades,
        { opacity: 0, y: 14 },
        { opacity: 1, y: 0, duration: 0.6, ease: "power2.out", stagger: 0.12 },
        words.length ? wordsDuration * 0.6 : 0.1
      );
    }

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <div ref={rootRef} className={className} style={style}>
      {children}
    </div>
  );
}
