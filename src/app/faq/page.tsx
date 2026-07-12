import type { Metadata } from "next";
import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Questions people ask — Allan Kirsten",
  description:
    "Straight answers to what founders and senior designers usually ask before a call with Allan Kirsten.",
};

const founderFaqs = [
  {
    q: "Why would I need product and design leadership instead of just more designers?",
    a: "A designer ships screens. Leadership reduces uncertainty. I come in when the problem is not making the interface, it is deciding which interface to make, why, and how to measure if it worked. At Bipa that turned into 29.9% approval on the organic signup versus 12.8% on the flow everyone assumed was better. The difference was not design, it was testing the assumption before scaling it.",
  },
  {
    q: "You are a designer. Can you really move product and growth numbers?",
    a: "I can, and I have it documented. Bipa in 4 months: 93 pull requests, web signup 2.3x more efficient on organic, SEO and GEO from zero with GEO ahead of 10 competitors. Easy Carros: deploy from 1 to 8 times a month, lead time from 22 to 9 days. Not an opinion about growth, growth delivered.",
  },
  {
    q: "What stage do I fit best?",
    a: "High ambiguity, early stage to Series B, where every decision still really matters. Lean team, complex product, little room for error: that's where I have the most range and historically deliver the most value. My career pattern is walking into chaos and creating order.",
  },
  {
    q: "Full-time or fractional? How does the engagement work?",
    a: "At early stage, one senior person covering strategy, research, design, data and code at the same time costs less and decides faster than staffing three hires before the product finds its shape. That's a phase-appropriate design, not a permanent model: once the internal team can carry the weight, the goal is to get off the critical path, not become a single point of failure. I document decisions and context in a versioned vault, navigable by any person or AI I point at it, and I help structure the team and career paths that hold the operation up after I'm gone.",
  },
  {
    q: "You code. Why does that matter to me?",
    a: "I write production code, SvelteKit and Rust. It matters because it closes the distance between design intent and what actually ships. Fewer handoffs, less translation noise, faster delivery. At Bipa that was 93 pull requests in 4 months. Not a designer who also codes, someone who operates at every layer because the problem demands it.",
  },
  {
    q: "What is the risk of bringing you in, and what do you not do?",
    a: "I am not a manager who sits in alignment meetings far from the work. I am not the person to run a stable product on autopilot. And I question assumptions, including yours, when the data points elsewhere. If you want execution with no pushback, I am not your person. Autonomy yes, blind obedience no.",
  },
  {
    q: "How do I know the results are real?",
    a: "Remessa Online: a US$229M exit to EBANX, with the design team I built from 1 to 12 people. Betterfly: 35 people across 4 countries integrated after an M&A wave. Those macro facts are externally checkable. The internal numbers in each case (PRs, conversion, interviews) I document with a source, but they come from my own voice, so I don't stop there: testimonials from people who worked with me, with name and role, back it up.",
  },
];

const designerFaqs = [
  {
    q: "What is it like to work with you?",
    a: "Empowerment over authority. Transparency, mutual accountability, context-driven decisions. I built a team from 1 to 12 at Remessa and led 35 people across 3 languages at Betterfly. I set up real career paths, with skill matrices from junior to lead, because predictable growth is what keeps good people.",
  },
  {
    q: "Are you still hands-on or has it turned into pure management?",
    a: "Hands-on on purpose. Wireframes, copy, code, deploy review. I could stay in alignment only and chose not to. That is what separates design leadership that works from the kind that became pure management. Impact is where the work happens.",
  },
  {
    q: "How do you treat research?",
    a: "Research is to decide, not to validate what I already decided. At Bipa I ran 40 Jobs-to-be-Done interviews myself, mapped progress forces and 5 clusters, and the structure became the team's permanent decision context. A user quote becomes copy and priority, not a pretty slide.",
  },
  {
    q: "What about design systems?",
    a: "At Betterfly I unified the design operations of 4 acquired companies into one. At Easy Carros I built a proprietary design system that lived alongside the legacy through a Strangler Pattern, with no downtime. A system is not a component library, it is the infrastructure that lets delivery scale without breaking.",
  },
  {
    q: "How do you measure the value of design?",
    a: "In numbers the business understands. At Xerpay I cut the user testing cycle from 1 month to under 1 week and used System Usability Scores to measure flow effectiveness. At Remessa, a screen redesign reduced support tickets and time to complete the operation. If design does not change what the business decides, it is decoration.",
  },
  {
    q: "What is your take on AI in design?",
    a: "AI as thinking infrastructure, not a crutch. Custom skills for Jobs-to-be-Done, writing, review and SEO. A persistent memory vault with hundreds of notes, inviolable principles and behavioral segmentation. And tracking of traffic coming from AIs in production, to close the loop. This site is part of that: content written to be read by machines too.",
  },
  {
    q: "Your design philosophy in one line?",
    a: "Design is not aesthetics, it is a business capability. And research without a decision is just an archive.",
  },
  {
    q: "Where are the screenshots of the projects?",
    a: "Under construction. This version of the site prioritized what actually decides first, the text, the numbers, the AI-readable layer, and left the visual polish of the galleries for after. The work is real whether the screen is live yet or not.",
  },
];

const allFaqs = [...founderFaqs, ...designerFaqs];

function FaqSection({ title, items }: { title: string; items: { q: string; a: string }[] }) {
  return (
    <div className="mb-16">
      <p
        className="text-xs font-medium tracking-widest uppercase mb-8"
        style={{ color: "var(--ds-accent)" }}
      >
        {title}
      </p>
      <div className="flex flex-col gap-10">
        {items.map((item) => (
          <div key={item.q}>
            <h3
              className="mb-2"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(1.125rem, 2vw, 1.375rem)",
                color: "var(--ds-text)",
              }}
            >
              {item.q}
            </h3>
            <p
              style={{
                fontSize: "0.9375rem",
                lineHeight: 1.7,
                color: "rgba(245,240,232,0.65)",
              }}
            >
              {item.a}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Faq() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: allFaqs.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Nav />
      <main
        className="px-8 pt-40 pb-24"
        style={{ background: "var(--ds-bg)", fontFamily: "var(--font-atkinson)" }}
      >
        <div className="max-w-3xl mx-auto">
          <p
            className="text-sm mb-4"
            style={{ color: "rgba(245,240,232,0.45)", letterSpacing: "0.02em" }}
          >
            Allan Kirsten
          </p>
          <h1
            className="mb-6"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2rem, 4vw, 2.75rem)",
              color: "var(--ds-text)",
              letterSpacing: "-0.01em",
            }}
          >
            Questions people ask
          </h1>
          <p
            className="mb-16"
            style={{ fontSize: "1.0625rem", lineHeight: 1.6, color: "rgba(245,240,232,0.65)" }}
          >
            If you are a founder, a CPO or a designer deciding whether to work with me, these
            are the questions that come up before any call.
          </p>

          <FaqSection title="For founders" items={founderFaqs} />
          <FaqSection title="For senior designers" items={designerFaqs} />
        </div>
      </main>
      <Footer />
    </>
  );
}
