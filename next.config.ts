import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  assetPrefix: "https://storage.googleapis.com/geinel-portfolio",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
