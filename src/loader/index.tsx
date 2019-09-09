const fs = require('fs');

const themeFile = '/.brewkit/theme.scss';

const projectRoot = process.cwd();
const path = projectRoot + themeFile;

module.exports = function(source) {

    if (fs.existsSync(path)) {
        if (String(source).includes('@import "../../styles/utilities";')) {
            return (
                `@import "${path}";\n` +
                source
            );
        }
    }

    return source;

};