// @ts-nocheck
import * as React from 'react';
import { create } from 'react-test-renderer';
import Button from '.';
import { ArrowBack, ArrowBackIosSharp } from '@material-ui/icons';

it('Renders a plain button', () => {
    const comp = create(
        <Button>
            Button with default props
        </Button>
    ).toJSON();

    expect(comp).toMatchSnapshot();
});

it('Renders a button with startIcon prop', () => {
    const comp = create(
        <Button
            startIcon={<ArrowBack />}
        >
            Go back
        </Button>
    ).toJSON();

    expect(comp).toMatchSnapshot();
});

it('Ensure rerender happens on startIcon prop change', () => {
    const comp = create(
        <Button
            startIcon={<ArrowBack />}
        >
            Go back
        </Button>
    );
    let tree = comp.toJSON();

    expect(tree).toMatchSnapshot();

    comp.update(
        <Button
            startIcon={<ArrowBackIosSharp />}
        >
            Go back (IOS)
        </Button>
    );

    tree = comp.toJSON();
    expect(tree).toMatchSnapshot();
});

it('Renders a button with endIcon prop', () => {
    const comp = create(
        <Button
            endIcon={<ArrowBack />}
        >
            Go back
        </Button>
    ).toJSON();

    expect(comp).toMatchSnapshot();
});

it('Ensure rerender happens on endIcon prop change', () => {
    const comp = create(
        <Button
            endIcon={<ArrowBack />}
        >
            Go back
        </Button>
    );
    let tree = comp.toJSON();

    expect(tree).toMatchSnapshot();

    comp.update(
        <Button
            endIcon={<ArrowBackIosSharp />}
        >
            Go back (IOS)
        </Button>
    );

    tree = comp.toJSON();
    expect(tree).toMatchSnapshot();
});

it('Renders a button with loading prop', () => {
    const comp = create(
        <Button loading />
    ).toJSON();

    expect(comp).toMatchSnapshot();
});

it('Renders a button with disabled prop', () => {
    const comp = create(
        <Button disabled />
    ).toJSON();

    expect(comp).toMatchSnapshot();
});