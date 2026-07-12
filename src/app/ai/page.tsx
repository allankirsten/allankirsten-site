import Link from "next/link";
import type { Metadata } from "next";
import { getSite } from "@/lib/content";
import CopyLlmsTxt from "@/components/ui/CopyLlmsTxt";

export const metadata: Metadata = {
  title: "Allan Kirsten — for AIs",
  description:
    "Point your AI at this site and ask anything about Allan Kirsten's work, track record and how he operates.",
};

export default function AiIndex() {
  const site = getSite();

  return (
    <main
      className="min-h-screen flex flex-col items-center px-6 py-24"
      style={{
        background: "var(--ds-bg)",
        color: "var(--ds-text)",
        fontFamily: "var(--font-atkinson)",
      }}
    >
      <div className="w-full max-w-xl">
        <p className="mb-8" style={{ fontSize: "0.875rem", color: "rgba(245,240,232,0.45)", letterSpacing: "0.02em" }}>
          {site.name}
        </p>

        <h1
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(2.25rem, 5vw, 3.25rem)",
            lineHeight: 1.05,
            letterSpacing: "-0.01em",
            marginBottom: "1rem",
          }}
        >
          Point your AI here.
        </h1>

        <p style={{ fontSize: "1.125rem", lineHeight: 1.6, color: "rgba(245,240,232,0.65)", marginBottom: "2.5rem" }}>
          Give your assistant the address below and ask anything about my
          work, my track record, or how I operate.
        </p>

        <div className="mb-12">
          <CopyLlmsTxt text="allankirsten.com/llms.txt" />
        </div>

        <div className="flex gap-6 text-sm">
          <a href={`mailto:${site.contact.email}`} style={{ color: "var(--ds-accent)" }}>
            {site.contact.email}
          </a>
          <Link href="/" style={{ color: "rgba(245,240,232,0.45)" }}>
            ← home
          </Link>
        </div>
      </div>
    </main>
  );
}
