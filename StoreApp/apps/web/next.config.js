/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['@repo/utils'],
  experimental: {
    appDir: true
  },
  distDir: '.next',
  dir: 'src'
};

export default nextConfig;
