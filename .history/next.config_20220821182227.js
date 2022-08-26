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
