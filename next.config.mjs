/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  images: {
    //https://nextjs.org/blog/next-12-3#disable-image-optimization-stable
    unoptimized: true
  },
  assetPrefix: isProd ? "/nextjs-ts-practice/" : "",
  basePath: isProd ? "/nextjs-ts-practice" : "",
}

export default nextConfig
