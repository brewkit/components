import React from 'react';
import { text, select, boolean } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { ArrowBack, AddCircleOutline } from '@material-ui/icons';
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


export const Sandbox = (): React.ReactElement => {
    const children: React.ReactNode = text('children', 'Click me!');
    const variant: Variants = select('variant', ['standard', 'text'], 'standard');
    const color: Colors = select('color', [
        'primary',
        'secondary',
        'success',
        'error',
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


export const General = (): React.ReactElement => <Button>Default</Button>;
export const Standard = (): React.ReactElement => <Button variant="standard">Click me!</Button>;
export const Text = (): React.ReactElement => <Button variant="text">Click me!</Button>;
export const WithStartIcon = (): React.ReactElement => <Button startIcon={<ArrowBack />}>Go Back</Button>;
export const WithEndIcon = (): React.ReactElement => <Button endIcon={<AddCircleOutline />}>Add Account</Button>;
export const OnlyIcon = (): React.ReactElement => <Button endIcon={<AddCircleOutline />} />;
export const Loading = (): React.ReactElement => <Button isLoading variant="standard">Click me!</Button>;
export const Fluid = (): React.ReactElement => <Button isFluid variant="standard">Click me!</Button>;
export const Compact = (): React.ReactElement => <Button isCompact variant="standard">Click me!</Button>;
export const Disabled = (): React.ReactElement => <Button isDisabled variant="standard">Click me!</Button>;
export const Link = (): React.ReactElement => <Button href="http://google.com">Go to Google</Button>;
