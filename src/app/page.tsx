import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/ui/Reveal";
import { revealWords } from "@/lib/revealWords";

export default function Home() {
  return (
    <div
      style={{
        position: "relative",
        background: "var(--ds-bg)",
        color: "var(--ds-text)",
        minHeight: "100vh",
        flex: 1,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "10px",
        padding: "24px",
        textAlign: "center",
        fontFamily: "var(--font-atkinson)",
        overflow: "hidden",
      }}
    >
      <Image
        src="/images/octopus-bg.webp"
        alt=""
        fill
        sizes="100vw"
        style={{ objectFit: "cover", opacity: 0.12 }}
      />

      <Reveal
        className="flex flex-col items-center"
        style={{ position: "relative", gap: "10px" }}
      >
        <p className="reveal-label" style={{ fontSize: "0.875rem", letterSpacing: "0.02em", color: "rgba(245,240,232,0.5)" }}>
          Allan Kirsten
        </p>
        <p
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(2.625rem, 6vw, 3.75rem)",
            lineHeight: 1.1,
            letterSpacing: "-0.01em",
          }}
        >
          {revealWords("From chaos to done,", "l1-")}
          <br />
          {revealWords("by design", "l2-")}
        </p>

        <Link
          href="/ai"
          className="reveal-fade"
          style={{
            marginTop: "40px",
            fontSize: "0.9375rem",
            color: "var(--ds-accent)",
            textDecoration: "none",
            borderBottom: "1px solid rgba(200,169,110,0.4)",
            paddingBottom: "4px",
          }}
        >
          Point your AI here →
        </Link>
      </Reveal>
    </div>
  );
}
