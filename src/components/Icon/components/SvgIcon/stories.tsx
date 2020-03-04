import React from 'react';
import { select } from '@storybook/addon-knobs';
import SvgIcon from './index';
import Flag from '@components/Flag';
import { Colors as ColorOptions, Sizes as SizeOptions } from './types';


export default {
    component: SvgIcon,
    parameters: {
        componentSubtitle: <Flag color="success">Stable</Flag>,
    },
    title: 'Stable|Display/Icons/SvgIcon',
};


export const Sandbox = (): React.ReactElement => {

    const color: ColorOptions = select('color', [
        'primary',
        'secondary',
        'success',
        'danger',
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
        <SvgIcon color={color} size={size}>
            <path d="M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z" />
        </SvgIcon>
    );

};


export const Default = (): React.ReactElement => (
    <SvgIcon>
        <path d="M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z" />
    </SvgIcon>
);
