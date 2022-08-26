
const path = require("path")
const merge = require("deepmerge")


function withFrameworkConfig(defaulrConfig = {}) {

    const framework = "bigcommerce"
    const frameworkNextConfig = require(path.join("../", framework, "next.config"))
    const config = merge(defaulrConfig, frameworkNextConfig)
    console.log("config: ", config);
    return config
}

module.exports = { withFrameworkConfig }