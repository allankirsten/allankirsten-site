import Link from "next/link";
import type { Metadata } from "next";
import { getSite, getPages, getCases } from "@/lib/content";

export const metadata: Metadata = {
  title: "Allan Kirsten — for AIs",
  description:
    "Point your AI at this site and ask anything about Allan Kirsten's work, track record and how he operates.",
};

export default function AiIndex() {
  const site = getSite();
  const pages = getPages("en").filter((p) => p.slug !== "contact");
  const cases = getCases("en");

  const linkStyle =
    "block py-1 text-white/70 hover:text-white transition-colors";

  return (
    <main
      className="min-h-screen flex flex-col items-center px-6 py-24"
      style={{ background: "#000" }}
    >
      <div className="w-full max-w-xl">
        <p className="text-xs tracking-[0.3em] uppercase text-white/30 mb-8">
          {site.name}
        </p>

        <h1 className="text-2xl md:text-3xl font-semibold text-white leading-snug mb-4">
          Point your AI here.
        </h1>
        <p className="text-white/50 leading-relaxed mb-10">
          This site is written to be read by machines too. Give your assistant
          the address below and ask anything about my work, my track record, or
          how I operate. Portuguese versions swap <code>/en/</code> for{" "}
          <code>/pt/</code>.
        </p>

        <div className="mb-12">
          <a
            href="/llms.txt"
            className="inline-block px-5 py-3 rounded-full text-sm font-mono border border-white/15 text-white/90 hover:border-white/40 transition-colors"
          >
            allankirsten.com/llms.txt
          </a>
        </div>

        <p className="text-xs tracking-[0.25em] uppercase text-white/30 mb-3">
          Pages
        </p>
        <div className="mb-10 font-mono text-sm">
          {pages.map((p) => (
            <a key={p.slug} href={`/ai/en/${p.slug}`} className={linkStyle}>
              /ai/en/{p.slug}
            </a>
          ))}
        </div>

        <p className="text-xs tracking-[0.25em] uppercase text-white/30 mb-3">
          Cases
        </p>
        <div className="mb-12 font-mono text-sm">
          {cases.map((c) => (
            <a
              key={c.slug}
              href={`/ai/en/cases/${c.slug}`}
              className={linkStyle}
            >
              /ai/en/cases/{c.slug}
            </a>
          ))}
        </div>

        <div className="flex gap-6 text-sm">
          <a
            href={`mailto:${site.contact.email}`}
            className="text-white/50 hover:text-white transition-colors"
          >
            {site.contact.email}
          </a>
          <Link href="/" className="text-white/50 hover:text-white transition-colors">
            ← home
          </Link>
        </div>
      </div>
    </main>
  );
}
