import React, { ReactElement } from 'react';
import Form from './index';
import Label from '../Label';
import Input from '../Input';


export default {
    component: Form,
    parameters: {
        componentSubtitle: <Label color="warning">In Development</Label>,
    },
    title: 'Components|User Input/Form',
};


export const Default = (): ReactElement => (
    <Form>
        <Form.Group>
            <Form.Label>Form Label</Form.Label>
            <Input variant="text" />
        </Form.Group>
    </Form>
);
