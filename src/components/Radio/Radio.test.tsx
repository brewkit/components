// @ts-nocheck
import * as React from 'react';
import { create } from 'react-test-renderer';
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Radio from '.';

it('Renders Radio component', () => {
    const comp = create(
        <FormControlLabel
            control={<Radio defaultChecked name="checkedA" color="secondary" />}
            label="Secondary"
        />
    ).toJSON();

    expect(comp).toMatchSnapshot();
});
