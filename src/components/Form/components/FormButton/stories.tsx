import React, { ReactElement } from 'react';
import Form from '@components/Form';
import Flag from '@components/Flag';


export default {
    component: Form.Button,
    parameters: {
        componentSubtitle: <Flag color="warning">In Development</Flag>,
    },
    title: 'In Development|User Input/Form/FormButton',
};


export const Default = (): ReactElement => (
    // eslint-disable-next-line no-alert
    <Form onSubmit={(values: object): void => alert(values)}>
        <Form.Button />
    </Form>
);
