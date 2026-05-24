import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";
import Link from "next/link";

export default function Contact() {
  return (
    <>
      <Nav />

      {/* ── Header ─────────────────────────────────────────────── */}
      <section
        className="flex items-end pb-24 pt-48 px-8"
        style={{ backgroundColor: "var(--color-bg-mid)" }}
      >
        <div className="max-w-4xl mx-auto w-full">
          <h1
            className="font-semibold leading-none tracking-tight"
            style={{ fontSize: "clamp(48px, 8vw, 96px)", color: "var(--color-dark)" }}
          >
            Contact
          </h1>
        </div>
      </section>

      {/* ── Info ───────────────────────────────────────────────── */}
      <section className="py-24 px-8">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <h2
              className="text-2xl font-semibold mb-2"
              style={{ color: "var(--color-dark)" }}
            >
              Allan Kirsten
            </h2>
            <p
              className="text-sm font-medium tracking-widest uppercase mb-8"
              style={{ color: "var(--color-accent)" }}
            >
              Creative Director · UX/UI Designer
            </p>

            <div className="space-y-4 text-sm" style={{ color: "var(--color-text)" }}>
              <div>
                <Link
                  href="mailto:allankirsten@gmail.com"
                  className="hover:underline"
                  style={{ color: "var(--color-accent)" }}
                >
                  allankirsten@gmail.com
                </Link>
              </div>
              <div style={{ color: "var(--color-muted)" }}>
                Lisbon · Portugal
              </div>
            </div>

            <div className="flex items-center gap-6 mt-10">
              {[
                { href: "https://linkedin.com/in/allankirsten", label: "LinkedIn" },
                { href: "https://behance.net/allankirsten", label: "Behance" },
                { href: "https://dribbble.com/allankirsten", label: "Dribbble" },
              ].map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-medium tracking-widest uppercase transition-colors duration-200 hover:text-[var(--color-accent)]"
                  style={{ color: "var(--color-muted)" }}
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <p
              className="text-base leading-relaxed"
              style={{ color: "var(--color-muted)" }}
            >
              Ready to build a winning strategy by design? Let&apos;s talk about your next project.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
