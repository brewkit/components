import React from 'react';
import { select, number } from '@storybook/addon-knobs';
import Flag from '@components/Flag';
import Progress from '@components/Progress';
import { Colors, Sizes } from '@components/Progress/types';
import { Variants } from './types';


export default {
    component: Progress.Circular,
    parameters: {
        componentSubtitle: <Flag color="success">Stable</Flag>,
    },
    title: 'Stable|Feedback/Progress/Circular',
};


export const General = (): React.ReactElement => {

    const color: Colors = select('color', [
        'primary',
        'secondary',
        'success',
        'danger',
        'warning',
        'info',
        'light',
        'dark',
    ], 'primary');
    const size: Sizes = select('size', [
        'small',
        'medium',
        'large',
        'inherit',
    ], 'inherit');
    const variant: Variants = select('variant', ['indeterminate', 'determinate', 'static'], 'indeterminate');
    const value: number = number('value', 40);

    return (
        <Progress.Circular color={color} size={size} value={value} variant={variant} />
    );
};


export const Default = (): React.ReactElement => <Progress.Circular />;
export const Indeterminate = (): React.ReactElement => <Progress.Circular variant="indeterminate" />;
export const Determinate = (): React.ReactElement => <Progress.Circular value={30} variant="determinate" />;
export const Static = (): React.ReactElement => <Progress.Circular value={40} variant="static" />;
