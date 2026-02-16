/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'images.pexels.com', pathname: '/**' },
    ],
  },
  experimental: {
    instrumentationHook: true,
  },
  async redirects() {
    return [
      { source: '/cercle-prive', destination: '/fr/reseau', permanent: true },
    ];
  },
};

module.exports = nextConfig;
