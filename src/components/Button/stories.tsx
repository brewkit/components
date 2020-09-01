import * as React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { text, select, boolean } from '@storybook/addon-knobs';
import ArrowBack from '@material-ui/icons/ArrowBack';
import AddCircleOutline from '@material-ui/icons/AddCircleOutline';


/**
 * This is an annoying hack to get Storybook to properly parse the documentation when the underlying component
 * is wrapped in a HOC. Expect to do/see this on every component with MUI theming options.
 */
import { Button as Component } from './index';
import styles from './styles';
const Button = withStyles(styles)(Component)


export default {
    component: Component,
    title: 'Inputs/Button',
};


export const Sandbox = (): React.ReactElement => {

    const color = select('color', ['default', 'primary', 'secondary', 'inherit'], 'default');
    const disabled = boolean('disabled', false);
    const disableElevation = boolean('disableElevation', false);
    const fullWidth = boolean('fullWidth', false);
    const loading = boolean('loading', false);
    const variant = select('variant', ['contained', 'outlined', 'text'], 'text');
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
        <Button variant="contained" color="primary" disableElevation>Generic Button</Button>
        <Button variant="text" color="primary">Generic Button</Button>
    </div>
)


export const WithStartIcon = (): React.ReactElement => (
    <Button variant="contained" color="primary" disableElevation startIcon={<ArrowBack />}>Generic Button</Button>
)


export const WithEndIcon = (): React.ReactElement => (
    <Button variant="contained" color="primary" disableElevation endIcon={<AddCircleOutline />}>Generic Button</Button>
)


export const OnlyIcon = (): React.ReactElement => (
    <Button variant="contained" color="primary" disableElevation>
        <AddCircleOutline />
    </Button>
)


export const Disabled = (): React.ReactElement => (
    <div style={{ display: 'grid', gridAutoFlow: 'column', gridGap: '1rem' }}>
        <Button variant="contained" color="primary" disableElevation disabled>Generic Button</Button>
        <Button variant="text" color="primary" disabled>Generic Button</Button>
    </div>
)


export const Loading = (): React.ReactElement => (
    <div style={{ display: 'grid', gridAutoFlow: 'column', gridGap: '1rem' }}>
        <Button variant="contained" color="primary" disableElevation loading>Generic Button</Button>
        <Button variant="text" color="primary" loading>Generic Button</Button>
    </div>
)
