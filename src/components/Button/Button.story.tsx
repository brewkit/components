import * as React from 'react';
import { Story } from '@storybook/react';
import ArrowBack from '@material-ui/icons/ArrowBack';
import AddCircleOutline from '@material-ui/icons/AddCircleOutline';
import { ButtonProps } from './Button.types';

/**
 * This is an annoying hack to get Storybook to properly parse the documentation when the underlying component
 * is wrapped in a HOC. Expect to do/see this on every component with MUI theming options.
 */
import { Button } from './Button';

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

export const Sandbox: Story<ButtonProps> = function sandbox(args) {
    return <Button {...args} />;
};

Sandbox.args = {
    ...defaultArgs,
    color: 'primary',
};

export const General: Story<ButtonProps> = function storyGeneral(args) {
    return <Button {...args} />;
};

General.args = {
    ...defaultArgs,
    color: 'primary',
    variant: 'text',
};

export const WithStartIcon: Story<ButtonProps> = function storyWithStartIcon(
    args,
) {
    return <Button {...args} />;
};

WithStartIcon.args = {
    ...defaultArgs,
    color: 'primary',
    startIcon: <ArrowBack />,
};

export const WithEndIcon: Story<ButtonProps> = function storyWithEndIcon(args) {
    return <Button {...args} />;
};

WithEndIcon.args = {
    ...defaultArgs,
    color: 'primary',
    endIcon: <AddCircleOutline />,
};

export const OnlyIcon: Story<ButtonProps> = function storyOnlyIcon(args) {
    return <Button {...args} />;
};

OnlyIcon.args = {
    ...defaultArgs,
    color: 'primary',
    children: <AddCircleOutline />,
};

export const Disabled: Story<ButtonProps> = function storyDisabled(args) {
    return <Button {...args} />;
};

Disabled.args = {
    ...defaultArgs,
    color: 'primary',
    disabled: true,
};

export const Loading: Story<ButtonProps> = function storyLoading(args) {
    return <Button {...args} />;
};

Loading.args = {
    ...defaultArgs,
    color: 'primary',
    disabled: true,
    loading: true,
};
