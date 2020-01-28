import React, { ReactElement } from 'react';
import Form from '@components/Form';
import Label from '@components/Label';


export default {
    component: Form.Button,
    parameters: {
        componentSubtitle: <Label color="warning">In Development</Label>,
    },
    title: 'Components|User Input/Form/FormButton',
};


export const Default = (): ReactElement => {
    return (
        // eslint-disable-next-line no-alert
        <Form onSubmit={(values: object): void => alert(values)}>
            <Form.Button />
        </Form>
    );

};
