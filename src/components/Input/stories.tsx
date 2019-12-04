import React from "react";
import Form from '../Form';
import {
    Checkbox as CheckboxComponent,
    TextInput as TextInputComponent,
    Radio as RadioComponent,
    Textarea as TextareaComponent,
} from './index';
import Label from '../Label';
import { withKnobs, boolean, text } from '@storybook/addon-knobs';

export default {
    title: 'Components|User Input/Input',
    component: TextInputComponent,
    parameters: {
        componentSubtitle: <Label color="warning">In Development</Label>,
    },
};

export const TextInput = () => {
    const error = boolean('error', false);
    const fullWidth = boolean('fullWidth', false);
    const disabled = boolean('disabled', false);
    return (
        <Form>
            <TextInputComponent error={error} fullWidth={fullWidth} disabled={disabled} />
        </Form>
    );
};

export const Checkbox = () => {
    const error = boolean('error', false);
    const checked = boolean('checked', false)
    const disabled = boolean('disabled', false);
    return (
        <Form>
            <CheckboxComponent error={error} disabled={disabled} checked={checked} />
        </Form>
    );
};

export const Radio = () => {
    const checked = boolean('checked', false);
    const disabled = boolean('disabled', false);

    return (
        <Form>
            <RadioComponent disabled={disabled} checked={checked} />
        </Form>
    );
};

export const Textarea = () => {
    const error = boolean('error', false);
    const disabled = boolean('disabled', false);
    const placeholder = text('placeholder', '');

    return (
        <TextareaComponent error={error} disabled={disabled} placeholder={placeholder} />
    );

};