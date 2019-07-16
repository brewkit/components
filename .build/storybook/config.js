/** @flow */


import { configure, addParameters, addDecorator } from '@storybook/react';
import { withTests } from '@storybook/addon-jest';
import theme from './theme';
import results from '../jest/test-results.json';


const req = require.context('../../packages/core/src/components', true, /docs\/stories.js$/);


function loadStories() {
    req.keys().forEach(req)
}


addParameters({
    backgrounds: [
        { name: 'twitter', value: '#00aced' },
        { name: 'facebook', value: '#3b5998' },
    ],
    options: {
        sortStoriesByKind: true,
        theme,
    }
});


addDecorator(
    withTests({
        results,
        filesExt: '\/tests?.js$',
    })
);



configure(loadStories, module);
