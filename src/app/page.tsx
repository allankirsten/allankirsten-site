import Image from "next/image";
import Link from "next/link";

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

      <p style={{ position: "relative", fontSize: "0.875rem", letterSpacing: "0.02em", opacity: 0.5 }}>
        Allan Kirsten
      </p>
      <p
        style={{
          position: "relative",
          fontFamily: "var(--font-display)",
          fontSize: "clamp(2.625rem, 6vw, 3.75rem)",
          lineHeight: 1.1,
          letterSpacing: "-0.01em",
        }}
      >
        From chaos to done,
        <br />
        by design
      </p>

      <Link
        href="/ai"
        style={{
          position: "relative",
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
    </div>
  );
}
