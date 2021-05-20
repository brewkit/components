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

it('It should render a div child with classes.content', () => {
    const comp = create(
        <Button>
            Button with default props
        </Button>
    ).toJSON();

    // Material UI inner span wrapper in which we render
    // a content div element
    const contentEl = comp?.children?.[0].children?.[0];

    expect(contentEl.type).toBe('div');
    expect(contentEl.props.className).toMatch(/^(Button-content-)+\d+$/) // JSS generated class
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

it('Renders a button with loading prop, with corresponding div wrapper', () => {
    const comp = create(
        <Button
            // disabled={false}
            loading
        />
    ).toJSON();

    // Material UI inner span wrapper in which we render
    // a content div element.
    // First div is content, if loading prop is present
    // second child is a loader wrapper element
    const contentEl = comp?.children?.[0]?.children?.[1]
    const circularProgressEl = contentEl?.children?.[0];

    expect(contentEl.type).toBe('div');
    expect(contentEl.props.className).toMatch(/^(Button-loader-)+\d+$/); // JSS generated class
    expect(circularProgressEl.props.className).toMatch(/^(MuiCircularProgress-root)/); // circularProgressEl root class
    expect(comp).toMatchSnapshot();
});

it('Renders a button with disabled prop', () => {
    const comp = create(
        <Button disabled />
    ).toJSON();

    expect(comp).toMatchSnapshot();
});