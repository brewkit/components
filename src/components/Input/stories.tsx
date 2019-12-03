import React from "react";
import Form from '../Form';
import {
    Checkbox as CheckboxComponent,
    TextInput as TextInputComponent,
} from './index';
import Label from '../Label';

export default {
    title: 'Components|User Input/Input',
    component: TextInputComponent,
    parameters: {
        componentSubtitle: <Label color="warning">In Development</Label>,
    },
};

export const TextInput = () => {
    return (
        <Form>
            <Form.Group>
                <Form.Label>Text Input</Form.Label>
                <TextInputComponent />
            </Form.Group>
        </Form>
    );
};

export const Checkbox = () => {
    return (
        <Form>
            <Form.Group>
                <Form.Label>Checkbox</Form.Label>
                <CheckboxComponent />
            </Form.Group>
        </Form>
    );
};

export const Radio = () => {
    return (
        <Form>
            <Form.Group>
                <Form.Label>Radio</Form.Label>
            </Form.Group>
        </Form>
    );
};
