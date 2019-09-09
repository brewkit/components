import React from 'react';
import { text, select, boolean } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import Button from './index';


export default {
    title: 'Components|User Input/Button',
    component: Button,
    parameters: {
        componentSubtitle: 'Click. Click. Click.',
    },
};


export const general = () => {

    const children = text('children', 'Click me!');
    const variant = select('variant', ['standard', 'icon'], 'standard');
    const color = select('color', ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark', 'link'], 'primary');
    const size = select('size', ['small', 'medium', 'large'], 'medium');
    const isLoading = boolean('isLoading', false);
    const isCompact = boolean('isCompact', false);
    const isFluid = boolean('isFluid', false);
    const isCircular = boolean('isCircular', false);
    const disabled = boolean('disabled', false);

    return (
        <Button
            variant={variant}
            color={color}
            size={size}
            isCompact={isCompact}
            isFluid={isFluid}
            isCircular={isCircular}
            isLoading={isLoading}
            disabled={disabled}
            onClick={action('button-click')}
        >
            {children}
        </Button>
    );

};


export const standard = () => <Button variant="standard">Click me!</Button>;
export const icon = () => <Button variant="icon">360</Button>;
export const circular = () => <Button variant="icon" isCircular>add</Button>;
export const loading = () => <Button variant="standard" isLoading>Click me!</Button>;
export const fluid = () => <Button variant="standard" isFluid>Click me!</Button>;
export const compact = () => <Button variant="standard" isCompact>Click me!</Button>;
export const disabled = () => <Button variant="standard" disabled>Click me!</Button>;
