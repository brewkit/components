import React, { ReactElement } from 'react';
import Input from './index';
import Flag from '@components/Flag';
import { select } from '@storybook/addon-knobs';


export default {
    component: Input,
    parameters: {
        componentSubtitle: <Flag color="warning">In Development</Flag>,
    },
    title: 'In Development|User Input/Input',
};


export const Default = (): ReactElement => {
    const variant = select('variant', ['text', 'checkbox', 'radio', 'textarea'], 'text');
    return (
        <Input variant={variant} />
    );
};
