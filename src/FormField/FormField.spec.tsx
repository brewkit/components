import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { Form, FormField } from '..';
import { noop } from 'lodash';

const { findByRole } = screen;

describe('<FormField />', () => {
  test('load <TextField /> if no type is provided', async () => {
    render(
      <Form onSubmit={noop}>
        <FormField name="textfieldExample" />
      </Form>
    );

    const textFieldInput = await findByRole('textbox');

    await waitFor(() => {
      expect(textFieldInput).toBeTruthy();
    });
  });

  // eslint-disable-next-line @typescript-eslint/require-await
  test('render as select with options prop', async () => {
    render(
      <Form onSubmit={noop}>
        <FormField
          name="selectExample"
          options={[
            { label: 'First', value: 1 },
            { label: 'Second', value: 2 },
            { label: 'Third', value: 3 },
          ]}
          select
          value={1}
        />
      </Form>
    );
  });
});
