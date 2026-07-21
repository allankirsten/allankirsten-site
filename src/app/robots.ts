import type { MetadataRoute } from "next";

const SITE = process.env.NEXT_PUBLIC_SITE_URL || "https://allankirsten.com";

/**
 * Explicitly allow known AI crawlers (in addition to the default `*` allow).
 * Absence of a blocking rule already means "allowed", but naming these
 * out loud is a clear, checkable signal of intent.
 */
// /2026 is a staging preview of the site rebuild, proxied in via rewrite —
// keep it out of the index until it's promoted to the root domain.
const NOT_YET = "/2026";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/", disallow: NOT_YET },
      { userAgent: "GPTBot", allow: "/", disallow: NOT_YET },
      { userAgent: "ChatGPT-User", allow: "/", disallow: NOT_YET },
      { userAgent: "ClaudeBot", allow: "/", disallow: NOT_YET },
      { userAgent: "Claude-Web", allow: "/", disallow: NOT_YET },
      { userAgent: "anthropic-ai", allow: "/", disallow: NOT_YET },
      { userAgent: "PerplexityBot", allow: "/", disallow: NOT_YET },
      { userAgent: "Perplexity-User", allow: "/", disallow: NOT_YET },
      { userAgent: "Google-Extended", allow: "/", disallow: NOT_YET },
      { userAgent: "OAI-SearchBot", allow: "/", disallow: NOT_YET },
      { userAgent: "Applebot-Extended", allow: "/", disallow: NOT_YET },
      { userAgent: "Bytespider", allow: "/", disallow: NOT_YET },
      { userAgent: "CCBot", allow: "/", disallow: NOT_YET },
    ],
    sitemap: `${SITE}/sitemap.xml`,
  };
}
