// @ts-nocheck
import * as React from 'react';
import { create } from 'react-test-renderer';
import LinearProgress from '.';

it('Render LinearProgress component', () => {
    const comp = create(
        <LinearProgress color="primary" value={50} />
    ).toJSON();

    expect(comp).toMatchSnapshot();
});

