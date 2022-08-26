
const path = require("path")
const merge = require("deepmerge")


function withFrameworkConfig(defaulrConfig = {}) {

    const framework = "shopify"
    const frameworkNextConfig = require(path.join("../", framework, "next.config"))
    console.log(frameworkNextConfig({}));
    const config = merge(defaulrConfig, frameworkNextConfig)
    return config
}

module.exports = { withFrameworkConfig }