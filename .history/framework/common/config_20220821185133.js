
const path = require("path")
const merge = require("deepmerge")


function withFrameworkConfig(defaulrConfig = {}) {

    const framework = "shopify"
    const bigcommerce = "bigcommerce"

    const frameworkNextConfig = require(path.join("../", framework, "next.config"))
    const config = merge(defaulrConfig, frameworkNextConfig)
    return config
}

module.exports = { withFrameworkConfig }