import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Staging preview of the nav-poc rebuild, proxied in as-is at /2026.
  // Purely additive: doesn't touch any existing route on this site.
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
      afterFiles: [
        { source: "/2026", destination: NAV_POC },
        { source: "/2026/:path*", destination: `${NAV_POC}/:path*` },
      ],
      fallback: [],
    };
  },
};

export default nextConfig;
