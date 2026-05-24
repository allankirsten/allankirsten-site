import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";
import { getProject, projects } from "@/lib/projects";

export async function generateStaticParams() {
  return projects
    .filter((p) => !p.soon)
    .map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return {
    title: `${project.title} — Allan Kirsten`,
    description: project.tagline ?? project.overview?.split("\n")[0],
  };
}

export default async function WorkPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const related = project.related
    ?.map((s) => getProject(s))
    .filter(Boolean) as typeof projects;

  return (
    <>
      <Nav />

      {/* ── Header ─────────────────────────────────────────────── */}
      <section
        className="relative flex items-end pb-16 pt-40 px-8 overflow-hidden"
        style={{
          minHeight: "60vh",
          backgroundColor: project.type === "case-study" ? project.color : "var(--color-bg-mid)",
        }}
      >
        {project.type === "case-study" && (
          <div className="absolute inset-0">
            <Image
              src={project.thumbnail}
              alt={project.title}
              fill
              priority
              className="object-cover opacity-30"
            />
          </div>
        )}
        <div className="relative z-10 max-w-4xl mx-auto w-full">
          <p
            className="text-xs font-medium tracking-widest uppercase mb-4"
            style={{ color: "var(--color-accent)" }}
          >
            {project.type === "case-study" ? "Recent work" : project.category}
          </p>
          <h1
            className="font-semibold leading-tight mb-4"
            style={{
              fontSize: "clamp(40px, 7vw, 80px)",
              color: project.type === "case-study" ? "#ffffff" : "var(--color-dark)",
            }}
          >
            {project.title}
          </h1>
          {project.tagline && (
            <p
              className="font-medium mb-3"
              style={{
                fontSize: "clamp(16px, 2vw, 24px)",
                color: project.type === "case-study" ? "var(--color-accent)" : "var(--color-muted)",
              }}
            >
              {project.tagline}
            </p>
          )}
          <p
            className="text-sm font-medium tracking-widest uppercase"
            style={{
              color: project.type === "case-study" ? "rgba(255,255,255,0.55)" : "var(--color-muted)",
            }}
          >
            {project.services}
          </p>
        </div>
      </section>

      {/* ── Content ────────────────────────────────────────────── */}
      <article className="py-20 px-8">
        <div className="max-w-3xl mx-auto">

          {/* Overview */}
          {project.overview && (
            <div className="mb-16">
              <h2
                className="text-xs font-medium tracking-widest uppercase mb-4"
                style={{ color: "var(--color-muted)" }}
              >
                Overview
              </h2>
              {project.overview.split("\n\n").map((para, i) => (
                <p
                  key={i}
                  className="text-base leading-relaxed mb-4"
                  style={{ color: "var(--color-text)" }}
                >
                  {para}
                </p>
              ))}
            </div>
          )}

          {/* Sections */}
          {project.sections?.map((section) => (
            <div key={section.heading} className="mb-14">
              <h2
                className="text-xs font-medium tracking-widest uppercase mb-5"
                style={{ color: "var(--color-muted)" }}
              >
                {section.heading}
              </h2>
              {Array.isArray(section.body) ? (
                <ul className="space-y-3">
                  {section.body.map((item, i) => (
                    <li
                      key={i}
                      className="flex gap-3 text-base leading-relaxed"
                      style={{ color: "var(--color-text)" }}
                    >
                      <span style={{ color: "var(--color-accent)", flexShrink: 0 }}>—</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              ) : (
                section.body.split("\n\n").map((para, i) => (
                  <p
                    key={i}
                    className="text-base leading-relaxed mb-4"
                    style={{ color: "var(--color-text)" }}
                  >
                    {para}
                  </p>
                ))
              )}
            </div>
          ))}

          {/* Thanks */}
          {project.thanks && project.thanks.length > 0 && (
            <div className="mt-16 pt-10 border-t" style={{ borderColor: "var(--color-bg-light)" }}>
              <h2
                className="text-xs font-medium tracking-widest uppercase mb-6"
                style={{ color: "var(--color-muted)" }}
              >
                Special thanks to
              </h2>
              <div className="space-y-4">
                {project.thanks.map((t) => (
                  <div key={t.label}>
                    <p
                      className="text-xs font-semibold tracking-widest uppercase mb-1"
                      style={{ color: "var(--color-text)" }}
                    >
                      {t.label}
                    </p>
                    <p className="text-sm" style={{ color: "var(--color-muted)" }}>
                      {t.names}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </article>

      {/* ── Related ────────────────────────────────────────────── */}
      {related && related.length > 0 && (
        <section className="py-16 px-8" style={{ backgroundColor: "var(--color-bg-light)" }}>
          <div className="max-w-4xl mx-auto">
            <p
              className="text-xs font-medium tracking-widest uppercase mb-8"
              style={{ color: "var(--color-muted)" }}
            >
              More like this
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {related.map((p) => (
                <Link
                  key={p.slug}
                  href={`/work/${p.slug}`}
                  className="group block rounded-sm overflow-hidden"
                  style={{ backgroundColor: p.color }}
                >
                  <div className="relative" style={{ aspectRatio: "16/10" }}>
                    <Image
                      src={p.thumbnail}
                      alt={p.title}
                      fill
                      className="object-cover opacity-50 transition-opacity duration-300 group-hover:opacity-70"
                    />
                  </div>
                  <div className="p-4">
                    <p className="text-xs font-medium tracking-widest uppercase mb-1" style={{ color: "var(--color-accent)" }}>
                      {p.services}
                    </p>
                    <p className="text-sm font-semibold" style={{ color: "#ffffff" }}>
                      {p.title}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <Footer />
    </>
  );
}
