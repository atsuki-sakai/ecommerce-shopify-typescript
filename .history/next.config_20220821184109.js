/** @type {import('next').NextConfig} */
import { withFrameworkConfig } from './framework/common/config';

const nextConfig = withFrameworkConfig({
  reactStrictMode: true,
  swcMinify: true,
  i18n: {
    locales: ["ja","en-US"],
    defaultLocale: "ja"
  }
})

module.exports = nextConfig

console.log("next.config.js:", JSON.stringify(module.exports, null, 2));