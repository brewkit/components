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
    title: 'Stable|Feedback/Progress/Linear',
};


export const Sandbox = (): React.ReactElement => {

    const color: Colors = select('color', [
        'primary',
        'secondary',
        'success',
        'error',
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
    const variant: Variants = select('variant', ['indeterminate', 'determinate', 'buffer', 'query'], 'indeterminate');
    const value: number = number('value', 40);
    const bufferValue: number = number('bufferValue', 60);

    return (
        <Progress.Linear color={color} size={size} value={value} bufferValue={bufferValue} variant={variant} />
    );
};


export const General = (): React.ReactElement => <Progress.Linear />;
export const Indeterminate = (): React.ReactElement => <Progress.Linear variant="indeterminate" />;
export const Determinate = (): React.ReactElement => <Progress.Linear value={30} variant="determinate" />;
export const Buffer = (): React.ReactElement => <Progress.Linear value={40} valueBuffer={60} variant="buffer" />;
export const Query = (): React.ReactElement => <Progress.Linear variant="query" />;
