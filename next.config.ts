import type { NextConfig } from "next";

const output = (process.env.NEXT_OUTPUT || "export") as "export" | "standalone";

const nextConfig: NextConfig = {
  output,
  trailingSlash: true,
  // Set NEXT_PUBLIC_ASSET_PREFIX to your CDN URL (GCS bucket or CloudFront domain)
  assetPrefix: process.env.NEXT_PUBLIC_ASSET_PREFIX || undefined,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
