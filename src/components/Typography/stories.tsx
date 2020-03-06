import React from 'react';
import { text, select, boolean } from '@storybook/addon-knobs';
import Flag from '@components/Flag';
import Typography from '@components/Typography';
import { Variants, Colors, Alignments, Displays } from './types';


export default {
    component: Typography,
    parameters: {
        componentSubtitle: <Flag color="success">Stable</Flag>,
    },
    title: 'Stable|Data Display/Typography',
};


export const Sandbox = (): React.ReactElement => {
    const align: Alignments = select('align', ['inherit', 'left', 'center', 'right', 'justify'], 'inherit');
    const children: React.ReactNode = text('children', 'Lorem ipsum dolor sit amet.');
    const color: Colors = select('color', [
        'inherit',
        'primary',
        'secondary',
        'tertiary',
        'success',
        'warning',
        'info',
        'danger',
    ], 'inherit');
    const display: Displays = select('display', ['initial', 'block', 'inline'], 'initial');
    const shouldTruncate = boolean('shouldTruncate', false);
    const variant: Variants = select('variant', [
        'h1',
        'h2',
        'h3',
        'h4',
        'h5',
        'h6',
        'body1',
        'body2',
        'subtitle1',
        'subtitle2',
        'caption',
        'button',
        'srOnly',
        'inherit',
    ], 'h1');

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


export const General = (): React.ReactElement => (
    <div style={{ maxWidth: '100%' }}>
        <Typography>
            Default Settings - Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </Typography>
    </div>
);

export const Headers = (): React.ReactElement => (
    <div style={{ maxWidth: '100%' }}>
        <Typography hasGutter shouldTruncate variant="h1">
            H1 - Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </Typography>
        <Typography hasGutter shouldTruncate variant="h2">
            H2 - Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </Typography>
        <Typography hasGutter shouldTruncate variant="h3">
            H3 - Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </Typography>
        <Typography hasGutter shouldTruncate variant="h4">
            H4 - Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </Typography>
        <Typography hasGutter shouldTruncate variant="h5">
            H5 - Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </Typography>
        <Typography hasGutter shouldTruncate variant="h6">
            H6 - Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </Typography>
    </div>
);


export const Paragraphs = (): React.ReactElement => (
    <React.Fragment>
        <Typography hasGutter variant="body1">
            body1 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu ante hendrerit, imperdiet lectus in,
            egestas nulla. Donec molestie congue nulla sit amet viverra. Duis dignissim mi eget ex dignissim, id
            feugiat risus dapibus. Ut auctor imperdiet turpis, vel mollis dolor sollicitudin in.
        </Typography>
        <Typography variant="body2">
            body2 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu ante hendrerit, imperdiet lectus in,
            egestas nulla. Donec molestie congue nulla sit amet viverra. Duis dignissim mi eget ex dignissim, id
            feugiat risus dapibus. Ut auctor imperdiet turpis, vel mollis dolor sollicitudin in.
        </Typography>
    </React.Fragment>
);


export const Truncated = (): React.ReactElement => (
    <Typography shouldTruncate variant="body1">
        body1 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu ante hendrerit, imperdiet lectus in,
        egestas nulla. Donec molestie congue nulla sit amet viverra. Duis dignissim mi eget ex dignissim, id
        feugiat risus dapibus. Ut auctor imperdiet turpis, vel mollis dolor sollicitudin in.
    </Typography>
);
