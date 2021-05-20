// @ts-nocheck
import * as React from 'react';
import { create } from 'react-test-renderer';
import { FormControlLabel } from '@material-ui/core';
import components from './componentTypes';

it('Renders TextField component', () => {
    const TextInput = components.text;
    const comp = create(
        <FormControlLabel
            control={<TextInput name="textinput" />}
            label={<label>Some label</label>}
        />
    ).toJSON();

    expect(comp).toMatchSnapshot();
});

it('Renders Radio component', () => {
    const Radio = components.radio;
    const comp = create(
        <FormControlLabel
            control={<Radio name="radio" checked />}
            label={<label>Some label</label>}
        />
    ).toJSON();

    expect(comp).toMatchSnapshot();
});

it('Renders Switch component', () => {
    const Switch = components.switch;
    const comp = create(
        <FormControlLabel
            control={<Switch name="switch" checked />}
            label={<label>Some label</label>}
        />
    ).toJSON();

    expect(comp).toMatchSnapshot();
});

it('Renders Checkbox component', () => {
    const Checkbox = components.checkbox;
    const comp = create(
        <FormControlLabel
            control={<Checkbox name="checkbox" checked />}
            label={<label>Some label</label>}
        />
    ).toJSON();

    expect(comp).toMatchSnapshot();
});
