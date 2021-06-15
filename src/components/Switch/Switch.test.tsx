// @ts-nocheck
import * as React from 'react';
import { create } from 'react-test-renderer';
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from '.';

it('Renders Switch component', () => {
    const comp = create(
        <FormControlLabel
            control={<Switch defaultChecked name="checkedA" color="primary" />}
            label="Primary"
        />
    ).toJSON();

    expect(comp).toMatchSnapshot();
});
