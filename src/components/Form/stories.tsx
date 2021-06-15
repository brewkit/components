import * as React from 'react';
import Form from '@components/Form';
import FormField from '@components/FormField';
import FormSubmit from '@components/FormSubmit';


export default {
    component: Form,
    parameters: {
        jest: ['Form.test']
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
            message: 'A length of 10 or more is required.'
        }
    };


    const handleSubmit = (values) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log(values);
                resolve('foo');
            }, 2000);
        });
    }


    return (
        <Form style={{ display: 'grid', gridGap: '1rem' }} onSubmit={handleSubmit} >
            <FormField label="text1" name="text1" type="text" placeholder="text" autoComplete="new" validation={validation} />
            <FormField label="Switch" name="switch" type="switch" validation={validation} />
            <FormField label="Checkbox" name="checkbox" type="checkbox" validation={validation} />
            <FormSubmit>Submit</FormSubmit>
        </Form>
    );

}
