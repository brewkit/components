import React, { ReactNode } from 'react';
import { select, text } from '@storybook/addon-knobs';
import Label from './index';
import { Colors } from './types';


export default {
    title: 'Components|Display/Label',
    component: Label,
    parameters: {
        componentSubtitle: <Label color="warning">In Development</Label>,
    },
};


export const General = () => {
    const color: Colors = select('color', ['success', 'danger', 'warning', 'info', 'light', 'dark'], 'info');
    const children: ReactNode = text('children', 'Label');
    const title: ReactNode = text('title', '');

    return (
        <Label color={color} title={title}>{children}</Label>
    );
};


export const WithLabel = () => <Label title="Status" color="success">complete</Label>;