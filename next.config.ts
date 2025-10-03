import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  images: {
    unoptimized: true
  },
  assetPrefix: isProd ? '/multi-utility-tool/' : '',
  basePath: isProd ? '/multi-utility-tool' : '',
  output: 'export',
};

export default nextConfig;
