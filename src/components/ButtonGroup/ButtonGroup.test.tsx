// @ts-nocheck
import * as React from 'react';
import { create } from 'react-test-renderer';
import ButtonGroup from '.';
import Button from '../Button';

it('Renders ButtonGroup component', () => {
    const comp = create(
        <ButtonGroup>
            <Button>One</Button>
            <Button>Two</Button>
            <Button>Three</Button>
        </ButtonGroup>
    ).toJSON();

    expect(comp).toMatchSnapshot();
});
