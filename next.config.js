/** @type {import('next').NextConfig} */
const path = require('path');

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['localhost', 'shopflo-strapi-cms.herokuapp.com', 'res.cloudinary.com'],
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
    prependData: `@import "abstracts/colors.scss"; @import "abstracts/media.scss";`
  }
}

module.exports = nextConfig
