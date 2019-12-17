import React, { ReactElement } from 'react';
import Input from './index';
import Label from '../Label';
import { select } from '@storybook/addon-knobs';


export default {
    component: Input,
    parameters: {
        componentSubtitle: <Label color="warning">In Development</Label>,
    },
    title: 'Components|User Input/Input',
};


export const Default = (): ReactElement => {
    const variant = select('variant', ['text', 'checkbox', 'radio', 'textarea'], 'text');
    return (
        <Input variant={variant} />
    );
};
