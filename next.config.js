/** @type {import('next').NextConfig} */
const { withFrameworkConfig } = require("./framework/common/config")
const { projectLocale } = require("./framework/common/locale")

module.exports = withFrameworkConfig({
  reactStrictMode: true,
  swcMinify: true,
  framework: {
    name: process.env.NEXT_PUBLIC_FRAMEWORK
  },
  i18n: {
    locales: projectLocale,
    defaultLocale: projectLocale[0]
  }
})

console.log("next.config: ",JSON.stringify(module.exports, null, 2))
