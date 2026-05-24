import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";
import Link from "next/link";
import Image from "next/image";
import { recentWork, classicWork } from "@/lib/projects";

export default function Home() {
  return (
    <>
      <Nav />

      {/* ── Hero ───────────────────────────────────────────────── */}
      <section
        className="relative flex items-center justify-center overflow-hidden"
        style={{ height: "100svh", backgroundColor: "var(--color-bg-mid)" }}
      >
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <AKGeometric />
        </div>
        <div className="relative z-10 text-center px-8">
          <h1
            className="font-semibold leading-none tracking-tight"
            style={{
              fontSize: "clamp(56px, 10vw, 120px)",
              color: "#ffffff",
              mixBlendMode: "exclusion",
            }}
          >
            Allan Kirsten
          </h1>
          <h2
            className="mt-4 font-light"
            style={{
              fontSize: "clamp(14px, 1.8vw, 24px)",
              color: "#ffffff",
              mixBlendMode: "exclusion",
            }}
          >
            Creative Director · UX/UI Designer
          </h2>
        </div>
      </section>

      {/* ── Bio ────────────────────────────────────────────────── */}
      <section className="py-24 px-8" style={{ backgroundColor: "var(--color-bg)" }}>
        <div className="max-w-3xl mx-auto text-center">
          <p
            className="font-semibold leading-tight mb-6"
            style={{ fontSize: "clamp(24px, 3.5vw, 44px)", color: "var(--color-dark)" }}
          >
            From impossible to done by design.
          </p>
          <p className="text-base leading-relaxed" style={{ color: "var(--color-muted)" }}>
            In my 2-decade career, I&apos;ve consistently proven that when design leads, businesses win.
            I specialize in building lean design operations that scale efficiently, enhancing customer
            experiences, and using design to drive sustainable cost savings and competitive edge.
          </p>
          <Link
            href="/about"
            className="inline-block mt-8 text-xs font-medium tracking-widest uppercase transition-colors duration-200"
            style={{ color: "var(--color-accent)" }}
          >
            About me →
          </Link>
        </div>
      </section>

      {/* ── Recent Work ────────────────────────────────────────── */}
      <section className="py-24 px-8" style={{ backgroundColor: "var(--color-bg-light)" }}>
        <div className="max-w-6xl mx-auto">
          <p
            className="text-xs font-medium tracking-widest uppercase mb-2"
            style={{ color: "var(--color-muted)" }}
          >
            Recent work
          </p>
          <h2
            className="font-semibold mb-12"
            style={{ fontSize: "clamp(28px, 4vw, 48px)", color: "var(--color-dark)" }}
          >
            Latest challenges &amp; achievements
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {recentWork.map((project) => (
              <RecentCard key={project.slug} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Portfolio Grid ─────────────────────────────────────── */}
      <section>
        <div
          className="mb-8 pt-16 px-8"
        >
          <p
            className="text-xs font-medium tracking-widest uppercase mb-2 max-w-6xl mx-auto"
            style={{ color: "var(--color-muted)" }}
          >
            Selected work
          </p>
          <h2
            className="font-semibold max-w-6xl mx-auto"
            style={{ fontSize: "clamp(28px, 4vw, 48px)", color: "var(--color-dark)" }}
          >
            UX/UI & Digital
          </h2>
        </div>
        <div
          className="grid"
          style={{ gridTemplateColumns: "repeat(3, 1fr)" }}
        >
          {classicWork.map((project) => (
            <ClassicCard key={project.slug} project={project} />
          ))}
        </div>
      </section>

      <Footer />
    </>
  );
}

// ── Recent Work Card ──────────────────────────────────────────────────────────

function RecentCard({ project }: { project: (typeof recentWork)[0] }) {
  const inner = (
    <div
      className="group relative overflow-hidden rounded-sm"
      style={{ backgroundColor: project.color }}
    >
      <div
        className="relative w-full overflow-hidden"
        style={{ aspectRatio: "16 / 10" }}
      >
        <Image
          src={project.thumbnail}
          alt={project.title}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
        <div
          className="absolute inset-0"
          style={{ backgroundColor: project.color, opacity: 0.6 }}
        />
      </div>
      <div className="p-6">
        {project.soon && (
          <span
            className="inline-block text-[10px] font-medium tracking-widest uppercase px-2 py-0.5 rounded-full mb-3"
            style={{ backgroundColor: "rgba(0,0,0,0.15)", color: "rgba(255,255,255,0.6)" }}
          >
            Soon
          </span>
        )}
        <span
          className="block text-[10px] font-medium tracking-widest uppercase mb-1"
          style={{ color: "var(--color-accent)" }}
        >
          {project.services}
        </span>
        <span
          className="block text-lg font-semibold mb-2"
          style={{ color: "#ffffff" }}
        >
          {project.title}
        </span>
        <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.65)" }}>
          {project.tagline}
        </p>
      </div>
    </div>
  );

  if (project.soon) return <div>{inner}</div>;
  return <Link href={`/work/${project.slug}`}>{inner}</Link>;
}

// ── Classic Portfolio Card ────────────────────────────────────────────────────

function ClassicCard({ project }: { project: (typeof classicWork)[0] }) {
  return (
    <Link
      href={`/work/${project.slug}`}
      className="group relative block overflow-hidden"
      style={{ aspectRatio: "1 / 1", backgroundColor: project.color }}
    >
      <Image
        src={project.thumbnail}
        alt={project.title}
        fill
        sizes="(max-width: 768px) 100vw, 33vw"
        className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
      />
      <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-2 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 bg-gradient-to-t from-black/60 to-transparent">
        <span
          className="block text-[10px] font-medium tracking-widest uppercase mb-1"
          style={{ color: "var(--color-accent)" }}
        >
          {project.category}
        </span>
        <span className="block text-white text-sm font-semibold">{project.title}</span>
      </div>
    </Link>
  );
}

function AKGeometric() {
  return (
    <svg
      viewBox="0 0 1000 660"
      className="w-full h-full"
      style={{ maxWidth: "none" }}
      preserveAspectRatio="xMidYMid meet"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <polygon points="60,620 310,40 560,620" fill="#1a1a1a" />
      <polygon
        points="600,40 680,40 680,310 860,40 960,40 760,330 960,620 860,620 680,350 680,620 600,620"
        fill="#1a1a1a"
      />
    </svg>
  );
}
