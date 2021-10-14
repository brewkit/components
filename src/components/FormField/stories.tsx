

import * as React from 'react';
import Grid from '@material-ui/core/Grid';
import { Story } from '@storybook/react';

import Form from '../Form';
import FormSubmit from '../FormSubmit';

import FormField from './index';
import { Props } from './types';

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
        message: 'A length of 2 or more is required.'
    }
};


export const Sandbox: Story<Props> = (args) => (
    <Form style={{ display: 'grid', gridGap: '1rem' }} onSubmit={(values: any) => console.log(values)} >

        <Grid container spacing={3}>

            <Grid item xs={12} sm={6}>
                <FormField {...args} label="Text" name="text" type="text" placeholder="Text" validation={validation} />
            </Grid>

            <Grid item xs={12} sm={6}>
                <FormField {...args} label="Password" name="password" type="password" placeholder="Password" validation={validation} />
            </Grid>

            <Grid item xs={6} sm={3}>
                <FormField {...args} label="Number" name="number" type="number" placeholder="1" validation={validation} helperText="some help" />
            </Grid>

            <Grid item xs={6} sm={3}>
                <FormField {...args} label="text1" name="text4" type="text" placeholder="text" validation={validation} />
            </Grid>

            <Grid item xs={6} sm={3}>
                <FormField {...args} label="text1" name="text5" type="text" placeholder="text" validation={validation} />
            </Grid>

            <Grid item xs={6} sm={3}>
                <FormField {...args} label="text1" name="text6" type="text" placeholder="text" validation={validation} />
            </Grid>

        </Grid>

        <FormField {...args} label="Radio" name="radio" type="radio" value="checked" validation={validation} helperText="Some help here" />
        <FormField {...args} label="Switch" name="switch" type="switch" validation={validation} />
        <FormField {...args} label="Checkbox" name="checkbox" type="checkbox" validation={validation} />

        <FormSubmit>Submit</FormSubmit>

    </Form>
);

Sandbox.args = {
    ...defaultArgs,
    color: 'primary',
};

