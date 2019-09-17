import React, { ReactNode } from 'react';
import { text, select, boolean } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import Button from './index';
import { Variants, Colors, Sizes } from './types';
import Label from "../Label";


export default {
    title: 'Components|User Input/Button',
    component: Button,
    parameters: {
        componentSubtitle: <Label color="success">Stable</Label>,
    },
};


export const General = () => {
    const children: ReactNode = text('children', 'Click me!');
    const variant: Variants = select('variant', ['standard', 'icon'], 'standard');
    const color: Colors = select('color', ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark', 'link'], 'primary');
    const size: Sizes = select('size', ['small', 'medium', 'large'], 'medium');
    const isLoading: boolean = boolean('isLoading', false);
    const isCompact: boolean = boolean('isCompact', false);
    const isFluid: boolean = boolean('isFluid', false);
    const isCircular: boolean = boolean('isCircular', false);
    const disabled: boolean = boolean('disabled', false);
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


export const Default = () => <Button>Default</Button>;
export const Standard = () => <Button variant="standard">Click me!</Button>;
export const Icon = () => <Button variant="icon">360</Button>;
export const Circular = () => <Button variant="icon" isCircular>add</Button>;
export const Loading = () => <Button variant="standard" isLoading>Click me!</Button>;
export const Fluid = () => <Button variant="standard" isFluid>Click me!</Button>;
export const Compact = () => <Button variant="standard" isCompact>Click me!</Button>;
export const Disabled = () => <Button variant="standard" disabled>Click me!</Button>;
