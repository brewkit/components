import React, { ReactElement, ReactNode } from 'react';
import { text, select, boolean } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import Button from './index';
import { Variants, Colors, Sizes } from './types';
import Label from '../Label';


export default {
    component: Button,
    parameters: {
        componentSubtitle: <Label color="success">Stable</Label>,
    },
    title: 'Components|User Input/Button',
};


export const General = (): ReactElement => {
    const children: ReactNode = text('children', 'Click me!');
    const variant: Variants = select('variant', ['standard', 'icon'], 'standard');
    const color: Colors = select('color', [
        'primary',
        'secondary',
        'success',
        'danger',
        'warning',
        'info',
        'light',
        'dark',
        'link',
    ], 'primary');
    const size: Sizes = select('size', ['small', 'medium', 'large'], 'medium');
    const isLoading: boolean = boolean('isLoading', false);
    const isCompact: boolean = boolean('isCompact', false);
    const isFluid: boolean = boolean('isFluid', false);
    const isCircular: boolean = boolean('isCircular', false);
    const isDisabled: boolean = boolean('isDisabled', false);
    return (
        <Button
            color={color}
            isCircular={isCircular}
            isCompact={isCompact}
            isDisabled={isDisabled}
            isFluid={isFluid}
            isLoading={isLoading}
            onClick={action('button-click')}
            size={size}
            variant={variant}
        >
            {children}
        </Button>
    );
};


export const Default = (): ReactElement => <Button>Default</Button>;
export const Standard = (): ReactElement => <Button variant="standard">Click me!</Button>;
export const Icon = (): ReactElement => <Button variant="icon">360</Button>;
export const Circular = (): ReactElement => <Button isCircular variant="icon">add</Button>;
export const Loading = (): ReactElement => <Button isLoading variant="standard">Click me!</Button>;
export const Fluid = (): ReactElement => <Button isFluid variant="standard">Click me!</Button>;
export const Compact = (): ReactElement => <Button isCompact variant="standard">Click me!</Button>;
export const Disabled = (): ReactElement => <Button isDisabled variant="standard">Click me!</Button>;
