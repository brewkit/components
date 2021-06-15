// @ts-nocheck
import * as React from 'react';
import { create } from 'react-test-renderer';
import Checkbox from '.';

it('Renders checkbox component', () => {
    const comp = create(
        <Checkbox />
    ).toJSON();

    expect(comp).toMatchSnapshot();
});
