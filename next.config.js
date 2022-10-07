/** @type {import('next').NextConfig} */
const { withFrameworkConfig } = require("./framework/common/config")
const { projectLocale } = require("./framework/common/locale")

const nextConfig = withFrameworkConfig({
  reactStrictMode: true,
  swcMinify: true,
  framework: {
    name: "shopify"
  },
  i18n: {
    locales: projectLocale,
    defaultLocale: projectLocale[0]
  }
})

module.exports = nextConfig
