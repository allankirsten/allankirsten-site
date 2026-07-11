import Link from "next/link";

export default function Home() {
  return (
    <div
      style={{
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
      }}
    >
      <p style={{ fontSize: "0.875rem", letterSpacing: "0.02em", opacity: 0.5 }}>
        Allan Kirsten
      </p>
      <p
        style={{
          fontFamily: "var(--font-display)",
          fontSize: "clamp(1.75rem, 4vw, 2.5rem)",
          lineHeight: 1.1,
          letterSpacing: "-0.01em",
        }}
      >
        From chaos to done, by design
      </p>

      <Link
        href="/ai"
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
    </div>
  );
}
