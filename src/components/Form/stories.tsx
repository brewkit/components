import React from 'react';
import * as yup from 'yup';
import Form from './index';
import Flag from '@components/Flag';


export default {
    component: Form,
    parameters: {
        componentSubtitle: <Flag color="warning">In Development</Flag>,
    },
    title: 'In Development|Forms/Form',
};


const validationSchema = yup.object({
    text: yup.string().required('This field is required.').min(10, 'A length of 10 or more is required.'),
    text2: yup.string().required(),
    checkbox: yup.bool().oneOf([true], 'Field must be checked'),
    radio: yup.string().oneOf(['foo'], 'Field must be checked'),
    switch: yup.bool().oneOf([true], 'Field must be checked'),
});


export const General = (): React.ReactElement => (
    <Form
        onSubmit={(values: object) => console.log(values)}
        style={{ display: 'grid', gridGap: '1rem' }}
        validationSchema={validationSchema}
    >
        <Form.Field label="Required TextField" name="text"/>
        <Form.Field label="Required TextField" name="text2" />
        <Form.Field label="Required Checkbox" name="checkbox" type="checkbox" />
        <Form.Field label="Required Radio" name="radio" type="radio" value="foo" />
        <Form.Field label="Required Switch" name="switch" type="switch" />
        <Form.Submit />
    </Form>
);
