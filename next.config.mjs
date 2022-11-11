/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    //https://nextjs.org/blog/next-12-3#disable-image-optimization-stable
    unoptimized: true
  },
  assetPrefix: "/nextjs-ts-practice/",
  basePath: "/nextjs-ts-practice",
}

export default nextConfig
