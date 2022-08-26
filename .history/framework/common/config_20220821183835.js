
const path = require("path");
const merge = require("deepmerge")

function withFramewordConfig(defaulrConfig = {}) {
    const framework = "shopify";
    const frameworkNextConfig = path.join("../", framework, "next.config");
}