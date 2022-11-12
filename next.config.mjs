/** @type {import('next').NextConfig} */

const isGithubActions = process.env.GITHUB_ACTIONS || false
const isDev = process.env.NODE_ENV == 'development'


let nextConfig = {};
let assetPrefix = ''
let basePath = '/'

if (isDev) {
  nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
  }
} else if (isGithubActions) {
  const repo = process.env.GITHUB_REPOSITORY.replace(/.*?\//, '')

  assetPrefix = `/${repo}/`
  basePath = `/${repo}`
  
  nextConfig = {
    images: {
      loader: 'imgix',
      path: 'https://wforbes.imgix.net'
    },
    assetPrefix,
    basePath
  }
}

export default nextConfig
