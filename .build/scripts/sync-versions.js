const execa = require('execa');
const pjson = require('../../package.json');


execa.sync('npm', ['version', pjson.version], { cwd: './themes/', stdio: ["inherit", "inherit", "inherit"]});
