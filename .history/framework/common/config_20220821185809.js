
const path = require("path")
const merge = require("deepmerge")


function withFrameworkConfig(defaultConfig = {}) {

    const framework = "bigcommerce"
    const frameworkNextConfig = require(path.join("../", framework, "next.config"))
    const config = merge(defaultConfig, frameworkNextConfig)
    console.log("config: ", config);
    return config
}

module.exports = { withFrameworkConfig }