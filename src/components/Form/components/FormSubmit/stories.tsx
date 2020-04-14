import React from 'react';
import Form from '@components/Form';
import Flag from '@components/Flag';


export default {
    component: Form.Submit,
    parameters: {
        componentSubtitle: <Flag color="success">Stable</Flag>,
    },
    title: 'Stable|Forms/FormSubmit',
};


export const General = (): React.ReactElement => (
    <Form onSubmit={(values: object) => console.log(values)} style={{ display: 'grid', gridGap: '1rem' }}>
        <Form.Field label="Required Switch" name="switch" type="switch" validation={{ required: true }} />
        <Form.Submit />
    </Form>
);
