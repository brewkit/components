import * as React from 'react';
import FormSubmit from '@components/FormSubmit';
import Form from '@components/Form';
import FormField from '@components/FormField';


export default {
    component: FormSubmit,
    parameters: {
        jest: ['FormSubmit.test']
    },
    title: 'Forms/FormSubmit',
};


export const General = (): React.ReactElement => {

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
            <FormField label="text1" name="text1" type="text" placeholder="text" autoComplete="new" validation={validation} />
            <FormField label="Switch" name="switch" type="switch" validation={validation} />
            <FormField label="Checkbox" name="checkbox" type="checkbox" validation={validation} />
            <FormSubmit>Submit</FormSubmit>
        </Form>
    );

}
