// @ts-nocheck
import * as React from 'react';
import { create } from 'react-test-renderer';
import Form from '../Form';
import FormField from '../FormField';
import FormSubmit from '.';

it('Renders FormSubmit component', () => {
    const comp = create(
        <Form onSubmit={(values: any) => console.log(values)} >
            <FormField label="text1" name="text1" type="text" placeholder="text" autoComplete="new" />
            <FormSubmit>Submit</FormSubmit>
        </Form>
    ).toJSON();

    expect(comp).toMatchSnapshot();
});
