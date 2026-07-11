import Link from "next/link";

export default function Home() {
  return (
    <div
      style={{
        background: "#000",
        minHeight: "100vh",
        flex: 1,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "8px",
        padding: "24px",
        textAlign: "center",
      }}
    >
      <p
        style={{
          color: "#fff",
          fontFamily: "sans-serif",
          fontSize: "14px",
          letterSpacing: "0.2em",
          opacity: 0.5,
        }}
      >
        Allan Kirsten
      </p>
      <p
        style={{
          color: "#fff",
          fontFamily: "sans-serif",
          fontSize: "12px",
          letterSpacing: "0.1em",
          opacity: 0.3,
        }}
      >
        From impossible to done, by design
      </p>

      <Link
        href="/ai"
        style={{
          marginTop: "40px",
          color: "#fff",
          fontFamily: "sans-serif",
          fontSize: "12px",
          letterSpacing: "0.15em",
          opacity: 0.4,
          textDecoration: "none",
          borderBottom: "1px solid rgba(255,255,255,0.2)",
          paddingBottom: "4px",
        }}
      >
        POINT YOUR AI HERE →
      </Link>
    </div>
  );
}
