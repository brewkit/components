const { createFilter } = require('rollup-pluginutils');

function stringRaw(opts = {}) {
    if (!opts.include) {
        throw Error('include option should be specified');
    }

    const filter = createFilter(opts.include, opts.exclude);

    return {
        name: 'string-raw',

        transform(code, id) {
            if (filter(id)) {
                return {
                    code: {
                        raw: `export default ${JSON.stringify(code)};`,
                    },
                    map: { mappings: '' },
                };
            }
        },
    };
}

module.exports = stringRaw;
