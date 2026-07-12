import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";
import PersonJsonLd from "@/components/PersonJsonLd";

const trackRecord = [
  "Helped rebrand and market MAR Ventures, a venture capital firm aimed at funding and developing Brazilian fintech startups. Structured design teams and operations for the VC's portfolio companies.",
  "Built and scaled design teams at multiple companies, including Xerpay, Betterfly, Finpass, and Remessa Online.",
  "Was part of Remessa Online's starting team. Saw the team grow from 10 to more than 300 employees and successfully exited the company after it was acquired by Ebanx for $229M.",
  "Scaled result-driven design operations at Xerpay. Streamlined product testing, implemented System Usability Scores to measure the effectiveness of user flows, and leveraged Atomic Research principles to document and share insights from user research.",
];

const highlights = [
  {
    title: "Strategic Leadership & Vision",
    body: "I excel at identifying patterns and crafting innovative solutions, transforming complex scenarios into clear, effective strategies that drive business and user value.",
  },
  {
    title: "Building Authentic Relationships",
    body: "Success is built on trust and genuine connections. My ability to foster strong relationships with colleagues, stakeholders, and clients has been instrumental in creating collaborative environments where everyone thrives.",
  },
  {
    title: "Competitive Drive & Achievement",
    body: "Motivated by setting challenging goals, I strive for excellence in all endeavors. This competitive spirit pushes me to exceed expectations and deliver results that make a tangible difference.",
  },
  {
    title: "Empowering Teams",
    body: "Embracing a leadership style that values empowerment over authority, I promote transparency, mutual accountability, and context-driven decision-making — enabling cross-functional teams to operate at their highest potential.",
  },
];

const testimonials = [
  {
    name: "Bruno Ribeiro",
    text: "Detail oriented, committed, highly creative and versatile. Allan is one of my favorite Art Directors. It&apos;s easy to work with this guy, and work with him is a great pleasure and a kind of assurance that the job will be fully well done.",
  },
  {
    name: "Raphael Farinazzo",
    text: "Allan is a true Designer who knows that nice layouts are just a consequence of awesome Design/Creative Thinking. He dives into User Experience and Interaction in its details. He is a team player with solutions that are both creative and within front-end&apos;s possibility.",
  },
  {
    name: "Fernando Ribas",
    text: "I had a chance to work with Allan and I can say that was a milestone in my career. As my supervisor, he was great, always helping the team by creating a very productive environment, leading us to the best results.",
  },
];

export default function About() {
  return (
    <>
      <PersonJsonLd />
      <Nav />

      {/* ── Header ─────────────────────────────────────────────── */}
      <section
        className="flex items-end pb-16 pt-40 px-8"
        style={{ backgroundColor: "var(--color-bg-mid)" }}
      >
        <div className="max-w-4xl mx-auto w-full">
          <h1
            className="font-semibold leading-none tracking-tight mb-3"
            style={{ fontSize: "clamp(48px, 8vw, 96px)", color: "var(--color-dark)" }}
          >
            About me
          </h1>
          <p
            className="font-medium"
            style={{ fontSize: "clamp(14px, 1.8vw, 20px)", color: "var(--color-accent)" }}
          >
            Strategic Thinker, Connector, and Startup Enthusiast
          </p>
        </div>
      </section>

      {/* ── Bio ────────────────────────────────────────────────── */}
      <section className="py-20 px-8">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          <div>
            <p
              className="text-base leading-relaxed mb-6"
              style={{ color: "var(--color-text)" }}
            >
              With over two decades of experience in design and product leadership, I&apos;ve not only
              shaped and scaled high-performing teams but also cultivated a culture of innovation and
              collaboration. My journey has been fueled by a passion for solving complex problems and a
              commitment to creating meaningful connections.
            </p>
            <p
              className="text-base leading-relaxed"
              style={{ color: "var(--color-text)" }}
            >
              I&apos;m dedicated to empowering early-stage startups to unlock their potential, driving
              scalability through efficient design, product strategy, and team alignment. My approach
              combines strategic thinking with a personal touch, focusing on measurable outcomes and
              authentic relationships.
            </p>
          </div>
          <div
            className="aspect-square rounded-sm"
            style={{ backgroundColor: "var(--color-bg-light)" }}
          />
        </div>
      </section>

      {/* ── Track Record ───────────────────────────────────────── */}
      <section className="py-20 px-8" style={{ backgroundColor: "var(--color-bg-light)" }}>
        <div className="max-w-4xl mx-auto">
          <h2
            className="text-xs font-medium tracking-widest uppercase mb-10"
            style={{ color: "var(--color-muted)" }}
          >
            Track Record
          </h2>
          <ul className="space-y-6">
            {trackRecord.map((item, i) => (
              <li
                key={i}
                className="flex gap-4 text-base leading-relaxed"
                style={{ color: "var(--color-text)" }}
              >
                <span style={{ color: "var(--color-accent)", flexShrink: 0, marginTop: "2px" }}>—</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── Highlights ─────────────────────────────────────────── */}
      <section className="py-20 px-8">
        <div className="max-w-4xl mx-auto">
          <h2
            className="text-xs font-medium tracking-widest uppercase mb-10"
            style={{ color: "var(--color-muted)" }}
          >
            Highlights
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {highlights.map((h) => (
              <div key={h.title}>
                <h3
                  className="text-base font-semibold mb-2"
                  style={{ color: "var(--color-dark)" }}
                >
                  {h.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--color-muted)" }}>
                  {h.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Testimonials ───────────────────────────────────────── */}
      <section className="py-20 px-8" style={{ backgroundColor: "var(--color-bg-light)" }}>
        <div className="max-w-4xl mx-auto">
          <h2
            className="text-xs font-medium tracking-widest uppercase mb-10"
            style={{ color: "var(--color-muted)" }}
          >
            What people say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {testimonials.map((t) => (
              <blockquote key={t.name}>
                <p
                  className="text-sm leading-relaxed mb-4"
                  style={{ color: "var(--color-text)" }}
                  dangerouslySetInnerHTML={{ __html: `"${t.text}"` }}
                />
                <cite
                  className="text-xs font-medium tracking-widest uppercase not-italic"
                  style={{ color: "var(--color-muted)" }}
                >
                  {t.name}
                </cite>
              </blockquote>
            ))}
          </div>
        </div>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(
              testimonials.map((t) => ({
                "@context": "https://schema.org",
                "@type": "Review",
                author: { "@type": "Person", name: t.name },
                itemReviewed: { "@type": "Person", name: "Allan Kirsten" },
                reviewBody: t.text.replace(/&apos;/g, "'"),
              }))
            ),
          }}
        />
      </section>

      <Footer />
    </>
  );
}
