const fs = require('fs');

// DO NOT DELETE THIS FILE
// This file is used by build system to build a clean npm package with the compiled js files in the root of the package.
// It will not be included in the npm package.

function main() {
    fs.copyFileSync(__dirname + "/../package.json", __dirname + "/../dist/.package.json");
    fs.copyFileSync(__dirname + "/../LICENSE", __dirname + "/../dist/LICENSE");
    fs.copyFileSync(__dirname + "/../README.md", __dirname + "/../dist/README.md");
}

main();
