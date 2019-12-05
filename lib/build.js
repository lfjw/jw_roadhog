const webpack = require("webpack");
const chalk = require("chalk");
function doneHandler(err, stats) {
    console.log(stats.toJson().assets);
}
function build() {
    let config = require("./config/webpack.config.prod");
    var compiler = webpack(config);
    compiler.run(doneHandler);
}
build();
