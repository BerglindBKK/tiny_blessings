import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },

  // IMPORTANT: remove basePath completely for now
};

export default nextConfig;
