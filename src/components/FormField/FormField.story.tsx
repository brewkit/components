

import * as React from 'react';
import Grid from '@material-ui/core/Grid';
import { Story } from '@storybook/react';

import Form from '../Form';
import FormSubmit from '../FormSubmit';

import FormField from './index';
import { FormFieldProps } from './FormField.types';

export default {
    component: FormField,
    parameters: {
        // componentSubtitle: <Flag color="success">Stable</Flag>,
    },
    title: 'Forms/FormField',
};


const defaultArgs = {
    disabled: false,
    disableElevation: true,
    fullWidth: false,
    children: 'I am button text',
};


const validation = {
    required: {
        value: true,
        message: 'This field is required.',
    },
    minLength: {
        value: 2,
        message: 'A length of 2 or more is required.',
    },
};

const handleSubmit = (values: any): Promise<any> => new Promise((resolve) => {
    setTimeout(() => {

        // eslint-disable-next-line no-console
        console.log(values);

        resolve('foo');
    }, 2000);
});

export const Sandbox: Story<FormFieldProps> = (args) => (
    <Form onSubmit={handleSubmit} style={{ display: 'grid', gridGap: '1rem' }} >

        <Grid container spacing={3}>

            <Grid item sm={6} xs={12}>
                <FormField {...args} label="Text" name="text" placeholder="Text" type="text" validation={validation} />
            </Grid>

            <Grid item sm={6} xs={12}>
                <FormField
                    {...args}
                    label="Password"
                    name="credentials.password"
                    placeholder="Password"
                    type="password"
                    validation={validation}
                />
            </Grid>

            <Grid item sm={3} xs={6}>
                <FormField
                    {...args}
                    helperText="some help"
                    label="Number"
                    name="number"
                    placeholder="1"
                    type="number"
                    validation={validation}
                />
            </Grid>

            <Grid item sm={3} xs={6}>
                <FormField
                    {...args}
                    label="text1"
                    name="text4"
                    placeholder="text"
                    type="text"
                    validation={validation}
                />
            </Grid>

            <Grid item sm={3} xs={6}>
                <FormField
                    {...args}
                    label="text1"
                    name="text5"
                    placeholder="text"
                    type="text"
                    validation={validation}
                />
            </Grid>

            <Grid item sm={3} xs={6}>
                <FormField
                    {...args}
                    label="text1"
                    name="text6"
                    placeholder="text"
                    type="text"
                    validation={validation}
                />
            </Grid>

        </Grid>

        <FormField
            {...args}
            helperText="Some help here"
            label="Radio"
            name="radio"
            type="radio"
            validation={validation}
            value="checked"
        />
        <FormField {...args} label="Switch" name="switch" type="switch" validation={validation} />
        <FormField {...args} label="Checkbox" name="checkbox" type="checkbox" validation={validation} />

        <FormSubmit>Submit</FormSubmit>

    </Form>
);

Sandbox.args = {
    ...defaultArgs,
    color: 'primary',
};

