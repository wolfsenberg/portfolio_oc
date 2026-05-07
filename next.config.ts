import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  assetPrefix: "https://storage.googleapis.com/YOUR_BUCKET_NAME",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
