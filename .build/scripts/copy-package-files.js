const fs = require('fs');
const path = require('path');


// DO NOT DELETE THIS FILE
// This file is used by build system to build a clean npm package with the compiled js files in the root of the package.
// It will not be included in the npm package.

const appDir = process.cwd();
const distDir = path.resolve(appDir, 'dist');

/**
 * clean the dist folder
 */
fs.rmdirSync(distDir, { recursive: true });
fs.mkdirSync(distDir);

/**
 * copy over our license and readme
 */
fs.copyFileSync(path.resolve(appDir, "LICENSE"), path.resolve(distDir, "LICENSE"));
fs.copyFileSync(path.resolve(appDir, "README.md"), path.resolve(distDir, "README.md"));
fs.copyFileSync(path.resolve(appDir, ".npmignore"), path.resolve(distDir, ".npmignore"));

/**
 * copy over our package.json and change 'private' to false to allow publishing
 */
const pjson = fs.readFileSync(path.resolve(appDir, "package.json"), 'utf8');
const result = pjson.replace(/"private": true/g, '"private": false');
fs.writeFileSync(`${distDir}/package.json`, result, 'utf8');
