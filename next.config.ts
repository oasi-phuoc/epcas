import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/theorie/module/:path*",
        destination: "/logistique/theorie/module/:path*",
        permanent: false,
      },
      {
        source: "/theorie/:lessonId",
        destination: "/logistique/theorie/:lessonId",
        permanent: false,
      },
      {
        source: "/exercices/module/:path*",
        destination: "/logistique/exercices/module/:path*",
        permanent: false,
      },
      {
        source: "/exercices/lecon/:path*",
        destination: "/logistique/exercices/lecon/:path*",
        permanent: false,
      },
    ];
  },
  async headers() {
    return [
      {
        source: "/sw.js",
        headers: [
          { key: "Cache-Control", value: "no-cache, no-store, must-revalidate" },
          { key: "Service-Worker-Allowed", value: "/" },
        ],
      },
      {
        source: "/manifest.webmanifest",
        headers: [
          { key: "Content-Type", value: "application/manifest+json" },
        ],
      },
    ];
  },
};

export default nextConfig;
