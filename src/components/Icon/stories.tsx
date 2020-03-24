import React from 'react';
import { select } from '@storybook/addon-knobs';
import Icon from './index';
import Flag from '@components/Flag';
import { Colors as ColorOptions, Sizes as SizeOptions } from './types';


export default {
    component: Icon,
    parameters: {
        componentSubtitle: <Flag color="success">Stable</Flag>,
    },
    title: 'Stable|Data Display/Icons/Icon',
};


export const Sandbox = (): React.ReactElement => {

    const color: ColorOptions = select('color', [
        'primary',
        'secondary',
        'success',
        'error',
        'warning',
        'info',
        'light',
        'dark',
        'inherit',
    ], 'inherit');
    const size: SizeOptions = select('size', [
        'small',
        'default',
        'large',
        'inherit',
    ], 'inherit');

    return (
        <Icon color={color} size={size}>add_circle</Icon>
    );

};


export const Default = (): React.ReactElement => (
    <Icon>add_circle</Icon>
);


export const Sizes = (): React.ReactElement => (
    <React.Fragment>
        <Icon>add_circle</Icon>
        <Icon size="small">add_circle</Icon>
        <Icon size="default">add_circle</Icon>
        <Icon size="large">add_circle</Icon>
        <Icon size="inherit">add_circle</Icon>
    </React.Fragment>
);


export const Colors = (): React.ReactElement => (
    <React.Fragment>
        <Icon>add_circle</Icon>
        <Icon color="primary">add_circle</Icon>
        <Icon color="secondary">add_circle</Icon>
        <Icon color="success">add_circle</Icon>
        <Icon color="warning">add_circle</Icon>
        <Icon color="error">add_circle</Icon>
        <Icon color="info">add_circle</Icon>
        <Icon color="dark">add_circle</Icon>
        <Icon color="light">add_circle</Icon>
        <Icon color="inherit">add_circle</Icon>
    </React.Fragment>
);
