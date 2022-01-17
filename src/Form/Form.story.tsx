import * as React from 'react';
import { useForm } from 'react-hook-form';
import Form from './Form';
import FormField from '../FormField';
import FormSubmit from '../FormSubmit';

export default {
    component: Form,
    parameters: {
        // componentSubtitle: <Flag color="success">Stable</Flag>,
    },
    title: 'Forms/Form',
};

export const General = (): React.ReactElement => {
    const validation = {
        required: {
            value: true,
            message: 'This field is required.',
        },
        minLength: {
            value: 10,
            message: 'A length of 10 or more is required.',
        },
    };

    const handleSubmit = (): Promise<string> =>
        new Promise((resolve) => {
            setTimeout(() => {
                resolve('foo');
            }, 2000);
        });

    return (
        <Form
            onSubmit={handleSubmit}
            style={{ display: 'grid', gridGap: '1rem' }}>
            <FormField
                autoComplete="new"
                label="text1"
                name="text1"
                placeholder="text"
                type="text"
                validation={validation}
            />
            <FormField
                label="Switch"
                name="switch"
                type="switch"
                validation={validation}
            />
            <FormField
                label="Checkbox"
                name="checkbox"
                type="checkbox"
                validation={validation}
            />
            <FormSubmit>Submit</FormSubmit>
        </Form>
    );
};

export const CustomFormMethods = (): React.ReactElement => {
    const formMethods = useForm({ mode: 'onChange' });

    const validation = {
        required: {
            value: true,
            message: 'This field is required.',
        },
        minLength: {
            value: 10,
            message: 'A length of 10 or more is required.',
        },
    };

    const handleSubmit = (values: any): Promise<any> =>
        new Promise((resolve) => {
            setTimeout(() => {
                // eslint-disable-next-line no-console
                console.log(values);

                resolve('foo');
            }, 2000);
        });

    return (
        <Form
            onSubmit={handleSubmit}
            style={{ display: 'grid', gridGap: '1rem' }}
            useFormMethods={formMethods}>
            <FormField
                autoComplete="new"
                label="text1"
                name="text1"
                placeholder="text"
                type="text"
                validation={validation}
            />
            <FormField
                label="Switch"
                name="switch"
                type="switch"
                validation={validation}
            />
            <FormField
                label="Checkbox"
                name="checkbox"
                type="checkbox"
                validation={validation}
            />
            <FormSubmit>Submit</FormSubmit>
        </Form>
    );
};
