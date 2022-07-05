/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  basePath: '/movies',
  publicRuntimeConfig: {
    api_key: process.env.API_KEY
  },
  compiler: {
    styledComponents: true,
  }
}

module.exports = nextConfig
