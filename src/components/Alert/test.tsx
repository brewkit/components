// @ts-nocheck
import * as React from 'react';
import { create } from 'react-test-renderer';
import Alert from '.';

it('Renders blank Alert component', () => {
    const comp = create(
        <Alert>
            Hello world
        </Alert>
    ).toJSON();

    expect(comp).toMatchSnapshot();
});

it('Renders a title prop', () => {
    const comp = create(
        <Alert title="Hello world">
            Lorem ipsum
        </Alert>
    ).toJSON();

    expect(comp).toMatchSnapshot();
});

it('Rerenders on title change prop', () => {
    const comp = create(
        <Alert title="Hello world">
            Lorem ipsum
        </Alert>
    );
    let tree = comp.toJSON();

    expect(tree).toMatchSnapshot();

    comp.update(
        <Alert title="Hello world update prop rerender">
            Lorem ipsum
        </Alert>
    );

    tree = comp.toJSON();
    expect(tree).toMatchSnapshot();
});
