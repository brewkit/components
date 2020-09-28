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
    title: 'Inputs/FormField',
};


export const Types = (): React.ReactElement => {

    const validation = {
        required: {
            value: true,
            message: 'This field is required.',
        },
        minLength: {
            value: 10,
            message: 'A length of 10 or more is required.'
        }
    };

    return (
        <Form style={{ display: 'grid', gridGap: '1rem' }} onSubmit={(values: any) => console.log(values)} >
            <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                    <FormField label="text1" name="text1" type="text" placeholder="text" autoComplete="new" validation={validation} />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <FormField label="text2" name="text2" type="password" placeholder="text" autoComplete="new" validation={validation} />
                </Grid>
                <Grid item xs={6} sm={3}>
                    <FormField label="text1" name="text3" type="text" placeholder="text" autoComplete="new" validation={validation} />
                </Grid>
                <Grid item xs={6} sm={3}>
                    <FormField label="text1" name="text4" type="text" placeholder="text" autoComplete="new" validation={validation} />
                </Grid>
                <Grid item xs={6} sm={3}>
                    <FormField label="text1" name="text5" type="text" placeholder="text" autoComplete="new" validation={validation} />
                </Grid>
                <Grid item xs={6} sm={3}>
                    <FormField label="text1" name="text6" type="text" placeholder="text" autoComplete="new" validation={validation} />
                </Grid>
            </Grid>
            <FormField label="Radio" name="radio" type="radio" value="checked" validation={validation} />
            <FormField label="Switch" name="switch" type="switch" validation={validation} />
            <FormField label="Checkbox" name="checkbox" type="checkbox" validation={validation} />
            <FormSubmit>Submit</FormSubmit>
        </Form>
    );

}
