import type { NextConfig } from "next";

const repo = "website_tiny_blessings";

const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },

  basePath: `/${repo}`,
  assetPrefix: `/${repo}/`,
};

export default nextConfig;
