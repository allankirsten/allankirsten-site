import type { NextConfig } from "next";

// GT Pilot (Lab) lives in the nav-poc app but is public on this domain. It was called Dial In until
// October 2026; the old addresses redirect permanently, except two the shipped 0.2.0 extension and
// cached pages still call directly: the signed update file and the waitlist endpoint.
const NAV_POC = "https://allankirsten-nav-poc.vercel.app/2026";
const OLD_KEEP = "(?!latest\\.json$|waitlist$)";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/lab/dial-in", destination: "/lab/gt-pilot", permanent: true },
      { source: "/en/lab/dial-in", destination: "/en/lab/gt-pilot", permanent: true },
      { source: `/lab/dial-in/:path(${OLD_KEEP}.*)`, destination: "/lab/gt-pilot/:path", permanent: true },
      { source: "/en/lab/dial-in/:path*", destination: "/en/lab/gt-pilot/:path*", permanent: true },
      { source: "/ai/pt/dial-in", destination: "/ai/pt/gt-pilot", permanent: true },
      { source: "/ai/en/dial-in", destination: "/ai/en/gt-pilot", permanent: true },
    ];
  },
  // The nav-poc rebuild is not public. This site only proxies in the pages already launched from it.
  async rewrites() {
    const gtPilot = ["/lab/gt-pilot", "/en/lab/gt-pilot", "/ai/en/gt-pilot", "/ai/pt/gt-pilot"];
    return {
      // beforeFiles so these win over this site's own /ai/[lang]/[slug] route.
      beforeFiles: [
        ...gtPilot.flatMap((p) => [
          { source: p, destination: `${NAV_POC}${p}` },
          { source: `${p}/:path*`, destination: `${NAV_POC}${p}/:path*` },
        ]),
        { source: "/lab/dial-in/latest.json", destination: `${NAV_POC}/lab/dial-in/latest.json` },
        { source: "/lab/dial-in/waitlist", destination: `${NAV_POC}/lab/dial-in/waitlist` },
      ],
      // The rest of the rebuild is not public yet: from /2026 only what the GT Pilot pages load
      // (build assets, its images, the logo/favicon, its pages and the waitlist). Anything else
      // under /2026 falls through to this site's 404. Test the full rebuild on its Vercel URL.
      afterFiles: [
        "/2026/_next/:path*",
        "/2026/images/lab/:path*",
        "/2026/logo-ak.png",
        "/2026/favicon.ico",
        "/2026/lab/gt-pilot",
        "/2026/lab/gt-pilot/:path*",
        "/2026/en/lab/gt-pilot",
        "/2026/en/lab/gt-pilot/:path*",
        "/2026/lab/dial-in/waitlist",
      ].map((source) => ({ source, destination: `${NAV_POC}${source.slice("/2026".length)}` })),
      fallback: [],
    };
  },
};

export default nextConfig;
