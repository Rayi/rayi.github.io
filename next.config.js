/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    loader: 'custom',
    loaderFile: './timemit/image/loader.js',
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'timit.quanzi.io',
        port: '',
        pathname: '/**',
      },
    ],
  },
}

module.exports = nextConfig