/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/r/:hash([a-zA-Z0-9-_]{3,8})',
        destination: '/api/r/:hash',
      },
    ];
  },
};

export default nextConfig;
