const fs = require('fs');
const path = require('path');
const prettier = require('prettier');

const SVGsDir = path.resolve(process.cwd(), './src/components/Icon/material-icons/src');
const outputDir = path.resolve(process.cwd(), './src/components/Icon/material-icons/dist');


// Loop through all the files in the SVG Directory
fs.readdir(SVGsDir, function (err, files) {

    let fileList = [];

    /** exit if there's an hasError */
    if (err) {
        console.error("Could not list the directory.", err);
        process.exit(1);
    }


    /** loop through each file with a .svg extension and convert it */
    files.forEach( (file, index) => {

        const isSVG = !!(file.match(/.+\.svg$/));
        if (!isSVG) return false;

        const fileName = file.replace(/(\.svg|outline-)/g, '');
        fileList.push(fileName);

        fs.readFile(`${SVGsDir}/${file}`, 'utf8', (err, data) => {
            if (err) throw err;
            let convertedFile = data;
            convertedFile = convertedFile.replace(/(<\/?svg.*?>)/gm, '');


            /** wrap in our component data */
            convertedFile = prettier.format((
                'import React from \'react\';\n\n' +
                'function SVG() {' +
                    'return (' +
                        '<React.Fragment>' +
                            `${convertedFile}` +
                        '</React.Fragment>' +
                    ');' +
                '}\n\n' +
                'export default SVG;'
            ), {
                parser: "babel",
                tabWidth: 4,
            });


            fs.writeFile(`${outputDir}/${fileName}.js`, convertedFile, (err, data) => {
                if (err) throw err;
            });

        });

    });

    /** write out a file that exports all our icon names for easy use in our stories */
    fs.writeFile(`${outputDir}/_list.ts`, (
        `const icons = ${JSON.stringify(fileList)};\n\nexport default icons;\n`
    ), (err, data) => {
        if (err) throw err;
    });

});
