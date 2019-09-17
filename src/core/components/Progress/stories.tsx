import React from 'react';
import { select } from '@storybook/addon-knobs';
import Progress from './index';


export default {
    title: 'Components|Display/Progress',
    component: Progress,
};


export const General = () => {
    const variant = select('variant', ['circular', 'horizontal'], 'horizontal');
    const color = select('color', ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark'], 'primary');
    const size = select('size', ['small', 'medium', 'large'], 'medium');

    return (
        <Progress
            variant={variant}
            color={color}
            size={size}
        />
    );
};


export const Horizontal = () => <Progress size="medium" />;
export const Circular = () => <Progress variant="circular" />;