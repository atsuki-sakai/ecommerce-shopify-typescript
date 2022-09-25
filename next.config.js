/** @type {import('next').NextConfig} */
const { withFrameworkConfig } = require("./framework/common/config")

const nextConfig = withFrameworkConfig({
  reactStrictMode: true,
  swcMinify: true,
  framework: {
    name: "shopify"
  },
  i18n: {
    locales: ["en","ja"],
    defaultLocale: "en"
  }
})

module.exports = nextConfig

console.log("next.config.js:", JSON.stringify(module.exports, null, 2));