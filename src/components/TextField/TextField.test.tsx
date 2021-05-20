// @ts-nocheck
import * as React from 'react';
import { create } from 'react-test-renderer';
import TextField from '.';

it('Render TextField component', () => {
    const comp = create(
        <TextField value="Text data" />
    ).toJSON();

    expect(comp).toMatchSnapshot();
});
