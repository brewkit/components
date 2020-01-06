import React, { ReactElement, ReactNode } from 'react';
import { text, select, boolean } from '@storybook/addon-knobs';
import Label from '../Label';
import Typography from './index';
import { Variants, Colors, Alignments, Displays } from './types';


export default {
    component: Typography,
    parameters: {
        componentSubtitle: <Label color="success">Stable</Label>,
    },
    title: 'Components|Display/Typography',
};


export const General = (): ReactElement => {
    const align: Alignments = select('align', ['inherit', 'left', 'center', 'right', 'justify'], 'inherit');
    const children: ReactNode = text('children', 'Lorem ipsum dolor sit amet.');

    const color: Colors = select('color', [
        'initial',
        'primary',
        'secondary',
        'tertiary',
        'success',
        'warning',
        'info',
        'danger',
    ], 'initial');
    const display: Displays = select('display', ['initial', 'block', 'inline', 'inline-block'], 'initial');
    const shouldTruncate = boolean('shouldTruncate', false);
    const variant: Variants = select('variant', ['h1', 'h2', 'h3', 'body1', 'body2', 'label', 'inherit'], 'h1');

    return (
        <Typography
            align={align}
            color={color}
            display={display}
            shouldTruncate={shouldTruncate}
            variant={variant}
        >
            {children}
        </Typography>
    );
};


export const Default = (): ReactElement => (
    <div style={{ maxWidth: '100%' }}>
        <Typography>
            Default Settings - Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </Typography>
    </div>
);

export const Headers = (): ReactElement => (
    <div style={{ maxWidth: '100%' }}>
        <Typography shouldTruncate variant="h1">
                H1 - Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </Typography>
        <Typography shouldTruncate variant="h2">
                H2 - Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </Typography>
        <Typography shouldTruncate variant="h3">
                H3 - Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </Typography>
    </div>
);


export const Paragraphs = (): ReactElement => (
    <React.Fragment>
        <Typography as="p" variant="body1">
            body1 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu ante hendrerit, imperdiet lectus in,
            egestas nulla. Donec molestie congue nulla sit amet viverra. Duis dignissim mi eget ex dignissim, id
            feugiat risus dapibus. Ut auctor imperdiet turpis, vel mollis dolor sollicitudin in.
        </Typography>
        <Typography as="p" variant="body2">
            body1 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu ante hendrerit, imperdiet lectus in,
            egestas nulla. Donec molestie congue nulla sit amet viverra. Duis dignissim mi eget ex dignissim, id
            feugiat risus dapibus. Ut auctor imperdiet turpis, vel mollis dolor sollicitudin in.
        </Typography>
    </React.Fragment>
);


export const Truncated = (): ReactElement => (
    <Typography as="p" shouldTruncate variant="body1">
            body1 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu ante hendrerit, imperdiet lectus in,
            egestas nulla. Donec molestie congue nulla sit amet viverra. Duis dignissim mi eget ex dignissim, id
            feugiat risus dapibus. Ut auctor imperdiet turpis, vel mollis dolor sollicitudin in.
    </Typography>
);


export const Labels = (): ReactElement => (
    <Typography as="p" shouldTruncate variant="label">
            label - Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    </Typography>
);

