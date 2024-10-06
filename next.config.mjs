/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
      return [
        {
          source: '/:hash([a-zA-Z0-9-_]{3,8})',
          destination: '/api/:hash',
        }
      ];
    },
  };
  
  export default nextConfig;
  