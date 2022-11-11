/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  /* //just playing with redirects
  async redirects() {
    return [
      {
        source: '/',
        destination: '/home',
        permanent: true,
        basePath: false
      }
    ]
  }*/
}

module.exports = nextConfig
