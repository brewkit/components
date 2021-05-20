// @ts-nocheck
import * as React from 'react';
import { create } from 'react-test-renderer';
import Form from '.';
import FormField from '../FormField';
import FormSubmit from '../FormSubmit';

it('Renders Form component', () => {
    const comp = create(
        <Form>
            <FormField label="text1" name="text1" type="text" placeholder="text" />
            <FormField label="Switch" name="switch" type="switch" />
            <FormField label="Checkbox" name="checkbox" type="checkbox" />
            <FormSubmit>Submit</FormSubmit>
        </Form>
    ).toJSON();

    expect(comp).toMatchSnapshot();
});
