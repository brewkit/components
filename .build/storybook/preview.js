import { configure, addDecorator } from '@storybook/react';
import StylesDecorator from './styles-decorator';


addDecorator(StylesDecorator);


configure(
    [
        // Ensure we load Intro First
        require.context('../../src/docs', true, /Intro.stories.mdx/),
        require.context('../../src/docs', true, /GettingStarted.stories.mdx/),
        require.context('../../src/docs', true, /Forms.stories.mdx/),
        require.context('../../src/docs', true, /BkOverrides.stories.mdx/),
        require.context('../../src', true, /(stories|story)\.(ts|tsx|mdx)$/),
    ],
    module
);
