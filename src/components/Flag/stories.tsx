import React, { ReactElement, ReactNode } from 'react';
import { select, text } from '@storybook/addon-knobs';
import Flag from './index';
import { Colors } from './types';


export default {
    component: Flag,
    parameters: {
        componentSubtitle: <Flag color="warning">In Development</Flag>,
    },
    title: 'Components|Display/Flag',
};


export const General = (): ReactElement => {
    const color: Colors = select('color', ['success', 'danger', 'warning', 'info', 'light', 'dark'], 'info');
    const children: ReactNode = text('children', 'Flag');
    const title: ReactNode = text('title', '');

    return (
        <Flag color={color} title={title}>{children}</Flag>
    );
};


export const Default = (): ReactElement => <Flag>Default</Flag>;
export const WithTitle = (): ReactElement => <Flag color="success" title="Status">complete</Flag>;
