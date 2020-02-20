import React, { ReactElement, ReactNode } from 'react';
import { StylesProvider } from '@material-ui/core/styles';
import { text, select, boolean } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import Icon from '@components/Icon';
import Button from './index';
import { Variants, Colors, Sizes } from './types';
import Flag from '@components/Flag';


export default {
    component: Button,
    parameters: {
        componentSubtitle: <Flag color="success">Stable</Flag>,
    },
    title: 'Stable|User Input/Button',
};


export const General = (): ReactElement => {
    const children: ReactNode = text('children', 'Click me!');
    const variant: Variants = select('variant', ['standard', 'text'], 'standard');
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
export const Text = (): ReactElement => <Button variant="text">Click me!</Button>;
export const WithStartIcon = (): ReactElement => <Button startIcon={<Icon>arrow_back</Icon>}>Go Back</Button>;
export const WithEndIcon = (): ReactElement => <Button endIcon={<Icon>add_circle_outline</Icon>}>Add Account</Button>;
export const OnlyIcon = (): ReactElement => <Button endIcon={<Icon>add_circle_outline</Icon>} />;
export const Loading = (): ReactElement => <Button isLoading variant="standard">Click me!</Button>;
export const Fluid = (): ReactElement => <Button isFluid variant="standard">Click me!</Button>;
export const Compact = (): ReactElement => <Button isCompact variant="standard">Click me!</Button>;
export const Disabled = (): ReactElement => <Button isDisabled variant="standard">Click me!</Button>;
