const path = require("path");
module.exports = {
    entry: "./src/index.js",
    output: {
        path: path.resolve('dist'),
        filename: "[name].js"
    }
};