import * as React from 'react';
import { text, boolean } from '@storybook/addon-knobs';
import Form from '@components/Form';
import FormField from '@components/FormField';
import FormSubmit from '@components/FormSubmit';
import Grid from '@material-ui/core/Grid';


export default {
    component: FormField,
    parameters: {
        // componentSubtitle: <Flag color="success">Stable</Flag>,
    },
    title: 'Forms/FormField',
};


export const Types = (): React.ReactElement => {

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

    return (
        <Form style={{ display: 'grid', gridGap: '1rem' }} onSubmit={(values: any) => console.log(values)} >
            <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                    <FormField label="Email" name="email" type="email" placeholder="Email" validation={{
                      pattern: {
                        value: /([-!#-'*+/-9=?A-Z^-~]+(\.[-!#-'*+/-9=?A-Z^-~]+)*|"([]!#-[^-~ \t]|(\\[\t -~]))+")@[0-9A-Za-z]([0-9A-Za-z-]{0,61}[0-9A-Za-z])?(\.[0-9A-Za-z]([0-9A-Za-z-]{0,61}[0-9A-Za-z])?)+/,
                        message: 'Email is not valid!'
                      }
                    }} />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <FormField label="Text" name="text" type="text" placeholder="Text" validation={validation} />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <FormField label="Password" name="password" type="password" placeholder="Password" validation={validation} />
                </Grid>
                <Grid item xs={6} sm={3}>
                    <FormField label="Number" name="number" type="number" placeholder="1" validation={validation} helperText="some help" />
                </Grid>
                <Grid item xs={6} sm={3}>
                    <FormField label="text1" name="text4" type="text" placeholder="text" validation={validation} />
                </Grid>
                <Grid item xs={6} sm={3}>
                    <FormField label="text1" name="text5" type="text" placeholder="text" validation={validation} />
                </Grid>
                <Grid item xs={6} sm={3}>
                    <FormField label="text1" name="text6" type="text" placeholder="text" validation={validation} />
                </Grid>
            </Grid>
            <FormField label="Radio" name="radio" type="radio" value="checked" validation={validation} helperText="Some help here" />
            <FormField label="Switch" name="switch" type="switch" validation={validation} />
            <FormField label="Checkbox" name="checkbox" type="checkbox" validation={validation} />
            <FormSubmit>Submit</FormSubmit>
        </Form>
    );

}
