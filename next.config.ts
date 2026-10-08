import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // The nav-poc rebuild is not public. This site only proxies in the pages already launched from it.
  async rewrites() {
    // Dial In (Lab) lives in the nav-poc app but is public on this domain. beforeFiles so these
    // win over this site's own /ai/[lang]/[slug] route.
    const NAV_POC = "https://allankirsten-nav-poc.vercel.app/2026";
    const dialIn = ["/lab/dial-in", "/en/lab/dial-in", "/ai/en/dial-in", "/ai/pt/dial-in"];
    return {
      beforeFiles: dialIn.flatMap((p) => [
        { source: p, destination: `${NAV_POC}${p}` },
        { source: `${p}/:path*`, destination: `${NAV_POC}${p}/:path*` },
      ]),
      // The rest of the rebuild is not public yet: from /2026 only what the Dial In pages load
      // (build assets, its images, the logo/favicon, its pages and the waitlist). Anything else
      // under /2026 falls through to this site's 404. Test the full rebuild on its Vercel URL.
      afterFiles: [
        "/2026/_next/:path*",
        "/2026/images/lab/:path*",
        "/2026/logo-ak.png",
        "/2026/favicon.ico",
        "/2026/lab/dial-in",
        "/2026/lab/dial-in/:path*",
        "/2026/en/lab/dial-in",
        "/2026/en/lab/dial-in/:path*",
      ].map((source) => ({ source, destination: `${NAV_POC}${source.slice("/2026".length)}` })),
      fallback: [],
    };
  },
};

export default nextConfig;
