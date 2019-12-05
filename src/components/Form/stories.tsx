import React, { ReactNode } from 'react';
import { select, text } from '@storybook/addon-knobs';
import Form from './index';
import Label from "../Label";
import { TextInput } from "../Input";


export default {
    title: 'Components|User Input/Form',
    component: Form,
    parameters: {
        componentSubtitle: <Label color="warning">In Development</Label>,
    },
};


export const Default = () => {
    // const color: Colors = select('color', ['success', 'danger', 'warning', 'info', 'light', 'dark'], 'info');
    // const children: ReactNode = text('children', 'Label');
    // const title: ReactNode = text('title', '');

    return (
        <Form>
            <Form.Group>
                <Form.Label>Form Label</Form.Label>
                <TextInput type="text" />
            </Form.Group>
        </Form>
    );
};