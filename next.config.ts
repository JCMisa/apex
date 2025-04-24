import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async headers() {
    console.log("CODESPACE_NAME:", process.env.CODESPACE_NAME);
    console.log("Using Headers:", [
      {
        key: "X-Forwarded-Host",
        value: `${process.env.CODESPACE_NAME}-3000.app.github.dev`,
      },
      {
        key: "Access-Control-Allow-Origin",
        value: `https://${process.env.CODESPACE_NAME}-3000.app.github.dev`,
      },
    ]);
    return [
      {
        source: "/(.*)",
        headers: process.env.CODESPACES
          ? [
              {
                key: "X-Forwarded-Host",
                value: `${process.env.CODESPACE_NAME}-3000.app.github.dev`,
              },
              {
                key: "Access-Control-Allow-Origin",
                value: `https://${process.env.CODESPACE_NAME}-3000.app.github.dev`,
              },
            ]
          : [],
      },
    ];
  },
  experimental: {
    serverActions: {
      allowedOrigins: [
        "localhost:3000",
        `${process.env.CODESPACE_NAME}-3000.app.github.dev`,
      ],
    },
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*",
      },
    ],
  },
};

export default nextConfig;
