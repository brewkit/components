import React, { ReactNode } from 'react';
import { text, select, boolean } from '@storybook/addon-knobs';
import Label from '../Label';
import Typography from './index';
import { Variants, Colors, Alignments, Displays } from './types';


export default {
    title: 'Components|Display/Typography',
    component: Typography,
    parameters: {
        componentSubtitle: <Label color="success">Stable</Label>,
    },
};


export const General = () => {
    const align: Alignments = select('align', ['inherit', 'left', 'center', 'right', 'justify'], 'inherit');
    const children: ReactNode = text('children', 'Lorem ipsum dolor sit amet.');
    const color: Colors = select('color', ['initial', 'primary', 'secondary', 'tertiary', 'success', 'warning', 'info', 'danger'], 'initial');
    const display: Displays = select('display', ['initial', 'block', 'inline', 'inline-block'], 'initial');
    const hasBottomMargin = boolean('hasBottomMargin', true);
    const shouldTruncate = boolean('shouldTruncate', false);
    const variant: Variants = select('variant', ['h1', 'h2', 'h3', 'body1', 'body2', 'label', 'inherit'], 'h1');

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
        </React.Fragment>
    );
};


export const Headers = () => (
    <React.Fragment>
        <div style={{ maxWidth: '100%' }}>
            <Typography variant="h1" shouldTruncate hasBottomMargin>
                H1 - Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </Typography>
            <Typography variant="h2" shouldTruncate hasBottomMargin>
                H2 - Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </Typography>
            <Typography variant="h3" shouldTruncate hasBottomMargin>
                H3 - Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </Typography>
        </div>
    </React.Fragment>
);


export const Paragraphs = () => (
    <React.Fragment>
        <Typography variant="body1" as="p" hasBottomMargin>
            body1 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu ante hendrerit, imperdiet lectus in,
            egestas nulla. Donec molestie congue nulla sit amet viverra. Duis dignissim mi eget ex dignissim, id
            feugiat risus dapibus. Ut auctor imperdiet turpis, vel mollis dolor sollicitudin in.
        </Typography>
        <Typography variant="body2" as="p" hasBottomMargin>
            body1 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu ante hendrerit, imperdiet lectus in,
            egestas nulla. Donec molestie congue nulla sit amet viverra. Duis dignissim mi eget ex dignissim, id
            feugiat risus dapibus. Ut auctor imperdiet turpis, vel mollis dolor sollicitudin in.
        </Typography>
    </React.Fragment>
);


export const Truncated = () => (
    <React.Fragment>
        <Typography variant="body1" as="p" shouldTruncate>
            body1 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu ante hendrerit, imperdiet lectus in,
            egestas nulla. Donec molestie congue nulla sit amet viverra. Duis dignissim mi eget ex dignissim, id
            feugiat risus dapibus. Ut auctor imperdiet turpis, vel mollis dolor sollicitudin in.
        </Typography>
    </React.Fragment>
);


export const Labels = () => (
    <React.Fragment>
        <Typography variant="label" as="p" shouldTruncate hasBottomMargin>
            label - Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </Typography>
    </React.Fragment>
);

