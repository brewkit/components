const fs = require('fs');

// DO NOT DELETE THIS FILE
// This file is used by build system to build a clean npm package with the compiled js files in the root of the package.
// It will not be included in the npm package.

function main() {

    const distFolder = __dirname + '/../dist';

    /**
     * clean the dist folder
     */
    fs.rmdirSync(distFolder, { recursive: true });
    fs.mkdirSync(distFolder);

    /**
     * copy over our license and readme
     */
    fs.copyFileSync(__dirname + "/../LICENSE", __dirname + "/../dist/LICENSE");
    fs.copyFileSync(__dirname + "/../README.md", __dirname + "/../dist/README.md");

    /**
     * copy over our package.json and change 'private' to false to allow publishing
     */
    fs.readFile(__dirname + "/../package.json", 'utf8', function (err,data) {
        if (err) return console.log(err);

        const result = data.replace(/"private": true/g, '"private": false');

        fs.writeFile(`${distFolder}/package.json`, result, 'utf8', function (err) {
            if (err) return console.log(err);
        });
    });

}

main();
