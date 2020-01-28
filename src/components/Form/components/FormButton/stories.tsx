import React, { ReactElement } from 'react';
import Form from '../../index';
import Label from '../../../Label';
import { select, text } from '@storybook/addon-knobs';


export default {
    component: Form.Field,
    parameters: {
        componentSubtitle: <Label color="warning">In Development</Label>,
    },
    title: 'Components|User Input/Form/FormField',
};


export const Default = (): ReactElement => {
    const variant = select('variant', ['text', 'textarea', 'checkbox', 'radio'], 'text');
    const label = text('label', 'Input Label');
    return (
        // eslint-disable-next-line no-alert
        <Form onSubmit={(values: object): void => alert(values)}>
            <Form.Field label={label} variant={variant} />
        </Form>
    );

};
