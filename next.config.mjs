/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/r/:hash([a-zA-Z0-9-_]{1,8})',
        destination: '/api/r/:hash',
      },
    ];
  },
};

export default nextConfig;
