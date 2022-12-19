const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["flagicons.lipis.dev"],
  },
  sassOptions: {
    includePaths: [
      path.join(__dirname, "styles"),
    ],
    prependData: `
      @import "sassync";
      @import "styles/variables.scss";
      @import "styles/mixins.scss";
    `, // prepend _css variables in all css documents
  },
}

module.exports = nextConfig
