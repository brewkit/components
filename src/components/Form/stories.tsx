import React, { ReactElement } from 'react';
import Label from '@components/Label';
import Button from '@components/Button';
import Form from './index';


export default {
    component: Form,
    parameters: {
        componentSubtitle: <Label color="warning">In Development</Label>,
    },
    title: 'Components|User Input/Form',
};


/** A sleeper function to delay our example response */
const sleep = (ms: number): Promise<any> => new Promise((resolve: any) => setTimeout(resolve, ms));


export const Default = (): ReactElement => {


    const validation = {
        minLength: {
            message: 'A length of 12 or more is required.',
            value: 12,
        },
        pattern: {
            message: 'Only letters are allowed.',
            value: /^[A-Z]+$/iu,
        },
        required: 'This field is required.',
    };


    const handleSubmit = async(): Promise<void> => {
        await sleep(2000);
        alert('Data was submitted!');
    };


    return (
        // eslint-disable-next-line no-alert
        <Form onSubmit={handleSubmit}>
            <Form.Group>
                <Form.Field label="Foo" name="foo" validation={validation} />
                <Form.Field label="Bar" name="bar" />
            </Form.Group>
            <Form.Field label="Buz" name="buz" variant="checkbox" />
            <Form.Button>Submit</Form.Button>
        </Form>
    );


};
