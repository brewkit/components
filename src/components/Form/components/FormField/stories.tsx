import React, { ReactElement } from 'react';
import Form from '../../index';
import Flag from '@components/Flag';
import { select, text } from '@storybook/addon-knobs';


export default {
    component: Form.Field,
    parameters: {
        componentSubtitle: <Flag color="warning">In Development</Flag>,
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
