import React from 'react';
import Form from './index';
import Flag from '@components/Flag';
import Button from '@components/Button';


export default {
    component: Form,
    parameters: {
        componentSubtitle: <Flag color="success">Stable</Flag>,
    },
    title: 'Stable|User Input/Form',
};


export const General = (): React.ReactElement => (
    <Form onSubmit={(values: object) => console.log(values)} style={{ display: 'grid', gridGap: '1rem' }}>
        <Form.Field label="Required TextField" name="text" validation={{
            required: 'This field is required.',
            minLength: { value: 10, message: 'A length of 10 or more is required.' },
        }} />
        <Form.Field label="Required Checkbox" name="checkbox" type="checkbox" validation={{ required: true }} />
        <Form.Field label="Required Radio" name="radio" type="radio" value="foo" validation={{ required: true }} />
        <Form.Field label="Required Switch" name="switch" type="switch" validation={{ required: true }} />
        <Form.Submit />
    </Form>
);
