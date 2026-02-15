/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
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
