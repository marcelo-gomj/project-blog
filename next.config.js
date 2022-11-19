/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  
  webpack( config, { dev, isServer }) {
    config.module.rules.push({
      test: /.svg$/,
      use: ['@svgr/webpack']
    })

    return config
  }
}

module.exports = nextConfig
