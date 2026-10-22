/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
    inlineCss: true,
  },
  // Send noindex on every response (pages, API, images, static files)
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Robots-Tag", value: "noindex, nofollow, noarchive, nosnippet, noimageindex" },
        ],
      },
    ];
  },
};

export default nextConfig;
