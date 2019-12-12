import * as React from 'react';
import Form from '../../index';
import Label from '../../../Label';
import { select, text } from '@storybook/addon-knobs';

export default {
    title: 'Components|User Input/Form/FormField',
    component: Form.Field,
    parameters: {
        componentSubtitle: <Label color="warning">In Development</Label>,
    },
};

export const Default = () => {
    const variant = select('variant', ['text', 'textarea', 'checkbox', 'radio' ], 'text');
    const label = text('label', 'Input Label');
    console.log('label', label);
    return (
        <Form>
            <Form.Field variant={variant} label={label} />
        </Form>
    );

};
