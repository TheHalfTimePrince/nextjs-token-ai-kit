import type { NextConfig } from 'next';
const withMDX = require("@next/mdx")({
  options: {
    remarkPlugins: [
      require("remark-prism") as import("unified").PluggableList // Adding the type here
    ],
    rehypePlugins: [],
  },
});

const nextConfig: NextConfig = {
  experimental: {
    ppr: false,
    serverSourceMaps: false
  },
  productionBrowserSourceMaps: false,
  async rewrites() {
    return [
      {
        source: '/api/ai-apis/:path*',
        destination: 'http://localhost:8000/:path*', // Proxy to FastAPI within Docker network
      },
    ]
  },
};

export default withMDX(nextConfig);
