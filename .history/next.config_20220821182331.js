/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  i18n: {
    locales: ["ja","en-US"],
    defaultLocale: "ja"
  }
}

module.exports = nextConfig

console.log("next.config.js:", JSON.stringify(module.exports, null, 2));