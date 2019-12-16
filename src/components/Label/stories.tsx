import React, { ReactElement, ReactNode } from 'react';
import { select, text } from '@storybook/addon-knobs';
import Label from './index';
import { Colors } from './types';


export default {
    component: Label,
    parameters: {
        componentSubtitle: <Label color="warning">In Development</Label>,
    },
    title: 'Components|Display/Label',
};


export const General = (): ReactElement => {
    const color: Colors = select('color', ['success', 'danger', 'warning', 'info', 'light', 'dark'], 'info');
    const children: ReactNode = text('children', 'Label');
    const title: ReactNode = text('title', '');

    return (
        <Label color={color} title={title}>{children}</Label>
    );
};


export const Default = (): ReactElement => <Label>Default</Label>;
export const WithTitle = (): ReactElement => <Label color="success" title="Status">complete</Label>;
