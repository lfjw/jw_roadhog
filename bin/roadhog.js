#!/usr/bin/env node

const spawn = require('cross-spawn');
const chalk = require('chalk');
const script = process.argv[2];
//node bin/roadhog.js -v
switch (script) {
    case "-v":
    case "--version":
        console.log(require("../package.json").version);
        break;
    case "build":
    case "server":
        result = spawn.sync(
            "node",
            [require.resolve(`../lib/${script}`)],
            { stdio: "inherit" }
        );
        process.exit(result.status);
        break;
    default:
        console.log(`Unknown script ${chalk.cyan(script)}.`);
        break;
}