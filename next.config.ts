import type { NextConfig } from "next";

/**
 * INZOZI PARK — website configuration.
 *
 * `output: "export"` produces a fully static site in `out/` that can be
 * hosted anywhere (Vercel, Netlify, Cloudflare Pages, cPanel, Nginx…).
 */
const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    // Required for static export. Photography assets are optimised before
    // upload by the venue team; placeholders are lightweight SVGs.
    unoptimized: true,
  },
};

export default nextConfig;
