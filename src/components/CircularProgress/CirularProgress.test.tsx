// @ts-nocheck
import * as React from 'react';
import { create } from 'react-test-renderer';
import CircularProgress from '.';

it('Render CircularProgress component', () => {
    const comp = create(
        <CircularProgress />
    ).toJSON();

    expect(comp).toMatchSnapshot();
});

it('Render CircularProgress component with layered prop', () => {
    const comp = create(
        <CircularProgress layered />
    ).toJSON();

    expect(comp).toMatchSnapshot();
});
