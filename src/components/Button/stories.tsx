import * as React from 'react';
import { text, select, boolean } from '@storybook/addon-knobs';
import ArrowBack from '@material-ui/icons/ArrowBack';
import AddCircleOutline from '@material-ui/icons/AddCircleOutline';


/**
 * This is an annoying hack to get Storybook to properly parse the documentation when the underlying component
 * is wrapped in a HOC. Expect to do/see this on every component with MUI theming options.
 */
import { Button } from './index';


export default {
    component: Button,
    title: 'Inputs/Button',
};


export const Sandbox = (): React.ReactElement => {

    const color = select('color', ['default', 'primary', 'secondary', 'inherit'], 'primary');
    const disabled = boolean('disabled', false);
    const disableElevation = boolean('disableElevation', true);
    const fullWidth = boolean('fullWidth', false);
    const loading = boolean('loading', false);
    const variant = select('variant', ['contained', 'outlined', 'text'], 'contained');
    const size = select('size', ['large', 'medium', 'small'], 'medium');
    const children = text('children', 'default');

    return (
        <Button
            color={color}
            disabled={disabled}
            disableElevation={disableElevation}
            fullWidth={fullWidth}
            loading={loading}
            variant={variant}
            size={size}
            children={children}
        />
    );

};


export const General = (): React.ReactElement => (
    <div style={{ display: 'grid', gridAutoFlow: 'column', gridGap: '1rem' }}>
        <Button>Generic Button</Button>
        <Button variant="text">Generic Button</Button>
    </div>
)


export const WithStartIcon = (): React.ReactElement => (
    <Button startIcon={<ArrowBack />}>Generic Button</Button>
)


export const WithEndIcon = (): React.ReactElement => (
    <Button endIcon={<AddCircleOutline />}>Generic Button</Button>
)


export const OnlyIcon = (): React.ReactElement => (
    <Button>
        <AddCircleOutline />
    </Button>
)


export const Disabled = (): React.ReactElement => (
    <div style={{ display: 'grid', gridAutoFlow: 'column', gridGap: '1rem' }}>
        <Button disabled>Generic Button</Button>
        <Button variant="text" disabled>Generic Button</Button>
    </div>
)


export const Loading = (): React.ReactElement => (
    <div style={{ display: 'grid', gridAutoFlow: 'column', gridGap: '1rem' }}>
        <Button loading>Generic Button</Button>
        <Button variant="text" loading>Generic Button</Button>
    </div>
)
