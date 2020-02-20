import React, { ReactElement, ReactNode } from 'react';
import { select, text } from '@storybook/addon-knobs';
import Flag from './index';
import { Colors } from './types';


export default {
    component: Flag,
    parameters: {
        componentSubtitle: <Flag color="success">Stable</Flag>,
    },
    title: 'Stable|Data Display/Flag',
};


export const General = (): ReactElement => {
    const color: Colors = select('color', ['success', 'danger', 'warning', 'info', 'light', 'dark'], 'info');
    const children: ReactNode = text('children', 'Flag');

    return (
        <Flag color={color}>{children}</Flag>
    );
};


export const Default = (): ReactElement => (
    <React.Fragment>
        <Flag>Default</Flag>
        <Flag color="success">Default</Flag>
        <Flag color="warning">Default</Flag>
        <Flag color="danger">Default</Flag>
        <Flag color="light">Default</Flag>
        <Flag color="dark">Default</Flag>
    </React.Fragment>
);


export const Empty = (): ReactElement => (
    <React.Fragment>
        <Flag />
        <Flag color="success" />
        <Flag color="warning" />
        <Flag color="danger" />
        <Flag color="light" />
        <Flag color="dark" />
    </React.Fragment>
);
