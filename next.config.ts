import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: { root: "/Users/jieun/Desktop/tasty-calendar" },
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "www.nongsaro.go.kr"
      }
    ]
  }
};

export default nextConfig;
