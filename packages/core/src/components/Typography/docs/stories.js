/** @flow */


import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, select, text, boolean } from '@storybook/addon-knobs';
import Divider from '../../Divider';
import Typography from '../index';
import notes from './notes.md';


const stories = storiesOf('Components|Display', module);
const componentName = 'Typography';

stories.addDecorator(withKnobs).addParameters({ jest: [componentName] });

stories.add(componentName, () => {

    const align = select('align', ['inherit', 'left', 'center', 'right', 'justify'], 'inherit');
    const children = text('children', 'Lorem ipsum dolor sit amet.');
    const color = select('color', ['initial', 'primary', 'secondary', 'tertiary', 'success', 'warning', 'info', 'danger'], 'initial');
    const display = select('display', ['initial', 'block', 'inline', 'inline-block'], 'initial');
    const hasBottomMargin = boolean('hasBottomMargin', true);
    const shouldTruncate = boolean('shouldTruncate', false);
    const variant = select('variant', ['h1', 'h2', 'h3', 'body1', 'body2', 'label', 'inherit'], 'h1');

    return (
        <React.Fragment>
            <Typography
                align={align}
                color={color}
                display={display}
                hasBottomMargin={hasBottomMargin}
                shouldTruncate={shouldTruncate}
                variant={variant}
            >
                {children}
            </Typography>
            <Typography variant="body1" shouldTruncate={shouldTruncate} hasBottomMargin={hasBottomMargin}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu ante hendrerit, imperdiet lectus in,
                egestas nulla. Donec molestie congue nulla sit amet viverra. Duis dignissim mi eget ex dignissim, id
                feugiat risus dapibus. Ut auctor imperdiet turpis, vel mollis dolor sollicitudin in. Quisque ut dui
                luctus, tincidunt mauris eu, congue quam. Quisque sodales, nisi sit amet sagittis consequat, dui purus
                tincidunt lorem, ac pulvinar lacus nunc at sapien. Ut quis erat convallis, pellentesque ligula sed,
                imperdiet tortor. Curabitur tempor felis et metus consequat, pellentesque hendrerit diam consequat.
                Praesent malesuada faucibus augue, ut vulputate est ullamcorper a. Curabitur metus orci, efficitur at
                congue ac, pretium eu nisl. In urna velit, ultrices ac ante eget, eleifend accumsan leo. Morbi gravida
                lobortis viverra. Sed porta nunc in imperdiet efficitur.
            </Typography>

            <Divider>Examples</Divider>

            <Typography variant="h1" shouldTruncate hasBottomMargin>
                H1 - Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </Typography>
            <Typography variant="h2" shouldTruncate hasBottomMargin>
                H2 - Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </Typography>
            <Typography variant="h3" shouldTruncate hasBottomMargin>
                H3 - Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </Typography>
            <Typography variant="body1" as="p" shouldTruncate hasBottomMargin>
                body1 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu ante hendrerit, imperdiet lectus in,
                egestas nulla. Donec molestie congue nulla sit amet viverra. Duis dignissim mi eget ex dignissim, id
                feugiat risus dapibus. Ut auctor imperdiet turpis, vel mollis dolor sollicitudin in.
            </Typography>
            <Typography variant="body2" as="p" shouldTruncate hasBottomMargin>
                body1 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu ante hendrerit, imperdiet lectus in,
                egestas nulla. Donec molestie congue nulla sit amet viverra. Duis dignissim mi eget ex dignissim, id
                feugiat risus dapibus. Ut auctor imperdiet turpis, vel mollis dolor sollicitudin in.
            </Typography>
            <Typography variant="label" as="p" shouldTruncate hasBottomMargin>
                label - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu ante hendrerit, imperdiet lectus in,
                egestas nulla. Donec molestie congue nulla sit amet viverra. Duis dignissim mi eget ex dignissim, id
                feugiat risus dapibus. Ut auctor imperdiet turpis, vel mollis dolor sollicitudin in.
            </Typography>
        </React.Fragment>
    );

}, { notes: { markdown: notes } });
