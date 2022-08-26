
const path = require("path")
const merge = require("deepmerge")


function withFrameworkConfig(defaultConfig = {}) {

    const framework = "shopify"
    const frameworkNextConfig = require(path.join("../", framework, "next.config"))
    const config = merge(defaultConfig, frameworkNextConfig)

    const tsConfig = require(path.join(path.join(process.cwd, "tsconfig.json")))

    return config
}

module.exports = { withFrameworkConfig }