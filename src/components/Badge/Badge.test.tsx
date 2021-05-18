// @ts-nocheck
import * as React from 'react';
import { create } from 'react-test-renderer';
import Badge from '.';

it('Renders badge component', () => {
    const comp = create(
        <Badge
            badgeContent={99}
            variant="dot"
        />
    ).toJSON();

    expect(comp).toMatchSnapshot();
});
