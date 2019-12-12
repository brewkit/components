import React from "react";
import Form from '../Form';
import Input from './index';
import Label from '../Label';
import { select } from '@storybook/addon-knobs';

export default {
    title: 'Components|User Input/Input',
    component: Input,
    parameters: {
        componentSubtitle: <Label color="warning">In Development</Label>,
    },
};

export const Default = () => {
    const variant = select('variant', ['text', 'checkbox', 'radio', 'textarea'], 'text');
    return (
        <Input variant={variant} />
    );
};