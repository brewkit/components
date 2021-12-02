

import * as React from 'react';
import { Story } from '@storybook/react';
import ArrowBack from '@material-ui/icons/ArrowBack';
import AddCircleOutline from '@material-ui/icons/AddCircleOutline';
import { ButtonProps } from './Button.types';

/**
 * This is an annoying hack to get Storybook to properly parse the documentation when the underlying component
 * is wrapped in a HOC. Expect to do/see this on every component with MUI theming options.
 */
import Button from '.';


export default {
    component: Button,
    title: 'Inputs/Button',
};

const defaultArgs = {
    disabled: false,
    disableElevation: true,
    fullWidth: false,
    children: 'I am button text',
};


export const Sandbox: Story<ButtonProps> = (args) => <Button {...args} />;

Sandbox.args = {
    ...defaultArgs,
    color: 'primary',
};


export const General: Story<ButtonProps> = (args) => <Button {...args} />;

General.args = {
    ...defaultArgs,
    color: 'primary',
    variant: 'text',
};


export const WithStartIcon: Story<ButtonProps> = (args) => <Button {...args} />;

WithStartIcon.args = {
    ...defaultArgs,
    color: 'primary',
    startIcon: <ArrowBack />,
};


export const WithEndIcon: Story<ButtonProps> = (args) => <Button {...args} />;

WithEndIcon.args = {
    ...defaultArgs,
    color: 'primary',
    endIcon: <AddCircleOutline />,
};


export const OnlyIcon: Story<ButtonProps> = (args) => <Button {...args} />;

OnlyIcon.args = {
    ...defaultArgs,
    color: 'primary',
    children: <AddCircleOutline />,
};


export const Disabled: Story<ButtonProps> = (args) => <Button {...args} />;

Disabled.args = {
    ...defaultArgs,
    color: 'primary',
    disabled: true,
};


export const Loading: Story<ButtonProps> = (args) => <Button {...args} />;

Loading.args = {
    ...defaultArgs,
    color: 'primary',
    disabled: true,
    loading: true,
};

