import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Staging preview of the nav-poc rebuild, proxied in as-is at /2026.
  // Purely additive: doesn't touch any existing route on this site.
  async rewrites() {
    return [
      { source: "/2026", destination: "https://allankirsten-nav-poc.vercel.app/2026" },
      { source: "/2026/:path*", destination: "https://allankirsten-nav-poc.vercel.app/2026/:path*" },
    ];
  },
};

export default nextConfig;
